export const HERO_SLIDES_QUERY = `
  *[
    _type == "heroSlide" &&
    isActive == true
  ]
  | order(order asc) {
    _id,
    eyebrow,
    title,
    description,

    image {
      asset->{
        _id,
        url
      },
      alt
    },

    primaryButtonText,
    primaryButtonLink,

    secondaryButtonText,
    secondaryButtonLink,

    order,
    isActive
  }
`;