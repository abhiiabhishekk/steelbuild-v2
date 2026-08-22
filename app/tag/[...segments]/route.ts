import { NextRequest, NextResponse } from "next/server";

/**
 * =========================================================
 * OLD WORDPRESS TAG MIGRATION
 * =========================================================
 *
 * Handles:
 *
 * /tag/example/
 * /tag/example
 * /tag/example/feed/
 *
 * Old WordPress tag URLs are permanently redirected
 * to the most relevant current Next.js / Sanity content.
 *
 * IMPORTANT:
 * - Relevant old tags → permanent 308 redirect
 * - Unknown/unrelated tags → real 404
 * - No random redirect to homepage/blog
 */

/* =========================================================
   CURRENT BLOG DESTINATIONS
========================================================= */

const DESTINATIONS = {
  /* -------------------------------------------------------
     TOP / BEST PEB COMPANIES
  ------------------------------------------------------- */

  topPebCompanies:
    "/blog/top-peb-companies-in-india-2026",

  /* -------------------------------------------------------
     FUTURE / INDUSTRY
  ------------------------------------------------------- */

  futurePeb:
    "/blog/future-of-pre-engineered-buildings",

  evolutionPeb:
    "/blog/the-evolution-of-pre-engineered-buildings-benefits-and-key-features",

  /* -------------------------------------------------------
     GENERAL PEB
  ------------------------------------------------------- */

  pebIntroduction:
    "/blog/pre-engineered-buildings-introduction-and-features",

  pebComponents:
    "/blog/pre-engineered-buildings-components-and-advantages",

  pebBenefits:
    "/blog/top-8-benefits-of-peb-buildings-for-your-business",

  pebUseCases:
    "/blog/top-7-use-cases-of-pre-engineered-buildings-peb-for-efficiency-and-sustainability",

  /* -------------------------------------------------------
     INDUSTRIAL / COMMERCIAL
  ------------------------------------------------------- */

  industrialSheds:
    "/blog/peb-industrial-sheds-why-is-it-the-backbone-of-modern-manufacturing",

  commercialPeb:
    "/blog/why-pre-engineered-commercial-buildings-are-a-smart-choice-for-modern-construction",

  prefabCommercialFuture:
    "/blog/future-trends-and-innovations-in-prefab-commercial-buildings",

  prefabFactory:
    "/blog/prefab-factory-vs-traditional-construction-a-cost-benefit-analysis-of-an-industrial-factory-building",

  modularHealthcare:
    "/blog/modular-steel-buildings-revolutionizing-healthcare-infrastructure",

  multiStorey:
    "/blog/top-benefits-of-prefab-multi-storey-buildings",

  /* -------------------------------------------------------
     ROOFING / CLADDING
  ------------------------------------------------------- */

  roofing:
    "/blog/steelbuild-roofing-sheets-comprehensive-overview",

  roofingSelection:
    "/blog/common-parameters-for-selecting-the-right-roofing-sheets",

  roofWinter:
    "/blog/how-to-prepare-your-roof-for-winter",

  deckSheet:
    "/blog/deck-sheets-know-when-to-replace-your-roof-deck",

  cladding:
    "/blog/steelbuild-cladding-sheets-transforming-modern-architecture-with-strength-and-style",

  standingSeam:
    "/blog/steelbuild-standing-seam-roofing-sheets-revolutionizing-modern-architecture",

  sheetingAccessories:
    "/blog/steelbuild-sheeting-accessories-enhancing-building-performance",

  /* -------------------------------------------------------
     INSULATION / PANELS
  ------------------------------------------------------- */

  insulation:
    "/blog/role-of-insulation-in-modern-infrastructure-a-comprehensive-guide",

  pufPanels:
    "/blog/top-5-reasons-to-choose-puf-sandwich-panels-for-your-industrial-building",

  rockwool:
    "/blog/how-can-you-soundproof-your-peb-or-prefab-with-rockwool-sandwich-panels",

  /* -------------------------------------------------------
     OTHER BLOG TOPICS
  ------------------------------------------------------- */

  metalLouvers:
    "/blog/everything-you-need-to-know-about-metal-louvers",

  industrialCoating:
    "/blog/industrial-coating-building-the-dream-project-with-care",

  projectManagement:
    "/blog/unleashing-excellence-in-construction-steelbuilds-project-management-consultancy",

  plantFacility:
    "/blog/revolutionizing-construction-with-steelbuild-infras-advanced-plant-facility",

  purlin:
    "/blog/purlin-or-structural-steel-which-is-better-for-your-shed-in-pre-engineered-buildings",

  monsoon:
    "/blog/making-structures-monsoon-ready-how-peb-buildings-outperform-traditional-indian-solutions",

  extremeWeather:
    "/blog/why-metal-buildings-withstand-extreme-weather-better",

  durablePeb:
    "/blog/durable-peb-buildings-prioritizing-design-from-inception",

  siteOffice:
    "/blog/the-time-and-cost-benefits-of-prefabricated-site-offices-in-peb",
} as const;

