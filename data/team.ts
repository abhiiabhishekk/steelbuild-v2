import type { DepartmentId } from "@/data/departments";

export type TeamDepartmentId = DepartmentId;

export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  department: TeamDepartmentId;

  image?: string;
  bio?: string;
  email?: string;
  linkedin?: string;

  featured?: boolean;
  departmentHead?: boolean;
  displayOrder: number;
};

export const teamMembers: TeamMember[] = [
  /*
   * =========================================================
   * PROJECTS DEPARTMENT
   * =========================================================
   */

  {
    id: "deepak-kumar-singh",
    name: "Mr. Deepak Kumar Singh",
    designation: "Project Head",
    department: "projects",
    bio:
      "Leads project planning, site execution, coordination and timely delivery of Pre-Engineered Building projects across multiple locations.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },
  {
    id: "deepak-hooda",
    name: "Mr. Deepak Hooda",
    designation: "Project Manager",
    department: "projects",
    bio:
      "Manages project execution, site coordination, workforce planning and construction progress across assigned projects.",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "saleem-khan",
    name: "Mr. Saleem Khan",
    designation: "Project Manager",
    department: "projects",
    bio:
      "Coordinates project planning, execution activities, site teams and communication between internal departments and project stakeholders.",
    featured: true,
    displayOrder: 3,
  },
  {
    id: "narayan-jha",
    name: "Mr. Narayan Jha",
    designation: "Project Manager",
    department: "projects",
    bio:
      "Supports project scheduling, site execution, technical coordination and delivery management for industrial building projects.",
    featured: true,
    displayOrder: 4,
  },

  /*
   * =========================================================
   * DESIGN & DETAILING DEPARTMENT
   * =========================================================
   */

  {
    id: "karan-prabhakar",
    name: "Mr. Karan Prabhakar",
    designation: "Design Head",
    department: "design",
    bio:
      "Leads structural design coordination, engineering review and technical development of Pre-Engineered Building projects.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },
  {
    id: "rishi-anand",
    name: "Mr. Rishi Anand",
    designation: "Designer",
    department: "design",
    bio:
      "Contributes to structural design development, technical drawings and engineering coordination for steel building projects.",
    displayOrder: 2,
  },
  {
    id: "ankur-pal",
    name: "Mr. Ankur Pal",
    designation: "Senior Detailer",
    department: "design",
    bio:
      "Supports detailed engineering drawings, fabrication information and technical detailing for Pre-Engineered Building projects.",
    featured: true,
    displayOrder: 3,
  },
  {
    id: "vaibhav",
    name: "Mr. Vaibhav",
    designation: "Detailer",
    department: "design",
    bio:
      "Supports structural detailing, drawing preparation and coordination with design and fabrication teams.",
    displayOrder: 4,
  },
  {
    id: "saroj-sahu",
    name: "Mr. Saroj Sahu",
    designation: "Detailer",
    department: "design",
    bio:
      "Contributes to project detailing, fabrication drawings and technical documentation for steel structures.",
    displayOrder: 5,
  },
  {
    id: "gaurav",
    name: "Mr. Gaurav",
    designation: "Detailer",
    department: "design",
    bio:
      "Supports detailed engineering drawings and technical documentation for project execution.",
    displayOrder: 6,
  },

  /*
   * =========================================================
   * CUSTOMER SERVICE DEPARTMENT
   * =========================================================
   */

  {
    id: "parwati-rana",
    name: "Ms. Parwati Rana",
    designation: "CSD Head",
    department: "csd",
    bio:
      "Leads customer service coordination, client communication, project follow-ups and post-order support.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },

  /*
   * =========================================================
   * SALES & MARKETING DEPARTMENT
   * =========================================================
   */

  {
    id: "sankar-k-ghosh",
    name: "Mr. Sankar Kumar Ghosh",
    designation: "Associate Vice President",
    department: "sales",
    bio:
      "Provides strategic direction to sales, business development and client engagement across key industrial markets.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },
  {
    id: "amit-sharma",
    name: "Mr. Amit Sharma",
    designation: "General Manager",
    department: "sales",
    bio:
      "Supports sales planning, business growth, customer relationships and market development for Pre-Engineered Building solutions.",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "abid-khan",
    name: "Mr. Abid Khan",
    designation: "Area General Manager",
    department: "sales",
    bio:
      "Manages regional business development, client coordination and sales opportunities across assigned markets.",
    displayOrder: 3,
  },
  {
    id: "amit-gill",
    name: "Mr. Amit Gill",
    designation: "Sales Manager",
    department: "sales",
    bio:
      "Supports client acquisition, proposal coordination, sales follow-ups and customer relationship management.",
    displayOrder: 4,
  },

  /*
   * =========================================================
   * PRODUCTION & DISPATCH DEPARTMENT
   * =========================================================
   */

  {
    id: "sumit-mishra",
    name: "Mr. Sumit Mishra",
    designation: "Plant Head",
    department: "production-dispatch",
    bio:
      "Leads plant operations, production coordination, resource planning and manufacturing performance.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },
  {
    id: "bhuneshwar-chauhan",
    name: "Mr. Bhuneshwar Chauhan",
    designation: "Dispatch Manager",
    department: "production-dispatch",
    bio:
      "Manages dispatch planning, material movement, delivery coordination and documentation for project supplies.",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "prashant-kumar-sahoo",
    name: "Mr. Prashant Kumar Sahoo",
    designation: "Purchase Manager",
    department: "production-dispatch",
    bio:
      "Coordinates procurement, supplier management, material availability and purchasing activities for production requirements.",
    displayOrder: 3,
  },
  {
    id: "rashid-ali-khan",
    name: "Mr. Rashid Ali Khan",
    designation: "PPC Manager",
    department: "production-dispatch",
    bio:
      "Manages Production Planning and Control, production schedules, capacity coordination and workflow monitoring.",
    displayOrder: 4,
  },

  /*
   * =========================================================
   * QUALITY ASSURANCE DEPARTMENT
   * =========================================================
   */

  {
    id: "sumit-thakur",
    name: "Mr. Sumit Thakur",
    designation: "Quality Head",
    department: "quality",
    bio:
      "Leads quality assurance, inspection processes, compliance monitoring and quality-control coordination.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },

  /*
   * =========================================================
   * SAFETY DEPARTMENT
   * =========================================================
   */

  {
    id: "sumit-sharma",
    name: "Mr. Sumit Sharma",
    designation: "Safety Officer",
    department: "safety",
    bio:
      "Supports site-safety implementation, workforce awareness, compliance monitoring and safe execution practices.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },

  /*
   * =========================================================
   * ACCOUNTS & FINANCE DEPARTMENT
   * =========================================================
   */

  {
    id: "ashwani-goel",
    name: "Mr. Ashwani Goel",
    designation: "Chief Financial Officer",
    department: "accounts",
    bio:
      "Leads financial planning, governance, reporting, compliance and financial management across the organization.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },
  {
    id: "jai-prakash",
    name: "Mr. Jai Prakash",
    designation: "Accounts Manager",
    department: "accounts",
    bio:
      "Manages accounting operations, financial records, coordination, reporting and day-to-day accounts administration.",
    featured: true,
    displayOrder: 2,
  },

  /*
   * =========================================================
   * CORPORATE AFFAIRS
   * =========================================================
   */

  {
    id: "martand-pratap-rao",
    name: "Mr. Martand Pratap Rao",
    designation: "Company Secretary",
    department: "corporate-affairs",
    bio:
      "Supports corporate governance, statutory compliance, board coordination and regulatory documentation.",
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },
];