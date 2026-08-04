"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Clock,
  ExternalLink,
  Factory,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Container from "@/components/layout/Container";

const locations = [
  {
    label: "Registered",
    title: "Registered Office",
    icon: Building2,
    address:
      "303-304, 3rd Floor, R.G. Trade Tower, Netaji Subhash Place, Pitampura, New Delhi – 110034",
    mapLink: "https://maps.app.goo.gl/3Ry1rymorMa5JfmSA",
    embed:
      "https://www.google.com/maps?q=R.G.%20Trade%20Tower%20Netaji%20Subhash%20Place%20Pitampura%20New%20Delhi&output=embed",
  },
  {
    label: "Unit 1",
    title: "Manufacturing Unit 1",
    icon: Factory,
    address: "Village Katwal, Tehsil Gohana, Sonipat, Haryana – 131409",
    mapLink: "https://maps.app.goo.gl/gANZmXy1uWog8LPw9",
    embed:
      "https://www.google.com/maps?q=Village%20Katwal%20Gohana%20Sonipat%20Haryana%20131409&output=embed",
  },
  {
    label: "Unit 2 & 3",
    title: "Manufacturing Unit 2 & 3",
    icon: Factory,
    address: "Village Halalpur, Sonipat, Haryana – 131103",
    mapLink: "https://maps.app.goo.gl/nChi1zSjxJD3WHECA",
    embed:
      "https://www.google.com/maps?q=Village%20Halalpur%20Sonipat%20Haryana%20131103&output=embed",
  },
];

export default function ContactMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLocation = locations[activeIndex];

  const goPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Find Us
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-primary-blue md:text-5xl">
            Visit Our Office & Manufacturing Facilities
          </h2>
        </motion.div>

        <div className="grid items-start gap-5 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goPrevious}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-blue shadow-lg transition hover:border-primary-red hover:bg-primary-red hover:text-white"
                aria-label="Previous location"
              >
                <ArrowLeft size={22} />
              </button>

              <div className="flex flex-wrap justify-center gap-3">
                {locations.map((location, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={location.label}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-full px-5 py-3 text-sm font-black transition-all duration-300 ${
                        isActive
                          ? "bg-primary-red !text-white shadow-xl shadow-primary-red/25"
                          : "border border-gray-200 bg-white !text-primary-blue hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
                      }`}
                    >
                      {location.label}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={goNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-blue shadow-lg transition hover:border-primary-red hover:bg-primary-red hover:text-white"
                aria-label="Next location"
              >
                <ArrowRight size={22} />
              </button>
            </div>

            <div className="overflow-hidden rounded-[36px] border border-gray-200 bg-white p-2 shadow-[0_30px_90px_rgba(27,63,104,0.12)]">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={activeLocation.embed}
                  title={`${activeLocation.title} Map`}
                  src={activeLocation.embed}
                  className="h-[430px] w-full rounded-[30px]"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {locations.map((location, index) => (
                <button
                  key={location.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-primary-red"
                      : "w-2.5 bg-gray-300"
                  }`}
                  aria-label={`Show ${location.label}`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLocation.title}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.35 }}
              className="mt-[68px] h-fit overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.12)] lg:mt-[68px]"
            >
              <div className="p-7 lg:p-8">
                <p className="text-xs font-black uppercase tracking-[0.35em] text-primary-red">
                  Steelbuild Location
                </p>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-primary-blue">
                  {activeLocation.title}
                </h3>

                <p className="mt-4 text-base font-semibold leading-8 text-gray-600">
                  {activeLocation.address}
                </p>

                <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">
                  <a
                    href="tel:+918130199427"
                    className="flex items-center gap-3 font-bold text-gray-600 transition hover:text-primary-red"
                  >
                    <Phone size={18} className="text-primary-red" />
                    +91 81301 99427
                  </a>

                  <a
                    href="mailto:info@steelbuildinfra.com"
                    className="flex items-center gap-3 font-bold text-gray-600 transition hover:text-primary-red"
                  >
                    <Mail size={18} className="text-primary-red" />
                    info@steelbuildinfra.com
                  </a>

                  <div className="flex items-center gap-3 font-bold text-gray-600">
                    <Clock size={18} className="text-primary-red" />
                    Mon – Sat, 10:00 AM – 06:30 PM
                  </div>
                </div>

                <a
                  href={activeLocation.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-primary-red px-6 py-4 font-black !text-white shadow-xl shadow-primary-red/20 transition hover:bg-primary-blue"
                >
                  <MapPin size={18} className="mr-2" />
                  Open in Google Maps
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}