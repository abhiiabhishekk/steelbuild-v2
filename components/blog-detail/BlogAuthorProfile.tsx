import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  PenTool,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

export default function BlogAuthorProfile() {
  return (
    <section className="mt-20">
      <div className="overflow-hidden rounded-[34px] border border-gray-200 bg-gradient-to-br from-white via-white to-slate-50 shadow-[0_24px_70px_rgba(27,63,104,0.08)]">
        <div className="grid gap-10 p-8 lg:grid-cols-[150px_1fr] lg:p-10">
          {/* Avatar */}

          <div className="flex justify-center lg:justify-start">
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-[6px] border-white shadow-xl">
              <Image
                src="/images/blog/editorial-team.jpg"
                alt="Steelbuild Editorial Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-primary-red">
              <PenTool size={14} />
              Article Author
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-primary-blue">
              Steelbuild Editorial Team
            </h2>

            <p className="mt-3 text-lg font-semibold text-primary-red">
              Engineering Knowledge • Industrial Construction • PEB Specialists
            </p>

            <p className="mt-6 max-w-4xl text-[17px] leading-8 text-gray-600">
              Steelbuild Editorial Team publishes well-researched,
              technically accurate and industry-focused articles on
              Pre-Engineered Buildings (PEB), steel construction,
              industrial infrastructure, manufacturing technology,
              warehousing and modern engineering practices.

              Every article is reviewed by experienced professionals to
              ensure technical accuracy, practical value and relevance
              for architects, consultants, contractors, developers,
              manufacturers and industrial decision-makers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl bg-primary-blue px-5 py-3 font-bold text-white">
                <Building2 size={18} />
                Steelbuild Infra Projects Limited
              </div>

              <Link
  href="https://www.linkedin.com/company/steelbuild-infra-projects"
  target="_blank"
  rel="noreferrer noopener"
  className="group inline-flex items-center gap-2 rounded-xl border border-primary-blue px-5 py-3 font-bold text-primary-blue transition-all duration-300 hover:bg-primary-blue hover:text-white"
>
  <FaLinkedinIn
    size={18}
    className="transition-colors duration-300 group-hover:text-white"
  />

  <span className="transition-colors duration-300 group-hover:text-white">
    Follow on LinkedIn
  </span>
</Link>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 font-black text-primary-red transition-all duration-300 hover:gap-5"
              >
                View All Articles

                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}