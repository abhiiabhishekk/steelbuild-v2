import type { NextConfig } from "next";

const oldBlogSlugs = [
  "top-10-peb-companies-in-india-2026",
  "future-of-pre-engineered-buildings",
  "the-time-and-cost-benefits-of-prefabricated-site-offices-in-peb",
  "modular-steel-buildings-revolutionizing-healthcare-infrastructure",
  "why-metal-buildings-withstand-extreme-weather-better",
  "top-benefits-of-prefab-multi-storey-buildings",
  "pre-engineered-buildings-components-and-advantages",
  "making-structures-monsoon-ready-how-peb-buildings-outperform-traditional-indian-solutions",
  "durable-peb-buildings-prioritizing-design-from-inception",
  "soundproof-your-peb-or-prefab-with-rockwool-sandwich-panels",
  "pre-engineered-building-systems",
  "industrial-coating-building-the-dream-project-with-care",
  "prefab-factory-vs-traditional-construction-a-cost-benefit-analysis-of-an-industrial-factory-building",
  "how-to-choose-the-right-peb-suppliers",
  "steelbuild-standing-seam-roofing-sheets-revolutionizing-modern-architecture",
  "steelbuild-cladding-sheets-transforming-modern-architecture",
  "top-5-reasons-to-choose-puf-sandwich-panels-for-your-industrial-building",
  "role-of-insulation-in-modern-infrastructure",
  "the-future-of-construction-peb",
  "everything-you-need-to-know-about-metal-louvers",
  "common-parameters-for-selecting-the-right-roofing-sheets",
  "how-to-prepare-your-roof-for-winter",
  "a-comprehensive-guide-to-accessories",
  "pre-engineered-buildings-introductions-and-features",
  "future-trends-and-innovations-in-prefab-commercial-buildings",
  "revolutionizing-construction-with-steelbuild-infras-advanced-plant-facility",
  "steelbuild-roofing-sheets-comprehensive-overview",
  "purlin-or-structural-steel-which-is-better-for-your-shed-in-pre-engineered-buildings",
  "top-8-benefits-of-peb-buildings-for-your-business",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
    qualities: [75, 85, 90],
  },

  async redirects() {
    return oldBlogSlugs.flatMap((slug) => [
      {
        source: `/${slug}`,
        destination: `/blog/${slug}`,
        permanent: true,
      },
      {
        source: `/${slug}/`,
        destination: `/blog/${slug}`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;