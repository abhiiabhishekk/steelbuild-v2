import Image from "next/image";
import Link from "next/link";

import {
  Factory,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

/* =========================================================
   COMPANY LINKS
========================================================= */

const company = [
  {
    label: "About Steelbuild",
    href: "/about",
  },
  {
    label: "Our Projects",
    href: "/projects",
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Careers",
    href: "/careers",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

/* =========================================================
   PRODUCT LINKS
========================================================= */

const products = [
  {
    label: "Pre-Engineered Buildings",
    href: "/products/pre-engineered-buildings",
  },
  {
    label: "Warehouse Buildings",
    href: "/products/warehouse-buildings",
  },
  {
    label: "Factory Buildings",
    href: "/products/factory-buildings",
  },
  {
    label: "Industrial Sheds",
    href: "/products/industrial-sheds",
  },
  {
    label: "Heavy Steel Structures",
    href: "/products/heavy-steel-structures",
  },
  {
    label: "Multi-Storey Buildings",
    href: "/products/multi-storey-buildings",
  },
  {
    label: "Mezzanine Systems",
    href: "/products/mezzanine-systems",
  },
  {
    label: "Roofing Systems",
    href: "/products/roofing-systems",
  },
  {
    label: "Cladding Systems",
    href: "/products/cladding-systems",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    label: "Warehousing & Logistics",
    href: "/industries",
  },
  {
    label: "Manufacturing",
    href: "/industries",
  },
  {
    label: "Automobile",
    href: "/industries",
  },
  {
    label: "Food & FMCG",
    href: "/industries",
  },
  {
    label: "Pharmaceutical",
    href: "/industries",
  },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socials = [
  {
    label: "Steelbuild Infra on LinkedIn",
    href: "https://www.linkedin.com/company/steelbuild-infra-projects/",
    icon: <FaLinkedinIn size={18} />,
  },
  {
    label: "Steelbuild Infra on Facebook",
    href: "https://www.facebook.com/STEELBUILDINFRA",
    icon: <FaFacebookF size={18} />,
  },
  {
    label: "Steelbuild Infra on Instagram",
    href: "https://www.instagram.com/steelbuildinfra/",
    icon: <FaInstagram size={18} />,
  },
  {
    label: "Steelbuild Infra on YouTube",
    href: "https://www.youtube.com/@steelbuildinfraprojectsltd",
    icon: <FaYoutube size={18} />,
  },
];

/* =========================================================
   REUSABLE FOOTER COLUMN
========================================================= */

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <nav aria-label={`${title} footer navigation`}>
      <h3 className="text-sm font-black uppercase tracking-[0.25em] text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={`${item.label}-${item.href}`}>
            <Link
              href={item.href}
              className="inline-block text-sm font-medium text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-primary-red"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* =========================================================
   FOOTER LINKS
========================================================= */

export default function FooterLinks() {
  return (
    <div className="mx-auto max-w-[1180px] px-6 py-14 lg:py-16">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr_1.15fr_0.95fr_1.35fr]">
        {/* ===================================================
            COMPANY IDENTITY
        =================================================== */}

        <div>
          <Link
            href="/"
            aria-label="Steelbuild Infra Projects Limited home"
            className="inline-block"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Steelbuild Infra Projects Limited"
              width={180}
              height={60}
              className="h-14 w-auto rounded bg-white px-3 py-2"
            />
          </Link>

          <p className="mt-6 max-w-sm text-sm font-medium leading-7 text-white/65">
            Steelbuild Infra Projects Limited provides engineered
            Pre-Engineered Buildings, structural steel systems, warehouse
            buildings, factory buildings and industrial infrastructure
            solutions with integrated engineering, manufacturing and project
            execution capabilities across India.
          </p>

          {/* Trust signals */}

          <div className="mt-6 flex max-w-[230px] flex-wrap gap-3">
  {["ISO 9001:2015", "15+ Years", "700+ Projects", "Pan India"].map(
    (item) => (
      <span
        key={item}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black text-white/75"
      >
        {item}
      </span>
    )
  )}
</div>

          {/* Social media */}

          <div
            className="mt-8 flex gap-3"
            aria-label="Steelbuild Infra social media"
          >
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-red hover:bg-primary-red hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ===================================================
            NAVIGATION COLUMNS
        =================================================== */}

        <FooterColumn
          title="Company"
          items={company}
        />

        <FooterColumn
          title="Products"
          items={products}
        />

        <FooterColumn
          title="Industries"
          items={industries}
        />

        {/* ===================================================
            CONTACT
        =================================================== */}

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.25em] text-white">
            Contact
          </h3>

          <address className="mt-6 space-y-5 text-sm font-normal leading-6 text-white/65 not-italic">
            {/* Corporate office */}

            <a
              href="https://maps.app.goo.gl/3Ry1rymorMa5JfmSA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Steelbuild Infra Corporate Office in New Delhi on Google Maps"
              className="flex gap-3 transition-colors duration-300 hover:text-primary-red"
            >
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-primary-red"
                aria-hidden="true"
              />

              <span>
                <strong className="font-semibold text-white/90">
                  Corporate Office
                </strong>
                <br />
                303-304, 3rd Floor, R.G. Trade Tower, Netaji Subhash Place,
                Pitampura, New Delhi – 110034
              </span>
            </a>

            {/* Unit 1 */}

            <a
              href="https://maps.app.goo.gl/gANZmXy1uWog8LPw9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Steelbuild Infra Unit 1 Katwal Sonipat on Google Maps"
              className="flex gap-3 transition-colors duration-300 hover:text-primary-red"
            >
              <Factory
                size={18}
                className="mt-0.5 shrink-0 text-primary-red"
                aria-hidden="true"
              />

              <span>
                <strong className="font-semibold text-white/90">
                  Manufacturing Unit 1
                </strong>
                <br />
                Village Katwal, Tehsil Gohana, Sonipat, Haryana – 131409
              </span>
            </a>

            {/* Units 2 & 3 */}

            <a
              href="https://maps.app.goo.gl/nChi1zSjxJD3WHECA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Steelbuild Infra Units 2 and 3 Halalpur Sonipat on Google Maps"
              className="flex gap-3 transition-colors duration-300 hover:text-primary-red"
            >
              <Factory
                size={18}
                className="mt-0.5 shrink-0 text-primary-red"
                aria-hidden="true"
              />

              <span>
                <strong className="font-semibold text-white/90">
                  Manufacturing Units 2 &amp; 3
                </strong>
                <br />
                Village Halalpur, Sonipat, Haryana – 131103
              </span>
            </a>

            {/* Email */}

            <a
              href="mailto:info@steelbuildinfra.com"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-primary-red"
            >
              <Mail
                size={18}
                className="shrink-0 text-primary-red"
                aria-hidden="true"
              />

              <span>info@steelbuildinfra.com</span>
            </a>

            {/* Phone */}

            <a
              href="tel:+918130199427"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-primary-red"
            >
              <Phone
                size={18}
                className="shrink-0 text-primary-red"
                aria-hidden="true"
              />

              <span>+91 81301 99427</span>
            </a>

            {/* Website */}

            <a
              href="https://steelbuildinfra.com"
              aria-label="Steelbuild Infra Projects official website"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-primary-red"
            >
              <Globe
                size={18}
                className="shrink-0 text-primary-red"
                aria-hidden="true"
              />

              <span>steelbuildinfra.com</span>
            </a>
          </address>
        </div>
      </div>
    </div>
  );
}