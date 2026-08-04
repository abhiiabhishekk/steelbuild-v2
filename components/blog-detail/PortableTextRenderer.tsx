import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Info,
  Lightbulb,
} from "lucide-react";
import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";

import type {
  SanityArticleCallout,
  SanityArticleCta,
  SanityArticleImage,
  SanityArticleTable,
  SanityContentBlock,
  SanityFaqBlock,
} from "@/types/sanityBlog";

type PortableTextRendererProps = {
  value?: SanityContentBlock[];
};

const createHeadingId = (
  children: unknown,
): string => {
  const text = Array.isArray(children)
    ? children
        .map((child) => {
          if (typeof child === "string") {
            return child;
          }

          if (
            typeof child === "object" &&
            child !== null &&
            "props" in child
          ) {
            const element = child as {
              props?: {
                children?: unknown;
              };
            };

            return String(
              element.props?.children ?? "",
            );
          }

          return "";
        })
        .join(" ")
    : String(children ?? "");

  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const isExternalUrl = (url: string) =>
  url.startsWith("http://") ||
  url.startsWith("https://");

const calloutStyles = {
  info: {
    icon: Info,
    wrapper:
      "border-primary-blue/15 bg-primary-blue/[0.035]",
    iconWrapper: "bg-primary-blue text-white",
    eyebrow: "Information",
  },

  success: {
    icon: CheckCircle2,
    wrapper:
      "border-emerald-500/20 bg-emerald-50/70",
    iconWrapper: "bg-emerald-600 text-white",
    eyebrow: "Key Point",
  },

  warning: {
    icon: AlertCircle,
    wrapper:
      "border-amber-500/25 bg-amber-50/75",
    iconWrapper: "bg-amber-500 text-white",
    eyebrow: "Important",
  },

  important: {
    icon: Lightbulb,
    wrapper:
      "border-primary-red/20 bg-primary-red/[0.035]",
    iconWrapper: "bg-primary-red text-white",
    eyebrow: "Expert Insight",
  },
} as const;

function ArticleImage({
  value,
}: {
  value: SanityArticleImage;
}) {
  const imageUrl = value.asset?.url;

  if (!imageUrl) {
    return null;
  }

  const width =
    value.asset?.metadata?.dimensions?.width ??
    1200;

  const height =
    value.asset?.metadata?.dimensions?.height ??
    675;

  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-primary-blue shadow-[0_22px_65px_rgba(27,63,104,0.12)]">
        <Image
          src={imageUrl}
          alt={
            value.alt?.trim() || "Article image"
          }
          width={width}
          height={height}
          sizes="(max-width: 1024px) 100vw, 760px"
          className="h-auto w-full object-cover"
        />
      </div>

      {value.caption ? (
        <figcaption className="mt-4 text-center text-sm font-medium leading-6 text-gray-500">
          {value.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ArticleTable({
  value,
}: {
  value: SanityArticleTable;
}) {
  const columns = value.columns ?? [];
  const rows = value.rows ?? [];

  if (
    columns.length < 2 ||
    rows.length === 0
  ) {
    return null;
  }

  return (
    <figure className="my-10">
      {value.title ? (
        <h3 className="mb-5 text-2xl font-black leading-tight text-primary-blue md:text-3xl">
          {value.title}
        </h3>
      ) : null}

      <div className="overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-[0_16px_45px_rgba(27,63,104,0.08)]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="bg-primary-blue">
              <tr>
                {columns.map(
                  (column, columnIndex) => (
                    <th
                      key={
                        column._key ??
                        `${column.heading}-${columnIndex}`
                      }
                      scope="col"
                      className="border-r border-white/10 px-5 py-4 align-top text-sm font-black leading-6 text-white last:border-r-0"
                    >
                      {column.heading ||
                        `Column ${
                          columnIndex + 1
                        }`}
                    </th>
                  ),
                )}
              </tr>
            </thead>

            <tbody>
              {rows.map(
                (row, rowIndex) => (
                  <tr
                    key={
                      row._key ?? rowIndex
                    }
                    className="border-t border-gray-200 even:bg-[#f8fafc] hover:bg-primary-blue/[0.035]"
                  >
                    {columns.map(
                      (
                        column,
                        cellIndex,
                      ) => {
                        const cell =
                          row.cells?.[
                            cellIndex
                          ] ?? "";

                        return (
                          <td
                            key={`${
                              row._key ??
                              rowIndex
                            }-${
                              column._key ??
                              cellIndex
                            }`}
                            className="border-r border-gray-200 px-5 py-4 align-top text-sm font-medium leading-7 text-gray-600 first:font-bold first:text-primary-blue last:border-r-0"
                          >
                            {cell}
                          </td>
                        );
                      },
                    )}
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>

      {value.caption ? (
        <figcaption className="mt-4 text-center text-sm font-medium leading-6 text-gray-500">
          {value.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function ArticleCallout({
  value,
}: {
  value: SanityArticleCallout;
}) {
  const rawTone =
    value.type ?? "info";

  const tone =
    rawTone in calloutStyles
      ? (rawTone as keyof typeof calloutStyles)
      : "info";

  const config = calloutStyles[tone];
  const Icon = config.icon;

  return (
    <aside
      className={`my-10 rounded-[26px] border p-6 md:p-7 ${config.wrapper}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${config.iconWrapper}`}
        >
          <Icon size={22} />
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
            {config.eyebrow}
          </p>

          {value.title ? (
            <h3 className="mt-2 text-xl font-black leading-tight text-primary-blue">
              {value.title}
            </h3>
          ) : null}

          {value.content?.length ? (
            <div className="mt-3 text-sm font-medium leading-7 text-gray-600">
              <PortableText
                value={value.content}
                components={
                  nestedComponents
                }
              />
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function ArticleCta({
  value,
}: {
  value: SanityArticleCta;
}) {
  const buttonUrl =
    value.buttonUrl?.trim();

  return (
    <aside className="my-12 overflow-hidden rounded-[30px] bg-primary-blue p-7 shadow-[0_24px_65px_rgba(27,63,104,0.2)] md:p-9">
      <div className="relative">
        <div className="pointer-events-none absolute -right-20 -top-28 h-56 w-56 rounded-full bg-primary-red/25 blur-3xl" />

        <div className="relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-red">
            Start Your Project
          </p>

          {value.heading ? (
            <h3 className="mt-3 text-2xl font-black leading-tight text-white md:text-3xl">
              {value.heading}
            </h3>
          ) : null}

          {value.description ? (
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/75 md:text-base">
              {value.description}
            </p>
          ) : null}

          {buttonUrl &&
          value.buttonText ? (
            <Link
              href={buttonUrl}
              target={
                isExternalUrl(buttonUrl)
                  ? "_blank"
                  : undefined
              }
              rel={
                isExternalUrl(buttonUrl)
                  ? "noreferrer noopener"
                  : undefined
              }
              className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-3 font-black !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              {value.buttonText}
              <ArrowUpRight size={18} />
            </Link>
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function FaqBlock({
  value,
}: {
  value: SanityFaqBlock;
}) {
  const items = value.items ?? [];

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="my-12">
      <div className="mb-6">
        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
          Frequently Asked Questions
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-primary-blue">
          {value.heading ||
            value.title ||
            "Common Questions"}
        </h2>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={
              item._key ??
              `${item.question}-${index}`
            }
            className="group rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_12px_36px_rgba(27,63,104,0.05)]"
          >
            <summary className="cursor-pointer list-none pr-8 text-base font-black leading-7 text-primary-blue marker:hidden">
              {item.question}
            </summary>

            {item.answer?.length ? (
              <div className="mt-4 border-t border-gray-200 pt-4 text-sm font-medium leading-7 text-gray-600">
                <PortableText
                  value={item.answer}
                  components={
                    nestedComponents
                  }
                />
              </div>
            ) : null}
          </details>
        ))}
      </div>
    </section>
  );
}

const nestedComponents: PortableTextComponents =
  {
    block: {
      normal: ({ children }) => (
        <p className="mb-4 text-sm font-medium leading-7 text-gray-600 last:mb-0">
          {children}
        </p>
      ),
    },

    marks: {
      strong: ({ children }) => (
        <strong className="font-black text-primary-blue">
          {children}
        </strong>
      ),

      em: ({ children }) => (
        <em className="italic text-gray-700">
          {children}
        </em>
      ),

      underline: ({ children }) => (
        <span className="underline underline-offset-4">
          {children}
        </span>
      ),

      link: ({ children, value }) => {
        const href =
          typeof value?.href ===
          "string"
            ? value.href
            : "#";

        const external =
          isExternalUrl(href);

        return (
          <Link
            href={href}
            target={
              external
                ? "_blank"
                : undefined
            }
            rel={
              external
                ? "noreferrer noopener"
                : undefined
            }
            className="font-bold text-primary-red underline decoration-primary-red/30 underline-offset-4 transition-colors hover:text-primary-blue"
          >
            {children}
          </Link>
        );
      },
    },

    list: {
      bullet: ({ children }) => (
        <ul className="my-4 list-disc space-y-2 pl-6">
          {children}
        </ul>
      ),

      number: ({ children }) => (
        <ol className="my-4 list-decimal space-y-2 pl-6">
          {children}
        </ol>
      ),
    },

    listItem: {
      bullet: ({ children }) => (
        <li className="pl-2 text-sm font-medium leading-7 text-gray-600 marker:text-primary-red">
          {children}
        </li>
      ),

      number: ({ children }) => (
        <li className="pl-2 text-sm font-medium leading-7 text-gray-600 marker:font-black marker:text-primary-red">
          {children}
        </li>
      ),
    },
  };

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-[16px] font-medium leading-8 text-gray-600 md:text-[17px]">
        {children}
      </p>
    ),

    h2: ({ children }) => {
      const id =
        createHeadingId(children);

      return (
        <h2
          id={id}
          className="scroll-mt-32 pb-1 pt-7 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl"
        >
          {children}
        </h2>
      );
    },

    h3: ({ children }) => {
      const id =
        createHeadingId(children);

      return (
        <h3
          id={id}
          className="scroll-mt-32 pb-1 pt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue md:text-3xl"
        >
          {children}
        </h3>
      );
    },

    h4: ({ children }) => (
      <h4 className="pb-1 pt-4 text-xl font-black leading-tight text-primary-blue md:text-2xl">
        {children}
      </h4>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-9 rounded-r-[22px] border-l-4 border-primary-red bg-primary-red/[0.035] px-6 py-5 text-lg font-bold italic leading-8 text-primary-blue">
        {children}
      </blockquote>
    ),
  },

  marks: nestedComponents.marks,

  list: {
    bullet: ({ children }) => (
      <ul className="my-7 list-disc space-y-3 pl-6">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-7 list-decimal space-y-3 pl-6">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="pl-2 text-[16px] font-medium leading-8 text-gray-600 marker:text-primary-red md:text-[17px]">
        {children}
      </li>
    ),

    number: ({ children }) => (
      <li className="pl-2 text-[16px] font-medium leading-8 text-gray-600 marker:font-black marker:text-primary-red md:text-[17px]">
        {children}
      </li>
    ),
  },

  types: {
    articleImage: ({ value }) => (
      <ArticleImage
        value={
          value as SanityArticleImage
        }
      />
    ),

    articleTable: ({ value }) => (
      <ArticleTable
        value={
          value as SanityArticleTable
        }
      />
    ),

    articleCallout: ({ value }) => (
      <ArticleCallout
        value={
          value as SanityArticleCallout
        }
      />
    ),

    articleCta: ({ value }) => (
      <ArticleCta
        value={
          value as SanityArticleCta
        }
      />
    ),

    divider: () => (
      <div
        className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        role="separator"
      />
    ),

    faq: ({ value }) => (
      <FaqBlock
        value={value as SanityFaqBlock}
      />
    ),
  },

  unknownType: ({ value }) => {
    if (
      process.env.NODE_ENV ===
      "development"
    ) {
      console.warn(
        "Unsupported Sanity content block:",
        value?._type,
      );
    }

    return null;
  },
};

function PortableTextRenderer({
  value,
}: PortableTextRendererProps) {
  if (!value?.length) {
    return null;
  }

  return (
    <div className="sanity-portable-text">
      <PortableText
        value={value}
        components={components}
      />
    </div>
  );
}

export default PortableTextRenderer;