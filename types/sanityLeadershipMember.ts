export type SanityLeadershipImage = {
  url: string;

  alt?: string;
  caption?: string;
  lqip?: string;

  width?: number;
  height?: number;
  aspectRatio?: number;
};

export type SanityLeadershipMember = {
  _id: string;

  leaderId: string;

  name: string;
  slug: string;

  designation: string;

  shortDescription: string;
  strengths: string[];

  profileImage?: SanityLeadershipImage;

  imagePosition: string;

  messageEyebrow: string;
  quote: string;
  message: string[];

  signatureName: string;

  linkedin?: string;

  active: boolean;
  displayOrder: number;

  publishedAt?: string;
  updatedAt?: string;
};