export type DepartmentId =
  | "projects"
  | "design"
  | "csd"
  | "sales"
  | "production-dispatch"
  | "quality"
  | "safety"
  | "accounts"
  | "corporate-affairs";

export type Department = {
  id: DepartmentId;
  name: string;
  shortName: string;
  color: "primary-red" | "primary-blue";
  icon: string;
  order: number;
};

export const departments: Department[] = [
  {
    id: "projects",
    name: "Projects Department",
    shortName: "Projects",
    color: "primary-blue",
    icon: "Building2",
    order: 1,
  },
  {
    id: "design",
    name: "Design & Detailing Department",
    shortName: "Design",
    color: "primary-blue",
    icon: "Compass",
    order: 2,
  },
  {
    id: "csd",
    name: "Customer Service Department",
    shortName: "CSD",
    color: "primary-red",
    icon: "UsersRound",
    order: 3,
  },
  {
    id: "sales",
    name: "Sales & Marketing Department",
    shortName: "Sales & Marketing",
    color: "primary-red",
    icon: "TrendingUp",
    order: 4,
  },
  {
    id: "production-dispatch",
    name: "Production & Dispatch Department",
    shortName: "Production & Dispatch",
    color: "primary-blue",
    icon: "Factory",
    order: 5,
  },
  {
    id: "quality",
    name: "Quality Assurance Department",
    shortName: "Quality",
    color: "primary-blue",
    icon: "ShieldCheck",
    order: 6,
  },
  {
    id: "safety",
    name: "Safety Department",
    shortName: "Safety",
    color: "primary-red",
    icon: "HardHat",
    order: 7,
  },
  {
    id: "accounts",
    name: "Accounts & Finance",
    shortName: "Accounts & Finance",
    color: "primary-blue",
    icon: "IndianRupee",
    order: 8,
  },
  {
    id: "corporate-affairs",
    name: "Corporate Affairs",
    shortName: "Corporate Affairs",
    color: "primary-red",
    icon: "Landmark",
    order: 9,
  },
];