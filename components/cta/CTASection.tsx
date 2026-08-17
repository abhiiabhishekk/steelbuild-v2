// import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary-blue py-36 text-white">
      {/* <Image
        src="/images/cta/cta-bg.jpg"
        alt="Steelbuild Infra Projects CTA background"
        fill
        className="object-cover opacity-30"
      /> */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#06182d]/98 via-[#06182d]/92 to-[#06182d]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,17,25,0.22),transparent_38%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="rounded-[36px] border border-white/12 bg-white/8 px-6 py-14 shadow-[0_35px_100px_rgba(0,0,0,0.30)] backdrop-blur-xl lg:px-16">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-primary-red">
            Start Your Project
          </p>

          <h2 className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.04em] lg:text-[62px]">
            Ready to Build Your Next Landmark Project?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/78">
            Partner with Steelbuild Infra Projects for premium Pre-Engineered
            Buildings, industrial structures and turnkey steel infrastructure.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/request-a-quote"
              className="rounded-xl bg-primary-red px-9 py-5 font-black !text-white shadow-[0_20px_50px_rgba(194,17,25,0.35)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Request a Quote
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/25 px-9 py-5 font-black !text-white transition-all duration-500 hover:-translate-y-1 hover:border-white hover:bg-white hover:!text-primary-blue"
            >
              Contact Us
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-sm font-bold text-white/70 sm:grid-cols-4">
            <span>15+ Years</span>
            <span>700+ Projects</span>
            <span>Pan India</span>
            <span>ISO Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}