"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Factory, Maximize2 } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

import Container from "@/components/layout/Container";

type GalleryItem = {
  image: string;
  title: string;
  category: string;
  className?: string;
  imagePosition?: string;
};

const galleryItems: GalleryItem[] = [
  {
    image: "/images/manufacturing/gallery/factory-floor.jpg",
    title: "Integrated Factory Floor",
    category: "Manufacturing Facility",
    className: "md:col-span-2 md:row-span-2",
    imagePosition: "object-center",
  },
  {
    image: "/images/manufacturing/gallery/cnc-cutting.jpg",
    title: "CNC Plasma Cutting",
    category: "Precision Cutting",
    imagePosition: "object-center",
  },
  {
    image: "/images/manufacturing/gallery/h-beam-welding.jpg",
    title: "H-Beam Welding Line",
    category: "Automated Welding",
    imagePosition: "object-center",
  },
  {
    image: "/images/manufacturing/gallery/shot-blasting.jpg",
    title: "Automatic Shot Blasting",
    category: "Surface Preparation",
    imagePosition: "object-center",
  },
  {
    image: "/images/manufacturing/gallery/roll-forming.jpg",
    title: "Roll Forming Process",
    category: "Roofing Production",
    imagePosition: "object-center",
  },
  {
    image: "/images/manufacturing/gallery/quality-inspection.jpg",
    title: "Quality Inspection",
    category: "QA/QC",
    imagePosition: "object-center",
  },
  {
    image: "/images/manufacturing/gallery/packing-dispatch.jpg",
    title: "Packing & Dispatch",
    category: "Project Delivery",
    className: "md:col-span-2 lg:col-span-3",
    imagePosition: "object-center",
  },
];

type LightboxSlide = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const lightboxSlides: LightboxSlide[] = galleryItems.map((item) => ({
  src: item.image,
  alt: `${item.title} at Steelbuild Infra Projects`,
  title: item.title,
  description: item.category,
}));

export default function ManufacturingGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f9fc] pb-20 pt-24 lg:pb-24 lg:pt-32">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary-red/5 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
              <Camera size={15} />
              Manufacturing Gallery
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
              Inside Steelbuild Manufacturing
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Explore our manufacturing infrastructure, advanced machinery,
              fabrication processes and quality-focused production environment.
            </p>
          </motion.div>

          <div className="relative z-10 mt-16 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                aria-label={`Open ${item.title} in fullscreen gallery`}
                className={`group relative overflow-hidden rounded-[28px] bg-primary-blue text-left shadow-[0_22px_65px_rgba(27,63,104,0.12)] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-red/30 ${
                  item.className ?? ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} at Steelbuild Infra Projects`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className={`object-cover ${
                    item.imagePosition ?? "object-center"
                  } transition-transform duration-1000 group-hover:scale-105`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b34]/90 via-[#071b34]/15 to-transparent" />

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-red group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 size={18} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary-red">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mt-12 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-black text-primary-blue shadow-lg">
              <Factory size={19} className="text-primary-red" />
              Precision Manufacturing • Quality Control • Reliable Delivery
            </div>
          </motion.div>
        </Container>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={activeIndex}
        slides={lightboxSlides}
        plugins={[Fullscreen, Zoom]}
        controller={{
          closeOnBackdropClick: true,
        }}
        carousel={{
          finite: false,
          preload: 2,
        }}
        animation={{
          fade: 250,
          swipe: 350,
        }}
        zoom={{
          maxZoomPixelRatio: 4,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        render={{
  slideFooter: ({ slide }) => {
    const currentSlide = slide as {
      title?: string;
      description?: string;
    };

    return (
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 pb-7 pt-20 text-center">
        {currentSlide.title && (
          <h3 className="text-xl font-black text-white md:text-2xl">
            {currentSlide.title}
          </h3>
        )}

        {currentSlide.description && (
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-primary-red">
            {currentSlide.description}
          </p>
        )}
      </div>
    );
  },
}}
        styles={{
          container: {
            backgroundColor: "rgba(3, 14, 28, 0.96)",
          },
          slide: {
            padding: "32px",
          },
          button: {
            filter: "none",
          },
        }}
      />
    </>
  );
}