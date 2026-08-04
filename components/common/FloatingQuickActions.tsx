"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Plus,
  X,
  FileCheck2,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| IMPORTANT CONTACT DETAILS
|--------------------------------------------------------------------------
|
| WhatsApp number country code ke saath likho, lekin:
| +, space, dash ya brackets mat lagana.
|
| Example:
| 919876543210
|
| Phone number tel format mein ho sakta hai:
| +91XXXXXXXXXX
|
*/

const WHATSAPP_NUMBER = "918130199427";
const PHONE_NUMBER = "+918130199427";
const COMPANY_EMAIL = "info@steelbuildinfra.com";

const quickActions = [
  {
    label: "WhatsApp",
    description: "Chat with our team",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hello Steelbuild Infra Projects, I would like to discuss a Pre-Engineered Building requirement."
    )}`,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Call Us",
    description: "Speak with an expert",
    href: `tel:${PHONE_NUMBER}`,
    icon: Phone,
    external: true,
  },
  {
  label: "Email Us",
  description: "Send drawings or requirements",
  href: `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(
    "PEB Project Enquiry"
  )}&body=${encodeURIComponent(
    "Hello Steelbuild Infra Projects,\n\nI would like to discuss a Pre-Engineered Building requirement.\n\nProject Location:\nApproximate Area:\nProject Type:\nRequirement Details:\n"
  )}`,
  icon: Mail,
  external: true,
  },
  {
    label: "Request Quote",
    description: "Share your requirement",
    href: "/request-a-quote",
    icon: FileCheck2,
    external: false,
  },
  {
    label: "Company Brochure",
    description: "Explore our capabilities",
    href: "/about/company-brochure",
    icon: FileText,
    external: false,
  },
];

export default function FloatingQuickActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? Math.min((scrollTop / scrollableHeight) * 100, 100)
          : 0;

      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 520);
    };

    updateScrollState();

    window.addEventListener("scroll", updateScrollState, {
      passive: true,
    });

    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[9000] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Expanded Quick Actions */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 14,
              scale: 0.97,
            }}
            transition={{
              duration: 0.24,
              ease: "easeOut",
            }}
            className="pointer-events-auto w-[290px] overflow-hidden rounded-[26px] border border-white/15 bg-[#071f3b]/95 p-3 shadow-[0_28px_90px_rgba(5,20,38,0.38)] backdrop-blur-2xl sm:w-[320px]"
          >
            {/* Header */}

            <div className="flex items-center justify-between px-3 pb-3 pt-2">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
                  Quick Assistance
                </p>

                <p className="mt-1 text-sm font-black text-white">
                  How can we help?
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close quick actions"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] text-white transition-all duration-300 hover:rotate-90 hover:border-primary-red hover:bg-primary-red"
              >
                <X size={17} />
              </button>
            </div>

            {/* Action Items */}

            <div className="space-y-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon;

                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary-red/20 bg-primary-red/[0.09] text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={20} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-black text-white">
                        {action.label}
                      </span>

                      <span className="mt-0.5 block text-xs font-medium text-white/50">
                        {action.description}
                      </span>
                    </span>

                    <span className="ml-auto text-lg font-black text-white/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-red">
                      →
                    </span>
                  </>
                );

                const classes =
                  "group flex min-h-[66px] items-center gap-3 rounded-[19px] border border-white/[0.07] bg-white/[0.055] px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-red/30 hover:bg-white/[0.09]";

                if (action.external) {
                  return (
                    <motion.a
                      key={action.label}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.045,
                      }}
                      href={action.href}
                      target={
                        action.label === "WhatsApp"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        action.label === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={classes}
                    >
                      {content}
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.045,
                    }}
                  >
                    <Link
                      href={action.href}
                      className={classes}
                      onClick={() => setIsOpen(false)}
                    >
                      {content}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}

            <div className="mt-3 border-t border-white/[0.08] px-3 pb-1 pt-3">
              <p className="text-center text-[10px] font-semibold leading-5 text-white/40">
                Steelbuild Infra Projects Limited
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Buttons */}

      <div className="pointer-events-auto flex items-center gap-3">
        {/* Back To Top */}

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 8,
              }}
              transition={{ duration: 0.22 }}
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_16px_50px_rgba(27,63,104,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(27,63,104,0.28)]"
            >
              {/* Progress SVG */}

              <svg
                viewBox="0 0 56 56"
                className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
                aria-hidden="true"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="25"
                  fill="none"
                  stroke="rgba(27,63,104,0.10)"
                  strokeWidth="2"
                />

                <circle
                  cx="28"
                  cy="28"
                  r="25"
                  fill="none"
                  stroke="#c21119"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 25}
                  strokeDashoffset={
                    2 *
                    Math.PI *
                    25 *
                    (1 - scrollProgress / 100)
                  }
                  className="transition-[stroke-dashoffset] duration-150"
                />
              </svg>

              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue text-white transition-all duration-300 group-hover:bg-primary-red">
                <ArrowUp size={20} strokeWidth={2.6} />
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Quick Actions Toggle */}

        <motion.button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          whileTap={{ scale: 0.94 }}
          aria-label={
            isOpen ? "Close quick actions" : "Open quick actions"
          }
          aria-expanded={isOpen}
          className={`group relative flex h-[60px] w-[60px] items-center justify-center rounded-full text-white shadow-[0_20px_55px_rgba(194,17,25,0.32)] transition-all duration-300 hover:-translate-y-1 ${
            isOpen
              ? "bg-primary-blue"
              : "bg-primary-red hover:bg-primary-blue"
          }`}
        >
          <span className="pointer-events-none absolute inset-0 rounded-full border border-white/20" />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.8,
                }}
                transition={{ duration: 0.2 }}
              >
                <X size={25} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{
                  opacity: 0,
                  rotate: 90,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                  scale: 0.8,
                }}
                transition={{ duration: 0.2 }}
              >
                <Plus size={26} strokeWidth={2.5} />
              </motion.span>
            )}
          </AnimatePresence>

          {!isOpen && (
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-primary-blue">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary-blue/60" />
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
}