"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronRight,
  Cookie,
  ShieldCheck,
  X,
} from "lucide-react";

const STORAGE_KEY =
  "steelbuild-cookie-consent";

type CookiePreference =
  | "accepted"
  | "necessary-only";

export default function CookieConsent() {
  const [isVisible, setIsVisible] =
    useState(false);

  useEffect(() => {
    const savedPreference =
      window.localStorage.getItem(
        STORAGE_KEY,
      );

    if (savedPreference) {
      return;
    }

    const timer = window.setTimeout(
      () => {
        setIsVisible(true);
      },
      700,
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const savePreference = (
    preference: CookiePreference,
  ) => {
    window.localStorage.setItem(
      STORAGE_KEY,
      preference,
    );

    setIsVisible(false);
  };

  const acceptCookies = () => {
    savePreference("accepted");
  };

  const acceptNecessaryOnly = () => {
    savePreference("necessary-only");
  };

  const closeNotice = () => {
    savePreference("necessary-only");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-label="Cookie preferences"
      aria-live="polite"
      className="fixed bottom-5 left-5 z-[9999] w-[calc(100%-2.5rem)] max-w-[430px] sm:bottom-6 sm:left-6"
    >
      <div className="relative overflow-hidden rounded-[26px] border border-gray-200/90 bg-white/95 p-5 shadow-[0_28px_90px_rgba(7,26,49,0.22)] backdrop-blur-xl sm:p-6">
        {/* Decorative background */}

        <div
          className="pointer-events-none absolute -bottom-16 -right-14 h-40 w-40 rounded-full bg-primary-red/[0.06] blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute bottom-5 right-5 grid grid-cols-5 gap-1.5 opacity-30"
          aria-hidden="true"
        >
          {Array.from({
            length: 20,
          }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-primary-blue/30"
            />
          ))}
        </div>

        {/* Close button */}

        <button
          type="button"
          onClick={closeNotice}
          aria-label="Close cookie notice"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:rotate-90 hover:border-primary-red/30 hover:bg-primary-red hover:text-white"
        >
          <X size={17} />
        </button>

        <div className="relative z-10">
          {/* Heading */}

          <div className="flex items-start gap-4 pr-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-primary-red/15 bg-primary-red/[0.06] text-primary-red shadow-[0_10px_30px_rgba(194,17,25,0.1)]">
              <Cookie size={25} />
            </div>

            <div className="min-w-0 pt-0.5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                Your Privacy
              </p>

              <h2 className="mt-1.5 text-xl font-black tracking-[-0.025em] text-primary-blue">
                We use cookies
              </h2>

              <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
                Cookies help us improve
                website performance and
                provide a better browsing
                experience.
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={acceptCookies}
              className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] bg-primary-red px-5 py-3 text-sm font-black text-white shadow-[0_14px_32px_rgba(194,17,25,0.23)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-blue hover:shadow-[0_18px_38px_rgba(27,63,104,0.2)]"
            >
              Accept Cookies
            </button>

            <button
              type="button"
              onClick={
                acceptNecessaryOnly
              }
              className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] border border-primary-red/45 bg-white px-5 py-3 text-sm font-black text-primary-red transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-blue hover:bg-primary-blue hover:text-white"
            >
              Necessary Only
            </button>
          </div>

          {/* Privacy link */}

          <div className="mt-5 border-t border-gray-200 pt-4">
            <Link
              href="/privacy-policy"
              className="group inline-flex items-center gap-3 text-xs font-black !text-primary-blue transition-colors duration-300 hover:!text-primary-red"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-blue/[0.06] text-primary-red transition-colors duration-300 group-hover:bg-primary-red group-hover:text-white">
                <ShieldCheck size={16} />
              </span>

              Privacy Policy

              <ChevronRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}