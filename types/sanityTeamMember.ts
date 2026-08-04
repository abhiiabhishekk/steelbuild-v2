import type {
  DepartmentId,
} from "@/data/departments";

export type SanityTeamMemberImage = {
  url: string;
  alt?: string;
  lqip?: string;

  width?: number;
  height?: number;
  aspectRatio?: number;
};

export type SanityTeamMember = {
  _id: string;

  employeeId: string;

  name: string;
  slug: string;

  designation: string;
  department: DepartmentId;

  profileImage?:
    SanityTeamMemberImage;

  bio?: string;
  experience?: string;
  qualification?: string;
  skills: string[];

  email?: string;
  linkedin?: string;
  joiningDate?: string;

  departmentHead: boolean;
  featured: boolean;
  active: boolean;

  displayOrder: number;
  publishedAt?: string;
  updatedAt?: string;
};