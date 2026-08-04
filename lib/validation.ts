export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

type ContactValidationResult =
  | {
      success: true;
      data: ContactFormData;
      errors?: never;
    }
  | {
      success: false;
      data?: never;
      errors: ContactFormErrors;
    };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s()]{7,20}$/;

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContactForm(
  inputData: unknown,
): ContactValidationResult {
  if (
    !inputData ||
    typeof inputData !== "object" ||
    Array.isArray(inputData)
  ) {
    return {
      success: false,
      errors: {
        message: "Invalid form submission.",
      },
    };
  }

  const input = inputData as Record<string, unknown>;

  const data: ContactFormData = {
    name: cleanText(input.name),
    company: cleanText(input.company),
    email: cleanText(input.email).toLowerCase(),
    phone: cleanText(input.phone),
    message: cleanText(input.message),
    website: cleanText(input.website),
  };

  const errors: ContactFormErrors = {};

  if (!data.name) {
    errors.name = "Please enter your name.";
  } else if (data.name.length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  } else if (data.name.length > 80) {
    errors.name = "Name cannot exceed 80 characters.";
  }

  if (data.company.length > 120) {
    errors.company = "Company name cannot exceed 120 characters.";
  }

  if (!data.email) {
    errors.email = "Please enter your email address.";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  } else if (data.email.length > 160) {
    errors.email = "Email address cannot exceed 160 characters.";
  }

  if (!data.phone) {
    errors.phone = "Please enter your phone number.";
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!data.message) {
    errors.message = "Please describe your project requirements.";
  } else if (data.message.length < 10) {
    errors.message =
      "Please provide at least 10 characters about your requirement.";
  } else if (data.message.length > 3000) {
    errors.message = "Message cannot exceed 3000 characters.";
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