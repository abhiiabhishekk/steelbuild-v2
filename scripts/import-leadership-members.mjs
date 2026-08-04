import fs from "node:fs";
import path from "node:path";

import {
  createClient,
} from "@sanity/client";

const projectId =
  process.env
    .NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env
    .NEXT_PUBLIC_SANITY_DATASET ||
  "production";

const token =
  process.env
    .SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_PROJECT_ID is missing from .env.local",
  );
}

if (!dataset) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_DATASET is missing from .env.local",
  );
}

if (!token) {
  throw new Error(
    "A valid SANITY_API_WRITE_TOKEN is required in .env.local",
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion:
    "2026-08-01",
  useCdn: false,
});

const leadershipMembers = [
  {
    leaderId: "LDR-001",

    slug: "varun-arora",

    name:
      "Mr. Varun Arora",

    designation:
      "Director & Co-Founder",

    imagePath:
      "public/images/about/varun-arora.jpg",

    imagePosition:
      "50% 28%",

    shortDescription:
      "Provides strategic leadership across business development, engineering coordination, manufacturing growth and large-scale project execution.",

    strengths: [
      "Strategic Leadership",
      "PEB Project Development",
      "Manufacturing Expansion",
      "Relationship Management",
    ],

    messageEyebrow:
      "Vision, Trust and Customer Commitment",

    quote:
      "Every project is a promise of quality, trust and lasting value.",

    message: [
      "At Steelbuild Infra Projects Limited, we are driven by a commitment and quality to customer satisfaction.",

      "We believe that every project is a promise—a promise of quality workmanship, timely delivery, safety, and transparency. Our clients place their trust in us, and we honour that trust through dedication, innovation, and an unwavering focus on results.",

      "Our success is built on strong relationships, a passionate team, and a customer-first approach.",

      "As we continue to grow, our mission remains the same: to work with supremacy to stand out from the crowd by satisfying the customer’s requirements by providing quality service.",
    ],

    signatureName:
      "Varun Arora",

    displayOrder: 1,
  },

  {
    leaderId: "LDR-002",

    slug:
      "sandeep-mendiratta",

    name:
      "Mr. Sandeep Mendiratta",

    designation:
      "Director & Co-Founder",

    imagePath:
      "public/images/about/sandeep-mendiratta.jpg",

    imagePosition:
      "50% 28%",

    shortDescription:
      "Supports organizational growth through commercial planning, operational leadership, financial discipline and long-term business strategy, driving sustainable growth.",

    strengths: [
      "Commercial Strategy",
      "Operational Management",
      "Business Planning",
      "Corporate Governance",
    ],

    messageEyebrow:
      "Manufacturing, Precision and Quality",

    quote:
      "Quality is not just our process—it is our commitment.",

    message: [
      "At Steelbuild Infra Projects Limited, our focus is on delivering high-quality steel structures with speed, precision, and reliability. With advanced production facilities and strict quality control at every stage, we ensure every project meets the highest standards of strength, accuracy, and performance.",

      "Our automated manufacturing systems and skilled team help us maintain consistency in every component we produce. From raw material inspection to final dispatch, every process is monitored with complete attention to quality and safety.",

      "We believe timely delivery and uncompromised quality are the foundation of long-term client trust. Quality is not just a process for us—it is our commitment.",
    ],

    signatureName:
      "Sandeep Mendiratta",

    displayOrder: 2,
  },
];

async function uploadImage(
  relativePath,
  name,
) {
  const absolutePath =
    path.resolve(
      process.cwd(),
      relativePath,
    );

  if (
    !fs.existsSync(
      absolutePath,
    )
  ) {
    throw new Error(
      `Image not found: ${absolutePath}`,
    );
  }

  const asset =
    await client.assets.upload(
      "image",

      fs.createReadStream(
        absolutePath,
      ),

      {
        filename:
          path.basename(
            absolutePath,
          ),

        title: name,
      },
    );

  return asset;
}

async function importLeadership() {
  console.log("");
  console.log(
    `Starting import of ${leadershipMembers.length} leadership members...`,
  );
  console.log("");

  let successful = 0;
  let failed = 0;

  for (
    const member
    of leadershipMembers
  ) {
    try {
      console.log(
        `Uploading image for ${member.name}...`,
      );

      const imageAsset =
        await uploadImage(
          member.imagePath,
          member.name,
        );

      const document = {
        _id:
          `leadershipMember-${member.slug}`,

        _type:
          "leadershipMember",

        leaderId:
          member.leaderId,

        name:
          member.name,

        slug: {
          _type: "slug",
          current:
            member.slug,
        },

        designation:
          member.designation,

        shortDescription:
          member.shortDescription,

        strengths:
          member.strengths,

        profileImage: {
          _type: "image",

          asset: {
            _type:
              "reference",

            _ref:
              imageAsset._id,
          },

          alt:
            `${member.name}, ${member.designation} at Steelbuild Infra Projects Limited`,
        },

        imagePosition:
          member.imagePosition,

        messageEyebrow:
          member.messageEyebrow,

        quote:
          member.quote,

        message:
          member.message,

        signatureName:
          member.signatureName,

        active: true,

        displayOrder:
          member.displayOrder,

        publishedAt:
          new Date()
            .toISOString(),
      };

      const result =
        await client.createOrReplace(
          document,
        );

      successful += 1;

      console.log(
        `✓ ${result.leaderId} — ${result.name}`,
      );
    } catch (error) {
      failed += 1;

      console.error(
        `✗ Failed: ${member.name}`,
      );

      console.error(error);
    }
  }

  console.log("");
  console.log(
    "Leadership import completed.",
  );

  console.log(
    `Successful: ${successful}`,
  );

  console.log(
    `Failed: ${failed}`,
  );

  if (failed > 0) {
    process.exitCode = 1;
  }
}

await importLeadership();