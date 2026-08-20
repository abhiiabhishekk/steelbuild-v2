"use client";

import {
  FormEvent,
  useState,
} from "react";

import Link from "next/link";

import {
  ArrowUpRight,
  BellRing,
  CheckCircle2,
  Factory,
  Loader2,
  Mail,
  TriangleAlert,
} from "lucide-react";

import Container from "@/components/layout/Container";

type FormStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";

export default function BlogNewsletter() {
  const [email, setEmail] =
    useState("");

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const [message, setMessage] =
    useState("");

  /* =======================================================
     SUBSCRIBE
  ======================================================= */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const normalizedEmail =
      email.trim().toLowerCase();

    if (!normalizedEmail) {
      setStatus("error");

      setMessage(
        "Please enter your email address.",
      );

      return;
    }

    setStatus("loading");
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

            body: JSON.stringify({
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

      setStatus("success");

      setMessage(
        data.message ||
          "Thank you! You're subscribed to Steelbuild Insights.",
      );

      setEmail("");
      try {
  window.localStorage.setItem(
    "steelbuild_newsletter_subscribed",
    "true",
  );

  window.localStorage.removeItem(
    "steelbuild_newsletter_popup_dismissed_at",
  );
} catch {
  // Ignore localStorage errors.
}

window.dispatchEvent(
  new Event(
    "steelbuild-newsletter-subscribed",
  ),
);
    } catch (error) {
      setStatus("error");

      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't complete your subscription. Please try again.",
      );
    }
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        <div className="relative z-10 overflow-hidden rounded-[36px] bg-primary-blue p-8 shadow-[0_30px_90px_rgba(27,63,104,0.22)] md:p-12 lg:p-16">

          {/* Glow */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">

            {/* =============================================
                LEFT CONTENT
            ============================================= */}

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-white">
                <BellRing
                  size={15}
                  className="text-primary-red"
                />

                Newsletter
              </span>

              <h2
                id="newsletter-heading"
                className="mt-7 text-4xl font-black leading-tight text-white md:text-5xl"
              >
                Stay Updated With
                Steelbuild Insights
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                Receive the latest articles on
                Pre-Engineered Buildings,
                industrial construction,
                manufacturing technologies and
                engineering innovation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "PEB Knowledge",
                  "Construction Trends",
                  "Engineering",
                  "Manufacturing",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-black text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* =============================================
                SUBSCRIBE CARD
            ============================================= */}

            <div className="rounded-[30px] bg-white p-8 shadow-xl">

              <Mail
                size={34}
                className="text-primary-red"
              />

              <h3 className="mt-5 text-2xl font-black text-primary-blue">
                Subscribe
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                Get Steelbuild&apos;s latest
                engineering and industry
                insights delivered to your
                inbox.
              </p>

              {/* ===========================================
                  FORM
              =========================================== */}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-6"
              >
                <label
                  htmlFor="newsletter-email"
                  className="sr-only"
                >
                  Email address
                </label>

                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  value={email}
                  disabled={
                    status ===
                    "loading"
                  }
                  onChange={(event) => {
                    setEmail(
                      event.target.value,
                    );

                    if (
                      status ===
                        "error" ||
                      status ===
                        "success"
                    ) {
                      setStatus(
                        "idle",
                      );

                      setMessage(
                        "",
                      );
                    }
                  }}
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/5 disabled:cursor-not-allowed disabled:bg-gray-50"
                />

                <button
                  type="submit"
                  disabled={
                    status ===
                    "loading"
                  }
                  className="mt-5 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 font-black !text-white transition hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status ===
                  "loading" ? (
                    <>
                      <Loader2
                        size={19}
                        className="animate-spin"
                      />

                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe

                      <ArrowUpRight
                        size={19}
                      />
                    </>
                  )}
                </button>

                {/* =========================================
                    FEEDBACK
                ========================================== */}

                {message && (
                  <div
                    role={
                      status ===
                      "error"
                        ? "alert"
                        : "status"
                    }
                    aria-live="polite"
                    className={`mt-4 flex items-start gap-3 rounded-2xl px-4 py-3 text-sm font-bold leading-6 ${
                      status ===
                      "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {status ===
                    "success" ? (
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0"
                      />
                    ) : (
                      <TriangleAlert
                        size={19}
                        className="mt-0.5 shrink-0"
                      />
                    )}

                    <span>
                      {message}
                    </span>
                  </div>
                )}

                <p className="mt-4 text-xs font-medium leading-5 text-gray-400">
                  By subscribing, you agree
                  to receive Steelbuild
                  Insights by email. You can
                  unsubscribe from future
                  communications.
                </p>
              </form>

              {/* ===========================================
                  PROJECT CTA
              =========================================== */}

              <div className="mt-8 border-t border-gray-200 pt-8">

                <Factory
                  size={28}
                  className="text-primary-red"
                />

                <h4 className="mt-4 text-xl font-black text-primary-blue">
                  Planning an Industrial
                  Project?
                </h4>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Speak with Steelbuild&apos;s
                  engineering specialists
                  for your next project.
                </p>

                <Link
                  href="/request-a-quote"
                  className="group mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl border border-primary-blue bg-white px-6 py-4 font-black text-primary-blue transition hover:bg-primary-blue hover:!text-white"
                >
                  Request a Quote

                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}