"use client";

import {
  motion,
} from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Sparkles,
  Store,
} from "lucide-react";

import Container from "@/components/layout/Container";

import type {
  SanityExhibition,
} from "@/types/sanityExhibition";

type UpcomingEventsProps = {
  exhibitions:
    SanityExhibition[];
};

export default function UpcomingEvents({
  exhibitions,
}: UpcomingEventsProps) {
  if (
    exhibitions.length === 0
  ) {
    return null;
  }

  return (
    <section
      id="upcoming-events"
      className="relative scroll-mt-32 bg-white py-24 lg:py-32"
    >
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Sparkles
              size={15}
            />

            Upcoming Events
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Meet Steelbuild at Upcoming Industry Events
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Visit our exhibition booth to
            interact with our team and
            discover our latest
            Pre-Engineered Building
            solutions.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8">
          {exhibitions.map(
            (exhibition) => {
              const location = [
                exhibition.venue,
                exhibition.city,
                exhibition.state,
              ]
                .filter(Boolean)
                .join(", ");

              const booth = [
                exhibition.hallNumber,
                exhibition.stallNumber,
              ]
                .filter(Boolean)
                .join(" · ");

              return (
                <motion.article
                  key={
                    exhibition._id
                  }
                  initial={{
                    opacity: 0,
                    y: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                  className="rounded-[34px] border border-gray-200 bg-white p-8 shadow-[0_25px_75px_rgba(27,63,104,0.08)]"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                        {exhibition.status ===
                        "ongoing"
                          ? "Ongoing Exhibition"
                          : "Upcoming Exhibition"}
                      </p>

                      <h3 className="mt-3 text-3xl font-black text-primary-blue">
                        {
                          exhibition.title
                        }
                      </h3>
                    </div>

                    <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                      {exhibition.status ===
                      "ongoing"
                        ? "Ongoing"
                        : "Upcoming"}
                    </span>
                  </div>

                  <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-gray-600">
                    {
                      exhibition.shortDescription
                    }
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <EventMeta
                      icon={
                        CalendarDays
                      }
                      label="Event Date"
                      value={
                        exhibition.dateLabel
                      }
                    />

                    <EventMeta
                      icon={MapPin}
                      label="Location"
                      value={location}
                    />

                    <EventMeta
                      icon={Store}
                      label="Booth"
                      value={
                        booth ||
                        "Details will be announced"
                      }
                    />
                  </div>
                </motion.article>
              );
            },
          )}
        </div>
      </Container>
    </section>
  );
}

type EventMetaProps = {
  icon: typeof MapPin;
  label: string;
  value: string;
};

function EventMeta({
  icon: Icon,
  label,
  value,
}: EventMetaProps) {
  return (
    <div className="flex gap-3 rounded-2xl bg-[#f8fafc] p-5">
      <Icon className="shrink-0 text-primary-red" />

      <div>
        <p className="text-xs font-black uppercase tracking-[0.1em] text-gray-400">
          {label}
        </p>

        <p className="mt-1 font-black leading-6 text-primary-blue">
          {value}
        </p>
      </div>
    </div>
  );
}