export type QuoteFormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectLocation: string;
  industry: string;
  projectType: string;
  approximateArea: string;
  buildingWidth: string;
  buildingLength: string;
  clearHeight: string;
  craneRequired: string;
  mezzanineRequired: string;
  roofingRequirement: string;
  timeline: string;
  projectDescription: string;
  website: string;
};

export type QuoteFormErrors = Partial<
  Record<keyof QuoteFormData | "attachment", string>
>;

export type QuoteValidationResult =
  | {
      success: true;
      data: QuoteFormData;
      errors?: never;
    }
  | {
      success: false;
      data?: never;
      errors: QuoteFormErrors;
    };

export type QuoteApiResponse = {
  success: boolean;
  message: string;
  errors?: QuoteFormErrors;
};