/* =========================================================
   TAG NORMALIZER
========================================================= */

function normalizeTagSlug(slug: string): string {
  return decodeURIComponent(slug)
    .trim()
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "")
    .replace(/_/g, "-");
}

/* =========================================================
   TAG → DESTINATION RESOLVER
========================================================= */

function resolveTagDestination(
  rawSlug: string,
): string | null {
  const tag = normalizeTagSlug(rawSlug);

  /* =======================================================
     0. LEGACY STEELBUILD-SPECIFIC WORDPRESS TAGS
     -------------------------------------------------------
     Old source slugs may contain "pvt-ltd" because they
     belonged to the previous WordPress website.
     We preserve them ONLY for matching old Google URLs.
     Destinations use current URLs / current branding.
  ======================================================= */

  if (
    tag ===
    "peb-vertical-services-steelbuild-infra-projects-pvt-ltd-is-providing-in-delhi-ncr"
  ) {
    return "/products/pre-engineered-buildings";
  }

  if (
    tag ===
    "steelbuild-infra-projects-pvt-ltd-leading-the-peb-revolution"
  ) {
    return DESTINATIONS.evolutionPeb;
  }

  /* =======================================================
     1. TOP / BEST PEB COMPANIES
  ======================================================= */

  if (
    tag.includes("top-peb") ||
    tag.includes("top-10-peb") ||
    tag.includes("10-top-peb") ||
    tag.includes("top-10-top-peb") ||
    tag.includes("top-10-pre-engineered") ||
    tag.includes("10-top-pre-engineered") ||
    tag.includes("best-peb-company") ||
    tag.includes("top-peb-company") ||
    tag.includes("indias-top-peb") ||
    tag.includes("peb-companies-2026") ||
    tag.includes("peb-companies-india") ||
    tag.includes("peb-companies-list") ||
    tag.includes("list-of-peb-companies") ||
    tag.includes("leading-peb-company") ||
    tag.includes("leading-peb-manufacturer") ||
    tag.includes("peb-company-in-delhi") ||
    tag.includes("peb-company-in-haryana") ||
    tag.includes("peb-company-in-ncr") ||
    tag.includes("peb-company-in-punjab") ||
    tag.includes("peb-company-in-rajasthan") ||
    tag.includes("peb-company-in-bihar") ||
    tag.includes("peb-company-in-mumbai") ||
    tag.includes("peb-company-in-noida") ||
    tag.includes("peb-company-in-gurgaon") ||
    tag.includes("peb-company-in-gurugram") ||
    tag.includes("peb-company-in-faridabad") ||
    tag.includes("peb-company-in-sonipat") ||
    tag.includes("top-construction-companies-india-steel") ||
    tag.includes("top-steel-building-manufacturers")
  ) {
    return DESTINATIONS.topPebCompanies;
  }

  /* =======================================================
     2. FUTURE OF PEB / CONSTRUCTION
  ======================================================= */

  if (
    tag.includes("future-of-pre-engineered") ||
    tag.includes("future-of-construction") ||
    tag.includes("future-building") ||
    tag.includes("steel-building-future") ||
    tag.includes("construction-industry-trends") ||
    tag.includes("construction-trends") ||
    tag.includes("peb-industry-trends") ||
    tag.includes("next-generation-construction") ||
    tag.includes("next-generation-buildings") ||
    tag.includes("smart-construction") ||
    tag.includes("construction-technology") ||
    tag.includes("building-innovation") ||
    tag.includes("infrastructure-growth") ||
    tag.includes("industrial-development-india") ||
    tag.includes("industrial-expansion-india") ||
    tag.includes("make-in-india-construction") ||
    tag.includes("steel-building-lifecycle") ||
    tag.includes("global-construction-trends")
  ) {
    return DESTINATIONS.futurePeb;
  }

  /* =======================================================
     3. EVOLUTION / HISTORY
  ======================================================= */

  if (
    tag.includes("evolution-of-pre-engineered") ||
    tag.includes("brief-history-of-pre-engineered") ||
    tag.includes("historical-perspective") ||
    tag.includes("genesis-and-growth")
  ) {
    return DESTINATIONS.evolutionPeb;
  }

  /* =======================================================
     4. STANDING SEAM
  ======================================================= */

  if (tag.includes("standing-seam")) {
    return DESTINATIONS.standingSeam;
  }

  /* =======================================================
     5. CLADDING
  ======================================================= */

  if (
    tag.includes("cladding-sheet") ||
    tag === "cladding" ||
    tag.includes("cladding-in-peb")
  ) {
    return DESTINATIONS.cladding;
  }

  /* =======================================================
     6. DECK SHEETS
  ======================================================= */

  if (
    tag.includes("deck-sheet") ||
    tag.includes("roof-deck") ||
    tag.includes("choosing-the-right-deck-sheets") ||
    tag.includes("signs-your-roof-deck")
  ) {
    return DESTINATIONS.deckSheet;
  }

  /* =======================================================
     7. ROOF PREPARATION
  ======================================================= */

  if (
    tag.includes("prepare-your-roof-for-winter") ||
    tag.includes("roof-preparation") ||
    tag.includes("essential-tips-to-prep-your-roof") ||
    tag.includes(
      "understanding-the-importance-of-roof-preparation",
    )
  ) {
    return DESTINATIONS.roofWinter;
  }

  /* =======================================================
     8. ROOFING SELECTION
  ======================================================= */

  if (
    tag.includes("common-parameters-for-selecting") ||
    tag.includes("selecting-the-right-roofing") ||
    tag.includes("material-type-the-foundation-of-roofing")
  ) {
    return DESTINATIONS.roofingSelection;
  }

  /* =======================================================
     9. GENERAL ROOFING
  ======================================================= */

  if (
    tag === "roofing-sheets" ||
    tag.includes("roofing-sheets-for-peb") ||
    tag.includes("roofing-sheets-for-pre-engineered") ||
    tag.includes("roofing-sheets-in-peb") ||
    tag.includes("roofing-sheets-in-pre-engineered")
  ) {
    return DESTINATIONS.roofing;
  }

  /* =======================================================
     10. SHEETING ACCESSORIES
  ======================================================= */

  if (
    tag.includes("sheeting-accessories") ||
    tag === "accessories" ||
    tag.includes("accessories-for-pre-engineered") ||
    tag.includes("accessories-in-pre-engineered") ||
    tag.includes("accessories-in-peb")
  ) {
    return DESTINATIONS.sheetingAccessories;
  }

  /* =======================================================
     11. ROCKWOOL
  ======================================================= */

  if (tag.includes("rockwool")) {
    return DESTINATIONS.rockwool;
  }

  /* =======================================================
     12. PUF PANELS
  ======================================================= */

  if (
    tag.includes("puf-sandwich") ||
    tag.includes("puf-panel")
  ) {
    return DESTINATIONS.pufPanels;
  }

  /* =======================================================
     13. INSULATION
  ======================================================= */

  if (
    tag.includes("insulation") ||
    tag === "insulations" ||
    tag.includes("energy-efficiency") ||
    tag.includes("energy-efficient-buildings")
  ) {
    return DESTINATIONS.insulation;
  }

  /* =======================================================
     14. METAL LOUVERS
  ======================================================= */

  if (
    tag.includes("metal-louver") ||
    tag.includes("metal-louvers")
  ) {
    return DESTINATIONS.metalLouvers;
  }

  /* =======================================================
     15. INDUSTRIAL COATING
  ======================================================= */

  if (tag.includes("industrial-coating")) {
    return DESTINATIONS.industrialCoating;
  }

  /* =======================================================
     16. PROJECT MANAGEMENT CONSULTANCY
  ======================================================= */

  if (tag.includes("project-management-consultancy")) {
    return DESTINATIONS.projectManagement;
  }

  /* =======================================================
     17. PLANT FACILITY
  ======================================================= */

  if (tag.includes("plant-facility")) {
    return DESTINATIONS.plantFacility;
  }

  /* =======================================================
     18. PURLIN / STRUCTURAL STEEL COMPARISON
  ======================================================= */

  if (tag.includes("purlin-or-structural-steel")) {
    return DESTINATIONS.purlin;
  }

  /* =======================================================
     19. MONSOON
  ======================================================= */

  if (
    tag.includes("monsoon-ready") ||
    tag.includes("making-structures-monsoon-ready")
  ) {
    return DESTINATIONS.monsoon;
  }

  /* =======================================================
     20. EXTREME WEATHER
  ======================================================= */

  if (
    tag.includes("extreme-weather") ||
    tag.includes("metal-buildings-withstand") ||
    tag.includes("metal-buildings-are-resilient")
  ) {
    return DESTINATIONS.extremeWeather;
  }

  /* =======================================================
     21. DURABLE PEB
  ======================================================= */

  if (
    tag.includes("durable-peb") ||
    tag.includes("secret-to-durable") ||
    tag.includes("prioritizing-design-from-inception")
  ) {
    return DESTINATIONS.durablePeb;
  }

  /* =======================================================
     22. MODULAR HEALTHCARE
  ======================================================= */

  if (
    tag.includes(
      "modular-steel-buildings-revolutionizing-healthcare",
    ) ||
    tag.includes("healthcare-infrastructure")
  ) {
    return DESTINATIONS.modularHealthcare;
  }

  /* =======================================================
     23. PREFAB FACTORY VS TRADITIONAL
  ======================================================= */

  if (
    tag.includes("prefab-factory-vs-traditional")
  ) {
    return DESTINATIONS.prefabFactory;
  }

  /* =======================================================
     24. PREFAB COMMERCIAL FUTURE
  ======================================================= */

  if (
    tag.includes(
      "future-trends-and-innovations-in-prefab-commercial",
    )
  ) {
    return DESTINATIONS.prefabCommercialFuture;
  }

  /* =======================================================
     25. COMMERCIAL PEB
  ======================================================= */

  if (
    tag.includes("pre-engineered-commercial") ||
    tag.includes("retail-commercial-building") ||
    tag.includes("commercial-building-construction")
  ) {
    return DESTINATIONS.commercialPeb;
  }

  /* =======================================================
     26. MULTI STOREY
  ======================================================= */

  if (
    tag.includes("multi-storey") ||
    tag.includes("multi-story")
  ) {
    return DESTINATIONS.multiStorey;
  }

  /* =======================================================
     27. INDUSTRIAL SHEDS
  ======================================================= */

  if (
    tag.includes("industrial-shed") ||
    tag.includes("peb-industrial-sheds") ||
    tag.includes("industrial-peb")
  ) {
    return DESTINATIONS.industrialSheds;
  }

  /* =======================================================
     28. PEB APPLICATIONS / USE CASES
  ======================================================= */

  if (
    tag.includes("top-7-use-cases") ||
    tag.includes("peb-building-applications") ||
    tag.includes("applications-of-pre-engineered")
  ) {
    return DESTINATIONS.pebUseCases;
  }

  /* =======================================================
     29. PEB BENEFITS
  ======================================================= */

  if (
    tag.includes("advantages-of-peb") ||
    tag.includes("peb-building-advantages") ||
    tag.includes("benefits-of-peb") ||
    tag.includes("steel-building-benefits") ||
    tag.includes("cost-effectiveness") ||
    tag.includes("cost-effective-construction") ||
    tag.includes("customization-and-flexibility") ||
    tag.includes("durability-and-strength")
  ) {
    return DESTINATIONS.pebBenefits;
  }

  /* =======================================================
     30. SITE OFFICE
  ======================================================= */

  if (
    tag.includes("prefab-site-office") ||
    tag.includes("prefabricated-site-office") ||
    tag.includes("offices-in-peb")
  ) {
    return DESTINATIONS.siteOffice;
  }

  /* =======================================================
     31. PEB COMPONENTS
  ======================================================= */

  if (
    tag.includes("components-and-advantages") ||
    tag.includes("components-of-pre-engineered")
  ) {
    return DESTINATIONS.pebComponents;
  }

  /* =======================================================
     32. GENERAL PEB / STEEL BUILDING
  ======================================================= */

  if (
    tag === "peb" ||
    tag === "peb-buildings" ||
    tag === "peb-india" ||
    tag === "peb-structure" ||
    tag === "pre-engineered-buildings" ||
    tag === "pre-engineered-building" ||
    tag.includes("pre-engineered-building-manufacturer") ||
    tag.includes("pre-engineered-building-structures") ||
    tag.includes("pre-engineering-building-manufacturer") ||
    tag.includes("peb-manufacturer") ||
    tag.includes("peb-construction-company") ||
    tag.includes("peb-construction-companies") ||
    tag.includes("peb-building-contractors") ||
    tag.includes("peb-building-solutions") ||
    tag.includes("peb-contractors") ||
    tag.includes("peb-suppliers") ||
    tag.includes("peb-turnkey") ||
    tag.includes("steel-building-companies") ||
    tag.includes("steel-building-contractors") ||
    tag.includes("steel-building-solutions") ||
    tag.includes("steel-building-systems") ||
    tag.includes("steel-structure") ||
    tag.includes("steel-construction") ||
    tag.includes("steel-infrastructure") ||
    tag.includes("prefabricated-buildings")
  ) {
    return DESTINATIONS.pebIntroduction;
  }

  /* =======================================================
     UNKNOWN / NO SAFE REPLACEMENT
  ======================================================= */

  return null;
}

