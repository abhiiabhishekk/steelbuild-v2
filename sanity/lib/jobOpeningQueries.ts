import { defineQuery } from "next-sanity";

const JOB_OPENING_FIELDS = `
  "_id": _id,

  jobId,

  title,

  "slug": slug.current,

  department,
  location,
  employmentType,
  experience,
  description,

  "skills": coalesce(
    skills,
    []
  ),

  "responsibilities": coalesce(
    responsibilities,
    []
  ),

  qualification,

  "status": coalesce(
    status,
    "Open"
  ),

  "active": coalesce(
    active,
    true
  ),

  "featured": coalesce(
    featured,
    false
  ),

  displayOrder,
  postedAt,
  closingDate,

  "updatedAt": _updatedAt
`;

export const JOB_OPENINGS_QUERY =
  defineQuery(`
    *[
      _type == "jobOpening" &&
      defined(slug.current) &&
      coalesce(active, true) == true &&
      coalesce(status, "Open") == "Open" &&
      (
        !defined(closingDate) ||
        closingDate >= now()
      )
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        coalesce(postedAt, _createdAt) desc
      ) {
      ${JOB_OPENING_FIELDS}
    }
  `);

export const ALL_JOB_OPENINGS_QUERY =
  defineQuery(`
    *[
      _type == "jobOpening" &&
      defined(slug.current)
    ]
    | order(
        coalesce(displayOrder, 9999) asc,
        coalesce(postedAt, _createdAt) desc
      ) {
      ${JOB_OPENING_FIELDS}
    }
  `);

export const JOB_OPENING_BY_ID_QUERY =
  defineQuery(`
    *[
      _type == "jobOpening" &&
      _id == $jobDocumentId
    ][0] {
      ${JOB_OPENING_FIELDS}
    }
  `);