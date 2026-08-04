export type CareerApplicationType =
  | "Specific Opening"
  | "General Application";

export type CareerFormData = {
  fullName: string;
  email: string;
  phone: string;

  currentLocation: string;

  department: string;
  preferredRole: string;

  experience: string;
  qualification: string;
  currentCompany: string;

  message: string;

  applicationType:
    CareerApplicationType;

  jobDocumentId: string;
  jobId: string;
  jobSlug: string;
  jobTitle: string;
  jobDepartment: string;
};

export type CareerFormField =
  | keyof CareerFormData
  | "resume";

export type CareerFormErrors = Partial<
  Record<CareerFormField, string>
>;

export type CareerApiSuccessResponse = {
  success: true;
  message: string;
};

export type CareerApiErrorResponse = {
  success: false;
  message: string;
  errors?: CareerFormErrors;
};

export type CareerApiResponse =
  | CareerApiSuccessResponse
  | CareerApiErrorResponse;

export type CareerResumeAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};