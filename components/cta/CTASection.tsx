import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const trustPoints = [
  {
    icon: Building2,
    label: "700+ Projects",
  },
  {
    icon: Factory,
    label: "50,000 MT Capacity",
  },
  {
    icon: MapPin,
    label: "Pan-India Execution",
  },
  {
    icon: ShieldCheck,
    label: "ISO 9001:2015",
  },
];

export default function CTASection() {
  return (
    <section
      aria-labelledby="homepage-project-cta"
      className="relative overflow-hidden bg-primary-blue py-28 text-white lg:py-36"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06182d]/98 via-[#06182d]/92 to-[#06182d]/78" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,17,25,0.22),transparent_38%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary-red/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/[0.05] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.07] px-6 py-14 shadow-[0_35px_100px_rgba(0,0,0,0.30)] backdrop-blur-xl md:px-10 lg:px-16 lg:py-16">
          {/* Decorative accents */}

          <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-primary-red to-transparent opacity-80" />

          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary-red/10 blur-3xl" />

          {/* Eyebrow */}

          <p className="relative z-10 text-sm font-black uppercase tracking-[0.32em] text-primary-red">
            Build with Steelbuild
          </p>

          {/* Heading */}

          <h2
            id="homepage-project-cta"
            className="relative z-10 mx-auto mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.04em] text-white md:text-5xl lg:text-[62px]"
          >
            Planning a Pre-Engineered
            <span className="block">
              Building or Steel Project?
            </span>
          </h2>

          {/* Description */}

          <p className="relative z-10 mx-auto mt-7 max-w-3xl text-base font-medium leading-8 text-white/75 md:text-lg">
            Partner with Steelbuild Infra Projects Limited for engineered
            Pre-Engineered Buildings, warehouses, factory buildings,
            industrial sheds, structural steel systems and turnkey industrial
            building solutions across India.
          </p>

          {/* CTA Buttons */}

          <div className="relative z-10 mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="/request-a-quote"
              className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-xl bg-primary-red px-9 py-5 font-black !text-white shadow-[0_20px_50px_rgba(194,17,25,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue hover:shadow-[0_25px_60px_rgba(255,255,255,0.16)]"
            >
              Request a Project Quote

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[0.04] px-9 py-5 font-black !text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:!text-primary-blue"
            >
              Talk to Our Experts

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Trust strip */}

          <div className="relative z-10 mx-auto mt-12 grid max-w-4xl gap-3 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3"
                >
                  <Icon
                    size={17}
                    className="shrink-0 text-primary-red"
                  />

                  <span className="text-sm font-bold text-white/75">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}