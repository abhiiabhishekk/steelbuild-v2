"use client";

import { useEffect, useState } from "react";
import {
  Check,
  Copy,
  Mail,
  Share2,
} from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

type BlogShareProps = {
  title: string;
  slug: string;
};

type ShareLink = {
  label: string;
  href: string;
  icon: IconType;
};

const websiteUrl = "https://steelbuildinfra.com";

export default function BlogShare({
  title,
  slug,
}: BlogShareProps) {
  const [copied, setCopied] = useState(false);

  const [currentUrl, setCurrentUrl] = useState(
    `${websiteUrl}/blog/${slug}`,
  );

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks: ShareLink[] = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: FaLinkedinIn,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FaFacebookF,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: FaXTwitter,
    },
    {
      label: "Share by Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`,
      icon: Mail,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const nativeShare = async () => {
    if (!navigator.share) {
      await copyLink();
      return;
    }

    try {
      await navigator.share({
        title,
        text: title,
        url: currentUrl,
      });
    } catch {
      // User cancelled the native share dialog.
    }
  };

  return (
    <>
      {/* Desktop sticky share bar */}

      <aside
        aria-label="Share this article"
        className="hidden lg:block"
      >
        <div className="sticky top-28">
          <div className="flex w-[72px] flex-col items-center overflow-hidden rounded-[24px] border border-gray-200 bg-white p-3 shadow-[0_18px_55px_rgba(27,63,104,0.09)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-blue text-white">
              <Share2 size={19} />
            </div>

            <p className="mt-3 text-center text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
              Share
            </p>

            <div className="mt-4 flex flex-col gap-2">
              {shareLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label === "Share by Email"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      item.label === "Share by Email"
                        ? undefined
                        : "noreferrer noopener"
                    }
                    aria-label={item.label}
                    title={item.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-primary-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-red hover:bg-primary-red hover:text-white"
                  >
                    <Icon
  size={18}
  className="transition-colors duration-300 group-hover:text-white"
/>
                  </a>
                );
              })}

              <button
                type="button"
                onClick={copyLink}
                aria-label="Copy article link"
                title={
                  copied
                    ? "Link copied"
                    : "Copy article link"
                }
                className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-0.5 ${
                  copied
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-gray-200 bg-white text-primary-blue hover:border-primary-red hover:bg-primary-red hover:text-white"
                }`}
              >
                {copied ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile and tablet share bar */}

      <div className="mb-8 rounded-[22px] border border-gray-200 bg-white p-4 shadow-[0_14px_40px_rgba(27,63,104,0.07)] lg:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-blue text-white">
              <Share2 size={19} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Share this article
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Share with your network
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {shareLinks.slice(0, 3).map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                  title={item.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-primary-blue transition-all duration-300 hover:border-primary-red hover:bg-primary-red hover:text-white"
                >
                  <Icon
  size={17}
  className="transition-colors duration-300 group-hover:text-white"
/>
                </a>
              );
            })}

            <button
              type="button"
              onClick={nativeShare}
              aria-label="Open sharing options"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-primary-red px-4 py-2 text-xs font-black !text-white transition-all duration-300 hover:bg-primary-blue"
            >
              <Share2 size={16} />
              Share
            </button>

            <button
              type="button"
              onClick={copyLink}
              aria-label="Copy article link"
              title={
                copied
                  ? "Link copied"
                  : "Copy article link"
              }
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                copied
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-gray-200 bg-white text-primary-blue hover:border-primary-red hover:bg-primary-red hover:text-white"
              }`}
            >
              {copied ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}
            </button>
          </div>
        </div>

        {copied && (
          <p className="mt-3 text-center text-xs font-black text-emerald-600">
            Article link copied successfully.
          </p>
        )}
      </div>
    </>
  );
}