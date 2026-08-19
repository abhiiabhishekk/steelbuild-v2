"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Steelbuild Infra is one of the most promising companies in the PEB industry in terms of quality, delivery and commitments. Mr. Arora and his team are highly professional and supportive.",
    name: "Pritam Yadav",
    company: "Customer Review",
    rating: "5.0",
    source: "Google Review",
  },
  {
    quote:
      "One of the fastest-growing PEB manufacturers delivering world-class building quality with impressive speed. Their leadership and engineering approach truly stand out.",
    name: "Ankur",
    company: "Industrial Manufacturing Professional",
    rating: "4.5",
    source: "YouTube Comment",
  },
  {
    quote:
      "A great company that consistently delivers quality work on time while always prioritizing its clients' requirements and expectations.",
    name: "Pankaj Mandhotra",
    company: "Customer Review",
    rating: "5.0",
    source: "Google Review",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-primary-blue py-28 text-white lg:py-36"
    >
      {/* Background effects */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.13),transparent_32%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_38%,rgba(0,0,0,0.18)_100%)]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.7,
          }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-primary-red">
            Client Confidence
          </p>

          <h2
            id="testimonials-heading"
            className="mt-6 text-4xl font-black leading-[1.04] tracking-[-0.04em] md:text-5xl lg:text-[60px]"
          >
            Trusted for Quality,
            <span className="block">
              Engineering & Reliable Execution.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-white/75">
            Feedback from customers and industry professionals reflects
            Steelbuild Infra Projects Limited&apos;s focus on quality
            Pre-Engineered Buildings, structural steel solutions, dependable
            delivery and long-term professional relationships.
          </p>
        </motion.div>

        {/* Testimonial cards */}

        <div
          className="relative z-10 mt-16 grid gap-8 lg:grid-cols-3"
          aria-label="Client and industry testimonials"
        >
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={`${item.name}-${item.source}`}
              index={index}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}