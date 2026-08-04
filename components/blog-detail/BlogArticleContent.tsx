import Link from "next/link";
import {
  BadgeCheck,
  Quote,
  Tags,
} from "lucide-react";

import Container from "@/components/layout/Container";
import BlogShare from "@/components/blog-detail/BlogShare";
import BlogSidebar from "@/components/blog-detail/BlogSidebar";
import BlogTableOfContents from "@/components/blog-detail/BlogTableOfContents";
import PortableTextRenderer from "@/components/blog-detail/PortableTextRenderer";

import type { SanityBlogDetail } from "@/types/sanityBlog";

type BlogArticleContentProps = {
  blog: SanityBlogDetail;
};

export default function BlogArticleContent({
  blog,
}: BlogArticleContentProps) {
  const content = blog.content ?? [];
  const tags = blog.tags ?? [];

  const authorName =
    blog.author?.name || "Steelbuild Editorial Team";

  const authorDescription =
    blog.author?.bio ||
    "Steelbuild's knowledge resources are developed around practical experience in Pre-Engineered Building engineering, manufacturing and project execution.";

  const hasContent = content.length > 0;

  return (
    <section className="relative bg-[#f7f9fc] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        <div className="relative z-10 grid gap-8 lg:grid-cols-[72px_minmax(0,1fr)_320px] lg:items-start">
          {/* Share */}

          <BlogShare
            title={blog.title}
            slug={blog.slug}
          />

          {/* Article */}

          <article
            data-blog-article
            className="overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_24px_75px_rgba(27,63,104,0.09)]"
          >
            <div className="p-7 md:p-10 lg:p-12">
              {/* Introduction */}

              {blog.excerpt ? (
                <div className="rounded-[26px] border border-primary-red/15 bg-primary-red/[0.035] p-6 md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                      <Quote size={22} />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                        Article Overview
                      </p>

                      <p className="mt-3 text-base font-bold leading-8 text-primary-blue md:text-lg">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Mobile and tablet Table of Contents */}

              <div className="mt-6 lg:hidden">
                <BlogTableOfContents
                  content={content}
                  mobileAccordion
                />
              </div>

              {/* Actual article content */}

              {hasContent ? (
                <div className="blog-content mt-10">
                  <PortableTextRenderer value={content} />
                </div>
              ) : (
                <div className="mt-10 rounded-[26px] border border-dashed border-gray-300 bg-[#f8fafc] p-8 text-center">
                  <BadgeCheck
                    size={34}
                    className="mx-auto text-primary-red"
                  />

                  <h2 className="mt-5 text-2xl font-black text-primary-blue">
                    Article Content Coming Soon
                  </h2>

                  <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-gray-600">
                    This article has been created in the content
                    management system, but its main content has not yet
                    been published.
                  </p>
                </div>
              )}

              {/* Tags */}

              {tags.length > 0 ? (
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <div className="flex items-center gap-3">
                    <Tags
                      size={21}
                      className="text-primary-red"
                    />

                    <h2 className="text-lg font-black text-primary-blue">
                      Related Topics
                    </h2>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {tags.slice(0, 15).map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?search=${encodeURIComponent(
                          tag,
                        )}`}
                        className="rounded-full border border-primary-blue/10 bg-primary-blue/[0.035] px-4 py-2 text-xs font-black !text-primary-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-red hover:bg-primary-red hover:!text-white"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Author */}

              <div className="mt-10 rounded-[28px] bg-primary-blue p-7 md:p-8">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
                  Written By
                </p>

                <h2 className="mt-3 text-2xl font-black text-white">
                  {authorName}
                </h2>

                {blog.author?.designation ? (
                  <p className="mt-2 text-sm font-bold text-primary-red">
                    {blog.author.designation}
                  </p>
                ) : null}

                <p className="mt-4 text-sm font-medium leading-7 text-white/70">
                  {authorDescription}
                </p>
              </div>
            </div>
          </article>

          {/* Mobile and tablet sidebar cards */}

          <div className="mt-8 lg:hidden">
            <BlogSidebar blog={blog} />
          </div>

          {/* Desktop sidebar */}

          <div className="hidden space-y-6 lg:sticky lg:top-28 lg:block">
            <BlogTableOfContents content={content} />
            <BlogSidebar blog={blog} />
          </div>
        </div>
      </Container>
    </section>
  );
}