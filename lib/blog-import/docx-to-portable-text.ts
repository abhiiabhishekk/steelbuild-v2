import crypto from "node:crypto";
import mammoth from "mammoth";
import * as cheerio from "cheerio";
import type {
  AnyNode,
  Element,
} from "domhandler";

/* =========================================================
   PORTABLE TEXT TYPES
========================================================= */

export type PortableTextMarkDefinition = {
  _key: string;
  _type: "link";
  href: string;
  openInNewTab?: boolean;
};

export type PortableTextSpan = {
  _key: string;
  _type: "span";
  text: string;
  marks: string[];
};

export type PortableTextBlock = {
  _key: string;
  _type: "block";

  style:
    | "normal"
    | "h2"
    | "h3"
    | "blockquote";

  children: PortableTextSpan[];

  markDefs: PortableTextMarkDefinition[];

  listItem?: "bullet" | "number";

  level?: number;
};

export type PortableTextTableColumn = {
  _key: string;
  _type: "tableColumn";
  heading: string;
};

export type PortableTextTableRow = {
  _key: string;
  _type: "tableRow";
  cells: string[];
};

export type PortableTextArticleTable = {
  _key: string;
  _type: "articleTable";

  title?: string;

  columns: PortableTextTableColumn[];

  rows: PortableTextTableRow[];

  caption?: string;
};

export type SanityPortableTextItem =
  | PortableTextBlock
  | PortableTextArticleTable;

export type DocxConversionResult = {
  blocks: SanityPortableTextItem[];

  warnings: string[];
};

/* =========================================================
   HELPERS
========================================================= */

const createKey = (): string =>
  crypto
    .randomUUID()
    .replaceAll("-", "")
    .slice(0, 20);

const normalizeText = (
  value: string,
): string =>
  value
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Inline text ko completely trim nahi karte,
 * otherwise separate formatted nodes ke words
 * chipak sakte hain:
 *
 * "India." + "If" => "India.If"
 */
const normalizeInlineText = (
  value: string,
): string =>
  value
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ");

const createTextSpan = (
  text: string,
  marks: string[] = [],
): PortableTextSpan => ({
  _key: createKey(),

  _type: "span",

  text,

  marks,
});

const getElementName = (
  node: AnyNode,
): string => {
  if (node.type !== "tag") {
    return "";
  }

  return (
    node as Element
  ).name.toLowerCase();
};

/* =========================================================
   INLINE CONTENT
========================================================= */

const cleanInlineSpans = (
  spans: PortableTextSpan[],
): PortableTextSpan[] => {
  const cleaned = spans.filter(
    (span) => span.text.length > 0,
  );

  if (!cleaned.length) {
    return [
      createTextSpan(""),
    ];
  }

  cleaned[0] = {
    ...cleaned[0],

    text: cleaned[0].text.trimStart(),
  };

  const lastIndex =
    cleaned.length - 1;

  cleaned[lastIndex] = {
    ...cleaned[lastIndex],

    text:
      cleaned[
        lastIndex
      ].text.trimEnd(),
  };

  return cleaned.filter(
    (span) =>
      span.text.length > 0,
  );
};

const getInlineContent = (
  $: cheerio.CheerioAPI,

  element: cheerio.Cheerio<AnyNode>,
): {
  children: PortableTextSpan[];

  markDefs: PortableTextMarkDefinition[];
} => {
  const children: PortableTextSpan[] =
    [];

  const markDefs: PortableTextMarkDefinition[] =
    [];

  const walkNode = (
    node: AnyNode,

    inheritedMarks: string[] = [],
  ) => {
    if (node.type === "text") {
      const text =
        normalizeInlineText(
          node.data ?? "",
        );

      if (text.length > 0) {
        children.push(
          createTextSpan(
            text,

            inheritedMarks,
          ),
        );
      }

      return;
    }

    if (node.type !== "tag") {
      return;
    }

    const tagName =
      getElementName(node);

    const nextMarks = [
      ...inheritedMarks,
    ];

    if (
      tagName === "strong" ||
      tagName === "b"
    ) {
      nextMarks.push(
        "strong",
      );
    }

    if (
      tagName === "em" ||
      tagName === "i"
    ) {
      nextMarks.push("em");
    }

    if (tagName === "u") {
      nextMarks.push(
        "underline",
      );
    }

    if (tagName === "a") {
      const href =
        $(node)
          .attr("href")
          ?.trim() ?? "";

      if (href) {
        const linkKey =
          createKey();

        markDefs.push({
          _key: linkKey,

          _type: "link",

          href,

          openInNewTab:
            href.startsWith(
              "http://",
            ) ||
            href.startsWith(
              "https://",
            ),
        });

        nextMarks.push(
          linkKey,
        );
      }
    }

    const nodeChildren =
      "children" in node
        ? node.children
        : [];

    for (const child of nodeChildren) {
      walkNode(
        child,

        nextMarks,
      );
    }
  };

  for (const node of element
    .contents()
    .toArray()) {
    walkNode(node);
  }

  return {
    children:
      cleanInlineSpans(
        children,
      ),

    markDefs,
  };
};

