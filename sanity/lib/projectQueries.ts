import { defineQuery } from "next-sanity";

const PROJECT_IMAGE_FIELDS = `
  asset-> {
    _id,
    url,

    metadata {
      dimensions,
      lqip
    }
  },

  alt,
  caption,
  crop,
  hotspot
`;

const PROJECT_LIST_FIELDS = `
  "_id": _id,

  projectId,

  name,

  "slug": slug.current,

  clientName,

  category,

  "status": coalesce(
    status,
    "Completed"
  ),

  location,
  area,
  tonnage,

  shortDescription,

  "featured": coalesce(
    featured,
    false
  ),

  "active": coalesce(
    active,
    true
  ),

  displayOrder,

  publishedAt,

  coverImage {
    ${PROJECT_IMAGE_FIELDS}
  }
`;

export const PROJECTS_QUERY =
  defineQuery(`
    *[
      _type == "project" &&
      defined(slug.current) &&
      coalesce(active, true) == true
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        projectId asc
      ) {
      ${PROJECT_LIST_FIELDS}
    }
  `);

export const FEATURED_PROJECTS_QUERY =
  defineQuery(`
    *[
      _type == "project" &&
      defined(slug.current) &&
      coalesce(active, true) == true &&
      featured == true
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        projectId asc
      )[0...6] {
      ${PROJECT_LIST_FIELDS}
    }
  `);

export const PROJECT_SLUGS_QUERY =
  defineQuery(`
    *[
      _type == "project" &&
      defined(slug.current) &&
      coalesce(active, true) == true
    ] {
      "slug": slug.current
    }
  `);

export const PROJECT_BY_SLUG_QUERY =
  defineQuery(`
    *[
      _type == "project" &&
      slug.current == $slug &&
      coalesce(active, true) == true
    ][0] {
      ${PROJECT_LIST_FIELDS},

      completionDate,

      gallery[] {
        ${PROJECT_IMAGE_FIELDS}
      },

      description[] {
        ...,

        _type == "articleImage" => {
          ...,

          asset-> {
            _id,
            url,

            metadata {
              dimensions,
              lqip
            }
          }
        },

        _type == "articleTable" => {
          _key,
          _type,
          title,
          caption,

          columns[] {
            _key,
            _type,
            heading
          },

          rows[] {
            _key,
            _type,
            cells
          }
        },

        _type == "articleCallout" => {
          ...,

          content[] {
            ...
          }
        },

        _type == "articleCta" => {
          ...
        }
      },

      "projectHighlights": coalesce(
        projectHighlights,
        []
      ),

      "scopeOfWork": coalesce(
        scopeOfWork,
        []
      ),

      seoTitle,
      seoDescription,

      "seoKeywords": coalesce(
        seoKeywords,
        []
      ),

      ogImage {
        ${PROJECT_IMAGE_FIELDS}
      },

      "updatedAt": _updatedAt
    }
  `);

export const RELATED_PROJECTS_QUERY =
  defineQuery(`
    *[
      _type == "project" &&
      defined(slug.current) &&
      slug.current != $slug &&
      category == $category &&
      coalesce(active, true) == true
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        projectId asc
      )[0...3] {
      ${PROJECT_LIST_FIELDS}
    }
  `);

export const FALLBACK_PROJECTS_QUERY =
  defineQuery(`
    *[
      _type == "project" &&
      defined(slug.current) &&
      slug.current != $slug &&
      category != $category &&
      coalesce(active, true) == true
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        projectId asc
      )[0...3] {
      ${PROJECT_LIST_FIELDS}
    }
  `);

export const PROJECT_NAVIGATION_QUERY =
  defineQuery(`
    {
      "previous": *[
        _type == "project" &&
        defined(slug.current) &&
        coalesce(active, true) == true &&
        coalesce(displayOrder, 9999) <
          $displayOrder
      ]
      | order(
          coalesce(displayOrder, 9999) desc
        )[0] {
        ${PROJECT_LIST_FIELDS}
      },

      "next": *[
        _type == "project" &&
        defined(slug.current) &&
        coalesce(active, true) == true &&
        coalesce(displayOrder, 9999) >
          $displayOrder
      ]
      | order(
          coalesce(displayOrder, 9999) asc
        )[0] {
        ${PROJECT_LIST_FIELDS}
      }
    }
  `);

export const PROJECT_CATEGORIES_QUERY =
  defineQuery(`
    array::unique(
      *[
        _type == "project" &&
        defined(category) &&
        coalesce(active, true) == true
      ].category
    )
  `);

  export const PROJECT_NEWSLETTER_QUERY =
  defineQuery(`
    *[
      _type == "project" &&
      _id == $projectId &&
      defined(slug.current) &&
      coalesce(active, true) == true
    ][0] {
      _id,

      projectId,

      name,

      "slug": slug.current,

      clientName,

      category,

      "status": coalesce(
        status,
        "Completed"
      ),

      location,
      area,
      tonnage,

      shortDescription,

      newsletterTitle,
      newsletterSummary,

      "sendNewsletterNotification":
        coalesce(
          sendNewsletterNotification,
          false
        ),

      "newsletterNotificationSent":
        coalesce(
          newsletterNotificationSent,
          false
        ),

      newsletterNotificationSentAt,

      coverImage {
        ${PROJECT_IMAGE_FIELDS}
      }
    }
  `);