"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Building2,
  ChevronRight,
  Frame,
  Layers3,
  Maximize2,
  ShieldCheck,
  X,
} from "lucide-react";

import Container from "@/components/layout/Container";

type TabId =
  | "building-components"
  | "primary-framing"
  | "secondary-members";

type StructuralTab = {
  id: TabId;
  label: string;
  shortLabel: string;
  icon: typeof Building2;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

const structuralTabs: StructuralTab[] = [
  {
    id: "building-components",
    label: "Complete PEB System",
    shortLabel: "PEB Components",
    icon: Building2,
    image:
      "/images/products/pre-engineered-buildings/peb-building-components.jpg",
    imageAlt:
      "Diagram showing the major components of a Pre-Engineered Building system",
    eyebrow: "Building System Overview",
    title: "Understanding a Complete Pre-Engineered Building",
    description:
      "A Pre-Engineered Building combines primary framing, secondary members, roofing, wall systems, bracing, platforms and building accessories into one coordinated structural solution.",
    points: [
      "Rigid frames and rafters",
      "Roof purlins and wall girts",
      "Roof and wall panels",
      "Rod bracing and stability systems",
      "Mezzanine and roof platforms",
      "Doors, windows, louvers and ventilators",
      "Canopies, gutters and downspouts",
      "Ladders, staircases and handrails",
    ],
  },
  {
    id: "primary-framing",
    label: "Primary Framing Types",
    shortLabel: "Primary Framing",
    icon: Frame,
    image:
      "/images/products/pre-engineered-buildings/peb-primary-framing-types.jpg",
    imageAlt:
      "Primary framing types used in Pre-Engineered Steel Buildings",
    eyebrow: "Primary Structural Systems",
    title: "Framing Configurations for Different Building Requirements",
    description:
      "Primary framing can be configured according to building width, clear-span requirements, roof geometry, internal columns, operational layout and mezzanine requirements.",
    points: [
      "Clear Span",
      "Multi Gable",
      "Arched Multi Span",
      "Multi Span MS-1",
      "Multi Span MS-2",
      "Mezzanine Frame",
      "Typical Plan Configuration",
      "Typical Building Section",
    ],
  },
  {
    id: "secondary-members",
    label: "Secondary Members",
    shortLabel: "Secondary Members",
    icon: Layers3,
    image:
      "/images/products/pre-engineered-buildings/peb-secondary-members.jpg",
    imageAlt:
      "Secondary structural members and additional framing configurations used in PEB buildings",
    eyebrow: "Secondary Structural Systems",
    title: "Secondary Members Supporting the Complete Building Envelope",
    description:
      "Secondary members connect and support the primary framing while transferring roof, wall and environmental loads through the complete structural system.",
    points: [
  "C Sections",
  "Purlins & Girts",
  "Eave Struts",
  "Rod Bracing",
  "Sidewall Girts",
  "Roof Purlins",
  "Ridge Purlins",
  "Wall Light Girts",
  "Bracing Purlins",
  "Sag Rods",
  "Tie Rods",
  "Hanging Rods",
],
  },
];

export default function PEBStructuralSystems() {
  const [activeTab, setActiveTab] =
    useState<TabId>("building-components");
    const [isImageOpen, setIsImageOpen] = useState(false);

  const activeContent =
    structuralTabs.find(
      (item) => item.id === activeTab,
    ) ?? structuralTabs[0];

  const ActiveIcon = activeContent.icon;
  useEffect(() => {
  if (!isImageOpen) {
    document.body.style.overflow = "";
    return;
  }

  document.body.style.overflow = "hidden";

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsImageOpen(false);
    }
  };

  window.addEventListener("keydown", handleEscape);

  return () => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", handleEscape);
  };
}, [isImageOpen]);

  return (
    <section
      id="peb-structural-systems"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Boxes size={15} />
            Structural Systems
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Explore the Anatomy of a Pre-Engineered Building
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Understand the major building components, primary framing
            configurations and secondary structural systems forming a
            complete PEB solution.
          </p>
        </motion.div>

        {/* Tabs */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 mx-auto mt-14 flex max-w-4xl flex-col gap-3 rounded-[26px] border border-gray-200 bg-white p-3 shadow-[0_18px_55px_rgba(27,63,104,0.08)] md:flex-row"
        >
          {structuralTabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
  setActiveTab(tab.id);
  setIsImageOpen(false);
}}
                aria-pressed={active}
                className={`group flex min-h-[58px] flex-1 items-center justify-center gap-3 rounded-2xl px-5 py-4 text-sm font-black transition-all duration-300 ${
                  active
                    ? "bg-primary-red text-white shadow-[0_14px_32px_rgba(194,17,25,0.24)]"
                    : "bg-[#f8fafc] text-primary-blue hover:bg-primary-blue hover:text-white"
                }`}
              >
                <Icon size={20} />

                <span>{tab.shortLabel}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Interactive content */}

        <div className="relative z-10 mt-10 overflow-hidden rounded-[38px] border border-gray-200 bg-white shadow-[0_32px_95px_rgba(27,63,104,0.12)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent.id}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.35,
              }}
              className="grid lg:grid-cols-[1.22fr_0.78fr]"
            >
              {/* Diagram */}

              <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-[#edf2f7] p-5 md:p-8 lg:min-h-[680px]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />

                <div className="relative z-10 w-full overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(27,63,104,0.1)]">
                  <div className="relative aspect-[16/11] w-full">
                    <Image
                      src={activeContent.image}
                      alt={activeContent.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 62vw"
                      className="object-contain"
                      priority={
                        activeContent.id ===
                        "building-components"
                      }
                    />
                  </div>
                </div>

                <button
  type="button"
  onClick={() => setIsImageOpen(true)}
  aria-label={`View ${activeContent.label} engineering diagram in fullscreen`}
  className="group absolute bottom-8 right-8 z-20 hidden items-center gap-2 rounded-full bg-primary-blue px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(27,63,104,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:shadow-[0_16px_36px_rgba(194,17,25,0.28)] md:flex"
>
  <Maximize2
    size={15}
    className="transition-transform duration-300 group-hover:scale-110"
  />

  Engineering Diagram
</button>
              </div>

              {/* Information */}

              <div className="relative isolate overflow-hidden bg-primary-blue p-8 md:p-10 lg:p-12">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

                <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                    <ActiveIcon size={30} />
                  </div>

                  <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                    {activeContent.eyebrow}
                  </p>

                  <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                    {activeContent.title}
                  </h3>

                  <p className="mt-5 text-base font-medium leading-8 text-white/70">
                    {activeContent.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {activeContent.points.map(
                      (point) => (
                        <div
                          key={point}
                          className="flex min-h-[64px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                        >
                          <BadgeCheck
                            size={17}
                            className="mt-0.5 shrink-0 text-primary-red"
                          />

                          <span className="text-sm font-black leading-6 text-white/80">
                            {point}
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  <div className="mt-8 flex items-start gap-3 rounded-[22px] border border-primary-red/25 bg-[#102f55] p-5">
                    <ShieldCheck
                      size={22}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <p className="text-sm font-black leading-7 text-white/80">
                      Structural elements are coordinated to work as one
                      complete building system.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation note */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mt-8 flex items-center justify-center gap-3 text-sm font-black text-primary-blue"
        >
          <ChevronRight
            size={18}
            className="text-primary-red"
          />

          Select a structural category above to explore its engineering
          diagram.
        </motion.div>
      </Container>
      <AnimatePresence>
  {isImageOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#06172b]/95 p-3 backdrop-blur-md sm:p-5 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${activeContent.label} engineering diagram`}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          setIsImageOpen(false);
        }
      }}
    >
      {/* Background grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Top bar */}

      <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between gap-4 sm:left-6 sm:right-6 sm:top-6">
        <div className="min-w-0 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md sm:px-5">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red sm:text-[10px]">
            Engineering Diagram
          </p>

          <h3 className="mt-1 truncate text-sm font-black text-white sm:text-base">
            {activeContent.label}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setIsImageOpen(false)}
          aria-label="Close fullscreen diagram"
          className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:border-primary-red hover:bg-primary-red"
        >
          <X size={23} />
        </button>
      </div>

      {/* Image viewer */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 24,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.96,
          y: 16,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="relative z-10 mt-16 h-[calc(100vh-110px)] w-full max-w-[1600px] overflow-hidden rounded-[24px] border border-white/15 bg-white shadow-[0_35px_120px_rgba(0,0,0,0.55)] sm:mt-20 sm:rounded-[30px]"
      >
        <Image
          src={activeContent.image}
          alt={activeContent.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </motion.div>

      {/* Bottom helper */}

      <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-white/10 bg-[#0d2f55]/90 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:block">
        Press ESC or click outside to close
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}