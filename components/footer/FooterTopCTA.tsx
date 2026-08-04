import Link from "next/link";

export default function FooterTopCTA() {
  return (
    <div className="border-b border-white/10">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-7 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
            Steelbuild Infra Projects Limited
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.03em] lg:text-[44px]">
            Let&apos;s Build Something Extraordinary Together.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
            From concept to commissioning, Steelbuild delivers world-class
            Pre-Engineered Building solutions across India.
          </p>
        </div>

        <Link
          href="/request-a-quote"
          className="w-fit rounded-xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_20px_50px_rgba(194,17,25,0.35)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}