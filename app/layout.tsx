import type { Metadata } from "next";

import AppLayoutShell from "@/components/layout/AppLayoutShell";
import CookieConsent from "@/components/common/CookieConsent";

import { SanityLive } from "@/sanity/lib/live";

import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://steelbuildinfra.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Steelbuild Infra Projects Limited",

    template:
      "%s | Steelbuild Infra Projects Limited",
  },

  description:
    "Steelbuild Infra Projects Limited delivers Pre-Engineered Buildings, industrial steel structures, warehouses, factories and infrastructure solutions across India.",

  applicationName:
    "Steelbuild Infra Projects Limited",

  keywords: [
    "Steelbuild Infra Projects Limited",
    "Pre-Engineered Buildings",
    "PEB Manufacturer in India",
    "Industrial Buildings",
    "Warehouse Buildings",
    "Factory Buildings",
    "Steel Building Manufacturer",
    "PEB Company in India",
  ],

  authors: [
    {
      name:
        "Steelbuild Infra Projects Limited",
    },
  ],

  creator:
    "Steelbuild Infra Projects Limited",

  publisher:
    "Steelbuild Infra Projects Limited",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "/",

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Steelbuild Infra Projects Limited",

    description:
      "Pre-Engineered Buildings, industrial steel structures, warehouses, factories and infrastructure solutions across India.",

    images: [
      {
        url:
          "/images/seo/steelbuild-og-image.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Steelbuild Infra Projects Limited",

    description:
      "Pre-Engineered Building and industrial steel structure solutions across India.",

    images: [
      "/images/seo/steelbuild-og-image.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },

  category:
    "Industrial Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayoutShell>
          {children}
        </AppLayoutShell>

        <CookieConsent />

        <SanityLive />
      </body>
    </html>
  );
}