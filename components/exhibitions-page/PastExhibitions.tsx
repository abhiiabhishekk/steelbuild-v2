"use client";

import {
  motion,
} from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Presentation,
  Store,
} from "lucide-react";

import Container from "@/components/layout/Container";
import ExhibitionGallery from "@/components/exhibitions-page/ExhibitionGallery";
import ExhibitionVideo from "@/components/exhibitions-page/ExhibitionVideo";

import type {
  SanityExhibition,
} from "@/types/sanityExhibition";

type PastExhibitionsProps = {
  exhibitions:
    SanityExhibition[];
};

function createLocation(
  exhibition:
    SanityExhibition,
): string {
  return [
    exhibition.venue,
    exhibition.city,
    exhibition.state,
    exhibition.country,
  ]
    .filter(Boolean)
    .join(", ");
}

function createBoothLabel(
  exhibition:
    SanityExhibition,
): string {
  return [
    exhibition.hallNumber,
    exhibition.stallNumber,
  ]
    .filter(Boolean)
    .join(" · ");
}

export default function PastExhibitions({
  exhibitions,
}: PastExhibitionsProps) {
  return (
    <section
      id="past-exhibitions"
      className="relative scroll-mt-32 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-24 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            margin: "-100px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Presentation
              size={15}
            />

            Exhibition Journey
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Showcasing Steelbuild Across Leading Industry Events
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Explore our participation in
            warehousing, industrial and
            business exhibitions through
            event highlights, galleries and
            videos.
          </p>
        </motion.div>

        {exhibitions.length >
        0 ? (
          <div className="relative z-10 mt-16 space-y-16 lg:space-y-24">
            {exhibitions.map(
              (
                exhibition,
                index,
              ) => {
                const location =
                  createLocation(
                    exhibition,
                  );

                const booth =
                  createBoothLabel(
                    exhibition,
                  );

                return (
                  <motion.article
                    key={
                      exhibition._id
                    }
                    id={
                      exhibition.slug
                    }
                    initial={{
                      opacity: 0,
                      y: 36,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin:
                        "-80px",
                    }}
                    transition={{
                      duration:
                        0.65,
                      delay:
                        index *
                        0.05,
                    }}
                    className="scroll-mt-32"
                  >
                    <div className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-[0_26px_85px_rgba(27,63,104,0.1)]">
                      <div className="grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
                        <div className="relative isolate overflow-hidden bg-primary-blue p-8 text-white md:p-10 lg:p-12">
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

                          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

                          <div className="relative z-10">
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                              <CalendarDays
                                size={
                                  14
                                }
                                className="text-primary-red"
                              />

                              {new Date(
                                `${exhibition.startDate}T00:00:00`,
                              ).getFullYear()}
                            </span>

                            <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                              {
                                exhibition.title
                              }
                            </h3>

                            <p className="mt-5 text-base font-medium leading-8 text-white/70">
                              {
                                exhibition.shortDescription
                              }
                            </p>

                            <div className="mt-8 space-y-3">
                              {location && (
                                <InfoItem
                                  icon={
                                    MapPin
                                  }
                                  value={
                                    location
                                  }
                                />
                              )}

                              <InfoItem
                                icon={
                                  CalendarDays
                                }
                                value={
                                  exhibition.dateLabel
                                }
                              />

                              {booth && (
                                <InfoItem
                                  icon={
                                    Store
                                  }
                                  value={
                                    booth
                                  }
                                />
                              )}
                            </div>

                            {exhibition
                              .highlights
                              .length >
                              0 && (
                              <div className="mt-8 border-t border-white/10 pt-7">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                                  Event Highlights
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                  {exhibition.highlights.map(
                                    (
                                      highlight,
                                    ) => (
                                      <span
                                        key={
                                          highlight
                                        }
                                        className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-xs font-bold text-white/75"
                                      >
                                        {
                                          highlight
                                        }
                                      </span>
                                    ),
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-7 bg-white p-5 md:p-7 lg:p-8">
                          <ExhibitionGallery
                            title={
                              exhibition.title
                            }
                            images={
                              exhibition.gallery
                            }
                          />

                          {exhibition.youtubeVideoId && (
                            <ExhibitionVideo
                              videoId={
                                exhibition.youtubeVideoId
                              }
                              title={
                                exhibition.title
                              }
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              },
            )}
          </div>
        ) : (
          <div className="relative z-10 mt-14 rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-[0_20px_65px_rgba(27,63,104,0.08)]">
            <Presentation
              size={40}
              className="mx-auto text-primary-red"
            />

            <h3 className="mt-5 text-2xl font-black text-primary-blue">
              Exhibition Records Will Be Added Soon
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-500">
              Steelbuild exhibition
              photographs, event details and
              videos will be published here
              as they become available.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

type InfoItemProps = {
  icon: typeof MapPin;
  value: string;
};

function InfoItem({
  icon: Icon,
  value,
}: InfoItemProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4">
      <Icon
        size={19}
        className="mt-0.5 shrink-0 text-primary-red"
      />

      <span className="text-sm font-black leading-6 text-white/82">
        {value}
      </span>
    </div>
  );
}