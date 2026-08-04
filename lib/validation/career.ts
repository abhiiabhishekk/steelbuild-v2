import type {
  CareerApplicationType,
  CareerFormData,
  CareerFormErrors,
} from "@/lib/types/career";

type CareerValidationSuccess = {
  success: true;
  data: CareerFormData;
};

type CareerValidationFailure = {
  success: false;
  errors: CareerFormErrors;
};

export type CareerValidationResult =
  | CareerValidationSuccess
  | CareerValidationFailure;

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN =
  /^[0-9+\-\s()]{7,20}$/;

const ALLOWED_DEPARTMENTS =
  new Set([
    "Design & Engineering",
    "Design & Detailing",
    "Manufacturing",
    "Quality Assurance",
    "Project Execution",
    "Sales & Marketing",
    "Commercial",
    "Finance & Accounts",
    "Human Resources",
    "Information Technology",
    "Corporate Functions",
    "Other",
  ]);

const ALLOWED_EXPERIENCE_VALUES =
  new Set([
    "Fresher",
    "Less than 1 Year",
    "1–3 Years",
    "3–5 Years",
    "5–8 Years",
    "8–12 Years",
    "12+ Years",
  ]);

const ALLOWED_APPLICATION_TYPES =
  new Set<CareerApplicationType>([
    "Specific Opening",
    "General Application",
  ]);

function cleanText(
  value: unknown,
): string {
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
  field: keyof CareerFormData;
  label: string;
  errors: CareerFormErrors;
  minimumLength?: number;
  maximumLength?: number;
}) {
  if (!value) {
    errors[field] =
      `Please enter ${label}.`;
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

export function validateCareerForm(
  inputData: unknown,
): CareerValidationResult {
  if (
    !inputData ||
    typeof inputData !== "object" ||
    Array.isArray(inputData)
  ) {
    return {
      success: false,
      errors: {
        fullName:
          "Invalid career form submission.",
      },
    };
  }

  const input =
    inputData as Record<
      string,
      unknown
    >;

  const rawApplicationType =
    cleanText(
      input.applicationType,
    );

  const applicationType =
    rawApplicationType ===
    "Specific Opening"
      ? "Specific Opening"
      : "General Application";

  const data: CareerFormData = {
    fullName:
      cleanText(input.fullName),

    email:
      cleanText(
        input.email,
      ).toLowerCase(),

    phone:
      cleanText(input.phone),

    currentLocation:
      cleanText(
        input.currentLocation,
      ),

    department:
      cleanText(
        input.department,
      ),

    preferredRole:
      cleanText(
        input.preferredRole,
      ),

    experience:
      cleanText(
        input.experience,
      ),

    qualification:
      cleanText(
        input.qualification,
      ),

    currentCompany:
      cleanText(
        input.currentCompany,
      ),

    message:
      cleanText(input.message),

    applicationType,

    jobDocumentId:
      cleanText(
        input.jobDocumentId,
      ),

    jobId:
      cleanText(input.jobId),

    jobSlug:
      cleanText(input.jobSlug),

    jobTitle:
      cleanText(input.jobTitle),

    jobDepartment:
      cleanText(
        input.jobDepartment,
      ),
  };

  const errors:
    CareerFormErrors = {};

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
  } else if (
    !EMAIL_PATTERN.test(
      data.email,
    )
  ) {
    errors.email =
      "Please enter a valid email address.";
  } else if (
    data.email.length > 160
  ) {
    errors.email =
      "Email address cannot exceed 160 characters.";
  }

  if (!data.phone) {
    errors.phone =
      "Please enter your phone number.";
  } else if (
    !PHONE_PATTERN.test(
      data.phone,
    )
  ) {
    errors.phone =
      "Please enter a valid phone number.";
  } else if (
    data.phone.replace(
      /\D/g,
      "",
    ).length < 10
  ) {
    errors.phone =
      "Please enter a valid phone number.";
  }

  validateRequiredText({
    value:
      data.currentLocation,
    field:
      "currentLocation",
    label:
      "your current location",
    errors,
    minimumLength: 2,
    maximumLength: 150,
  });

  if (!data.department) {
    errors.department =
      "Please select your preferred department.";
  } else if (
    !ALLOWED_DEPARTMENTS.has(
      data.department,
    )
  ) {
    errors.department =
      "Please select a valid department.";
  }

  validateRequiredText({
    value:
      data.preferredRole,
    field:
      "preferredRole",
    label:
      "your preferred role",
    errors,
    minimumLength: 2,
    maximumLength: 160,
  });

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

  if (
    data.qualification.length >
    180
  ) {
    errors.qualification =
      "Qualification cannot exceed 180 characters.";
  }

  if (
    data.currentCompany.length >
    180
  ) {
    errors.currentCompany =
      "Company name cannot exceed 180 characters.";
  }

  if (
    data.message.length > 3000
  ) {
    errors.message =
      "Professional summary cannot exceed 3000 characters.";
  }

  if (
    !ALLOWED_APPLICATION_TYPES.has(
      data.applicationType,
    )
  ) {
    errors.applicationType =
      "Invalid application type.";
  }

  if (
    data.applicationType ===
    "Specific Opening"
  ) {
    if (!data.jobDocumentId) {
      errors.jobDocumentId =
        "The selected job reference is missing.";
    }

    if (!data.jobId) {
      errors.jobId =
        "The selected Job ID is missing.";
    }

    if (!data.jobTitle) {
      errors.jobTitle =
        "The selected job title is missing.";
    }

    if (!data.jobDepartment) {
      errors.jobDepartment =
        "The selected job department is missing.";
    }
  }

  if (
    Object.keys(errors).length >
    0
  ) {
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