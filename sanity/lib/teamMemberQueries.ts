import {
  defineQuery,
} from "next-sanity";

const TEAM_MEMBER_IMAGE_FIELDS = `
  "url": asset->url,

  "width":
    asset->metadata.dimensions.width,

  "height":
    asset->metadata.dimensions.height,

  "aspectRatio":
    asset->metadata.dimensions.aspectRatio,

  "lqip":
    asset->metadata.lqip,

  alt
`;

const TEAM_MEMBER_FIELDS = `
  "_id": _id,

  employeeId,

  name,

  "slug": slug.current,

  designation,
  department,

  profileImage {
    ${TEAM_MEMBER_IMAGE_FIELDS}
  },

  bio,
  experience,
  qualification,

  "skills": coalesce(
    skills,
    []
  ),

  email,
  linkedin,
  joiningDate,

  "departmentHead": coalesce(
    departmentHead,
    false
  ),

  "featured": coalesce(
    featured,
    false
  ),

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

export const TEAM_MEMBERS_QUERY =
  defineQuery(`
    *[
      _type == "teamMember" &&
      defined(slug.current) &&
      coalesce(active, true) == true
    ]
    | order(
        department asc,
        coalesce(departmentHead, false) desc,
        coalesce(featured, false) desc,
        coalesce(displayOrder, 9999) asc,
        name asc
      ) {
      ${TEAM_MEMBER_FIELDS}
    }
  `);

export const FEATURED_TEAM_MEMBERS_QUERY =
  defineQuery(`
    *[
      _type == "teamMember" &&
      defined(slug.current) &&
      coalesce(active, true) == true &&
      (
        coalesce(featured, false) == true ||
        coalesce(departmentHead, false) == true
      )
    ]
    | order(
        coalesce(departmentHead, false) desc,
        coalesce(displayOrder, 9999) asc,
        name asc
      ) {
      ${TEAM_MEMBER_FIELDS}
    }
  `);