export type SanityAwardImage = {
  _key?: string;

  url: string;
  alt?: string;
  caption?: string;

  width?: number;
  height?: number;
  aspectRatio?: number;
  lqip?: string;
};

export type SanityAward = {
  _id: string;

  awardId: string;

  title: string;
  slug: string;

  organization: string;
  eventName?: string;

  awardDate: string;
  yearLabel: string;

  category: string;
  location?: string;

  shortDescription: string;
  highlights: string[];

  mainImage:
    SanityAwardImage;

  certificateImage?:
    SanityAwardImage;

  gallery:
    SanityAwardImage[];

  featured: boolean;
  active: boolean;

  displayOrder?: number;
  publishedAt?: string;
  updatedAt?: string;
};