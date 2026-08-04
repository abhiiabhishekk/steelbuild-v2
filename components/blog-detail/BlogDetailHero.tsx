import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  Home,
  UserRound,
} from "lucide-react";

import Container from "@/components/layout/Container";
import type { SanityBlogDetail } from "@/types/sanityBlog";

type BlogDetailHeroProps = {
  blog: SanityBlogDetail;
};

export default function BlogDetailHero({
  blog,
}: BlogDetailHeroProps) {
  const formattedDate = blog.publishedAt
    ? new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(blog.publishedAt))
    : "Date not available";

  const authorName =
    blog.author?.name || "Steelbuild Editorial Team";

  const thumbnailUrl = blog.thumbnail?.asset?.url;

  const thumbnailAlt =
    blog.thumbnail?.alt?.trim() || blog.title;

  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-[440px] w-[440px] rounded-full bg-primary-red/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-primary-blue/[0.08] blur-3xl" />

      <Container>
        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="relative z-10 flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary-red"
          >
            <Home size={15} />
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <Link
            href="/blog"
            className="transition-colors hover:text-primary-red"
          >
            Blog
          </Link>

          <span className="text-gray-300">/</span>

          <span className="max-w-[320px] truncate font-black text-primary-blue">
            {blog.title}
          </span>
        </nav>

        {/* Back link */}

        <div className="relative z-10 mt-9">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-black text-primary-blue transition-colors hover:text-primary-red"
          >
            <ArrowLeft size={18} />
            Back to All Articles
          </Link>
        </div>

        {/* Article heading */}

        <div className="relative z-10 mx-auto mt-12 max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
            {blog.category || "Steel Buildings"}
          </span>

          <h1 className="mx-auto mt-7 max-w-6xl text-4xl font-black leading-[1.04] tracking-[-0.05em] text-primary-blue md:text-6xl lg:text-[72px]">
            {blog.title}
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-lg font-medium leading-9 text-gray-600">
            {blog.excerpt}
          </p>

          {/* Meta */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <div className="inline-flex items-center gap-2.5 text-sm font-bold text-gray-500">
              <UserRound
                size={18}
                className="text-primary-red"
              />

              {authorName}
            </div>

            <div className="inline-flex items-center gap-2.5 text-sm font-bold text-gray-500">
              <CalendarDays
                size={18}
                className="text-primary-red"
              />

              {formattedDate}
            </div>

            <div className="inline-flex items-center gap-2.5 text-sm font-bold text-gray-500">
              <Clock3
                size={18}
                className="text-primary-red"
              />

              {blog.readingTime}
            </div>
          </div>
        </div>

        {/* Featured image */}

        <div className="relative z-10 mt-14 overflow-hidden rounded-[38px] border border-gray-200 bg-primary-blue shadow-[0_38px_105px_rgba(27,63,104,0.18)]">
          <div className="relative aspect-[1110/594] w-full">
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt={thumbnailAlt}
                fill
                priority
                fetchPriority="high"
                quality={90}
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary-blue via-[#17395f] to-[#071a31]"
                aria-hidden="true"
              />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/15 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}