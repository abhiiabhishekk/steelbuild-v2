"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import { usePathname } from "next/navigation";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  BellRing,
  CheckCircle2,
  Loader2,
  Mail,
  ShieldCheck,
  TriangleAlert,
  X,
} from "lucide-react";

/* =========================================================
   STORAGE KEYS
========================================================= */

const SUBSCRIBED_KEY =
  "steelbuild_newsletter_subscribed";

const DISMISSED_KEY =
  "steelbuild_newsletter_popup_dismissed_at";

/* =========================================================
   POPUP SETTINGS
========================================================= */

const POPUP_DELAY =
  15_000;

const SCROLL_TRIGGER =
  0.35;

const DISMISS_DURATION =
  7 * 24 * 60 * 60 * 1000;

/* =========================================================
   TYPES
========================================================= */

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

/* =========================================================
   COMPONENT
========================================================= */

export default function NewsletterPopup() {
  const pathname =
    usePathname();

  const [email, setEmail] =
    useState("");

  const [formStatus, setFormStatus] =
    useState<FormStatus>("idle");

  const [message, setMessage] =
    useState("");

  const [isOpen, setIsOpen] =
    useState(false);

  const [isEligible, setIsEligible] =
    useState(false);

  /* =======================================================
     EXCLUDED PAGES
  ======================================================= */

  const isExcludedPage =
    pathname.startsWith("/studio") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith(
      "/newsletter/unsubscribe",
    );

  /* =======================================================
     CHECK LOCAL STORAGE
  ======================================================= */

  useEffect(() => {
  const timer = window.setTimeout(() => {
    if (isExcludedPage) {
      setIsEligible(false);
      setIsOpen(false);
      return;
    }

    try {
      const subscribed =
        window.localStorage.getItem(
          SUBSCRIBED_KEY,
        );

      if (subscribed === "true") {
        setIsEligible(false);
        setIsOpen(false);
        return;
      }

      const dismissedAt =
        window.localStorage.getItem(
          DISMISSED_KEY,
        );

      if (dismissedAt) {
        const timestamp =
          Number(dismissedAt);

        const stillDismissed =
          Number.isFinite(timestamp) &&
          Date.now() - timestamp <
            DISMISS_DURATION;

        if (stillDismissed) {
          setIsEligible(false);
          setIsOpen(false);
          return;
        }
      }

      setIsEligible(true);
    } catch {
      setIsEligible(true);
    }
  }, 0);

  return () => {
    window.clearTimeout(timer);
  };
}, [isExcludedPage]);

  /* =======================================================
     DELAY + SCROLL TRIGGER
  ======================================================= */

  useEffect(() => {
    if (
      !isEligible ||
      isExcludedPage
    ) {
      return;
    }

    let hasTriggered =
      false;

    function showPopup() {
      if (hasTriggered) {
        return;
      }

      hasTriggered =
        true;

      setIsOpen(true);

      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    }

    function handleScroll() {
      const documentHeight =
        document.documentElement
          .scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        return;
      }

      const scrollProgress =
        window.scrollY /
        documentHeight;

      if (
        scrollProgress >=
        SCROLL_TRIGGER
      ) {
        showPopup();
      }
    }

    const timer =
      window.setTimeout(
        showPopup,
        POPUP_DELAY,
      );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.clearTimeout(timer);

      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, [
    isEligible,
    isExcludedPage,
  ]);

  /* =======================================================
     LISTEN FOR NEWSLETTER SUBSCRIPTION
  ======================================================= */

  useEffect(() => {
    function handleSubscribed() {
      setIsOpen(false);
      setIsEligible(false);
    }

    window.addEventListener(
      "steelbuild-newsletter-subscribed",
      handleSubscribed,
    );

    return () => {
      window.removeEventListener(
        "steelbuild-newsletter-subscribed",
        handleSubscribed,
      );
    };
  }, []);

  /* =======================================================
     CLOSE POPUP
  ======================================================= */

  function handleClose() {
    setIsOpen(false);

    try {
      window.localStorage.setItem(
        DISMISSED_KEY,
        String(Date.now()),
      );
    } catch {
      // Ignore storage errors.
    }
  }

  /* =======================================================
     SUBSCRIBE
  ======================================================= */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const normalizedEmail =
      email
        .trim()
        .toLowerCase();

    if (!normalizedEmail) {
      setFormStatus("error");

      setMessage(
        "Please enter your email address.",
      );

      return;
    }

    setFormStatus("loading");
    setMessage("");

    try {
      const response =
        await fetch(
          "/api/newsletter/subscribe",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                email:
                  normalizedEmail,
              }),
          },
        );

      const data =
        await response.json();

      if (
        !response.ok ||
        !data.success
      ) {
        throw new Error(
          data.message ||
            "Unable to subscribe.",
        );
      }

      setFormStatus("success");

      setMessage(
        data.message ||
          "Thank you! You're subscribed to Steelbuild Insights.",
      );

      setEmail("");

      /*
       * Remember subscription
       * in this browser.
       */

      try {
        window.localStorage.setItem(
          SUBSCRIBED_KEY,
          "true",
        );

        window.localStorage.removeItem(
          DISMISSED_KEY,
        );
      } catch {
        // Ignore storage errors.
      }

      /*
       * Notify other newsletter
       * components on the website.
       */

      window.dispatchEvent(
        new Event(
          "steelbuild-newsletter-subscribed",
        ),
      );

      /*
       * Allow user to see success
       * message briefly.
       */

      window.setTimeout(() => {
        setIsOpen(false);
        setIsEligible(false);
      }, 3500);
    } catch (error) {
      setFormStatus("error");

      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't complete your subscription. Please try again.",
      );
    }
  }

  /* =======================================================
     RENDER
  ======================================================= */

  if (isExcludedPage) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 25,
            scale: 0.97,
          }}
          transition={{
            duration: 0.35,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          aria-label="Steelbuild Insights newsletter subscription"
          className="fixed bottom-5 left-4 right-4 z-[90] mx-auto max-w-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.28)] sm:left-auto sm:right-6 sm:mx-0 lg:bottom-7 lg:right-7"
        >

          {/* =============================================
              HEADER
          ============================================= */}

          <div className="relative overflow-hidden bg-primary-blue px-6 pb-6 pt-7 sm:px-7">

            <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-primary-red/20 blur-[70px]" />

            <button
              type="button"
              onClick={handleClose}
              aria-label="Close newsletter popup"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-primary-blue"
            >
              <X size={17} />
            </button>

            <div className="relative z-10">

              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white">
                <BellRing
                  size={13}
                  className="text-primary-red"
                />

                Steelbuild Insights
              </span>

              <h2 className="mt-5 pr-8 text-2xl font-black leading-tight tracking-[-0.035em] text-white sm:text-[28px]">
                Stay Ahead With
                Steelbuild Insights
              </h2>

              <p className="mt-3 text-sm font-medium leading-6 text-white/70">
                Receive selected updates on
                important PEB projects,
                engineering insights and
                major Steelbuild
                developments.
              </p>

            </div>

          </div>

          {/* =============================================
              BODY
          ============================================= */}

          <div className="p-6 sm:p-7">

            {formStatus !==
            "success" ? (
              <>
                <form
                  onSubmit={
                    handleSubmit
                  }
                  noValidate
                >

                  <label
                    htmlFor="popup-newsletter-email"
                    className="sr-only"
                  >
                    Email address
                  </label>

                  <div className="relative">

                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="popup-newsletter-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="Your email address"
                      value={email}
                      disabled={
                        formStatus ===
                        "loading"
                      }
                      onChange={(
                        event,
                      ) => {
                        setEmail(
                          event.target
                            .value,
                        );

                        if (
                          formStatus ===
                          "error"
                        ) {
                          setFormStatus(
                            "idle",
                          );

                          setMessage("");
                        }
                      }}
                      className="min-h-[56px] w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-sm font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/5 disabled:cursor-not-allowed disabled:bg-gray-50"
                    />

                  </div>

                  <button
                    type="submit"
                    disabled={
                      formStatus ===
                      "loading"
                    }
                    className="mt-4 inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 text-sm font-black !text-white shadow-[0_14px_32px_rgba(194,17,25,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-70"
                  >

                    {formStatus ===
                    "loading" ? (
                      <>
                        <Loader2
                          size={18}
                          className="animate-spin"
                        />

                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe

                        <ArrowUpRight
                          size={18}
                        />
                      </>
                    )}

                  </button>

                </form>

                {/* ERROR */}

                {formStatus ===
                  "error" &&
                  message && (
                    <div
                      role="alert"
                      className="mt-4 flex items-start gap-3 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold leading-6 text-red-700"
                    >
                      <TriangleAlert
                        size={18}
                        className="mt-0.5 shrink-0"
                      />

                      <span>
                        {message}
                      </span>
                    </div>
                  )}

                {/* PRIVACY */}

                <div className="mt-5 flex items-start gap-3">

                  <ShieldCheck
                    size={17}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-xs font-medium leading-5 text-gray-500">
                    No spam. Only meaningful
                    engineering, project and
                    company updates. You can
                    unsubscribe at any time.
                  </p>

                </div>
              </>
            ) : (
              /* =========================================
                 SUCCESS
              ========================================== */

              <div
                role="status"
                aria-live="polite"
                className="py-2 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2
                    size={32}
                    className="text-green-600"
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-primary-blue">
                  You&apos;re Subscribed!
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-gray-600">
                  {message}
                </p>

              </div>
            )}

          </div>

        </motion.aside>
      )}
    </AnimatePresence>
  );
}