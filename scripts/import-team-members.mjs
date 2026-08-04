import { createClient } from "@sanity/client";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

const token =
  process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_PROJECT_ID is missing from .env.local",
  );
}

if (!dataset) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_DATASET is missing from .env.local",
  );
}

if (
  !token ||
  token === "YOUR_ACTUAL_SANITY_WRITE_TOKEN"
) {
  throw new Error(
    "A valid SANITY_API_WRITE_TOKEN is required in .env.local",
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-08-01",
  useCdn: false,
});

const teamMembers = [
  /*
   * =========================================================
   * PROJECTS DEPARTMENT
   * =========================================================
   */

  {
    slug: "deepak-kumar-singh",
    employeeId: "EMP-001",
    name: "Mr. Deepak Kumar Singh",
    designation: "Project Head",
    department: "projects",
    bio:
      "Leads project planning, site execution, coordination and timely delivery of Pre-Engineered Building projects across multiple locations.",
    experience: "18+ Years",
    skills: [
      "Project Planning",
      "Site Execution",
      "Team Leadership",
      "PEB Project Delivery",
    ],
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },

  {
    slug: "deepak-hooda",
    employeeId: "EMP-002",
    name: "Mr. Deepak Hooda",
    designation: "Project Manager",
    department: "projects",
    bio:
      "Manages project execution, site coordination, workforce planning and construction progress across assigned projects.",
    skills: [
      "Project Execution",
      "Site Coordination",
      "Workforce Planning",
    ],
    featured: true,
    departmentHead: false,
    displayOrder: 2,
  },

  {
    slug: "saleem-khan",
    employeeId: "EMP-003",
    name: "Mr. Saleem Khan",
    designation: "Project Manager",
    department: "projects",
    bio:
      "Coordinates project planning, execution activities, site teams and communication between internal departments and project stakeholders.",
    skills: [
      "Project Coordination",
      "Site Management",
      "Stakeholder Communication",
    ],
    featured: true,
    departmentHead: false,
    displayOrder: 3,
  },

  {
    slug: "narayan-jha",
    employeeId: "EMP-004",
    name: "Mr. Narayan Jha",
    designation: "Project Manager",
    department: "projects",
    bio:
      "Supports project scheduling, site execution, technical coordination and delivery management for industrial building projects.",
    skills: [
      "Project Scheduling",
      "Technical Coordination",
      "Delivery Management",
    ],
    featured: true,
    departmentHead: false,
    displayOrder: 4,
  },

  /*
   * =========================================================
   * DESIGN & DETAILING DEPARTMENT
   * =========================================================
   */

  {
    slug: "karan-prabhakar",
    employeeId: "EMP-005",
    name: "Mr. Karan Prabhakar",
    designation: "Design Head",
    department: "design",
    bio:
      "Leads structural design coordination, engineering review and technical development of Pre-Engineered Building projects.",
    skills: [
      "Structural Design",
      "Engineering Review",
      "PEB Design Coordination",
    ],
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },

  {
    slug: "rishi-anand",
    employeeId: "EMP-006",
    name: "Mr. Rishi Anand",
    designation: "Designer",
    department: "design",
    bio:
      "Contributes to structural design development, technical drawings and engineering coordination for steel building projects.",
    skills: [
      "Structural Design",
      "Technical Drawings",
      "Engineering Coordination",
    ],
    featured: false,
    departmentHead: false,
    displayOrder: 2,
  },

  {
    slug: "ankur-pal",
    employeeId: "EMP-007",
    name: "Mr. Ankur Pal",
    designation: "Senior Detailer",
    department: "design",
    bio:
      "Supports detailed engineering drawings, fabrication information and technical detailing for Pre-Engineered Building projects.",
    skills: [
      "PEB Detailing",
      "Fabrication Drawings",
      "Technical Documentation",
    ],
    featured: true,
    departmentHead: false,
    displayOrder: 3,
  },

  {
    slug: "vaibhav",
    employeeId: "EMP-008",
    name: "Mr. Vaibhav",
    designation: "Detailer",
    department: "design",
    bio:
      "Supports structural detailing, drawing preparation and coordination with design and fabrication teams.",
    skills: [
      "Structural Detailing",
      "Drawing Preparation",
      "Fabrication Coordination",
    ],
    featured: false,
    departmentHead: false,
    displayOrder: 4,
  },

  {
    slug: "saroj-sahu",
    employeeId: "EMP-009",
    name: "Mr. Saroj Sahu",
    designation: "Detailer",
    department: "design",
    bio:
      "Contributes to project detailing, fabrication drawings and technical documentation for steel structures.",
    skills: [
      "Project Detailing",
      "Fabrication Drawings",
      "Steel Structures",
    ],
    featured: false,
    departmentHead: false,
    displayOrder: 5,
  },

  {
    slug: "gaurav",
    employeeId: "EMP-010",
    name: "Mr. Gaurav",
    designation: "Detailer",
    department: "design",
    bio:
      "Supports detailed engineering drawings and technical documentation for project execution.",
    skills: [
      "Engineering Drawings",
      "Technical Documentation",
      "Project Support",
    ],
    featured: false,
    departmentHead: false,
    displayOrder: 6,
  },

  /*
   * =========================================================
   * CUSTOMER SERVICE DEPARTMENT
   * =========================================================
   */

  {
    slug: "parwati-rana",
    employeeId: "EMP-011",
    name: "Ms. Parwati Rana",
    designation: "CSD Head",
    department: "csd",
    bio:
      "Leads customer service coordination, client communication, project follow-ups and post-order support.",
    skills: [
      "Customer Service",
      "Client Communication",
      "Project Follow-Up",
      "Post-Order Support",
    ],
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
    slug: "sankar-k-ghosh",
    employeeId: "EMP-012",
    name: "Mr. Sankar Kumar Ghosh",
    designation: "Associate Vice President",
    department: "sales",
    bio:
      "Provides strategic direction to sales, business development and client engagement across key industrial markets.",
    skills: [
      "Sales Strategy",
      "Business Development",
      "Client Engagement",
      "Industrial Markets",
    ],
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },

  {
    slug: "amit-sharma",
    employeeId: "EMP-013",
    name: "Mr. Amit Sharma",
    designation: "General Manager",
    department: "sales",
    bio:
      "Supports sales planning, business growth, customer relationships and market development for Pre-Engineered Building solutions.",
    skills: [
      "Sales Planning",
      "Business Growth",
      "Customer Relationships",
      "Market Development",
    ],
    featured: true,
    departmentHead: false,
    displayOrder: 2,
  },

  {
    slug: "abid-khan",
    employeeId: "EMP-014",
    name: "Mr. Abid Khan",
    designation: "Area General Manager",
    department: "sales",
    bio:
      "Manages regional business development, client coordination and sales opportunities across assigned markets.",
    skills: [
      "Regional Sales",
      "Business Development",
      "Client Coordination",
    ],
    featured: false,
    departmentHead: false,
    displayOrder: 3,
  },

  {
    slug: "amit-gill",
    employeeId: "EMP-015",
    name: "Mr. Amit Gill",
    designation: "Sales Manager",
    department: "sales",
    bio:
      "Supports client acquisition, proposal coordination, sales follow-ups and customer relationship management.",
    skills: [
      "Client Acquisition",
      "Proposal Coordination",
      "Sales Follow-Up",
      "Relationship Management",
    ],
    featured: false,
    departmentHead: false,
    displayOrder: 4,
  },

  /*
   * =========================================================
   * PRODUCTION & DISPATCH DEPARTMENT
   * =========================================================
   */

  {
    slug: "sumit-mishra",
    employeeId: "EMP-016",
    name: "Mr. Sumit Mishra",
    designation: "Plant Head",
    department: "production-dispatch",
    bio:
      "Leads plant operations, production coordination, resource planning and manufacturing performance.",
    skills: [
      "Plant Operations",
      "Production Coordination",
      "Resource Planning",
      "Manufacturing Performance",
    ],
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },

  {
    slug: "bhuneshwar-chauhan",
    employeeId: "EMP-017",
    name: "Mr. Bhuneshwar Chauhan",
    designation: "Dispatch Manager",
    department: "production-dispatch",
    bio:
      "Manages dispatch planning, material movement, delivery coordination and documentation for project supplies.",
    skills: [
      "Dispatch Planning",
      "Material Movement",
      "Delivery Coordination",
      "Documentation",
    ],
    featured: true,
    departmentHead: false,
    displayOrder: 2,
  },

  {
    slug: "prashant-kumar-sahoo",
    employeeId: "EMP-018",
    name: "Mr. Prashant Kumar Sahoo",
    designation: "Purchase Manager",
    department: "production-dispatch",
    bio:
      "Coordinates procurement, supplier management, material availability and purchasing activities for production requirements.",
    skills: [
      "Procurement",
      "Supplier Management",
      "Material Planning",
      "Purchasing",
    ],
    featured: false,
    departmentHead: false,
    displayOrder: 3,
  },

  {
    slug: "rashid-ali-khan",
    employeeId: "EMP-019",
    name: "Mr. Rashid Ali Khan",
    designation: "PPC Manager",
    department: "production-dispatch",
    bio:
      "Manages Production Planning and Control, production schedules, capacity coordination and workflow monitoring.",
    skills: [
      "Production Planning",
      "Production Control",
      "Capacity Coordination",
      "Workflow Monitoring",
    ],
    featured: false,
    departmentHead: false,
    displayOrder: 4,
  },

  /*
   * =========================================================
   * QUALITY ASSURANCE DEPARTMENT
   * =========================================================
   */

  {
    slug: "sumit-thakur",
    employeeId: "EMP-020",
    name: "Mr. Sumit Thakur",
    designation: "Quality Head",
    department: "quality",
    bio:
      "Leads quality assurance, inspection processes, compliance monitoring and quality-control coordination.",
    skills: [
      "Quality Assurance",
      "Inspection Processes",
      "Compliance Monitoring",
      "Quality Control",
    ],
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
    slug: "sumit-sharma",
    employeeId: "EMP-021",
    name: "Mr. Sumit Sharma",
    designation: "Safety Officer",
    department: "safety",
    bio:
      "Supports site-safety implementation, workforce awareness, compliance monitoring and safe execution practices.",
    skills: [
      "Site Safety",
      "Safety Awareness",
      "Compliance Monitoring",
      "Safe Execution",
    ],
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
    slug: "ashwani-goel",
    employeeId: "EMP-022",
    name: "Mr. Ashwani Goel",
    designation: "Chief Financial Officer",
    department: "accounts",
    bio:
      "Leads financial planning, governance, reporting, compliance and financial management across the organization.",
    skills: [
      "Financial Planning",
      "Corporate Governance",
      "Financial Reporting",
      "Compliance",
    ],
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },

  {
    slug: "jai-prakash",
    employeeId: "EMP-023",
    name: "Mr. Jai Prakash",
    designation: "Accounts Manager",
    department: "accounts",
    bio:
      "Manages accounting operations, financial records, coordination, reporting and day-to-day accounts administration.",
    skills: [
      "Accounting Operations",
      "Financial Records",
      "Reporting",
      "Accounts Administration",
    ],
    featured: true,
    departmentHead: false,
    displayOrder: 2,
  },

  /*
   * =========================================================
   * CORPORATE AFFAIRS
   * =========================================================
   */

  {
    slug: "martand-pratap-rao",
    employeeId: "EMP-024",
    name: "Mr. Martand Pratap Rao",
    designation: "Company Secretary",
    department: "corporate-affairs",
    bio:
      "Supports corporate governance, statutory compliance, board coordination and regulatory documentation.",
    skills: [
      "Corporate Governance",
      "Statutory Compliance",
      "Board Coordination",
      "Regulatory Documentation",
    ],
    featured: true,
    departmentHead: true,
    displayOrder: 1,
  },
];

