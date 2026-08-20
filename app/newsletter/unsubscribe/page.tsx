"use client";

import {
  Suspense,
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  ArrowLeft,
  BellRing,
  CheckCircle2,
  Loader2,
  RefreshCw,
  TriangleAlert,
} from "lucide-react";

import Container from "@/components/layout/Container";

type Status =
  | "loading"
  | "unsubscribed"
  | "already-unsubscribed"
  | "resubscribing"
  | "resubscribed"
  | "error";

function UnsubscribeContent() {
  const searchParams =
    useSearchParams();

  const email =
    searchParams
      .get("email")
      ?.trim()
      .toLowerCase() || "";

  const [status, setStatus] =
    useState<Status>("loading");

  const [message, setMessage] =
    useState(
      "Processing your unsubscribe request...",
    );

  const hasValidEmail =
    email.length > 0;

  /* =======================================================
     UNSUBSCRIBE
  ======================================================= */

  useEffect(() => {
    if (!hasValidEmail) {
      return;
    }

    let cancelled =
      false;

    async function unsubscribe() {
      try {
        const response =
          await fetch(
            "/api/newsletter/unsubscribe",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify({
                  email,
                }),
            },
          );

        const data =
          await response.json();

        if (cancelled) {
          return;
        }

        if (
          !response.ok ||
          !data.success
        ) {
          throw new Error(
            data.message ||
              "Unable to unsubscribe.",
          );
        }

        if (
          data.alreadyUnsubscribed
        ) {
          setStatus(
            "already-unsubscribed",
          );
        } else {
          setStatus(
            "unsubscribed",
          );
        }

        setMessage(
          data.message,
        );
      } catch (error) {
        if (cancelled) {
          return;
        }

        setStatus(
          "error",
        );

        setMessage(
          error instanceof Error
            ? error.message
            : "We couldn't process your unsubscribe request.",
        );
      }
    }

    void unsubscribe();

    return () => {
      cancelled =
        true;
    };
  }, [
    email,
    hasValidEmail,
  ]);

  /* =======================================================
     RESUBSCRIBE
  ======================================================= */

  async function handleResubscribe() {
    if (!email) {
      return;
    }

    setStatus(
      "resubscribing",
    );

    setMessage(
      "Reactivating your Steelbuild Insights subscription...",
    );

    try {
      const response =
        await fetch(
          "/api/newsletter/resubscribe",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                email,
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
            "Unable to resubscribe.",
        );
      }

      setStatus(
        "resubscribed",
      );

      setMessage(
        data.message,
      );
    } catch (error) {
      setStatus(
        "error",
      );

      setMessage(
        error instanceof Error
          ? error.message
          : "We couldn't reactivate your subscription.",
      );
    }
  }

  /* =======================================================
     INVALID LINK
  ======================================================= */

  const displayStatus: Status =
    hasValidEmail
      ? status
      : "error";

  const displayMessage =
    hasValidEmail
      ? message
      : "The subscription link is invalid or incomplete.";

  const canResubscribe =
    displayStatus ===
      "unsubscribed" ||
    displayStatus ===
      "already-unsubscribed";

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#f7f9fc] pb-24 pt-40 lg:pb-32 lg:pt-44">
      <Container>
        <div className="mx-auto max-w-2xl overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(27,63,104,0.10)]">

          {/* Header */}

          <div className="bg-primary-blue px-8 py-10 text-center md:px-12">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-white">
              <BellRing
                size={14}
                className="text-primary-red"
              />

              Steelbuild Insights
            </span>

            <h1 className="mt-6 text-3xl font-black leading-tight text-white md:text-4xl">
              Manage Your Subscription
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-sm font-medium leading-7 text-white/70">
              Manage your Steelbuild Insights
              newsletter preferences.
            </p>

          </div>

          {/* Body */}

          <div className="p-8 text-center md:p-12">

            {displayStatus ===
              "loading" ||
            displayStatus ===
              "resubscribing" ? (
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-blue/5">
                <Loader2
                  size={40}
                  className="animate-spin text-primary-red"
                />
              </div>
            ) : displayStatus ===
                "unsubscribed" ||
              displayStatus ===
                "already-unsubscribed" ||
              displayStatus ===
                "resubscribed" ? (
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                <CheckCircle2
                  size={42}
                  className="text-green-600"
                />
              </div>
            ) : (
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
                <TriangleAlert
                  size={42}
                  className="text-primary-red"
                />
              </div>
            )}

            <h2 className="mt-7 text-3xl font-black tracking-[-0.03em] text-primary-blue">

              {displayStatus ===
              "loading"
                ? "Updating Subscription"
                : displayStatus ===
                    "resubscribing"
                  ? "Reactivating Subscription"
                  : displayStatus ===
                      "resubscribed"
                    ? "Welcome Back!"
                    : displayStatus ===
                          "unsubscribed" ||
                        displayStatus ===
                          "already-unsubscribed"
                      ? "Subscription Updated"
                      : "Unable to Update Subscription"}

            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-8 text-gray-600">
              {displayMessage}
            </p>

            {canResubscribe && (
              <div className="mx-auto mt-8 max-w-lg rounded-[24px] bg-[#f7f9fc] p-6">

                <h3 className="text-lg font-black text-primary-blue">
                  Changed your mind?
                </h3>

                <p className="mt-2 text-sm font-medium leading-7 text-gray-600">
                  You can reactivate your
                  Steelbuild Insights
                  subscription instantly.
                </p>

                <button
                  type="button"
                  onClick={
                    handleResubscribe
                  }
                  className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 text-sm font-black !text-white transition hover:bg-primary-blue"
                >
                  <RefreshCw
                    size={18}
                  />

                  Resubscribe to Steelbuild Insights
                </button>

              </div>
            )}

            {displayStatus ===
              "resubscribed" && (
              <p className="mx-auto mt-5 max-w-lg text-sm font-medium leading-7 text-gray-500">
                You will once again receive
                selected Steelbuild updates
                and insights. A confirmation
                email may also have been sent
                to your inbox.
              </p>
            )}

            <Link
              href="/blog"
              className="group mt-8 inline-flex min-h-[54px] items-center justify-center gap-3 rounded-2xl bg-primary-blue px-7 py-4 text-sm font-black !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red"
            >
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to Blog
            </Link>

          </div>

        </div>
      </Container>
    </main>
  );
}

/* =========================================================
   FALLBACK
========================================================= */

function UnsubscribeFallback() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] pb-24 pt-40 lg:pb-32 lg:pt-44">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[32px] border border-gray-200 bg-white p-12 text-center shadow-[0_24px_70px_rgba(27,63,104,0.10)]">

          <Loader2
            size={42}
            className="mx-auto animate-spin text-primary-red"
          />

          <h1 className="mt-7 text-3xl font-black text-primary-blue">
            Loading Subscription
          </h1>

        </div>
      </Container>
    </main>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <UnsubscribeFallback />
      }
    >
      <UnsubscribeContent />
    </Suspense>
  );
}