import {
  defineQuery,
} from "next-sanity";

const EXHIBITION_IMAGE_FIELDS = `
  "_key": _key,

  "url": asset->url,

  "width":
    asset->metadata.dimensions.width,

  "height":
    asset->metadata.dimensions.height,

  "aspectRatio":
    asset->metadata.dimensions.aspectRatio,

  "lqip":
    asset->metadata.lqip,

  alt,
  caption
`;

const EXHIBITION_FIELDS = `
  "_id": _id,

  exhibitionId,

  title,

  "slug": slug.current,

  "status": coalesce(
    status,
    "completed"
  ),

  startDate,
  endDate,
  dateLabel,

  venue,
  city,
  state,
  country,

  hallNumber,
  stallNumber,

  shortDescription,

  "highlights": coalesce(
    highlights,
    []
  ),

  coverImage {
    ${EXHIBITION_IMAGE_FIELDS}
  },

  "gallery": coalesce(
    gallery[] {
      ${EXHIBITION_IMAGE_FIELDS}
    },
    []
  ),

  youtubeVideoId,
  eventWebsiteUrl,

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

  "updatedAt": _updatedAt
`;

export const EXHIBITIONS_QUERY =
  defineQuery(`
    *[
      _type == "exhibition" &&
      defined(slug.current) &&
      coalesce(active, true) == true
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        startDate desc
      ) {
      ${EXHIBITION_FIELDS}
    }
  `);

export const UPCOMING_EXHIBITIONS_QUERY =
  defineQuery(`
    *[
      _type == "exhibition" &&
      defined(slug.current) &&
      coalesce(active, true) == true &&
      status in [
        "upcoming",
        "ongoing"
      ]
    ]
    | order(
        startDate asc,
        coalesce(
          displayOrder,
          9999
        ) asc
      ) {
      ${EXHIBITION_FIELDS}
    }
  `);

export const COMPLETED_EXHIBITIONS_QUERY =
  defineQuery(`
    *[
      _type == "exhibition" &&
      defined(slug.current) &&
      coalesce(active, true) == true &&
      status == "completed"
    ]
    | order(
        startDate desc,
        coalesce(
          displayOrder,
          9999
        ) asc
      ) {
      ${EXHIBITION_FIELDS}
    }
  `);