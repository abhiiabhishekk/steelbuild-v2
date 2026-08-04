"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";

import Container from "@/components/layout/Container";

type CorporateVideoProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  thumbnail: string;
  youtubeVideoId: string;
  sectionId?: string;
};

export default function CorporateVideo({
  eyebrow = "Corporate Film",
  title,
  description,
  thumbnail,
  youtubeVideoId,
  sectionId = "corporate-video",
}: CorporateVideoProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section
        id={sectionId}
        className="relative scroll-mt-32 overflow-hidden bg-white py-24 lg:py-32"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
              {eyebrow}
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
              {title}
            </h2>

            {description && (
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                {description}
              </p>
            )}
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="group relative z-10 mt-16 block w-full overflow-hidden rounded-[36px] border border-gray-200 bg-primary-blue text-left shadow-[0_30px_90px_rgba(27,63,104,0.16)] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-red/30"
            aria-label={`Play video: ${title}`}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={thumbnail}
                alt={`${title} video thumbnail`}
                fill
                priority={false}
                sizes="(max-width: 1280px) 100vw, 1180px"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b34]/85 via-[#071b34]/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red md:h-24 md:w-24">
                  <Play size={34} className="ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-7 left-7 right-7 md:bottom-10 md:left-10 md:right-10">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                  Watch Video
                </p>

                <h3 className="mt-3 max-w-3xl text-2xl font-black leading-tight text-white md:text-4xl">
                  Discover Steelbuild Infra Projects
                </h3>
              </div>
            </div>
          </motion.button>
        </Container>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:bg-primary-red focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/15 bg-black shadow-2xl"
            >
              <div className="aspect-video w-full">
                <iframe
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
  className="h-full w-full"
  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
  title={title}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}