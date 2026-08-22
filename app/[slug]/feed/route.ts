import { NextRequest, NextResponse } from "next/server";

import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOG_BY_SLUG_QUERY } from "@/sanity/lib/queries";

import type { SanityBlogDetail } from "@/types/sanityBlog";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

async function getBlogBySlug(
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

export async function GET(
  request: NextRequest,
  { params }: RouteContext,
) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  /*
   * Old WordPress article feed:
   *
   * /article-slug/feed/
   *
   * If the same article exists in Sanity,
   * redirect to the current canonical article:
   *
   * /blog/article-slug
   */

  if (blog?.slug) {
    const destinationUrl = new URL(
      `/blog/${blog.slug}`,
      request.nextUrl.origin,
    );

    const status =
      process.env.NODE_ENV === "production"
        ? 308
        : 307;

    return NextResponse.redirect(
      destinationUrl,
      status,
    );
  }

  /*
   * Unknown old feed URL.
   * No relevant replacement exists.
   */

  return new NextResponse(null, {
    status: 404,
    headers: {
      "X-Robots-Tag": "noindex, follow",
    },
  });
}