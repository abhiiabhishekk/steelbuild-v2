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

export type ContactValidationResult =
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

export type ContactApiResponse = {
  success: boolean;
  message: string;
  errors?: ContactFormErrors;
};