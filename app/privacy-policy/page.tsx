import type { Metadata } from "next";
import Link from "next/link";

import LegalPageLayout from "@/components/legal-page/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Steelbuild Infra Projects Limited",
  description:
    "Read the Steelbuild Infra Projects Limited privacy policy and learn how information submitted through our website is collected, used, retained and protected.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Steelbuild Infra Projects Limited respects your privacy and is
          committed to handling personal information responsibly. This Privacy
          Policy explains how information may be collected, used, stored and
          disclosed when you visit our website, communicate with us or submit
          information through our online forms.
        </p>

        <p className="mt-4">
          By using this website or voluntarily submitting your information, you
          acknowledge the practices described in this policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We May Collect",
    content: (
      <>
        <p>We may collect information including:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Name, company name and professional designation.</li>
          <li>Email address, telephone number and contact details.</li>
          <li>Project location, project type and enquiry requirements.</li>
          <li>Information submitted through contact, quotation or career forms.</li>
          <li>Resume, employment history or professional information.</li>
          <li>
            Browser, device, IP address and general website usage information.
          </li>
          <li>
            Communications exchanged with Steelbuild through email, telephone
            or other channels.
          </li>
        </ul>

        <p className="mt-4">
          Please avoid submitting confidential, commercially sensitive or
          unnecessary personal information through general website forms.
        </p>
      </>
    ),
  },
  {
    id: "how-information-is-collected",
    title: "How Information Is Collected",
    content: (
      <>
        <p>Information may be collected when you:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Submit a project enquiry or request a quotation.</li>
          <li>Contact Steelbuild through a website form.</li>
          <li>Apply for a job or submit professional information.</li>
          <li>Download or request company documents.</li>
          <li>Subscribe to future updates, where such a feature is provided.</li>
          <li>Interact with embedded videos or third-party website services.</li>
          <li>Browse pages on the website.</li>
        </ul>
      </>
    ),
  },
  {
    id: "use-of-information",
    title: "How We Use Information",
    content: (
      <>
        <p>Information may be used to:</p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Respond to enquiries and project requirements.</li>
          <li>Prepare quotations, proposals or technical discussions.</li>
          <li>Communicate with clients, consultants and project partners.</li>
          <li>Review job applications and recruitment enquiries.</li>
          <li>Improve website content, functionality and user experience.</li>
          <li>Maintain website security and prevent misuse.</li>
          <li>Meet legal, regulatory or contractual obligations.</li>
          <li>Maintain internal business and communication records.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-basis-and-consent",
    title: "Consent and Lawful Processing",
    content: (
      <>
        <p>
          Where required, personal information will be processed based on your
          consent, your voluntary request, legitimate business requirements,
          contractual necessity or compliance with applicable law.
        </p>

        <p className="mt-4">
          When you submit a form, request communication or provide project
          information, you authorise Steelbuild to use that information for the
          purpose for which it was provided and for reasonably connected
          business communication.
        </p>
      </>
    ),
  },
  {
    id: "cookies-and-analytics",
    title: "Cookies and Website Analytics",
    content: (
      <>
        <p>
          The website may use cookies or similar technologies to support
          essential functionality, security, performance measurement and
          website analytics.
        </p>

        <p className="mt-4">
          Cookies may store limited technical information concerning your
          browser or website interaction. You can restrict or remove cookies
          through your browser settings, although some website features may not
          function correctly afterwards.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services and Embedded Content",
    content: (
      <>
        <p>
          The website may contain links to external websites or embedded
          content from services such as YouTube, Google, social media platforms
          or mapping and analytics providers.
        </p>

        <p className="mt-4">
          These third parties may collect information according to their own
          privacy policies. Steelbuild does not control and is not responsible
          for the privacy practices or content of third-party services.
        </p>
      </>
    ),
  },
  {
    id: "sharing-of-information",
    title: "Sharing and Disclosure",
    content: (
      <>
        <p>
          Steelbuild does not intend to sell personal information. Information
          may, however, be shared where reasonably necessary with:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Authorised Steelbuild employees and business teams.</li>
          <li>Service providers supporting hosting, email or website systems.</li>
          <li>Professional advisers, auditors or consultants.</li>
          <li>
            Government, regulatory or law-enforcement authorities where
            required by law.
          </li>
          <li>
            Business partners involved in responding to a specific authorised
            enquiry or project requirement.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          Information may be retained for as long as reasonably required to
          respond to enquiries, maintain project and business records, fulfil
          contractual requirements, resolve disputes or comply with applicable
          laws.
        </p>

        <p className="mt-4">
          Information that is no longer required may be securely deleted,
          anonymised or archived in accordance with internal practices and
          legal requirements.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Information Security",
    content: (
      <>
        <p>
          Steelbuild uses reasonable administrative, technical and
          organisational measures intended to protect information from
          unauthorised access, disclosure, alteration or loss.
        </p>

        <p className="mt-4">
          However, no website, email transmission or electronic storage system
          can be guaranteed to be completely secure. Users should exercise care
          when submitting information online.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights and Requests",
    content: (
      <>
        <p>
          Subject to applicable law, you may contact Steelbuild to request
          access, correction, updating or deletion of personal information
          associated with you, or to withdraw consent where processing is based
          on consent.
        </p>

        <p className="mt-4">
          Requests may be sent to{" "}
          <a
            href="mailto:info@steelbuildinfra.com"
            className="font-black text-primary-blue underline decoration-primary-red/40 underline-offset-4"
          >
            info@steelbuildinfra.com
          </a>
          . We may need to verify your identity before processing a request.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s Information",
    content: (
      <p>
        This website is intended for business, professional and general
        corporate audiences and is not specifically directed at children.
        Steelbuild does not knowingly seek to collect personal information from
        children through general website forms.
      </p>
    ),
  },
  {
    id: "policy-updates",
    title: "Updates to This Policy",
    content: (
      <p>
        Steelbuild may revise this Privacy Policy when website features,
        business practices or legal requirements change. The revised version
        will be published on this page with an updated revision date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    content: (
      <>
        <p>
          Questions, requests or complaints concerning this Privacy Policy may
          be sent to:
        </p>

        <div className="mt-5 rounded-2xl bg-[#f7f9fc] p-5">
          <p className="font-black text-primary-blue">
            Steelbuild Infra Projects Limited
          </p>

          <p className="mt-2">
            303–304, 3rd Floor, R.G. Trade Tower, Netaji Subhash Place,
            Pitampura, New Delhi – 110034
          </p>

          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:info@steelbuildinfra.com"
              className="font-black text-primary-blue"
            >
              info@steelbuildinfra.com
            </a>
          </p>

          <p>
            Website:{" "}
            <Link
              href="/"
              className="font-black text-primary-blue"
            >
              steelbuildinfra.com
            </Link>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal Information"
      title="Privacy Policy"
      description="Learn how Steelbuild Infra Projects Limited handles information submitted through this website and our digital communication channels."
      lastUpdated="01 August 2026"
      sections={sections}
    />
  );
}