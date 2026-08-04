export type SanityExhibitionStatus =
  | "upcoming"
  | "ongoing"
  | "completed";

export type SanityExhibitionImage = {
  _key?: string;
  url: string;
  alt: string;
  caption?: string;

  width?: number;
  height?: number;
  aspectRatio?: number;
  lqip?: string;
};

export type SanityExhibition = {
  _id: string;

  exhibitionId: string;

  title: string;
  slug: string;

  status:
    SanityExhibitionStatus;

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

  gallery:
    SanityExhibitionImage[];

  youtubeVideoId?: string;
  eventWebsiteUrl?: string;

  featured: boolean;
  active: boolean;

  displayOrder?: number;
  publishedAt?: string;
  updatedAt?: string;
};