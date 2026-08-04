"use client";

import { useState } from "react";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import { certificates } from "./certificateData";

export default function CertificateGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            index={index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <CertificateModal
        certificates={certificates}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={setActiveIndex}
      />
    </>
  );
}