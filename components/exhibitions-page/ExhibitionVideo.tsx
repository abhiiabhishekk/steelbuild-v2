"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

type ExhibitionVideoProps = {
  videoId: string;
  title: string;
};

export default function ExhibitionVideo({
  videoId,
  title,
}: ExhibitionVideoProps) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_22px_70px_rgba(27,63,104,0.1)]"
    >
      {/* Video heading */}

      <div className="flex flex-col gap-5 border-b border-gray-200 bg-[#f8fafc] p-6 sm:flex-row sm:items-center sm:justify-between md:p-7">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.24)]">
            <Play
              size={27}
              className="fill-current"
            />
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
              Exhibition Video
            </p>

            <h3 className="mt-2 text-xl font-black leading-tight text-primary-blue md:text-2xl">
              {title}
            </h3>
          </div>
        </div>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-primary-blue/15 bg-white px-5 py-3 text-sm font-black !text-primary-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-red hover:bg-primary-red hover:!text-white"
        >
          Watch on YouTube

          <ExternalLink
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>

      {/* YouTube video */}

      <div className="relative aspect-video overflow-hidden bg-primary-blue">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={`${title} exhibition video`}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />

        <div className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
          <Play
            size={14}
            className="fill-current"
          />

          Official Exhibition Film
        </div>
      </div>
    </motion.div>
  );
}