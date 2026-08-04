export type ProjectCategory =
  | "Industrial"
  | "Warehouse"
  | "Factory"
  | "Food Processing"
  | "Logistics"
  | "Infrastructure";

export interface Project {
  id: string;
  folder: string;
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  area: string;
  tonnage: string;
  image: string;
  gallery: string[];
  featured?: boolean;
}