export type SanityImageAsset = {
  _id: string;
  url: string;

  metadata?: {
    dimensions?: {
      width: number;
      height: number;
      aspectRatio: number;
    };

    lqip?: string;
  };
};

export type SanityImage = {
  asset?: SanityImageAsset;

  alt?: string;
  caption?: string;

  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };

  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
};

export type SanityAuthor = {
  _id: string;
  name: string;
  slug?: string;
  designation?: string;
  bio?: string;
  image?: SanityImage;
};

export type SanityCategory = {
  _id: string;
  title: string;
  slug?: string;
  description?: string;
  active?: boolean;
  blogCount: number;
};

export type SanityPortableTextSpan = {
  _key?: string;
  _type: "span";
  text: string;
  marks?: string[];
};

export type SanityPortableTextMarkDefinition = {
  _key: string;

  _type: string;

  href?: string;

  openInNewTab?: boolean;

  /**
   * Purane imported content ke support ke liye.
   */
  blank?: boolean;
};

export type SanityPortableTextBlock = {
  _key?: string;
  _type: "block";

  style?:
    | "normal"
    | "h2"
    | "h3"
    | "h4"
    | "blockquote";

  listItem?: "bullet" | "number";
  level?: number;

  children?: SanityPortableTextSpan[];

  markDefs?: SanityPortableTextMarkDefinition[];
};

export type SanityArticleImage = SanityImage & {
  _key?: string;
  _type: "articleImage";
};

export type SanityArticleTableColumn = {
  _key?: string;

  _type?: "tableColumn";

  heading?: string;
};

export type SanityArticleTableRow = {
  _key?: string;

  _type?: "tableRow";

  cells?: string[];
};

export type SanityArticleTable = {
  _key?: string;

  _type: "articleTable";

  title?: string;

  columns?: SanityArticleTableColumn[];

  rows?: SanityArticleTableRow[];

  caption?: string;
};

export type SanityArticleCallout = {
  _key?: string;
  _type: "articleCallout";
  title?: string;
  type?: string;
  content?: SanityPortableTextBlock[];
};

export type SanityArticleCta = {
  _key?: string;

  _type: "articleCta";

  heading?: string;

  description?: string;

  buttonText?: string;

  buttonUrl?: string;
};

export type SanityDivider = {
  _key?: string;
  _type: "divider";
  style?: string;
};

export type SanityFaqItem = {
  _key?: string;
  question: string;
  answer?: SanityPortableTextBlock[];
};

export type SanityFaqBlock = {
  _key?: string;

  _type: "faq";

  heading?: string;

  title?: string;

  items?: SanityFaqItem[];
};

export type SanityContentBlock =
  | SanityPortableTextBlock
  | SanityArticleImage
  | SanityArticleTable
  | SanityArticleCallout
  | SanityArticleCta
  | SanityDivider
  | SanityFaqBlock;

export type SanityFaq = {
  _key: string;
  question: string;
  answer?: SanityPortableTextBlock[];
};

export type SanityBlogListItem = {
  _id: string;
  id: string;
  slug: string;
  title: string;

  excerpt: string;

  category?: string;

  author?: string;

  publishedAt?: string;

  readingTime: string;

  thumbnail?: SanityImage;

  featured?: boolean;

  tags: string[];

  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
};

export type SanityBlogDetail = Omit<
  SanityBlogListItem,
  "author"
> & {
  content?: SanityContentBlock[];

  categoryId?: string;
  categorySlug?: string;

  author?: SanityAuthor;

  faqs?: SanityFaq[];

  updatedAt?: string;
  views?: number;
};