export type SanityProjectCategory =
  | "Industrial"
  | "Warehouse"
  | "Factory"
  | "Food Processing"
  | "Logistics"
  | "Infrastructure";

export type SanityProjectStatus =
  | "Completed"
  | "Ongoing"
  | "Upcoming";

export type SanityProjectImageAsset = {
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

export type SanityProjectImage = {
  _key?: string;
  _type?: "image";

  asset?: SanityProjectImageAsset;

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

export type SanityProjectPortableTextSpan = {
  _key?: string;
  _type: "span";
  text: string;
  marks?: string[];
};

export type SanityProjectPortableTextBlock = {
  _key?: string;
  _type: "block";

  style?:
    | "normal"
    | "h2"
    | "h3"
    | "blockquote";

  listItem?: "bullet" | "number";
  level?: number;

  children?: SanityProjectPortableTextSpan[];

  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
    openInNewTab?: boolean;
  }>;
};

export type SanityProjectListItem = {
  _id: string;

  projectId: string;

  name: string;
  slug: string;

  clientName?: string;

  category: SanityProjectCategory;
  status: SanityProjectStatus;

  location: string;
  area: string;
  tonnage: string;

  coverImage?: SanityProjectImage;

  shortDescription?: string;

  featured: boolean;
  active: boolean;

  displayOrder?: number;
  publishedAt?: string;
};

export type SanityProjectDetail =
  SanityProjectListItem & {
    gallery?: SanityProjectImage[];

    description?: SanityProjectPortableTextBlock[];

    projectHighlights?: string[];
    scopeOfWork?: string[];

    completionDate?: string;

    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string[];

    ogImage?: SanityProjectImage;

    updatedAt?: string;
  };

export type SanityProjectNavigation = {
  previous: SanityProjectListItem | null;
  next: SanityProjectListItem | null;
};