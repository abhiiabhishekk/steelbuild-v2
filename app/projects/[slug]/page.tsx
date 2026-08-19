import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  Building2,
  MapPin,
  Ruler,
  Weight,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ProjectGallery from "@/components/projects/ProjectGallery";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import ProjectBreadcrumb from "@/components/projects/ProjectBreadcrumb";
import JsonLd from "@/components/seo/JsonLd";

import { sanityFetch } from "@/sanity/lib/fetch";

import {
  FALLBACK_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  PROJECT_NAVIGATION_QUERY,
  PROJECT_SLUGS_QUERY,
  RELATED_PROJECTS_QUERY,
} from "@/sanity/lib/projectQueries";

import type {
  SanityProjectDetail,
  SanityProjectListItem,
  SanityProjectNavigation,
} from "@/types/sanityProject";

/* =========================================================
   TYPES
========================================================= */

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

type ProjectSlugItem = {
  slug: string;
};

/* =========================================================
   SITE CONFIG
========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

export const dynamicParams = true;

/* =========================================================
   PROJECT FETCHER
========================================================= */

const getProjectBySlug = async (
  slug: string,
): Promise<SanityProjectDetail | null> => {
  return sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,

    params: {
      slug,
    },

    revalidate: 0,
  }) as Promise<SanityProjectDetail | null>;
};

/* =========================================================
   ABSOLUTE IMAGE URL HELPER
========================================================= */

const getAbsoluteImageUrl = (
  imageUrl?: string,
): string | undefined => {
  if (!imageUrl) {
    return undefined;
  }

  if (
    imageUrl.startsWith("http://") ||
    imageUrl.startsWith("https://")
  ) {
    return imageUrl;
  }

  return `${siteUrl}${imageUrl}`;
};

/* =========================================================
   STATIC PROJECT PARAMS
========================================================= */

export async function generateStaticParams() {
  const projectSlugs = (await sanityFetch({
    query: PROJECT_SLUGS_QUERY,
    revalidate: 0,
  })) as ProjectSlugItem[];

  return projectSlugs.map((project) => ({
    slug: project.slug,
  }));
}

/* =========================================================
   DYNAMIC PROJECT SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project =
    await getProjectBySlug(slug);

  if (!project) {
    return {
      title: {
        absolute:
          "Project Not Found | Steelbuild Infra Projects",
      },

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath =
    `/projects/${project.slug}`;

  const canonicalUrl =
    `${siteUrl}${canonicalPath}`;

  const title =
    project.seoTitle ||
    `${project.name} | ${project.category} PEB Project in ${project.location}`;

  const description =
    project.seoDescription ||
    project.shortDescription ||
    `${project.name} is a ${project.status.toLowerCase()} ${project.category} Pre-Engineered Building project by Steelbuild Infra Projects Limited in ${project.location}. Area: ${project.area}. Tonnage: ${project.tonnage}.`;

  const socialImage =
    project.ogImage?.asset?.url ||
    project.coverImage?.asset?.url;

  const imageUrl =
    getAbsoluteImageUrl(
      socialImage,
    );

  const imageWidth =
    project.ogImage?.asset?.metadata
      ?.dimensions?.width ??
    project.coverImage?.asset?.metadata
      ?.dimensions?.width ??
    1200;

  const imageHeight =
    project.ogImage?.asset?.metadata
      ?.dimensions?.height ??
    project.coverImage?.asset?.metadata
      ?.dimensions?.height ??
    630;

  const imageAlt =
    project.ogImage?.alt?.trim() ||
    project.coverImage?.alt?.trim() ||
    `${project.name} project by Steelbuild Infra Projects Limited`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical:
        canonicalPath,
    },

    openGraph: {
      type: "article",

      locale: "en_IN",

      url:
        canonicalUrl,

      siteName:
        "Steelbuild Infra Projects Limited",

      title,

      description,

      publishedTime:
        project.publishedAt ||
        undefined,

      modifiedTime:
        project.updatedAt ||
        project.publishedAt ||
        undefined,

      images:
        imageUrl
          ? [
              {
                url:
                  imageUrl,

                width:
                  imageWidth,

                height:
                  imageHeight,

                alt:
                  imageAlt,
              },
            ]
          : undefined,
    },

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images:
        imageUrl
          ? [imageUrl]
          : undefined,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,

        "max-image-preview":
          "large",

        "max-snippet":
          -1,

        "max-video-preview":
          -1,
      },
    },
  };
}

/* =========================================================
   PROJECT DETAIL PAGE
========================================================= */

