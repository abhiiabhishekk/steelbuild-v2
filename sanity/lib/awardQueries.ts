import {
  defineQuery,
} from "next-sanity";

const AWARD_IMAGE_FIELDS = `
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

const AWARD_FIELDS = `
  "_id": _id,

  awardId,

  title,

  "slug": slug.current,

  organization,
  eventName,

  awardDate,
  yearLabel,

  category,
  location,

  shortDescription,

  "highlights": coalesce(
    highlights,
    []
  ),

  mainImage {
    ${AWARD_IMAGE_FIELDS}
  },

  certificateImage {
    ${AWARD_IMAGE_FIELDS}
  },

  "gallery": coalesce(
    gallery[] {
      ${AWARD_IMAGE_FIELDS}
    },
    []
  ),

  "featured": coalesce(
    featured,
    true
  ),

  "active": coalesce(
    active,
    true
  ),

  displayOrder,
  publishedAt,

  "updatedAt": _updatedAt
`;

export const AWARDS_QUERY =
  defineQuery(`
    *[
      _type == "award" &&
      defined(slug.current) &&
      coalesce(active, true) == true
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        awardDate desc
      ) {
      ${AWARD_FIELDS}
    }
  `);

export const FEATURED_AWARDS_QUERY =
  defineQuery(`
    *[
      _type == "award" &&
      defined(slug.current) &&
      coalesce(active, true) == true &&
      coalesce(featured, true) == true
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        awardDate desc
      ) {
      ${AWARD_FIELDS}
    }
  `);