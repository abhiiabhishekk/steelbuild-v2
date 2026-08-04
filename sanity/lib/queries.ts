import { defineQuery } from "next-sanity";

const BLOG_THUMBNAIL_FIELDS = `
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

const BLOG_LIST_FIELDS = `
  "_id": _id,
  "id": coalesce(blogId, _id),
  "slug": slug.current,
  title,

  "excerpt": coalesce(
    excerpt,
    shortDescription,
    ""
  ),

  "category": category->title,
  "author": author->name,

  publishedAt,

  "readingTime": select(
    defined(readingTime) =>
      string(readingTime) + " min read",
    "1 min read"
  ),

  featured,

  "tags": coalesce(tags, []),

  "thumbnail": coalesce(
    thumbnail,
    mainImage
  ) {
    ${BLOG_THUMBNAIL_FIELDS}
  }
`;

export const BLOGS_QUERY = defineQuery(`
  *[
    _type == "blog" &&
    defined(slug.current)
  ]
  | order(publishedAt desc) {
    ${BLOG_LIST_FIELDS},

    "seoTitle": coalesce(
      seo.title,
      seoTitle,
      title
    ),

    "seoDescription": coalesce(
      seo.description,
      seoDescription,
      excerpt,
      shortDescription,
      ""
    ),

    "seoKeywords": coalesce(
      seo.keywords,
      seoKeywords,
      []
    )
  }
`);

export const FEATURED_BLOGS_QUERY = defineQuery(`
  *[
    _type == "blog" &&
    defined(slug.current) &&
    featured == true
  ]
  | order(publishedAt desc)[0...6] {
    ${BLOG_LIST_FIELDS}
  }
`);

export const BLOG_SLUGS_QUERY = defineQuery(`
  *[
    _type == "blog" &&
    defined(slug.current)
  ] {
    "slug": slug.current
  }
`);

export const BLOG_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "blog" &&
    slug.current == $slug
  ][0] {
    "_id": _id,
    "id": coalesce(blogId, _id),
    "slug": slug.current,

    title,

    "excerpt": coalesce(
      excerpt,
      shortDescription,
      ""
    ),

    "category": category->title,
    "categoryId": category->_id,
    "categorySlug": category->slug.current,

    "author": author-> {
      _id,
      name,
      "slug": slug.current,
      designation,
      bio,

      image {
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
      }
    },

    publishedAt,

    "updatedAt": _updatedAt,

    "readingTime": select(
      defined(readingTime) =>
        string(readingTime) + " min read",
      "1 min read"
    ),

    featured,

    "tags": coalesce(tags, []),

    "thumbnail": coalesce(
      thumbnail,
      mainImage
    ) {
      ${BLOG_THUMBNAIL_FIELDS}
    },

    content[] {
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
      },

      _type == "faq" => {
        ...,

        items[] {
          ...,

          answer[] {
            ...
          }
        }
      }
    },

    faqs[] {
      _key,
      question,

      answer[] {
        ...
      }
    },

    "seoTitle": coalesce(
      seo.title,
      seoTitle,
      title
    ),

    "seoDescription": coalesce(
      seo.description,
      seoDescription,
      excerpt,
      shortDescription,
      ""
    ),

    "seoKeywords": coalesce(
      seo.keywords,
      seoKeywords,
      []
    )
  }
`);

export const BLOG_NAVIGATION_QUERY = defineQuery(`
  {
    "previous": *[
      _type == "blog" &&
      defined(slug.current) &&
      publishedAt < $publishedAt
    ]
    | order(publishedAt desc)[0] {
      ${BLOG_LIST_FIELDS}
    },

    "next": *[
      _type == "blog" &&
      defined(slug.current) &&
      publishedAt > $publishedAt
    ]
    | order(publishedAt asc)[0] {
      ${BLOG_LIST_FIELDS}
    }
  }
`);

export const RELATED_BLOGS_QUERY = defineQuery(`
  *[
    _type == "blog" &&
    defined(slug.current) &&
    slug.current != $slug &&
    category._ref == $categoryId
  ]
  | order(publishedAt desc)[0...3] {
    ${BLOG_LIST_FIELDS}
  }
`);

export const FALLBACK_RELATED_BLOGS_QUERY =
  defineQuery(`
    *[
      _type == "blog" &&
      defined(slug.current) &&
      slug.current != $slug &&
      category._ref != $categoryId
    ]
    | order(publishedAt desc)[0...3] {
      ${BLOG_LIST_FIELDS}
    }
  `);

export const CATEGORIES_QUERY = defineQuery(`
  *[
    _type == "category"
  ]
  | order(title asc) {
    _id,
    title,

    "slug": slug.current,

    description,
    active,

    "blogCount": count(
      *[
        _type == "blog" &&
        references(^._id)
      ]
    )
  }
`);

export const AUTHORS_QUERY = defineQuery(`
  *[
    _type == "author"
  ]
  | order(name asc) {
    _id,
    name,

    "slug": slug.current,

    designation,
    bio,

    image {
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
    }
  }
`);