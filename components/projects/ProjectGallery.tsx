"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

import type { SanityProjectImage } from "@/types/sanityProject";

type ProjectGalleryProps = {
  images: SanityProjectImage[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [open, setOpen] =
    useState(false);

  const [index, setIndex] =
    useState(0);

  const validImages = useMemo(
    () =>
      images.filter(
        (image) =>
          Boolean(image.asset?.url),
      ),
    [images],
  );

  const slides = useMemo(
    () =>
      validImages.map((image) => ({
        src: image.asset?.url ?? "",
        alt:
          image.alt?.trim() ||
          title,
        title: image.caption,
      })),
    [validImages, title],
  );

  if (validImages.length === 0) {
    return null;
  }

  const primaryImage =
    validImages[0];

  const primaryImageUrl =
    primaryImage.asset?.url;

  if (!primaryImageUrl) {
    return null;
  }

  const openImage = (
    imageIndex: number,
  ) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  return (
    <>
      <div
        className="rounded-[40px] border border-gray-200 bg-white p-3 shadow-[0_30px_90px_rgba(27,63,104,0.14)]"
        onClick={() => openImage(0)}
        role="button"
        tabIndex={0}
        aria-label={`Open ${title} project gallery`}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            openImage(0);
          }
        }}
      >
        <div className="relative h-[440px] cursor-zoom-in overflow-hidden rounded-[32px] sm:h-[540px] lg:h-[700px]">
          <Image
            src={primaryImageUrl}
            alt={
              primaryImage.alt?.trim() ||
              `${title} project image`
            }
            fill
            priority
            sizes="100vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {primaryImage.caption ? (
          <p className="px-4 pb-2 pt-4 text-center text-sm font-medium leading-6 text-gray-500">
            {primaryImage.caption}
          </p>
        ) : null}
      </div>

      {validImages.length > 1 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {validImages.map(
            (image, imageIndex) => {
              const imageUrl =
                image.asset?.url;

              if (!imageUrl) {
                return null;
              }

              return (
                <button
                  key={
                    image._key ??
                    `${imageUrl}-${imageIndex}`
                  }
                  type="button"
                  onClick={() =>
                    openImage(imageIndex)
                  }
                  className="rounded-[30px] border border-gray-200 bg-white p-2 text-left shadow-[0_18px_55px_rgba(27,63,104,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(27,63,104,0.16)]"
                >
                  <div className="relative h-[280px] cursor-pointer overflow-hidden rounded-[24px] sm:h-[320px]">
                    <Image
                      src={imageUrl}
                      alt={
                        image.alt?.trim() ||
                        `${title} project gallery image ${imageIndex + 1}`
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  {image.caption ? (
                    <p className="px-3 pb-2 pt-4 text-center text-sm font-medium leading-6 text-gray-500">
                      {image.caption}
                    </p>
                  ) : null}
                </button>
              );
            },
          )}
        </div>
      ) : null}

      <Lightbox
        open={open}
        close={() =>
          setOpen(false)
        }
        slides={slides}
        index={index}
        plugins={[Zoom]}
      />
    </>
  );
}