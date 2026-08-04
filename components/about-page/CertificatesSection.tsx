"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import CertificateGrid from "./CertificateGrid";

export default function CertificatesSection() {
  return (
    <section 
      id="certificates"
      className="relative overflow-hidden bg-white py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-blue/5 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-primary-red">
            Recognitions & Certifications
          </p>

          <h2 className="mt-5 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-primary-blue lg:text-[58px]">
            Industry Recognitions &
            <span className="block">Certificates of Excellence.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600">
            Steelbuild Infra Projects has been recognised by leading
            organisations, industry associations and valued clients for
            engineering excellence, quality and project execution.
          </p>
        </motion.div>

        <CertificateGrid />
      </Container>
    </section>
  );
}