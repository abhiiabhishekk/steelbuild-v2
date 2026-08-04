import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

import Container from "@/components/layout/Container";
import type { SanityBlogListItem } from "@/types/sanityBlog";

type BlogNavigationProps = {
  previous?: SanityBlogListItem | null;
  next?: SanityBlogListItem | null;
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

const getImageUrl = (
  blog?: SanityBlogListItem | null,
): string | null => blog?.thumbnail?.asset?.url ?? null;

export default function BlogNavigation({
  previous,
  next,
}: BlogNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  const previousImage = getImageUrl(previous);
  const nextImage = getImageUrl(next);

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        <div className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-primary-red/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-primary-red">
              Continue Reading
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-primary-blue md:text-4xl">
              Explore Previous and Next Articles
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {previous ? (
              <Link
                href={`/blog/${previous.slug}`}
                className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.14)]"
              >
                <div className="grid h-full sm:grid-cols-[190px_1fr]">
                  <div className="relative min-h-[220px] overflow-hidden bg-primary-blue">
                    {previousImage ? (
                      <Image
                        src={previousImage}
                        alt={
                          previous.thumbnail?.alt?.trim() ||
                          previous.title
                        }
                        fill
                        sizes="(max-width: 640px) 100vw, 190px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-[#244f7f] to-primary-red/80" />
                    )}

                    <div className="absolute inset-0 bg-primary-blue/15 transition-colors duration-500 group-hover:bg-primary-blue/5" />
                  </div>

                  <div className="flex flex-col justify-center p-7">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary-red">
                      <ArrowLeft size={16} />
                      Previous Article
                    </div>

                    <h3 className="mt-4 line-clamp-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                      {previous.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-gray-500">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays
                          size={15}
                          className="text-primary-red"
                        />
                        {formatDate(previous.publishedAt)}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <Clock3
                          size={15}
                          className="text-primary-red"
                        />
                        {previous.readingTime ||
                          "Estimated reading time"}
                      </span>
                    </div>

                    <span className="mt-6 inline-flex items-center gap-2 font-black text-primary-red transition-colors group-hover:text-primary-blue">
                      Read Previous
                      <ArrowLeft
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.14)]"
              >
                <div className="grid h-full sm:grid-cols-[1fr_190px]">
                  <div className="flex flex-col justify-center p-7 sm:order-1">
                    <div className="flex items-center justify-end gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary-red">
                      Next Article
                      <ArrowRight size={16} />
                    </div>

                    <h3 className="mt-4 line-clamp-3 text-right text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                      {next.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap justify-end gap-x-5 gap-y-2 text-xs font-bold text-gray-500">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays
                          size={15}
                          className="text-primary-red"
                        />
                        {formatDate(next.publishedAt)}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <Clock3
                          size={15}
                          className="text-primary-red"
                        />
                        {next.readingTime ||
                          "Estimated reading time"}
                      </span>
                    </div>

                    <span className="mt-6 inline-flex items-center justify-end gap-2 font-black text-primary-red transition-colors group-hover:text-primary-blue">
                      Read Next
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>

                  <div className="relative min-h-[220px] overflow-hidden bg-primary-blue sm:order-2">
                    {nextImage ? (
                      <Image
                        src={nextImage}
                        alt={
                          next.thumbnail?.alt?.trim() ||
                          next.title
                        }
                        fill
                        sizes="(max-width: 640px) 100vw, 190px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue via-[#244f7f] to-primary-red/80" />
                    )}

                    <div className="absolute inset-0 bg-primary-blue/15 transition-colors duration-500 group-hover:bg-primary-blue/5" />
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}