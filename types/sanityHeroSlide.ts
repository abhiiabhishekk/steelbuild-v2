export type SanityHeroSlide = {
  _id: string;

  eyebrow: string;
  title: string;
  description: string;

  image?: {
    asset?: {
      _id?: string;
      url?: string;
    };
    alt?: string;
  };

  primaryButtonText?: string;
  primaryButtonLink?: string;

  secondaryButtonText?: string;
  secondaryButtonLink?: string;

  order: number;
  isActive: boolean;
};