export default async function ProjectDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const project =
    await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  /* =======================================================
     PROJECT DISPLAY ORDER
  ======================================================= */

  const displayOrder =
    typeof project.displayOrder ===
    "number"
      ? project.displayOrder
      : Number(project.projectId) ||
        9999;

  /* =======================================================
     PARALLEL SANITY REQUESTS
  ======================================================= */

  const navigationPromise =
    sanityFetch({
      query:
        PROJECT_NAVIGATION_QUERY,

      params: {
        displayOrder,
      },

      revalidate: 0,
    });

  const relatedPromise =
    sanityFetch({
      query:
        RELATED_PROJECTS_QUERY,

      params: {
        slug:
          project.slug,

        category:
          project.category,
      },

      revalidate: 0,
    });

  const fallbackPromise =
    sanityFetch({
      query:
        FALLBACK_PROJECTS_QUERY,

      params: {
        slug:
          project.slug,

        category:
          project.category,
      },

      revalidate: 0,
    });

  const [
    navigationResult,
    relatedResult,
    fallbackResult,
  ] = await Promise.all([
    navigationPromise,
    relatedPromise,
    fallbackPromise,
  ]);

  const navigation =
    navigationResult as SanityProjectNavigation;

  const categoryRelated =
    relatedResult as SanityProjectListItem[];

  const fallbackRelated =
    fallbackResult as SanityProjectListItem[];

  /* =======================================================
     RELATED PROJECTS
  ======================================================= */

  const relatedProjects = [
    ...categoryRelated,

    ...fallbackRelated.filter(
      (fallbackProject) =>
        !categoryRelated.some(
          (relatedProject) =>
            relatedProject._id ===
            fallbackProject._id,
        ),
    ),
  ].slice(0, 3);

  /* =======================================================
     PROJECT GALLERY
  ======================================================= */

  const gallery =
    project.gallery?.length
      ? project.gallery
      : project.coverImage
        ? [project.coverImage]
        : [];

  const projectUrl =
    `${siteUrl}/projects/${project.slug}`;

  const galleryUrls =
    gallery
      .map((image) =>
        getAbsoluteImageUrl(
          image.asset?.url,
        ),
      )
      .filter(
        (
          imageUrl,
        ): imageUrl is string =>
          Boolean(imageUrl),
      );

  /* =======================================================
     PROJECT DESCRIPTION
  ======================================================= */

  const description =
    project.shortDescription ||
    `${project.name} is a ${project.status.toLowerCase()} ${project.category} Pre-Engineered Building project delivered by Steelbuild Infra Projects Limited in ${project.location}.`;

  /* =======================================================
     PROJECT SCHEMA
  ======================================================= */

  const projectSchema = {
    "@type":
      "CreativeWork",

    "@id":
      `${projectUrl}/#project`,

    url:
      projectUrl,

    name:
      project.name,

    headline:
      `${project.name} - ${project.category} Pre-Engineered Building Project`,

    description,

    image:
      galleryUrls.length > 0
        ? galleryUrls
        : undefined,

    datePublished:
      project.publishedAt ||
      undefined,

    dateModified:
      project.updatedAt ||
      project.publishedAt ||
      undefined,

    mainEntityOfPage: {
      "@id":
        `${projectUrl}/#webpage`,
    },

    contentLocation: {
      "@type":
        "Place",

      name:
        project.location,
    },

    about: [
      {
        "@type":
          "Thing",

        name:
          `${project.category} Pre-Engineered Building`,
      },

      {
        "@type":
          "Thing",

        name:
          "Pre-Engineered Building Project",
      },
    ],

    creator: {
      "@id":
        `${siteUrl}/#organization`,
    },

    provider: {
      "@id":
        `${siteUrl}/#organization`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type":
      "WebPage",

    "@id":
      `${projectUrl}/#webpage`,

    url:
      projectUrl,

    name:
      `${project.name} | Steelbuild Infra Projects Limited`,

    headline:
      `${project.name} - ${project.category} PEB Project`,

    description,

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${projectUrl}/#project`,
    },

    mainEntity: {
      "@id":
        `${projectUrl}/#project`,
    },

    breadcrumb: {
      "@id":
        `${projectUrl}/#breadcrumb`,
    },

    primaryImageOfPage:
      galleryUrls[0]
        ? {
            "@type":
              "ImageObject",

            url:
              galleryUrls[0],
          }
        : undefined,

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@type":
      "BreadcrumbList",

    "@id":
      `${projectUrl}/#breadcrumb`,

    itemListElement: [
      {
        "@type":
          "ListItem",

        position: 1,

        name:
          "Home",

        item:
          siteUrl,
      },

      {
        "@type":
          "ListItem",

        position: 2,

        name:
          "Projects",

        item:
          `${siteUrl}/projects`,
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name:
          project.name,

        item:
          projectUrl,
      },
    ],
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      webPageSchema,
      projectSchema,
      breadcrumbSchema,
    ],
  };

  return (
    <>
      {/* ===================================================
          SEO / GEO STRUCTURED DATA
      =================================================== */}

      <JsonLd
        data={structuredData}
      />

      {/* ===================================================
          PROJECT HERO
      =================================================== */}

      <section className="relative overflow-hidden bg-[#f7f9fc] pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.06),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.08),transparent_38%)]" />

        <Container>
          <div className="relative z-10">
            <ProjectBreadcrumb
              category={
                project.category
              }
              project={
                project.name
              }
            />

            {/* =============================================
                TOP INFORMATION
            ============================================= */}

            <div className="mb-12 flex flex-wrap items-center gap-5 md:gap-8">
              <Link
                href="/projects"
                className="inline-flex items-center font-black text-primary-blue transition-colors duration-300 hover:text-primary-red"
              >
                <ArrowLeft
                  size={18}
                  className="mr-2"
                />

                Back to Projects
              </Link>

              <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary-red">
                {
                  project.category
                }
              </span>

              <span
                className={`inline-flex rounded-full px-6 py-2 text-xs font-black uppercase tracking-[0.35em] ${
                  project.status ===
                  "Ongoing"
                    ? "bg-primary-red text-white"
                    : project.status ===
                        "Upcoming"
                      ? "bg-amber-500 text-white"
                      : "border border-gray-200 bg-white text-primary-blue"
                }`}
              >
                {
                  project.status
                }
              </span>
            </div>

            {/* =============================================
                PROJECT TITLE
            ============================================= */}

            <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-[-0.05em] text-primary-blue md:text-6xl lg:text-[76px]">
              {
                project.name
              }
            </h1>

            <p className="mt-7 max-w-3xl text-lg font-medium leading-9 text-gray-600">
              {
                description
              }
            </p>

            {/* =============================================
                PROJECT STATS
            ============================================= */}

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {/* Location */}

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <MapPin
                  className="text-primary-red"
                  size={26}
                />

                <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-gray-500">
                  Location
                </p>

                <p className="mt-2 text-xl font-black text-primary-blue">
                  {
                    project.location
                  }
                </p>
              </div>

              {/* Category */}

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <Building2
                  className="text-primary-red"
                  size={26}
                />

                <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-gray-500">
                  Category
                </p>

                <p className="mt-2 text-xl font-black text-primary-blue">
                  {
                    project.category
                  }
                </p>
              </div>

              {/* Area */}

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <Ruler
                  className="text-primary-red"
                  size={26}
                />

                <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-gray-500">
                  Area
                </p>

                <p className="mt-2 text-xl font-black text-primary-blue">
                  {
                    project.area
                  }
                </p>
              </div>

              {/* Tonnage */}

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <Weight
                  className="text-primary-red"
                  size={26}
                />

                <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-gray-500">
                  Tonnage
                </p>

                <p className="mt-2 text-xl font-black text-primary-blue">
                  {
                    project.tonnage
                  }
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===================================================
          PROJECT GALLERY / RELATED PROJECTS
      =================================================== */}

      <section className="bg-white py-20 lg:py-24">
        <Container>
          {gallery.length > 0 ? (
            <ProjectGallery
              images={
                gallery
              }
              title={
                project.name
              }
            />
          ) : (
            <div className="rounded-[32px] border border-dashed border-gray-300 bg-[#f7f9fc] p-10 text-center">
              <h2 className="text-2xl font-black text-primary-blue">
                Project Gallery
                Coming Soon
              </h2>

              <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                Images for this
                project have not
                yet been added to
                the content
                management system.
              </p>
            </div>
          )}

          <RelatedProjects
            projects={
              relatedProjects
            }
          />

          <ProjectNavigation
            previous={
              navigation.previous
            }
            next={
              navigation.next
            }
          />
        </Container>
      </section>
    </>
  );
}