import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Clock3,
  FileText,
  Headphones,
  Tags,
} from "lucide-react";

import type { SanityBlogDetail } from "@/types/sanityBlog";

type BlogSidebarProps = {
  blog: SanityBlogDetail;
};

export default function BlogSidebar({
  blog,
}: BlogSidebarProps) {
  const category =
    blog.category || "Steel Buildings";

  const readingTime =
    blog.readingTime || "Estimated reading time";

  const tagsCount = blog.tags?.length ?? 0;

  return (
    <aside className="space-y-6">
      {/* Article information */}

      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(27,63,104,0.08)]">
        <div className="bg-primary-blue p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red text-white">
            <BookOpen size={23} />
          </div>

          <p className="mt-5 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
            Article Information
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-white">
            Steelbuild Knowledge Hub
          </h3>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex items-start gap-3 rounded-2xl bg-[#f8fafc] p-4">
            <FileText
              size={19}
              className="mt-0.5 shrink-0 text-primary-red"
            />

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-gray-400">
                Category
              </p>

              <p className="mt-1 text-sm font-black leading-6 text-primary-blue">
                {category}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-[#f8fafc] p-4">
            <Clock3
              size={19}
              className="mt-0.5 shrink-0 text-primary-red"
            />

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-gray-400">
                Reading Time
              </p>

              <p className="mt-1 text-sm font-black text-primary-blue">
                {readingTime}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-[#f8fafc] p-4">
            <Tags
              size={19}
              className="mt-0.5 shrink-0 text-primary-red"
            />

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-gray-400">
                Topics
              </p>

              <p className="mt-1 text-sm font-black text-primary-blue">
                {tagsCount} Related Keywords
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote CTA */}

      <div className="relative isolate overflow-hidden rounded-[28px] bg-primary-blue p-7 shadow-[0_28px_80px_rgba(27,63,104,0.2)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:54px_54px]" />

        <div className="pointer-events-none absolute -bottom-16 -right-14 h-52 w-52 rounded-full bg-primary-red/20 blur-[75px]" />

        <div className="relative z-10">
          <Headphones
            size={32}
            className="text-primary-red"
          />

          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
            Project Assistance
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-white">
            Planning an Industrial Building Project?
          </h3>

          <p className="mt-4 text-sm font-medium leading-7 text-white/65">
            Discuss your Pre-Engineered Building requirement with our
            engineering and commercial teams.
          </p>

          <Link
            href="/request-a-quote"
            className="group mt-7 inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 font-black !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
          >
            Request a Quote

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </aside>
  );
}