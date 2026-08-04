export type SanityExhibitionStatus =
  | "upcoming"
  | "ongoing"
  | "completed";

export type SanityExhibitionImage = {
  _key?: string;
  _type?: "image";

  url: string;

  alt?: string;
  caption?: string;

  lqip?: string;

  width?: number;
  height?: number;
  aspectRatio?: number;

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

export type SanityExhibition = {
  _id: string;

  exhibitionId: string;

  title: string;
  slug: string;

  status: SanityExhibitionStatus;

  startDate: string;
  endDate?: string;

  dateLabel: string;

  venue: string;
  city: string;
  state?: string;
  country?: string;

  hallNumber?: string;
  stallNumber?: string;

  shortDescription: string;

  highlights: string[];

  coverImage?: SanityExhibitionImage;

  gallery: SanityExhibitionImage[];

  youtubeVideoId?: string;

  eventWebsiteUrl?: string;

  featured: boolean;
  active: boolean;

  displayOrder?: number;

  publishedAt?: string;
  updatedAt?: string;
};