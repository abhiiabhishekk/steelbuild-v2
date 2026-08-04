import {
  defineQuery,
} from "next-sanity";

const LEADERSHIP_IMAGE_FIELDS = `
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

const LEADERSHIP_FIELDS = `
  "_id": _id,

  leaderId,

  name,

  "slug": slug.current,

  designation,

  shortDescription,

  "strengths": coalesce(
    strengths,
    []
  ),

  profileImage {
    ${LEADERSHIP_IMAGE_FIELDS}
  },

  "imagePosition": coalesce(
    imagePosition,
    "50% 28%"
  ),

  messageEyebrow,
  quote,

  "message": coalesce(
    message,
    []
  ),

  signatureName,

  linkedin,

  "active": coalesce(
    active,
    true
  ),

  "displayOrder": coalesce(
    displayOrder,
    9999
  ),

  publishedAt,

  "updatedAt": _updatedAt
`;

export const LEADERSHIP_MEMBERS_QUERY =
  defineQuery(`
    *[
      _type == "leadershipMember" &&
      defined(slug.current) &&
      coalesce(active, true) == true
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        name asc
      ) {
      ${LEADERSHIP_FIELDS}
    }
  `);