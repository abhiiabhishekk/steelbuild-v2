export type SanityJobOpeningStatus =
  | "Open"
  | "Closed";

export type SanityEmploymentType =
  | "Full-Time"
  | "Part-Time"
  | "Contract"
  | "Internship"
  | "Trainee";

export type SanityJobOpening = {
  _id: string;

  jobId: string;

  title: string;
  slug: string;

  department: string;
  location: string;

  employmentType: SanityEmploymentType;

  experience: string;
  description: string;

  skills: string[];
  responsibilities: string[];

  qualification?: string;

  status: SanityJobOpeningStatus;

  active: boolean;
  featured: boolean;

  displayOrder?: number;

  postedAt?: string;
  closingDate?: string;

  updatedAt?: string;
};