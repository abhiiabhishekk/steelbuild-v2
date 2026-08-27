import { createClient } from "next-sanity";

import {
  apiVersion,
  dataset,
  projectId,
} from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,

  /*
   * Public published website requests can use Sanity CDN.
   * This reduces direct API load and improves reliability.
   */
  useCdn: true,

  perspective: "published",
});