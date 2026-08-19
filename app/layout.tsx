import type { Metadata } from "next";

import AppLayoutShell from "@/components/layout/AppLayoutShell";
import CookieConsent from "@/components/common/CookieConsent";
import { SanityLive } from "@/sanity/lib/live";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",
    template: "%s | Steelbuild Infra Projects Limited",
  },

  description:
    "Steelbuild Infra Projects Limited delivers Pre-Engineered Buildings, industrial steel structures, warehouses, factories, roofing, cladding and infrastructure solutions across India.",

  applicationName: "Steelbuild Infra Projects Limited",

  authors: [
    {
      name: "Steelbuild Infra Projects Limited",
      url: siteUrl,
    },
  ],

  creator: "Steelbuild Infra Projects Limited",
  publisher: "Steelbuild Infra Projects Limited",

  category: "Industrial Construction",

  classification:
    "Pre-Engineered Buildings, Steel Structures and Industrial Infrastructure",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Steelbuild Infra Projects Limited",
    title:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",
    description:
      "Pre-Engineered Buildings, industrial steel structures, warehouses, factories, roofing, cladding and infrastructure solutions across India.",
    images: [
      {
        url: "/images/seo/steelbuild-og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "Steelbuild Infra Projects Limited - Pre-Engineered Buildings and Steel Structures",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Steelbuild Infra Projects Limited | Pre-Engineered Buildings & Steel Structures",
    description:
      "Pre-Engineered Buildings, industrial steel structures and infrastructure solutions across India.",
    images: ["/images/seo/steelbuild-og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "content-language": "en-IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        <AppLayoutShell>{children}</AppLayoutShell>
        <CookieConsent />
        <SanityLive />
      </body>
    </html>
  );
}