/* =========================================================
   BLOCK CREATION
========================================================= */

const createBlockFromElement = ({
  $,

  element,

  style = "normal",

  listItem,

  level,
}: {
  $: cheerio.CheerioAPI;

  element: cheerio.Cheerio<AnyNode>;

  style?: PortableTextBlock["style"];

  listItem?:
    | "bullet"
    | "number";

  level?: number;
}): PortableTextBlock => {
  const inlineContent =
    getInlineContent(
      $,

      element,
    );

  return {
    _key: createKey(),

    _type: "block",

    style,

    children:
      inlineContent.children,

    markDefs:
      inlineContent.markDefs,

    ...(listItem
      ? {
          listItem,

          level:
            level ?? 1,
        }
      : {}),
  };
};

/* =========================================================
   TABLE CONVERSION
========================================================= */

const convertTableToBlocks = (
  $: cheerio.CheerioAPI,

  table: cheerio.Cheerio<AnyNode>,
): PortableTextArticleTable[] => {
  const extractedRows: string[][] =
    [];

  table
    .find("tr")
    .each(
      (
        _rowIndex,

        row,
      ) => {
        const cells: string[] =
          [];

        $(row)
          .children(
            "th, td",
          )
          .each(
            (
              _cellIndex,

              cell,
            ) => {
              const cellText =
                normalizeText(
                  $(cell).text(),
                );

              cells.push(
                cellText,
              );
            },
          );

        const hasContent =
          cells.some(
            (cell) =>
              cell.length >
              0,
          );

        if (hasContent) {
          extractedRows.push(
            cells,
          );
        }
      },
    );

  /*
   * At least:
   * 1 header row
   * 1 body row
   */
  if (
    extractedRows.length <
    2
  ) {
    return [];
  }

  const [
    headerCells,

    ...bodyCells
  ] = extractedRows;

  /*
   * Sanity schema allows
   * minimum 2 and maximum 6 columns.
   */
  const normalizedHeaders =
    headerCells
      .slice(0, 6)
      .map(
        (
          heading,

          index,
        ) =>
          heading ||
          `Column ${
            index + 1
          }`,
      );

  if (
    normalizedHeaders.length <
    2
  ) {
    return [];
  }

  const columns: PortableTextTableColumn[] =
    normalizedHeaders.map(
      (heading) => ({
        _key: createKey(),

        _type:
          "tableColumn",

        heading,
      }),
    );

  const rows: PortableTextTableRow[] =
    bodyCells
      .map((cells) => {
        const normalizedCells =
          normalizedHeaders.map(
            (
              _heading,

              columnIndex,
            ) =>
              cells[
                columnIndex
              ] ?? "",
          );

        return {
          _key: createKey(),

          _type:
            "tableRow" as const,

          cells:
            normalizedCells,
        };
      })
      .filter((row) =>
        row.cells.some(
          (cell) =>
            cell
              .trim()
              .length > 0,
        ),
      );

  if (!rows.length) {
    return [];
  }

  return [
    {
      _key: createKey(),

      _type:
        "articleTable",

      columns,

      rows,
    },
  ];
};

/* =========================================================
   LIST CONVERSION
========================================================= */

const convertListItems = ({
  $,

  list,

  level = 1,
}: {
  $: cheerio.CheerioAPI;

  list: cheerio.Cheerio<AnyNode>;

  level?: number;
}): PortableTextBlock[] => {
  const blocks: PortableTextBlock[] =
    [];

  const listTag =
    list
      .get(0)
      ?.type === "tag"
      ? getElementName(
          list.get(
            0,
          ) as AnyNode,
        )
      : "ul";

  const listItemType:
    | "bullet"
    | "number" =
    listTag === "ol"
      ? "number"
      : "bullet";

  list
    .children("li")
    .each(
      (
        _itemIndex,

        item,
      ) => {
        const itemElement =
          $(item);

        const contentClone =
          itemElement.clone();

        contentClone
          .children(
            "ul, ol",
          )
          .remove();

        const itemText =
          normalizeText(
            contentClone.text(),
          );

        if (itemText) {
          blocks.push(
            createBlockFromElement(
              {
                $,

                element:
                  contentClone,

                style:
                  "normal",

                listItem:
                  listItemType,

                level,
              },
            ),
          );
        }

        itemElement
          .children(
            "ul, ol",
          )
          .each(
            (
              _nestedIndex,

              nestedList,
            ) => {
              blocks.push(
                ...convertListItems(
                  {
                    $,

                    list: $(
                      nestedList,
                    ),

                    level:
                      level +
                      1,
                  },
                ),
              );
            },
          );
      },
    );

  return blocks;
};

