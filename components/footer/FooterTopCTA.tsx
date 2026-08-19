import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FooterTopCTA() {
  return (
    <div className="border-b border-white/10">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-14">
        {/* Content */}

        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
            Steelbuild Infra Projects Limited
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.03em] text-white lg:text-[44px]">
            Planning a Pre-Engineered Building or Industrial Steel Project?
          </h2>

          <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-white/65">
            Partner with Steelbuild Infra Projects Limited for engineered
            Pre-Engineered Buildings, warehouses, factory buildings,
            industrial sheds, structural steel systems and turnkey industrial
            building solutions across India.
          </p>
        </div>

        {/* CTA */}

        <Link
          href="/request-a-quote"
          className="group inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_20px_50px_rgba(194,17,25,0.35)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
        >
          Request a Project Quote

          <ArrowUpRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </div>
  );
}