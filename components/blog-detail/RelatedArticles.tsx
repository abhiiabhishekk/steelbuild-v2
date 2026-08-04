import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import Container from "@/components/layout/Container";
import type { SanityBlogListItem } from "@/types/sanityBlog";

type RelatedArticlesProps = {
  articles?: SanityBlogListItem[];
};

const formatDate = (date?: string) => {
  if (!date) {
    return "Date not available";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date not available";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
};

export default function RelatedArticles({
  articles = [],
}: RelatedArticlesProps) {
  const visibleArticles = articles.slice(0, 3);

  if (visibleArticles.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            Related Articles
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[56px]">
            Continue Exploring Steelbuild Insights
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Explore more articles covering Pre-Engineered Buildings,
            industrial construction, engineering and building systems.
          </p>
        </div>

        {/* Cards */}

        <div className="relative z-10 mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleArticles.map((blog) => {
            const imageUrl = blog.thumbnail?.asset?.url;
            const category =
              blog.category || "Steel Buildings";

            return (
              <article
                key={blog._id}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_32px_85px_rgba(27,63,104,0.14)]"
              >
                <Link
                  href={`/blog/${blog.slug}`}
                  className="relative block aspect-[1110/594] overflow-hidden bg-primary-blue"
                  aria-label={`Read ${blog.title}`}
                >
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={
                        blog.thumbnail?.alt?.trim() ||
                        blog.title
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-[#244f7f] to-primary-red/80" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06172c]/65 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#071a31]/45 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
                    {category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-gray-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays
                        size={15}
                        className="text-primary-red"
                      />
                      {formatDate(blog.publishedAt)}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <Clock3
                        size={15}
                        className="text-primary-red"
                      />
                      {blog.readingTime ||
                        "Estimated reading time"}
                    </span>
                  </div>

                  <h3 className="mt-5 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="transition-colors duration-300 hover:text-primary-red"
                    >
                      {blog.title}
                    </Link>
                  </h3>

                  {blog.excerpt ? (
                    <p className="mt-4 line-clamp-3 text-sm font-medium leading-7 text-gray-600">
                      {blog.excerpt}
                    </p>
                  ) : null}

                  <div className="mt-auto pt-7">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="group/button inline-flex items-center gap-3 font-black !text-primary-red transition-colors duration-300 hover:!text-primary-blue"
                    >
                      Read Article

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="relative z-10 mt-12 flex justify-center">
          <Link
            href="/blog"
            className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red hover:bg-primary-red hover:!text-white"
          >
            Explore All Articles

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}