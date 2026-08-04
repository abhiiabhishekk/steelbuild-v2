"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Mail,
  MapPin,
  Phone,
  Clock,
  ExternalLink,
} from "lucide-react";
import Container from "@/components/layout/Container";

const contactCards = [
  {
    icon: Building2,
    title: "Registered Office",
    details: [
      "303-304, 3rd Floor, R.G. Trade Tower",
      "Netaji Subhash Place, Pitampura",
      "New Delhi – 110034, India",
    ],
    map: "https://maps.app.goo.gl/3Ry1rymorMa5JfmSA",
  },
  {
    icon: Factory,
    title: "Manufacturing Unit 1",
    details: [
      "Village Katwal, Tehsil Gohana",
      "Sonipat, Haryana – 131409",
      "India",
    ],
    map: "https://maps.app.goo.gl/gANZmXy1uWog8LPw9",
  },
  {
    icon: Factory,
    title: "Manufacturing Unit 2 & 3",
    details: [
      "Village Halalpur",
      "Sonipat, Haryana – 131103",
      "India",
    ],
    map: "https://maps.app.goo.gl/nChi1zSjxJD3WHECA",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday – Saturday", "10:00 AM – 06:30 PM", "Sunday Closed"],
  },
];

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex h-full flex-col rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_35px_90px_rgba(27,63,104,0.14)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-7 text-2xl font-black tracking-[-0.03em] text-primary-blue">
                  {card.title}
                </h3>

                <div className="mt-5 space-y-2">
                  {card.details.map((detail) => (
                    <p
                      key={detail}
                      className="text-sm font-semibold leading-7 text-gray-600"
                    >
                      {detail}
                    </p>
                  ))}
                </div>

                {card.map && (
                  <a
                    href={card.map}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex pt-6 font-black text-primary-red transition hover:text-primary-blue"
                  >
                    Open in Google Maps
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <a
            href="tel:+918130199427"
            className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25"
          >
            <Phone className="text-primary-red" size={32} />
            <h3 className="mt-5 text-2xl font-black text-primary-blue">
              Call Us
            </h3>
            <p className="mt-3 font-bold text-gray-600">+91 81301 99427</p>
            {/* <p className="font-bold text-gray-600">+91 99170 65110</p> */}
          </a>

          <a
            href="mailto:info@steelbuildinfra.com"
            className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25"
          >
            <Mail className="text-primary-red" size={32} />
            <h3 className="mt-5 text-2xl font-black text-primary-blue">
              Email Us
            </h3>
            <p className="mt-3 font-bold text-gray-600">
              info@steelbuildinfra.com
            </p>
            {/* <p className="font-bold text-gray-600">va@steelbuildinfra.com</p> */}
          </a>
        </div>
      </Container>
    </section>
  );
}