/* =========================================================
   MAIN CONVERSION
========================================================= */

export async function convertDocxToPortableText(
  filePath: string,
): Promise<DocxConversionResult> {
  const mammothResult =
    await mammoth.convertToHtml(
      {
        path: filePath,
      },

      {
        includeDefaultStyleMap:
          true,

        styleMap: [
          /*
           * Word document ka Title hero title ka
           * duplicate hota hai. Ise special class
           * mein convert karke skip kiya jayega.
           */
          "p[style-name='Title'] => p.document-title:fresh",

          /*
           * Sanity block schema mein h1 allowed
           * nahi hai. Heading 1 ko h2 banaya gaya.
           */
          "p[style-name='Heading 1'] => h2:fresh",

          "p[style-name='Heading 2'] => h2:fresh",

          "p[style-name='Heading 3'] => h3:fresh",

          "p[style-name='Heading 4'] => h3:fresh",

          "p[style-name='Quote'] => blockquote:fresh",

          "p[style-name='Intense Quote'] => blockquote:fresh",
        ],
      },
    );

  const $ = cheerio.load(
    `<body>${mammothResult.value}</body>`,
  );

  const blocks: SanityPortableTextItem[] =
    [];

  $("body")
    .children()
    .each(
      (
        _index,

        node,
      ) => {
        const element =
          $(node);

        const tagName =
          getElementName(
            node,
          );

        if (!tagName) {
          return;
        }

        /*
         * Skip Word document title.
         * Website hero already displays title.
         */
        if (
          element.hasClass(
            "document-title",
          )
        ) {
          return;
        }

        if (
          tagName === "h1" ||
          tagName === "h2"
        ) {
          blocks.push(
            createBlockFromElement(
              {
                $,

                element,

                style: "h2",
              },
            ),
          );

          return;
        }

        if (
          tagName === "h3" ||
          tagName === "h4"
        ) {
          blocks.push(
            createBlockFromElement(
              {
                $,

                element,

                style: "h3",
              },
            ),
          );

          return;
        }

        if (
          tagName ===
          "blockquote"
        ) {
          blocks.push(
            createBlockFromElement(
              {
                $,

                element,

                style:
                  "blockquote",
              },
            ),
          );

          return;
        }

        if (
          tagName === "p"
        ) {
          const text =
            normalizeText(
              element.text(),
            );

          if (!text) {
            return;
          }

          blocks.push(
            createBlockFromElement(
              {
                $,

                element,

                style:
                  "normal",
              },
            ),
          );

          return;
        }

        if (
          tagName === "ul" ||
          tagName === "ol"
        ) {
          blocks.push(
            ...convertListItems(
              {
                $,

                list:
                  element,

                level: 1,
              },
            ),
          );

          return;
        }

        if (
          tagName ===
          "table"
        ) {
          blocks.push(
            ...convertTableToBlocks(
              $,

              element,
            ),
          );

          return;
        }

        /*
         * Unknown elements fallback.
         */
        const fallbackText =
          normalizeText(
            element.text(),
          );

        if (
          fallbackText
        ) {
          blocks.push({
            _key: createKey(),

            _type:
              "block",

            style:
              "normal",

            children: [
              createTextSpan(
                fallbackText,
              ),
            ],

            markDefs: [],
          });
        }
      },
    );

  /*
   * Remove invalid or empty blocks.
   */
  const cleanedBlocks =
    blocks.filter(
      (block) => {
        if (
          block._type ===
          "articleTable"
        ) {
          return (
            block.columns
              .length >= 2 &&
            block.rows
              .length >= 1
          );
        }

        return (
          block.children?.some(
            (child) =>
              child.text
                .trim()
                .length >
              0,
          ) ?? false
        );
      },
    );

  return {
    blocks:
      cleanedBlocks,

    warnings:
      mammothResult.messages.map(
        (message) =>
          message.message,
      ),
  };
}