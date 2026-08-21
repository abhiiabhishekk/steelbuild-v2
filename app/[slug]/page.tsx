import { notFound, permanentRedirect } from "next/navigation";

import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOG_BY_SLUG_QUERY } from "@/sanity/lib/queries";

import type { SanityBlogDetail } from "@/types/sanityBlog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getLegacyBlogBySlug(
  slug: string,
): Promise<SanityBlogDetail | null> {
  return sanityFetch({
    query: BLOG_BY_SLUG_QUERY,
    params: {
      slug,
    },
    revalidate: 0,
  }) as Promise<SanityBlogDetail | null>;
}

export default async function LegacyBlogRedirectPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = await getLegacyBlogBySlug(slug);

  if (blog?.slug) {
    permanentRedirect(`/blog/${blog.slug}`);
  }

  notFound();
}