function createDocument(member) {
  return {
    _id: `teamMember-${member.slug}`,
    _type: "teamMember",

    employeeId: member.employeeId,

    name: member.name,

    slug: {
      _type: "slug",
      current: member.slug,
    },

    designation: member.designation,
    department: member.department,

    bio: member.bio || "",

    experience:
      member.experience || "",

    qualification: "",

    skills:
      member.skills || [],

    email: "",
    linkedin: "",

    departmentHead:
      member.departmentHead ?? false,

    featured:
      member.featured ?? false,

    active: true,

    displayOrder:
      member.displayOrder ?? 9999,

    publishedAt:
      new Date().toISOString(),
  };
}

async function importTeamMembers() {
  console.log("");
  console.log(
    `Starting import of ${teamMembers.length} team members...`,
  );
  console.log("");

  let successCount = 0;
  let failureCount = 0;

  for (const member of teamMembers) {
    try {
      const document =
        createDocument(member);

      const result =
        await client.createOrReplace(
          document,
        );

      successCount += 1;

      console.log(
        `✓ ${result.employeeId} — ${result.name}`,
      );
    } catch (error) {
      failureCount += 1;

      console.error(
        `✗ Failed: ${member.name}`,
      );

      console.error(error);
    }
  }

  console.log("");
  console.log(
    "Team member import completed.",
  );

  console.log(
    `Successful: ${successCount}`,
  );

  console.log(
    `Failed: ${failureCount}`,
  );

  console.log("");

  if (failureCount > 0) {
    process.exitCode = 1;
  }
}

await importTeamMembers();