/* =========================================================
   GET HANDLER
========================================================= */

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      segments: string[];
    }>;
  },
) {
  const { segments } = await params;

  /**
   * Examples:
   *
   * /tag/roofing-sheets/
   * segments = ["roofing-sheets"]
   *
   * /tag/roofing-sheets/feed/
   * segments = ["roofing-sheets", "feed"]
   */

  const slug = segments?.[0]?.trim();

  if (!slug) {
    return new NextResponse(null, {
      status: 404,
      headers: {
        "X-Robots-Tag": "noindex, follow",
      },
    });
  }

  const destination =
    resolveTagDestination(slug);

  /**
   * If no genuinely relevant replacement exists,
   * return a genuine 404.
   *
   * Do NOT redirect every unknown WordPress tag
   * to /blog or homepage.
   */

  if (!destination) {
    return new NextResponse(null, {
      status: 404,
      headers: {
        "X-Robots-Tag": "noindex, follow",
      },
    });
  }

  /**
   * Uses the current request origin.
   *
   * LOCAL:
   * http://localhost:3000/tag/...
   * →
   * http://localhost:3000/blog/...
   *
   * PRODUCTION:
   * https://steelbuildinfra.com/tag/...
   * →
   * https://steelbuildinfra.com/blog/...
   */

  const destinationUrl =
    new URL(
      destination,
      request.nextUrl.origin,
    );

  /**
   * Remove unnecessary query parameters from
   * old WordPress archive URLs.
   */

  destinationUrl.search = "";

  /**
   * 308 = permanent redirect.
   *
   * Appropriate for migration because
   * the old WordPress URL has permanently moved.
   */

  return NextResponse.redirect(
    destinationUrl,
    308,
  );
}