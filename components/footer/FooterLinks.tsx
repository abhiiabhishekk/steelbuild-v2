import Image from "next/image";
import Link from "next/link";
import { MapPin, Factory, Mail, Phone, Globe } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "Pre-Engineered Buildings", href: "/products" },
  { label: "Industrial Buildings", href: "/products" },
  { label: "Warehouse Buildings", href: "/products" },
  { label: "Steel Structures", href: "/products" },
  { label: "Mezzanine Floors", href: "/products" },
];

const industries = [
  { label: "Warehousing & Logistics", href: "/industries" },
  { label: "Manufacturing", href: "/industries" },
  { label: "Automobile", href: "/industries" },
  { label: "Pharmaceutical", href: "/industries" },
  { label: "Food Processing", href: "/industries" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/steelbuild-infra-projects/",
    icon: <FaLinkedinIn size={18} />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/STEELBUILDINFRA",
    icon: <FaFacebookF size={18} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/steelbuildinfra/",
    icon: <FaInstagram size={18} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@steelbuildinfraprojectsltd",
    icon: <FaYoutube size={18} />,
  },
];

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.25em] text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm font-medium text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-primary-red"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterLinks() {
  return (
    <div className="mx-auto max-w-[1180px] px-6 py-14">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Image
            src="/images/logo/logo.png"
            alt="Steelbuild Infra Projects Limited"
            width={180}
            height={60}
            className="h-14 w-auto rounded bg-white px-3 py-2"
          />

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
            Engineering India&apos;s future through premium Pre-Engineered
            Building solutions, industrial steel structures and turnkey
            infrastructure delivered with precision, quality and commitment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
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

          <div className="mt-8 flex gap-3">
            {socials.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-red hover:bg-primary-red hover:text-white"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" items={company} />
        <FooterColumn title="Products" items={products} />
        <FooterColumn title="Industries" items={industries} />

        <div>
  <h3 className="text-sm font-black uppercase tracking-[0.25em] text-white">
    Contact
  </h3>

  <div className="mt-6 space-y-5 text-sm text-white/65">
    <a
      href="https://maps.app.goo.gl/3Ry1rymorMa5JfmSA"
      target="_blank"
      rel="noreferrer"
      className="flex gap-3 transition hover:text-primary-red"
    >
      <MapPin size={18} className="shrink-0 text-primary-red" />
      <span>
        303-304, 3rd Floor, R.G. Trade Tower, Netaji Subhash Place,
        Pitampura, New Delhi – 110034
      </span>
    </a>

    <a
      href="https://maps.app.goo.gl/gANZmXy1uWog8LPw9"
      target="_blank"
      rel="noreferrer"
      className="flex gap-3 transition hover:text-primary-red"
    >
      <Factory size={18} className="shrink-0 text-primary-red" />
      <span>Unit 1: Village Katwal, Tehsil Gohana, Sonipat, Haryana – 131409</span>
    </a>

    <a
      href="https://maps.app.goo.gl/nChi1zSjxJD3WHECA"
      target="_blank"
      rel="noreferrer"
      className="flex gap-3 transition hover:text-primary-red"
    >
      <Factory size={18} className="shrink-0 text-primary-red" />
      <span>Unit 2 &amp; 3: Village Halalpur, Sonipat, Haryana – 131103</span>
    </a>

    <a
      href="mailto:info@steelbuildinfra.com"
      className="flex gap-3 transition hover:text-primary-red"
    >
      <Mail size={18} className="shrink-0 text-primary-red" />
      <span>
        info@steelbuildinfra.com
        {/* <br />
        va@steelbuildinfra.com */}
      </span>
    </a>

    <a
      href="tel:+918130199427"
      className="flex gap-3 transition hover:text-primary-red"
    >
      <Phone size={18} className="shrink-0 text-primary-red" />
      <span>
        +91 81301 99427
        {/* <br />
        +91 99170 65110 */}
      </span>
    </a>

    
    <div className="flex gap-3">
      <Globe size={18} className="shrink-0 text-primary-red" />
      <span>steelbuildinfra.com</span>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}