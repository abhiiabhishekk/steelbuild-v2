import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="border-t border-white/5">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-5 px-6 py-9 text-center lg:flex-row lg:text-left">

        {/* Copyright */}

        <p className="text-sm text-white/70">
  © {new Date().getFullYear()}{" "}
  <span className="font-semibold text-white">
    Steelbuild Infra Projects Limited.
  </span>{" "}
  All Rights Reserved.
</p>


        {/* Links */}

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm">

          <Link
            href="/privacy-policy"
            className="text-white/70 transition-all duration-300 hover:text-primary-red"
          >
            Privacy Policy
          </Link>

          <span className="text-white/20">•</span>

          <Link
            href="/terms-and-conditions"
            className="text-white/70 transition-all duration-300 hover:text-primary-red"
          >
            Terms & Conditions
          </Link>

          <span className="text-white/20">•</span>

          <Link
            href="/sitemap"
            className="text-white/70 transition-all duration-300 hover:text-primary-red"
          >
            Sitemap
          </Link>

        </div>

        {/* Credit */}

        <p className="text-sm text-white/70">
  Designed &amp; Developed with <span className="text-primary-red">❤️</span> in India
</p>

      </div>
    </div>
  );
}