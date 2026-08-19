import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="border-t border-white/5">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-5 px-6 py-8 text-center lg:flex-row lg:text-left">
        {/* Copyright */}

        <p className="text-sm text-white/65">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            Steelbuild Infra Projects Limited.
          </span>{" "}
          All Rights Reserved.
        </p>

        {/* Legal navigation */}

        <nav
          aria-label="Legal and website information"
          className="flex flex-wrap items-center justify-center gap-5 text-sm"
        >
          <Link
            href="/privacy-policy"
            className="text-white/65 transition-colors duration-300 hover:text-primary-red"
          >
            Privacy Policy
          </Link>

          <span
            aria-hidden="true"
            className="text-white/20"
          >
            •
          </span>

          <Link
            href="/terms-and-conditions"
            className="text-white/65 transition-colors duration-300 hover:text-primary-red"
          >
            Terms &amp; Conditions
          </Link>

          <span
            aria-hidden="true"
            className="text-white/20"
          >
            •
          </span>

          <Link
            href="/sitemap"
            className="text-white/65 transition-colors duration-300 hover:text-primary-red"
          >
            Sitemap
          </Link>
        </nav>

        {/* Credit */}

        <p className="text-sm text-white/65">
          Designed &amp; Developed with{" "}
          <span
            className="text-primary-red"
            aria-label="love"
          >
            ♥
          </span>{" "}
          in India
        </p>
      </div>
    </div>
  );
}