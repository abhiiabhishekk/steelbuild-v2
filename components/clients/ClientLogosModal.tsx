"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, X } from "lucide-react";

const clientLogos = Array.from({ length: 80 }, (_, index) => ({
  id: index + 1,
  image: `/images/clients/client-${index + 1}.png`,
}));

type ClientLogosModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ClientLogosModal({
  isOpen,
  onClose,
}: ClientLogosModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#06172c]/82 p-3 backdrop-blur-xl sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="client-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.98 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="relative flex max-h-[92vh] w-full max-w-[1380px] flex-col overflow-hidden rounded-[32px] border border-white/15 bg-[#f8fafc] shadow-[0_45px_140px_rgba(0,0,0,0.42)]"
          >
            {/* Background grid */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

            {/* Steelbuild watermark */}

            <div className="pointer-events-none absolute -bottom-28 -right-24 z-[1] h-[520px] w-[520px] opacity-[0.22] md:h-[720px] md:w-[720px]">
              <Image
                src="/images/brand/steelbuild-mark-v2.png"
                alt=""
                fill
                priority
                sizes="720px"
                className="object-contain"
              />
            </div>

            {/* Left decorative ring */}

            <div className="pointer-events-none absolute -left-24 top-1/3 z-[1] h-72 w-72 rounded-full border-[42px] border-primary-red/[0.035]" />

            {/* Decorative glows */}

            <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary-red/[0.07] blur-3xl" />

            <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary-blue/[0.09] blur-3xl" />

            {/* Modal header */}

            <div className="relative z-20 flex shrink-0 items-start justify-between gap-5 border-b border-gray-200 bg-white/90 px-5 py-5 backdrop-blur-xl sm:px-8 sm:py-6 lg:px-10">
              <div className="flex items-start gap-4">
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20 sm:flex">
                  <Building2 size={26} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-red sm:text-xs">
                    Trusted Client Network
                  </p>

                  <h2
                    id="client-modal-title"
                    className="mt-2 text-2xl font-black tracking-[-0.04em] text-primary-blue sm:text-3xl lg:text-4xl"
                  >
                    Organizations That Trust Steelbuild
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-gray-500 sm:text-base">
                    Explore the organizations served across industrial,
                    manufacturing, warehousing, logistics and infrastructure
                    sectors.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close client logos"
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-blue shadow-sm transition-all duration-300 hover:rotate-90 hover:border-primary-red hover:bg-primary-red hover:text-white"
              >
                <X size={21} />
              </button>
            </div>

            {/* Scrollable logo area */}

            <div className="relative z-[2] overflow-y-auto bg-[linear-gradient(180deg,rgba(248,250,252,0.78),rgba(242,246,250,0.9))] px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {clientLogos.map((logo, index) => (
                  <motion.div
                    key={logo.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.32,
                      delay: Math.min(index * 0.015, 0.5),
                    }}
                    className="group relative flex min-h-[118px] items-center justify-center overflow-hidden rounded-[18px] border border-primary-blue/10 bg-white/92 px-5 py-5 shadow-[0_10px_30px_rgba(27,63,104,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/25 hover:bg-white hover:shadow-[0_20px_48px_rgba(27,63,104,0.12)]"
                  >
                    <Image
                      src={logo.image}
                      alt={`Steelbuild client logo ${logo.id}`}
                      width={170}
                      height={80}
                      sizes="170px"
                      className="relative z-10 max-h-[64px] w-auto max-w-full object-contain opacity-100 transition-transform duration-300 group-hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Modal footer */}

            <div className="relative z-20 flex shrink-0 flex-col items-center justify-between gap-4 border-t border-gray-200 bg-white/92 px-6 py-4 backdrop-blur-xl sm:flex-row sm:px-10">
              <p className="text-center text-sm font-semibold text-gray-500 sm:text-left">
                Displaying our client and project-association portfolio.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary-blue px-7 py-3 text-sm font-black !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-red"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}