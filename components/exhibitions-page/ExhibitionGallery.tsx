"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  X,
} from "lucide-react";
import {
  createPortal,
} from "react-dom";

import type {
  SanityExhibitionImage,
} from "@/types/sanityExhibition";

type ExhibitionGalleryProps = {
  title: string;
  images:
    SanityExhibitionImage[];
};

const PREVIEW_IMAGE_COUNT = 5;

export default function ExhibitionGallery({
  title,
  images,
}: ExhibitionGalleryProps) {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState<number | null>(
    null,
  );

  const [
    mounted,
    setMounted,
  ] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validImages =
    images.filter(
      (image) =>
        Boolean(image.url),
    );

  const previewImages =
    validImages.slice(
      0,
      PREVIEW_IMAGE_COUNT,
    );

  const remainingImages =
    Math.max(
      validImages.length -
        PREVIEW_IMAGE_COUNT,
      0,
    );

  const closeLightbox = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex(
      (current) => {
        if (current === null) {
          return null;
        }

        return current === 0
          ? validImages.length - 1
          : current - 1;
      },
    );
  };

  const showNext = () => {
    setActiveIndex(
      (current) => {
        if (current === null) {
          return null;
        }

        return current ===
          validImages.length - 1
          ? 0
          : current + 1;
      },
    );
  };

  useEffect(() => {
    if (
      activeIndex === null
    ) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    const handleKeyboard = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === "Escape"
      ) {
        closeLightbox();
      }

      if (
        event.key ===
        "ArrowLeft"
      ) {
        showPrevious();
      }

      if (
        event.key ===
        "ArrowRight"
      ) {
        showNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard,
    );

    return () => {
      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleKeyboard,
      );
    };
  }, [
    activeIndex,
    validImages.length,
  ]);

  if (
    validImages.length === 0
  ) {
    return null;
  }

  return (
    <>
      <div className="overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_22px_70px_rgba(27,63,104,0.1)]">
        <div className="flex flex-col gap-4 border-b border-gray-200 bg-[#f8fafc] p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.24)]">
              <Images size={27} />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                Exhibition Gallery
              </p>

              <h3 className="mt-2 text-xl font-black leading-tight text-primary-blue md:text-2xl">
                {title}
              </h3>
            </div>
          </div>

          <span className="inline-flex w-fit rounded-full bg-primary-blue/10 px-4 py-2 text-xs font-black text-primary-blue">
            {validImages.length} Photos
          </span>
        </div>

        <div className="grid gap-3 p-3 md:grid-cols-2 md:grid-rows-2">
          {previewImages.map(
            (image, index) => {
              const isPrimary =
                index === 0;

              const isLastPreview =
                index ===
                  PREVIEW_IMAGE_COUNT -
                    1 &&
                remainingImages > 0;

              return (
                <button
                  key={
                    image._key ??
                    image.url
                  }
                  type="button"
                  onClick={() =>
                    setActiveIndex(
                      index,
                    )
                  }
                  aria-label={`Open ${title} photo ${
                    index + 1
                  }`}
                  className={`group relative overflow-hidden rounded-[22px] bg-gray-100 ${
                    isPrimary
                      ? "min-h-[310px] md:row-span-2 md:min-h-[520px]"
                      : "min-h-[250px]"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={
                      image.alt ||
                      `${title} exhibition photo ${
                        index + 1
                      }`
                    }
                    fill
                    sizes={
                      isPrimary
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 100vw, 25vw"
                    }
                    placeholder={
                      image.lqip
                        ? "blur"
                        : "empty"
                    }
                    blurDataURL={
                      image.lqip
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/25 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-primary-red">
                    <Expand
                      size={19}
                    />
                  </span>

                  {isLastPreview && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-blue/78 text-white backdrop-blur-[2px]">
                      <span className="text-4xl font-black">
                        +
                        {
                          remainingImages
                        }
                      </span>

                      <span className="mt-2 text-xs font-black uppercase tracking-[0.18em]">
                        View More Photos
                      </span>
                    </div>
                  )}
                </button>
              );
            },
          )}
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {activeIndex !==
              null && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                role="dialog"
                aria-modal="true"
                aria-label={`${title} photo gallery`}
                onClick={
                  closeLightbox
                }
                className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#07182d]/95 p-3 backdrop-blur-md md:p-6"
              >
                <button
                  type="button"
                  onClick={(
                    event,
                  ) => {
                    event.stopPropagation();
                    closeLightbox();
                  }}
                  aria-label="Close gallery"
                  className="absolute right-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-primary-red md:right-7 md:top-7"
                >
                  <X size={24} />
                </button>

                <button
                  type="button"
                  onClick={(
                    event,
                  ) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-primary-red md:left-7"
                >
                  <ChevronLeft
                    size={25}
                  />
                </button>

                <button
                  type="button"
                  onClick={(
                    event,
                  ) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition hover:bg-primary-red md:right-7"
                >
                  <ChevronRight
                    size={25}
                  />
                </button>

                <motion.div
                  key={`${title}-${activeIndex}`}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  onClick={(
                    event,
                  ) =>
                    event.stopPropagation()
                  }
                  className="relative flex h-[calc(100dvh-24px)] w-full max-w-[1380px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0b223d] shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:h-[calc(100dvh-48px)]"
                >
                  <div className="relative min-h-0 flex-1">
                    <Image
                      src={
                        validImages[
                          activeIndex
                        ].url
                      }
                      alt={
                        validImages[
                          activeIndex
                        ].alt ||
                        `${title} photo ${
                          activeIndex +
                          1
                        }`
                      }
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="shrink-0 border-t border-white/10 bg-[#0b223d] px-5 py-4 text-center md:px-8 md:py-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red md:text-[10px]">
                      Exhibition Gallery
                    </p>

                    <h3 className="mt-1.5 text-lg font-black text-white md:text-xl">
                      {title}
                    </h3>

                    {validImages[
                      activeIndex
                    ].caption && (
                      <p className="mx-auto mt-2 max-w-3xl text-sm font-medium text-white/65">
                        {
                          validImages[
                            activeIndex
                          ].caption
                        }
                      </p>
                    )}

                    <p className="mt-1 text-xs font-bold text-white/60 md:text-sm">
                      Photo{" "}
                      {activeIndex +
                        1}{" "}
                      of{" "}
                      {
                        validImages.length
                      }
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}