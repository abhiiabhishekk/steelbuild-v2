
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
  useCdn: false,
  perspective: "published",
});

// Server-side client for authenticated requests.
// Never import this into a "use client" component.
export const serverClient = client.withConfig({
  token: process.env.SANITY_API_READ_TOKEN || undefined,
  useCdn: false,
  perspective: "published",
});