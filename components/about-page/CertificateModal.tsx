"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import type { Certificate } from "./certificateData";

type CertificateModalProps = {
  certificates: Certificate[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function CertificateModal({
  certificates,
  activeIndex,
  onClose,
  onChange,
}: CertificateModalProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (activeIndex === null) return;

      if (e.key === "Escape") onClose();

      if (e.key === "ArrowRight") {
        onChange((activeIndex + 1) % certificates.length);
      }

      if (e.key === "ArrowLeft") {
        onChange((activeIndex - 1 + certificates.length) % certificates.length);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, certificates.length, onClose, onChange]);

  if (activeIndex === null) return null;

  const current = certificates[activeIndex];
  const isPortrait = current.orientation === "portrait";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-5 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close certificate"
          className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-blue transition hover:bg-primary-red hover:text-white lg:right-8 lg:top-8"
        >
          <X size={22} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onChange(
              (activeIndex - 1 + certificates.length) % certificates.length
            );
          }}
          aria-label="Previous certificate"
          className="absolute left-4 z-20 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-primary-blue transition hover:bg-primary-red hover:text-white md:flex"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onChange((activeIndex + 1) % certificates.length);
          }}
          aria-label="Next certificate"
          className="absolute right-4 z-20 hidden h-14 w-14 items-center justify-center rounded-full bg-white text-primary-blue transition hover:bg-primary-red hover:text-white md:flex"
        >
          <ChevronRight />
        </button>

        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[90vh] max-w-[92vw] overflow-hidden rounded-[24px] bg-white shadow-2xl"
        >
          <Image
            src={current.image}
            alt={current.title}
            width={isPortrait ? 1100 : 1600}
            height={isPortrait ? 1500 : 1000}
            className="max-h-[90vh] w-auto object-contain"
          />
        </motion.div>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 md:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onChange(
                (activeIndex - 1 + certificates.length) % certificates.length
              );
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-blue"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onChange((activeIndex + 1) % certificates.length);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-blue"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}