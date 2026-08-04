import { Suspense } from "react";

import BlogHero from "@/components/blog-page/BlogHero";
import BlogGrid from "@/components/blog-page/BlogGrid";

import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOGS_QUERY } from "@/sanity/lib/queries";

import type { SanityBlogListItem } from "@/types/sanityBlog";

async function SanityBlogGrid() {
  const blogs = await sanityFetch<SanityBlogListItem[]>({
    query: BLOGS_QUERY,
    revalidate: 0,
  });

  return <BlogGrid blogs={blogs} />;
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />

      <Suspense
        fallback={
          <section className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="h-[420px] animate-pulse rounded-[30px] bg-gray-100" />
            </div>
          </section>
        }
      >
        <SanityBlogGrid />
      </Suspense>
    </>
  );
}