import type { NextConfig } from "next";

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
    return [
      /* =====================================================
         OLD WORDPRESS COMPANY / STATIC PAGE REDIRECTS
      ===================================================== */

      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },

      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },

      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },

      {
        source: "/contact-us/",
        destination: "/contact",
        permanent: true,
      },

      {
        source: "/team-members",
        destination: "/about/team",
        permanent: true,
      },

      {
        source: "/team-members/",
        destination: "/about/team",
        permanent: true,
      },

      {
        source: "/deepak-singh",
        destination: "/about/team",
        permanent: true,
      },

      {
        source: "/deepak-singh/",
        destination: "/about/team",
        permanent: true,
      },

      {
        source: "/home-3",
        destination: "/",
        permanent: true,
      },

      {
        source: "/home-3/",
        destination: "/",
        permanent: true,
      },

      /* =====================================================
         OLD PRODUCT / FACILITY PAGE REDIRECTS
      ===================================================== */

      {
        source: "/deck-sheet",
        destination: "/products/roofing-systems/deck-sheets",
        permanent: true,
      },

      {
        source: "/deck-sheet/",
        destination: "/products/roofing-systems/deck-sheets",
        permanent: true,
      },

      {
        source: "/plant-facility",
        destination: "/manufacturing",
        permanent: true,
      },

      {
        source: "/plant-facility/",
        destination: "/manufacturing",
        permanent: true,
      },

      /* =====================================================
         OLD WORDPRESS BLOG REDIRECTS
      ===================================================== */

      {
        source: "/best-peb-company-in-delhi-ncr",
        destination: "/blog/best-peb-company-in-delhi-ncr",
        permanent: true,
      },

      {
        source: "/best-peb-company-in-delhi-ncr/",
        destination: "/blog/best-peb-company-in-delhi-ncr",
        permanent: true,
      },

      /* =====================================================
         MALFORMED / TRUNCATED OLD GOOGLE URL
      ===================================================== */

      {
        source:
          "/top-10-peb-companies-in-india-leading-the-way-in-p",
        destination:
          "/blog/top-peb-companies-in-india-2026",
        permanent: true,
      },

      {
        source:
          "/top-10-peb-companies-in-india-leading-the-way-in-p/",
        destination:
          "/blog/top-peb-companies-in-india-2026",
        permanent: true,
      },

      /* =====================================================
         OLD WORDPRESS AUTHOR ARCHIVE REDIRECTS
      ===================================================== */

      {
        source: "/author/steelbuild",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/author/steelbuild/",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/author/steelbuild/page/:page",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/author/steelbuild/page/:page/",
        destination: "/blog",
        permanent: true,
      },

      /* =====================================================
         OLD WORDPRESS BLOG PAGINATION REDIRECTS
      ===================================================== */

      {
        source: "/blog/page/:page",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/blog/page/:page/",
        destination: "/blog",
        permanent: true,
      },

      /* =====================================================
         OLD WORDPRESS CATEGORY REDIRECTS
      ===================================================== */

      {
        source: "/category/pre-engineered-buildings",
        destination: "/products/pre-engineered-buildings",
        permanent: true,
      },

      {
        source: "/category/pre-engineered-buildings/",
        destination: "/products/pre-engineered-buildings",
        permanent: true,
      },

      {
        source: "/category/roofing",
        destination: "/products/roofing-systems",
        permanent: true,
      },

      {
        source: "/category/roofing/",
        destination: "/products/roofing-systems",
        permanent: true,
      },

      {
        source: "/category/cladding",
        destination: "/products/cladding-systems",
        permanent: true,
      },

      {
        source: "/category/cladding/",
        destination: "/products/cladding-systems",
        permanent: true,
      },

      /* =====================================================
         OLD WORDPRESS CATEGORY PAGINATION REDIRECTS
      ===================================================== */

      {
        source: "/category/pre-engineered-buildings/page/:page",
        destination: "/products/pre-engineered-buildings",
        permanent: true,
      },

      {
        source: "/category/pre-engineered-buildings/page/:page/",
        destination: "/products/pre-engineered-buildings",
        permanent: true,
      },

      {
        source: "/category/roofing/page/:page",
        destination: "/products/roofing-systems",
        permanent: true,
      },

      {
        source: "/category/roofing/page/:page/",
        destination: "/products/roofing-systems",
        permanent: true,
      },

      {
        source: "/category/cladding/page/:page",
        destination: "/products/cladding-systems",
        permanent: true,
      },

      {
        source: "/category/cladding/page/:page/",
        destination: "/products/cladding-systems",
        permanent: true,
      },

      /* =====================================================
         OLD WORDPRESS CATEGORY FEED REDIRECTS
      ===================================================== */

      {
        source: "/category/pre-engineered-buildings/feed",
        destination: "/products/pre-engineered-buildings",
        permanent: true,
      },

      {
        source: "/category/pre-engineered-buildings/feed/",
        destination: "/products/pre-engineered-buildings",
        permanent: true,
      },

      {
        source: "/category/roofing/feed",
        destination: "/products/roofing-systems",
        permanent: true,
      },

      {
        source: "/category/roofing/feed/",
        destination: "/products/roofing-systems",
        permanent: true,
      },

      {
        source: "/category/cladding/feed",
        destination: "/products/cladding-systems",
        permanent: true,
      },

      {
        source: "/category/cladding/feed/",
        destination: "/products/cladding-systems",
        permanent: true,
      },

      /* =====================================================
   OLD WORDPRESS BLOG URL REDIRECT
===================================================== */

{
  source: "/best-peb-company-in-delhi-ncr",
  destination: "/blog/best-peb-company-in-delhi-ncr",
  permanent: true,
},

{
  source: "/best-peb-company-in-delhi-ncr/",
  destination: "/blog/best-peb-company-in-delhi-ncr",
  permanent: true,
},

/* =====================================================
   OLD WORDPRESS BLOG URL — MODULAR STEEL BUILDINGS
===================================================== */

{
  source: "/modular-steel-buildings-revolutionizing-healthcare-infrastructure",
  destination:
    "/blog/modular-steel-buildings-revolutionizing-healthcare-infrastructure",
  permanent: true,
},

{
  source: "/modular-steel-buildings-revolutionizing-healthcare-infrastructure/",
  destination:
    "/blog/modular-steel-buildings-revolutionizing-healthcare-infrastructure",
  permanent: true,
},

{
  source: "/top-peb-companies-in-india-2026",
  destination: "/blog/top-peb-companies-in-india-2026",
  permanent: true,
},

{
  source: "/top-peb-companies-in-india-2026/",
  destination: "/blog/top-peb-companies-in-india-2026",
  permanent: true,
},

{
  source: "/future-of-pre-engineered-buildings",
  destination: "/blog/future-of-pre-engineered-buildings",
  permanent: true,
},

{
  source: "/future-of-pre-engineered-buildings/",
  destination: "/blog/future-of-pre-engineered-buildings",
  permanent: true,
},
    ];
  },
};

export default nextConfig;