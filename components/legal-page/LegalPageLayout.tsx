import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  FileText,
  Home,
  Mail,
} from "lucide-react";

import Container from "@/components/layout/Container";

type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPageLayout({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="bg-[#f7f9fc]">
      <section className="relative isolate overflow-hidden bg-[#163c69] pb-20 pt-24 text-white lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="pointer-events-none absolute -left-40 top-8 h-96 w-96 rounded-full bg-primary-red/15 blur-[110px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/[0.07] blur-[120px]" />

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">
              <FileText
                size={16}
                className="text-primary-red"
              />
              {eyebrow}
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl lg:text-[72px]">
              {title}
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-9 text-white/75">
              {description}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white/80 backdrop-blur-md">
              <CalendarDays
                size={18}
                className="text-primary-red"
              />

              Last updated: {lastUpdated}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

        <Container>
          <div className="relative z-10 grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.08)]">
                <p className="text-[10px] font-black uppercase tracking-[0.26em] text-primary-red">
                  On This Page
                </p>

                <nav className="mt-5 space-y-2">
                  {sections.map((section, index) => (
                    <a
  key={section.id}
  href={`#${section.id}`}
  className="group flex items-start gap-3 rounded-2xl px-4 py-3 text-sm font-bold leading-6 !text-gray-600 transition-all duration-300 hover:bg-primary-blue hover:!text-white"
>
                      <span className="mt-0.5 text-[10px] font-black text-primary-red transition-colors duration-300 group-hover:!text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {section.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <Link
                    href="/"
                    className="group flex items-center gap-3 text-sm font-black text-primary-blue transition-colors hover:text-primary-red"
                  >
                    <ArrowLeft
                      size={18}
                      className="transition-transform group-hover:-translate-x-1"
                    />

                    Return to Homepage
                  </Link>
                </div>
              </div>
            </aside>

            <article className="overflow-hidden rounded-[34px] border border-gray-200 bg-white p-7 shadow-[0_24px_80px_rgba(27,63,104,0.08)] md:p-10 lg:p-12">
              <div className="space-y-12">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-32"
                  >
                    <div className="flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-sm font-black text-primary-red">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue md:text-3xl">
                          {section.title}
                        </h2>

                        <div className="legal-content mt-5 text-[15px] font-medium leading-8 text-gray-600">
                          {section.content}
                        </div>
                      </div>
                    </div>

                    {index < sections.length - 1 && (
                      <div className="mt-12 border-b border-gray-200" />
                    )}
                  </section>
                ))}
              </div>
            </article>
          </div>

          <div className="relative z-10 mt-8 flex flex-col items-center justify-between gap-6 rounded-[30px] bg-primary-blue p-7 text-center shadow-[0_24px_70px_rgba(27,63,104,0.18)] md:flex-row md:p-9 md:text-left">
            <div className="flex flex-col items-center gap-5 md:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                <Mail size={26} />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-200">
                  Questions or Concerns
                </p>

                <h2 className="mt-2 text-xl font-black text-white md:text-2xl">
                  Contact Steelbuild Infra Projects Limited
                </h2>

                <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                  Contact our team for questions concerning this document or
                  your use of the website.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black !text-primary-blue transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:!text-white"
            >
              <Home size={18} />
              Contact Us
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}