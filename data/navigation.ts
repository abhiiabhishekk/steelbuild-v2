export type PageStatus = "completed" | "pending";

export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
  status?: PageStatus;
};

export type NavigationGroup = {
  label: string;
  href?: string;
  status?: PageStatus;
  items?: NavigationLink[];
};

export type NavigationItem = {
  label: string;
  href: string;
  menuType?: "about" | "products" | "dropdown";
  groups?: NavigationGroup[];
  items?: NavigationLink[];
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },

  /*
   * =========================================================
   * ABOUT
   * =========================================================
   */

  {
    label: "About",
    href: "/about",
    menuType: "about",
    groups: [
      {
        label: "Company",
        items: [
          {
            label: "Company Overview",
            href: "/about",
            description:
              "Discover Steelbuild, our capabilities and industrial expertise.",
            status: "completed",
          },
          {
            label: "Our Journey",
            href: "/about#our-journey",
            description:
              "Explore the milestones behind Steelbuild's growth.",
            status: "completed",
          },
          {
            label: "Vision, Mission & Values",
            href: "/about/vision-mission-values",
            description:
              "Learn about the principles guiding our organization.",
            status: "completed",
          },
        ],
      },
      {
        label: "Leadership & People",
        items: [
          {
            label: "Leadership",
            href: "/about/leadership",
            description:
              "Meet the leadership guiding Steelbuild's growth.",
            status: "completed",
          },
          {
            label: "Team Members",
            href: "/about/team",
            description:
              "Meet the professionals behind our project delivery.",
            status: "completed",
          },
        ],
      },
      {
        label: "Trust & Responsibility",
        items: [
          {
            label: "Quality & Certifications",
            href: "/about/quality-certifications",
            description:
              "Explore our quality systems and certifications.",
            status: "completed",
          },
          {
            label: "Awards & Recognition",
            href: "/about/awards-recognition",
            description:
              "View our achievements and industry recognition.",
            status: "completed",
          },
          {
            label: "CSR & Sustainability",
            href: "/about/csr-sustainability",
            description:
              "Learn about our environmental and social initiatives.",
            status: "completed",
          },
        ],
      },
      {
        label: "Resources & Events",
        items: [
          {
            label: "Exhibitions",
            href: "/about/exhibitions",
            description:
              "Explore our participation in exhibitions and industry events.",
            status: "completed",
          },
          {
            label: "Company Brochure",
            href: "/about/company-brochure",
            description:
              "View and download the Steelbuild corporate brochure.",
            status: "completed",
          },
          {
            label: "Corporate Profile",
            href: "/steelbuild-corporate-profile",
            description:
              "View and download the Steelbuild corporate brochure and watch coporate video.",
            status: "completed",
          },
        ],
      },
    ],
  },

  /*
   * =========================================================
   * PRODUCTS
   * =========================================================
   */

  {
    label: "Products",
    href: "/products",
    menuType: "products",
    groups: [
      {
        label: "Building Solutions",
        items: [
          {
            label: "Explore Products",
            href: "/products",
            status: "completed",
          },
          {
            label: "Pre-Engineered Buildings",
            href: "/products/pre-engineered-buildings",
            status: "completed",
          },
          {
            label: "Multi Storey Buildings",
            href: "/products/multi-storey-buildings",
            status: "completed",
          },
          {
            label: "Heavy Steel Structures",
            href: "/products/heavy-steel-structures",
            status: "completed",
          },
        ],
      },
      {
        label: "Building Applications",
        items: [
          {
            label: "Industrial Sheds",
            href: "/products/industrial-sheds",
            status: "completed",
          },
          {
            label: "Warehouse Buildings",
            href: "/products/warehouse-buildings",
            status: "completed",
          },
          {
            label: "Factory Buildings",
            href: "/products/factory-buildings",
            status: "completed",
          },
          {
            label: "Cold Storage Buildings",
            href: "/products/cold-storage-buildings",
            status: "completed",
          },
          {
            label: "Commercial Buildings",
            href: "/products/commercial-buildings",
            status: "completed",
          },
        ],
      },
      {
        label: "Mezzanine Systems",
        href: "/products/mezzanine-systems",
        status: "completed",
        items: [
          {
            label: "Structural Mezzanine",
            href: "/products/mezzanine-systems/structural-mezzanine",
            status: "completed",
          },
          {
            label: "Roof Platforms",
            href: "/products/mezzanine-systems/roof-platforms",
            status: "completed",
          },
          {
            label: "Industrial Staircases",
            href: "/products/mezzanine-systems/industrial-staircases",
            status: "completed",
          },
          {
            label: "Walkways & Catwalks",
            href: "/products/mezzanine-systems/walkways-catwalks",
            status: "completed",
          },
          {
            label: "Handrails & Guardrails",
            href: "/products/mezzanine-systems/handrails-guardrails",
            status: "completed",
          },
        ],
      },
      {
        label: "Roofing Systems",
        href: "/products/roofing-systems",
        status: "completed",
        items: [
          {
            label: "Standing Seam Roofing",
            href: "/products/roofing-systems/standing-seam-roofing",
            status: "completed",
          },
          {
            label: "Roofing Sheets",
            href: "/products/roofing-systems/roofing-sheets",
            status: "completed",
          },
          {
            label: "Deck Sheets",
            href: "/products/roofing-systems/deck-sheets",
            status: "completed",
          },
          {
            label: "Ridge Ventilators",
            href: "/products/roofing-systems/ridge-ventilators",
            status: "completed",
          },
          {
            label: "Turbo Ventilators",
            href: "/products/roofing-systems/turbo-ventilators",
            status: "completed",
          },
        ],
      },
      {
        label: "Cladding Systems",
        href: "/products/cladding-systems",
        status: "completed",
        items: [
          {
            label: "Wall Cladding",
            href: "/products/cladding-systems/wall-cladding",
            status: "completed",
          },
          {
            label: "Sandwich Panels",
            href: "/products/cladding-systems/sandwich-panels",
            status: "completed",
          },
          {
            label: "Insulation Systems",
            href: "/products/cladding-systems/insulation-systems",
            status: "completed",
          },
          {
            label: "Louvers",
            href: "/products/cladding-systems/louvers",
            status: "completed",
          },
          {
            label: "Polycarbonate Sheets",
            href: "/products/cladding-systems/polycarbonate-sheets",
            status: "completed",
          },
          {
            label: "Sheeting Accessories",
            href: "/products/cladding-systems/sheeting-accessories",
            status: "completed",
          },
        ],
      },
      // {
      //   label: "Components & Accessories",
      //   items: [
      //     {
      //       label: "Primary Structural Members",
      //       href: "/products/primary-structural-members",
      //       status: "pending",
      //     },
      //     {
      //       label: "Secondary Structural Members",
      //       href: "/products/secondary-structural-members",
      //       status: "pending",
      //     },
      //     {
      //       label: "Building Accessories",
      //       href: "/products/building-accessories",
      //       status: "pending",
      //     },
      //   ],
      // },
    ],
  },

  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
  },
  {
    label: "Blog",
    href: "/blog",
  },

  /*
   * =========================================================
   * CAREERS
   * =========================================================
   */

  {
    label: "Careers",
    href: "/careers",
    menuType: "dropdown",
    items: [
      {
        label: "Careers Overview",
        href: "/careers",
        description:
          "Explore careers and opportunities at Steelbuild.",
        status: "completed",
      },
      {
        label: "Open Positions",
        href: "/careers#open-positions",
        description:
          "View currently available opportunities.",
        status: "completed",
      },
      {
        label: "Life at Steelbuild",
        href: "/careers#life-at-steelbuild",
        description:
          "Discover our people, culture and workplace.",
        status: "completed",
      },
      {
        label: "Why Join Us",
        href: "/careers#why-join-us",
        description:
          "Learn why professionals choose Steelbuild.",
        status: "completed",
      },
      {
        label: "Apply Now",
        href: "/careers#submit-resume",
        description:
          "Submit your resume for available opportunities.",
        status: "completed",
      },
    ],
  },

  // {
  //   label: "Investors",
  //   href: "/investors",
  //   menuType: "dropdown",
  //   items: [
  //     {
  //       label: "Careers Overview",
  //       href: "/careers",
  //       description:
  //         "Explore careers and opportunities at Steelbuild.",
  //       status: "completed",
  //     },
  //     {
  //       label: "Open Positions",
  //       href: "/careers#open-positions",
  //       description:
  //         "View currently available opportunities.",
  //       status: "completed",
  //     },
  //     {
  //       label: "Life at Steelbuild",
  //       href: "/careers#life-at-steelbuild",
  //       description:
  //         "Discover our people, culture and workplace.",
  //       status: "completed",
  //     },
  //     {
  //       label: "Why Join Us",
  //       href: "/careers#why-join-us",
  //       description:
  //         "Learn why professionals choose Steelbuild.",
  //       status: "completed",
  //     },
  //     {
  //       label: "Apply Now",
  //       href: "/careers#submit-resume",
  //       description:
  //         "Submit your resume for available opportunities.",
  //       status: "completed",
  //     },
  //   ],
  // },

  {
    label: "Contact",
    href: "/contact",
  },
];