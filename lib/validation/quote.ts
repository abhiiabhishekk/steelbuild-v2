import type {
  QuoteFormData,
  QuoteFormErrors,
  QuoteValidationResult,
} from "@/lib/types/quote";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\-\s()]{7,20}$/;

const ALLOWED_CRANE_VALUES = [
  "",
  "Yes",
  "No",
  "Not Sure",
];

const ALLOWED_MEZZANINE_VALUES = [
  "",
  "Yes",
  "No",
  "Not Sure",
];

function cleanText(value: unknown): string {
  return typeof value === "string"
    ? value.trim()
    : "";
}

function validateRequiredText({
  value,
  field,
  label,
  errors,
  minimumLength = 2,
  maximumLength = 150,
}: {
  value: string;
  field: keyof QuoteFormData;
  label: string;
  errors: QuoteFormErrors;
  minimumLength?: number;
  maximumLength?: number;
}) {
  if (!value) {
    errors[field] = `Please enter ${label}.`;
    return;
  }

  if (value.length < minimumLength) {
    errors[field] =
      `${label} must contain at least ${minimumLength} characters.`;
    return;
  }

  if (value.length > maximumLength) {
    errors[field] =
      `${label} cannot exceed ${maximumLength} characters.`;
  }
}

export function validateQuoteForm(
  inputData: unknown,
): QuoteValidationResult {
  if (
    !inputData ||
    typeof inputData !== "object" ||
    Array.isArray(inputData)
  ) {
    return {
      success: false,
      errors: {
        projectDescription:
          "Invalid quotation form submission.",
      },
    };
  }

  const input =
    inputData as Record<string, unknown>;

  const data: QuoteFormData = {
    fullName: cleanText(input.fullName),
    companyName: cleanText(input.companyName),
    email: cleanText(input.email).toLowerCase(),
    phone: cleanText(input.phone),
    projectLocation: cleanText(
      input.projectLocation,
    ),
    industry: cleanText(input.industry),
    projectType: cleanText(input.projectType),
    approximateArea: cleanText(
      input.approximateArea,
    ),
    buildingWidth: cleanText(
      input.buildingWidth,
    ),
    buildingLength: cleanText(
      input.buildingLength,
    ),
    clearHeight: cleanText(input.clearHeight),
    craneRequired: cleanText(
      input.craneRequired,
    ),
    mezzanineRequired: cleanText(
      input.mezzanineRequired,
    ),
    roofingRequirement: cleanText(
      input.roofingRequirement,
    ),
    timeline: cleanText(input.timeline),
    projectDescription: cleanText(
      input.projectDescription,
    ),
    website: cleanText(input.website),
  };

  const errors: QuoteFormErrors = {};

  validateRequiredText({
    value: data.fullName,
    field: "fullName",
    label: "your full name",
    errors,
    minimumLength: 2,
    maximumLength: 80,
  });

  if (data.companyName.length > 150) {
    errors.companyName =
      "Company name cannot exceed 150 characters.";
  }

  if (!data.email) {
    errors.email =
      "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email =
      "Please enter a valid email address.";
  } else if (data.email.length > 160) {
    errors.email =
      "Email address cannot exceed 160 characters.";
  }

  if (!data.phone) {
    errors.phone =
      "Please enter your phone number.";
  } else if (!PHONE_PATTERN.test(data.phone)) {
    errors.phone =
      "Please enter a valid phone number.";
  }

  validateRequiredText({
    value: data.projectLocation,
    field: "projectLocation",
    label: "the project location",
    errors,
    minimumLength: 2,
    maximumLength: 180,
  });

  validateRequiredText({
    value: data.industry,
    field: "industry",
    label: "the industry",
    errors,
    minimumLength: 2,
    maximumLength: 120,
  });

  validateRequiredText({
    value: data.projectType,
    field: "projectType",
    label: "the project type",
    errors,
    minimumLength: 2,
    maximumLength: 120,
  });

  if (
    data.approximateArea.length > 100
  ) {
    errors.approximateArea =
      "Approximate area cannot exceed 100 characters.";
  }

  if (data.buildingWidth.length > 100) {
    errors.buildingWidth =
      "Building width cannot exceed 100 characters.";
  }

  if (data.buildingLength.length > 100) {
    errors.buildingLength =
      "Building length cannot exceed 100 characters.";
  }

  if (data.clearHeight.length > 100) {
    errors.clearHeight =
      "Clear height cannot exceed 100 characters.";
  }

  if (
    !ALLOWED_CRANE_VALUES.includes(
      data.craneRequired,
    )
  ) {
    errors.craneRequired =
      "Please select a valid crane requirement.";
  }

  if (
    !ALLOWED_MEZZANINE_VALUES.includes(
      data.mezzanineRequired,
    )
  ) {
    errors.mezzanineRequired =
      "Please select a valid mezzanine requirement.";
  }

  if (
    data.roofingRequirement.length > 150
  ) {
    errors.roofingRequirement =
      "Roofing requirement cannot exceed 150 characters.";
  }

  if (data.timeline.length > 120) {
    errors.timeline =
      "Project timeline cannot exceed 120 characters.";
  }

  if (!data.projectDescription) {
    errors.projectDescription =
      "Please describe your project requirement.";
  } else if (
    data.projectDescription.length < 20
  ) {
    errors.projectDescription =
      "Please provide at least 20 characters about your project.";
  } else if (
    data.projectDescription.length > 5000
  ) {
    errors.projectDescription =
      "Project description cannot exceed 5000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  return {
    success: true,
    data,
  };
}