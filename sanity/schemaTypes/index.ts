import type {
  SchemaTypeDefinition,
} from "sanity";

import { categoryType } from "./category";
import { authorType } from "./author";
import { articleTableType } from "./articleTable";
import { faqItemType } from "./faqItem";
import { articleCalloutType } from "./articleCallout";
import { articleCtaType } from "./articleCta";
import { blockContentType } from "./blockContent";
import { blogType } from "./blog";
import { projectType } from "./project";
import { jobOpeningType } from "./jobOpening";
import { exhibitionType } from "./exhibition";
import { awardType } from "./award";
import { teamMemberType } from "./teamMember";
import { leadershipMemberType } from "./leadershipMember";
import { heroSlide } from "./heroSlide";

export const schema: {
  types: SchemaTypeDefinition[];
} = {
  types: [
    categoryType,
    authorType,
    articleTableType,
    faqItemType,
    articleCalloutType,
    articleCtaType,
    blockContentType,
    blogType,
    projectType,
    jobOpeningType,
    exhibitionType,
    awardType,
    teamMemberType,
    leadershipMemberType,
    heroSlide,
  ],
};