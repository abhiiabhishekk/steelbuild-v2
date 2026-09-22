
import Link from "next/link";
import { ArrowUpRight, FileText, Landmark, ShieldCheck } from "lucide-react";

const investorLinks = [
  { label: "IPO & Offer Documents", href: "/investors/ipo-offer-documents" },
  { label: "Financial Information", href: "/investors/financial-information" },
  { label: "Corporate Governance", href: "/investors/corporate-governance" },
  { label: "Investor Disclosures", href: "/investors/disclosures" },
  { label: "Policies & Codes", href: "/investors/policies" },
  { label: "Investor Contact", href: "/investors/investor-contact" },
];

export default function FooterInvestors() {
  return (
    <section
      aria-labelledby="footer-investors-title"
      className="border-t border-white/10 bg-white/[0.025]"
    >
      <div className="mx-auto max-w-[1180px] px-6 py-9">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <Landmark
                size={22}
                className="shrink-0 text-primary-red"
                aria-hidden="true"
              />

              <h2
                id="footer-investors-title"
                className="text-base font-black uppercase tracking-[0.16em] text-white"
              >
                Investor Relations
              </h2>
            </div>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Corporate information, investor documents and
              governance-related disclosures.
            </p>
          </div>

          <nav
            aria-label="Investor Relations footer navigation"
            className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {investorLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                <FileText
                  size={15}
                  className="shrink-0 text-primary-red"
                  aria-hidden="true"
                />
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/investors"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-primary-red bg-primary-red px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-transparent"
          >
            Investors
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <div className="mt-7 flex items-start gap-2 border-t border-white/10 pt-5 text-xs leading-5 text-white/45">
          <ShieldCheck
            size={15}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          Documents and disclosures will be published as they become officially available.
        </div>
      </div>
    </section>
  );
}