export type JobApplicationData = {
  position: string;
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  currentCompany: string;
  experience: string;
  qualification: string;
  currentSalary: string;
  expectedSalary: string;
  noticePeriod: string;
  portfolioUrl: string;
  message: string;
};

export type JobApplicationField =
  | keyof JobApplicationData
  | "resume";

export type JobApplicationErrors = Partial<
  Record<JobApplicationField, string>
>;

export type JobApplicationApiResponse = {
  success: boolean;
  message: string;
  errors?: JobApplicationErrors;
};

export type JobApplicationResume = {
  filename: string;
  content: Buffer;
  contentType: string;
};