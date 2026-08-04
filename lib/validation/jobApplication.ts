import type {
  JobApplicationData,
  JobApplicationErrors,
} from "@/lib/types/jobApplication";

type JobApplicationValidationSuccess = {
  success: true;
  data: JobApplicationData;
};

type JobApplicationValidationFailure = {
  success: false;
  errors: JobApplicationErrors;
};

export type JobApplicationValidationResult =
  | JobApplicationValidationSuccess
  | JobApplicationValidationFailure;

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN =
  /^[0-9+\-\s()]{7,20}$/;

const URL_PATTERN =
  /^https?:\/\/[^\s]+$/i;

const ALLOWED_EXPERIENCE_VALUES = new Set([
  "Fresher",
  "Less than 1 Year",
  "1–3 Years",
  "3–5 Years",
  "5–8 Years",
  "8–12 Years",
  "12+ Years",
]);

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
  field: keyof JobApplicationData;
  label: string;
  errors: JobApplicationErrors;
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

export function validateJobApplication(
  inputData: unknown,
): JobApplicationValidationResult {
  if (
    !inputData ||
    typeof inputData !== "object" ||
    Array.isArray(inputData)
  ) {
    return {
      success: false,
      errors: {
        fullName:
          "Invalid job application submission.",
      },
    };
  }

  const input =
    inputData as Record<string, unknown>;

  const data: JobApplicationData = {
    position: cleanText(input.position),
    fullName: cleanText(input.fullName),
    email: cleanText(input.email).toLowerCase(),
    phone: cleanText(input.phone),
    currentLocation: cleanText(
      input.currentLocation,
    ),
    currentCompany: cleanText(
      input.currentCompany,
    ),
    experience: cleanText(input.experience),
    qualification: cleanText(
      input.qualification,
    ),
    currentSalary: cleanText(
      input.currentSalary,
    ),
    expectedSalary: cleanText(
      input.expectedSalary,
    ),
    noticePeriod: cleanText(
      input.noticePeriod,
    ),
    portfolioUrl: cleanText(
      input.portfolioUrl,
    ),
    message: cleanText(input.message),
  };

  const errors: JobApplicationErrors = {};

  validateRequiredText({
    value: data.position,
    field: "position",
    label: "the position",
    errors,
    minimumLength: 2,
    maximumLength: 160,
  });

  validateRequiredText({
    value: data.fullName,
    field: "fullName",
    label: "your full name",
    errors,
    minimumLength: 2,
    maximumLength: 80,
  });

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
  } else if (
    data.phone.replace(/\D/g, "").length < 10
  ) {
    errors.phone =
      "Please enter a valid phone number.";
  }

  validateRequiredText({
    value: data.currentLocation,
    field: "currentLocation",
    label: "your current location",
    errors,
    minimumLength: 2,
    maximumLength: 150,
  });

  if (data.currentCompany.length > 180) {
    errors.currentCompany =
      "Company name cannot exceed 180 characters.";
  }

  if (!data.experience) {
    errors.experience =
      "Please select your experience.";
  } else if (
    !ALLOWED_EXPERIENCE_VALUES.has(
      data.experience,
    )
  ) {
    errors.experience =
      "Please select a valid experience level.";
  }

  if (data.qualification.length > 180) {
    errors.qualification =
      "Qualification cannot exceed 180 characters.";
  }

  if (data.currentSalary.length > 100) {
    errors.currentSalary =
      "Current salary cannot exceed 100 characters.";
  }

  if (data.expectedSalary.length > 100) {
    errors.expectedSalary =
      "Expected salary cannot exceed 100 characters.";
  }

  if (data.noticePeriod.length > 100) {
    errors.noticePeriod =
      "Notice period cannot exceed 100 characters.";
  }

  if (
    data.portfolioUrl &&
    !URL_PATTERN.test(data.portfolioUrl)
  ) {
    errors.portfolioUrl =
      "Please enter a complete URL beginning with http:// or https://.";
  } else if (
    data.portfolioUrl.length > 500
  ) {
    errors.portfolioUrl =
      "Portfolio URL cannot exceed 500 characters.";
  }

  if (data.message.length > 3000) {
    errors.message =
      "Cover note cannot exceed 3000 characters.";
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