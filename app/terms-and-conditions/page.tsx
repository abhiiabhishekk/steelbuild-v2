import type { Metadata } from "next";

import LegalPageLayout from "@/components/legal-page/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Steelbuild Infra Projects Limited",
  description:
    "Read the terms governing access to and use of the Steelbuild Infra Projects Limited website.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms and Conditions govern your access to and use of the
          Steelbuild Infra Projects Limited website.
        </p>

        <p className="mt-4">
          By accessing or using this website, you agree to these terms. If you
          do not agree, you should discontinue use of the website.
        </p>
      </>
    ),
  },
  {
    id: "website-purpose",
    title: "Website Purpose",
    content: (
      <>
        <p>
          The website provides general corporate, product, manufacturing,
          project, industry, career and contact information concerning
          Steelbuild Infra Projects Limited.
        </p>

        <p className="mt-4">
          Website information is provided for general informational and
          introductory purposes and does not by itself constitute a binding
          technical offer, commercial quotation, engineering certification,
          warranty or contractual commitment.
        </p>
      </>
    ),
  },
  {
    id: "permitted-use",
    title: "Permitted Use",
    content: (
      <>
        <p>You may use the website for lawful purposes, including:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Learning about Steelbuild and its capabilities.</li>
          <li>Reviewing products, projects and industrial solutions.</li>
          <li>Submitting genuine project or business enquiries.</li>
          <li>Applying for published career opportunities.</li>
          <li>Viewing or downloading authorised corporate documents.</li>
        </ul>
      </>
    ),
  },
  {
    id: "prohibited-use",
    title: "Prohibited Use",
    content: (
      <>
        <p>You must not:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Use the website for unlawful, fraudulent or misleading purposes.</li>
          <li>Attempt to gain unauthorised access to website systems.</li>
          <li>Introduce malware, harmful code or automated attacks.</li>
          <li>Scrape, copy or extract website content without authorisation.</li>
          <li>Impersonate another person or submit false information.</li>
          <li>Interfere with website operation, security or availability.</li>
          <li>
            Use Steelbuild branding, content or materials in a misleading
            manner.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "information-accuracy",
    title: "Accuracy of Website Information",
    content: (
      <>
        <p>
          Steelbuild aims to keep website information accurate and current.
          However, project data, product specifications, images, capacities,
          descriptions and other information may be updated from time to time.
        </p>

        <p className="mt-4">
          Users should obtain written confirmation directly from Steelbuild
          before relying on website information for technical, commercial,
          procurement, construction or investment decisions.
        </p>
      </>
    ),
  },
  {
    id: "quotations-and-enquiries",
    title: "Enquiries, Proposals and Quotations",
    content: (
      <>
        <p>
          Submission of a website enquiry does not create a contract,
          appointment, agency relationship or obligation on Steelbuild.
        </p>

        <p className="mt-4">
          Any project proposal, pricing, delivery schedule, technical scope,
          specification or commercial commitment will be governed only by the
          relevant written quotation, agreement, purchase order or contract
          issued or accepted by authorised parties.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: (
      <>
        <p>
          Unless otherwise stated, website designs, text, graphics, videos,
          project presentations, documents, logos, trade names, photographs and
          other materials are owned by or lawfully used by Steelbuild Infra
          Projects Limited.
        </p>

        <p className="mt-4">
          Materials may not be reproduced, republished, modified, distributed,
          commercially exploited or represented as belonging to another party
          without prior written permission.
        </p>
      </>
    ),
  },
  {
    id: "project-images",
    title: "Project Images and Representations",
    content: (
      <>
        <p>
          Project images, illustrations, architectural visualisations and
          technical presentations may be used to communicate experience,
          capability or design concepts.
        </p>

        <p className="mt-4">
          Visuals may not represent final project specifications in every
          detail. Actual designs, dimensions, materials and performance
          requirements depend on approved project documents and contractual
          scope.
        </p>
      </>
    ),
  },
  {
    id: "downloads",
    title: "Downloads and Documents",
    content: (
      <>
        <p>
          Brochures, profiles, certificates or other downloadable documents are
          provided for information and legitimate business use.
        </p>

        <p className="mt-4">
          Steelbuild may update or withdraw documents without prior notice.
          Users should verify that they are relying on the current authorised
          version.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links and Services",
    content: (
      <>
        <p>
          The website may link to or embed third-party services, including
          video, maps, social media or external websites.
        </p>

        <p className="mt-4">
          Steelbuild does not control third-party content, availability,
          security or privacy practices and is not responsible for losses
          arising solely from the use of an external website or service.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    content: (
      <p>
        The website is provided on an “as available” basis. To the extent
        permitted by law, Steelbuild does not guarantee that the website will
        always be uninterrupted, error-free, completely secure or suitable for
        every user’s specific purpose.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, Steelbuild will not be liable
        for indirect, incidental or consequential losses arising solely from
        website access, temporary unavailability, reliance on general website
        information or third-party services.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    content: (
      <p>
        Information submitted through this website will be handled in
        accordance with the Steelbuild Privacy Policy available at{" "}
        <a
          href="/privacy-policy"
          className="font-black text-primary-blue underline decoration-primary-red/40 underline-offset-4"
        >
          /privacy-policy
        </a>
        .
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: (
      <p>
        Steelbuild may update these Terms and Conditions when website features,
        business requirements or applicable legal requirements change. Updated
        terms will be published on this page.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    content: (
      <p>
        These terms will be governed by the laws of India. Subject to applicable
        law and any binding contractual dispute-resolution provision, courts
        having jurisdiction in New Delhi, India will have jurisdiction over
        disputes relating specifically to use of this website.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    content: (
      <div className="rounded-2xl bg-[#f7f9fc] p-5">
        <p className="font-black text-primary-blue">
          Steelbuild Infra Projects Limited
        </p>

        <p className="mt-2">
          303–304, 3rd Floor, R.G. Trade Tower, Netaji Subhash Place,
          Pitampura, New Delhi – 110034
        </p>

        <p className="mt-2">Email: info@steelbuildinfra.com</p>

        <p>Website: steelbuildinfra.com</p>
      </div>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="Website Terms"
      title="Terms & Conditions"
      description="These terms explain the conditions governing access to and use of the Steelbuild Infra Projects Limited website."
      lastUpdated="01 August 2026"
      sections={sections}
    />
  );
}