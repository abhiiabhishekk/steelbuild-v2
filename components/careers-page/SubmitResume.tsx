"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  GraduationCap,
  Loader2,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  Send,
  UploadCloud,
  UserRound,
  X,
} from "lucide-react";

import Container from "@/components/layout/Container";

import type {
  SanityJobOpening,
} from "@/types/sanityJobOpening";

type ResumeFormState = {
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
};

type ResumeFormErrors = Partial<
  Record<keyof ResumeFormState | "resume", string>
>;

type CareerApiResponse = {
  success?: boolean;
  message?: string;
  errors?: ResumeFormErrors;
};

type SubmitResumeProps = {
  selectedOpening: SanityJobOpening | null;
  onClearSelectedOpening: () => void;
};

const initialFormState: ResumeFormState = {
  fullName: "",
  email: "",
  phone: "",
  currentLocation: "",
  department: "",
  preferredRole: "",
  experience: "",
  qualification: "",
  currentCompany: "",
  message: "",
};

const departments = [
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
];

const experienceOptions = [
  "Fresher",
  "Less than 1 Year",
  "1–3 Years",
  "3–5 Years",
  "5–8 Years",
  "8–12 Years",
  "12+ Years",
];

const inputClassName =
  "mt-2 min-h-[58px] w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10";

const selectClassName =
  "mt-2 min-h-[58px] w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold text-primary-blue outline-none transition-all duration-300 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10";

export default function SubmitResume({
  selectedOpening,
  onClearSelectedOpening,
}: SubmitResumeProps) {
  const [formData, setFormData] =
    useState<ResumeFormState>(initialFormState);

  const [errors, setErrors] =
    useState<ResumeFormErrors>({});

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [fileError, setFileError] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [submissionError, setSubmissionError] =
    useState("");

  const fileInputRef =
    useRef<HTMLInputElement | null>(null);

  const isSpecificOpening =
    Boolean(selectedOpening);

  useEffect(() => {
    if (!selectedOpening) {
      return;
    }

    setSubmitted(false);
    setSubmissionError("");

    setErrors((current) => ({
      ...current,
      department: undefined,
      preferredRole: undefined,
    }));

    setFormData((current) => ({
      ...current,
      department:
        selectedOpening.department,
      preferredRole:
        selectedOpening.title,
    }));
  }, [selectedOpening]);

  const updateField = (
    field: keyof ResumeFormState,
    value: string,
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }

    if (submissionError) {
      setSubmissionError("");
    }
  };

  const validateForm = () => {
    const nextErrors: ResumeFormErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName =
        "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email,
      )
    ) {
      nextErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone =
        "Please enter your phone number.";
    } else if (
      formData.phone.replace(/\D/g, "").length <
      10
    ) {
      nextErrors.phone =
        "Please enter a valid phone number.";
    }

    if (!formData.currentLocation.trim()) {
      nextErrors.currentLocation =
        "Please enter your current location.";
    }

    if (!formData.department) {
      nextErrors.department =
        "Please select your preferred department.";
    }

    if (!formData.preferredRole.trim()) {
      nextErrors.preferredRole =
        "Please enter your preferred role.";
    }

    if (!formData.experience) {
      nextErrors.experience =
        "Please select your experience.";
    }

    if (!selectedFile) {
      nextErrors.resume =
        "Please upload your resume.";
    }

    setErrors(nextErrors);
    setFileError(nextErrors.resume || "");

    return Object.keys(nextErrors).length === 0;
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    setFileError("");
    setSubmissionError("");

    setErrors((current) => ({
      ...current,
      resume: undefined,
    }));

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const allowedExtensions = [
      "pdf",
      "doc",
      "docx",
    ];

    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase() ?? "";

    if (
      !allowedExtensions.includes(extension)
    ) {
      const errorMessage =
        "Please upload a PDF, DOC or DOCX resume.";

      setSelectedFile(null);
      setFileError(errorMessage);

      setErrors((current) => ({
        ...current,
        resume: errorMessage,
      }));

      event.target.value = "";
      return;
    }

    const maxSize =
      10 * 1024 * 1024;

    if (file.size > maxSize) {
      const errorMessage =
        "Resume file size must be less than 10 MB.";

      setSelectedFile(null);
      setFileError(errorMessage);

      setErrors((current) => ({
        ...current,
        resume: errorMessage,
      }));

      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError("");

    setErrors((current) => ({
      ...current,
      resume: undefined,
    }));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleGeneralApplication = () => {
    onClearSelectedOpening();

    setSubmitted(false);
    setSubmissionError("");

    setErrors((current) => ({
      ...current,
      department: undefined,
      preferredRole: undefined,
    }));

    setFormData((current) => ({
      ...current,
      department: "",
      preferredRole: "",
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setSubmissionError("");
    setSubmitted(false);

    const valid = validateForm();

    if (!valid) {
      window.setTimeout(() => {
        const firstError =
          document.querySelector(
            "[data-career-error='true']",
          );

        firstError?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);

      return;
    }

    if (!selectedFile) {
      return;
    }

    setSubmitting(true);

    try {
      const requestData =
        new FormData();

      Object.entries(formData).forEach(
        ([field, value]) => {
          requestData.append(
            field,
            value,
          );
        },
      );

      requestData.append(
        "applicationType",
        selectedOpening
          ? "Specific Opening"
          : "General Application",
      );

      requestData.append(
        "jobDocumentId",
        selectedOpening?._id ?? "",
      );

      requestData.append(
        "jobId",
        selectedOpening?.jobId ?? "",
      );

      requestData.append(
        "jobSlug",
        selectedOpening?.slug ?? "",
      );

      requestData.append(
        "jobTitle",
        selectedOpening?.title ?? "",
      );

      requestData.append(
        "jobDepartment",
        selectedOpening?.department ?? "",
      );

      requestData.append(
        "resume",
        selectedFile,
      );

      const response = await fetch(
        "/api/careers",
        {
          method: "POST",
          body: requestData,
        },
      );

      let result: CareerApiResponse;

      try {
        result =
          (await response.json()) as CareerApiResponse;
      } catch {
        result = {
          success: false,
          message:
            "An unexpected response was received from the server.",
        };
      }

      if (
        !response.ok ||
        !result.success
      ) {
        if (result.errors) {
          setErrors(result.errors);

          if (result.errors.resume) {
            setFileError(
              result.errors.resume,
            );
          }

          window.setTimeout(() => {
            const firstError =
              document.querySelector(
                "[data-career-error='true']",
              );

            firstError?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }, 0);
        }

        setSubmissionError(
          result.message ||
            "Unable to submit your application. Please try again.",
        );

        return;
      }

      setSubmitted(true);

      setFormData({
        ...initialFormState,
        department:
          selectedOpening?.department ?? "",
        preferredRole:
          selectedOpening?.title ?? "",
      });

      setErrors({});
      setSubmissionError("");
      removeFile();
    } catch (error) {
      console.error(
        "Career form request failed:",
        error,
      );

      setSubmissionError(
        "A network error occurred. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="submit-resume"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 34,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <FileText size={15} />

            {selectedOpening
              ? "Apply for This Position"
              : "Submit Your Resume"}
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            {selectedOpening
              ? `Apply for ${selectedOpening.title}`
              : "Didn't Find the Right Opening?"}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            {selectedOpening
              ? "Complete the form and upload your latest resume to apply for the selected Steelbuild opening."
              : "Share your profile with Steelbuild for suitable future opportunities across engineering, manufacturing, projects, sales and corporate functions."}
          </p>
        </motion.div>

        {selectedOpening ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative z-10 mx-auto mt-10 max-w-5xl rounded-[28px] border border-primary-red/20 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.08)]"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-red">
                  Applying for Current Opening
                </p>

                <h3 className="mt-2 text-2xl font-black text-primary-blue">
                  {selectedOpening.title}
                </h3>

                <p className="mt-2 text-sm font-semibold leading-7 text-gray-500">
                  {selectedOpening.jobId}
                  {" • "}
                  {selectedOpening.department}
                  {" • "}
                  {selectedOpening.location}
                </p>
              </div>

              <button
                type="button"
                onClick={
                  handleGeneralApplication
                }
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-black text-primary-blue transition hover:border-primary-red hover:text-primary-red"
              >
                Change to General Application
              </button>
            </div>
          </motion.div>
        ) : null}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[1.16fr_0.84fr] xl:items-start">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.65,
            }}
            className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.11)]"
          >
            {submitted ? (
              <div className="flex min-h-[680px] items-center justify-center p-8 md:p-12">
                <div className="max-w-xl text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-red/10 text-primary-red">
                    <CheckCircle2
                      size={40}
                    />
                  </div>

                  <p className="mt-7 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                    {selectedOpening
                      ? "Application Submitted"
                      : "Resume Submitted"}
                  </p>

                  <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl">
                    {selectedOpening
                      ? `Thank You for Applying for ${selectedOpening.title}`
                      : "Thank You for Your Interest in Steelbuild"}
                  </h3>

                  <p className="mt-5 text-base font-medium leading-8 text-gray-600">
                    {selectedOpening
                      ? "Your application and resume have been submitted successfully. Our HR team will review your profile against the requirements of the selected opening."
                      : "Your profile and resume have been submitted successfully. Our HR team will review your application for current and future suitable opportunities."}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSubmitted(false)
                    }
                    className="mt-8 inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white shadow-[0_18px_40px_rgba(194,17,25,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
                  >
                    {selectedOpening
                      ? "Submit Another Application"
                      : "Submit Another Resume"}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="border-b border-gray-200 bg-primary-blue px-7 py-8 md:px-10">
                  <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                    {selectedOpening
                      ? "Job Application"
                      : "Career Profile"}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight text-white md:text-3xl">
                    Candidate Information
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-white/65">
                    {selectedOpening
                      ? "Complete the form and upload your latest resume for the selected opening."
                      : "Complete the form and upload your latest resume for consideration against suitable opportunities."}
                  </p>
                </div>

                <div className="space-y-10 p-7 md:p-10">
                  <div className="grid gap-6 md:grid-cols-2">
                    <CareerField
                      label="Full Name"
                      required
                      error={errors.fullName}
                    >
                      <div className="relative">
                        <UserRound
                          size={18}
                          className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                        />

                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(event) =>
                            updateField(
                              "fullName",
                              event.target.value,
                            )
                          }
                          placeholder="Enter your full name"
                          maxLength={80}
                          aria-invalid={Boolean(
                            errors.fullName,
                          )}
                          className={`${inputClassName} pr-12`}
                        />
                      </div>
                    </CareerField>

                    <CareerField
                      label="Email Address"
                      required
                      error={errors.email}
                    >
                      <div className="relative">
                        <Mail
                          size={18}
                          className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                        />

                        <input
                          type="email"
                          value={formData.email}
                          onChange={(event) =>
                            updateField(
                              "email",
                              event.target.value,
                            )
                          }
                          placeholder="name@email.com"
                          maxLength={160}
                          aria-invalid={Boolean(
                            errors.email,
                          )}
                          className={`${inputClassName} pr-12`}
                        />
                      </div>
                    </CareerField>

                    <CareerField
                      label="Phone Number"
                      required
                      error={errors.phone}
                    >
                      <div className="relative">
                        <Phone
                          size={18}
                          className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                        />

                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(event) =>
                            updateField(
                              "phone",
                              event.target.value,
                            )
                          }
                          placeholder="+91 00000 00000"
                          maxLength={20}
                          aria-invalid={Boolean(
                            errors.phone,
                          )}
                          className={`${inputClassName} pr-12`}
                        />
                      </div>
                    </CareerField>

                    <CareerField
                      label="Current Location"
                      required
                      error={
                        errors.currentLocation
                      }
                    >
                      <div className="relative">
                        <MapPin
                          size={18}
                          className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                        />

                        <input
                          type="text"
                          value={
                            formData.currentLocation
                          }
                          onChange={(event) =>
                            updateField(
                              "currentLocation",
                              event.target.value,
                            )
                          }
                          placeholder="City, State"
                          maxLength={150}
                          aria-invalid={Boolean(
                            errors.currentLocation,
                          )}
                          className={`${inputClassName} pr-12`}
                        />
                      </div>
                    </CareerField>

                    <CareerField
                      label="Preferred Department"
                      required
                      error={
                        errors.department
                      }
                    >
                      <select
                        value={
                          formData.department
                        }
                        onChange={(event) =>
                          updateField(
                            "department",
                            event.target.value,
                          )
                        }
                        disabled={
                          isSpecificOpening
                        }
                        aria-invalid={Boolean(
                          errors.department,
                        )}
                        className={`${selectClassName} disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500`}
                      >
                        <option value="">
                          Select department
                        </option>

                        {departments.map(
                          (department) => (
                            <option
                              key={department}
                              value={department}
                            >
                              {department}
                            </option>
                          ),
                        )}
                      </select>
                    </CareerField>

                    <CareerField
                      label={
                        selectedOpening
                          ? "Position Applied For"
                          : "Preferred Role"
                      }
                      required
                      error={
                        errors.preferredRole
                      }
                    >
                      <input
                        type="text"
                        value={
                          formData.preferredRole
                        }
                        onChange={(event) =>
                          updateField(
                            "preferredRole",
                            event.target.value,
                          )
                        }
                        readOnly={
                          isSpecificOpening
                        }
                        placeholder="Example: PEB Design Engineer"
                        maxLength={160}
                        aria-invalid={Boolean(
                          errors.preferredRole,
                        )}
                        className={`${inputClassName} read-only:cursor-not-allowed read-only:bg-gray-100 read-only:text-gray-600`}
                      />
                    </CareerField>

                    <CareerField
                      label="Total Experience"
                      required
                      error={
                        errors.experience
                      }
                    >
                      <select
                        value={
                          formData.experience
                        }
                        onChange={(event) =>
                          updateField(
                            "experience",
                            event.target.value,
                          )
                        }
                        aria-invalid={Boolean(
                          errors.experience,
                        )}
                        className={
                          selectClassName
                        }
                      >
                        <option value="">
                          Select experience
                        </option>

                        {experienceOptions.map(
                          (option) => (
                            <option
                              key={option}
                              value={option}
                            >
                              {option}
                            </option>
                          ),
                        )}
                      </select>
                    </CareerField>

                    <CareerField
                      label="Highest Qualification"
                      error={
                        errors.qualification
                      }
                    >
                      <div className="relative">
                        <GraduationCap
                          size={18}
                          className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                        />

                        <input
                          type="text"
                          value={
                            formData.qualification
                          }
                          onChange={(event) =>
                            updateField(
                              "qualification",
                              event.target.value,
                            )
                          }
                          placeholder="Example: B.Tech Civil Engineering"
                          maxLength={180}
                          aria-invalid={Boolean(
                            errors.qualification,
                          )}
                          className={`${inputClassName} pr-12`}
                        />
                      </div>
                    </CareerField>

                    <div className="md:col-span-2">
                      <CareerField
                        label="Current or Previous Company"
                        error={
                          errors.currentCompany
                        }
                      >
                        <input
                          type="text"
                          value={
                            formData.currentCompany
                          }
                          onChange={(event) =>
                            updateField(
                              "currentCompany",
                              event.target.value,
                            )
                          }
                          placeholder="Enter organization name"
                          maxLength={180}
                          aria-invalid={Boolean(
                            errors.currentCompany,
                          )}
                          className={
                            inputClassName
                          }
                        />
                      </CareerField>
                    </div>
                  </div>

                  <CareerField
                    label="Professional Summary"
                    error={errors.message}
                  >
                    <textarea
                      value={
                        formData.message
                      }
                      onChange={(event) =>
                        updateField(
                          "message",
                          event.target.value,
                        )
                      }
                      rows={6}
                      maxLength={3000}
                      aria-invalid={Boolean(
                        errors.message,
                      )}
                      placeholder="Briefly describe your experience, skills, current responsibilities and career interests..."
                      className="mt-2 w-full resize-y rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold leading-7 text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10"
                    />

                    <div className="mt-2 text-right text-xs font-semibold text-gray-400">
                      {
                        formData.message
                          .length
                      }
                      /3000
                    </div>
                  </CareerField>

                  <div
                    data-career-error={
                      fileError ||
                      errors.resume
                        ? "true"
                        : undefined
                    }
                  >
                    <p className="text-sm font-black text-primary-blue">
                      Upload Resume

                      <span className="ml-1 text-primary-red">
                        *
                      </span>
                    </p>

                    <input
                      ref={fileInputRef}
                      id="resume-file"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={
                        handleFileChange
                      }
                      className="sr-only"
                    />

                    {!selectedFile ? (
                      <label
                        htmlFor="resume-file"
                        className="group mt-3 flex min-h-[190px] cursor-pointer flex-col items-center justify-center rounded-[26px] border-2 border-dashed border-gray-300 bg-[#f8fafc] px-6 py-8 text-center transition-all duration-300 hover:border-primary-red hover:bg-primary-red/[0.025]"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                          <UploadCloud
                            size={27}
                          />
                        </div>

                        <p className="mt-5 font-black text-primary-blue">
                          Choose your latest resume
                        </p>

                        <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                          PDF, DOC or DOCX.
                          Maximum file size:
                          10 MB.
                        </p>
                      </label>
                    ) : (
                      <div className="mt-3 flex items-center justify-between gap-4 rounded-[24px] border border-primary-red/20 bg-primary-red/[0.035] p-5">
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                            <Paperclip
                              size={22}
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate font-black text-primary-blue">
                              {
                                selectedFile.name
                              }
                            </p>

                            <p className="mt-1 text-sm font-semibold text-gray-500">
                              {formatFileSize(
                                selectedFile.size,
                              )}
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={removeFile}
                          aria-label="Remove resume"
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-primary-red hover:bg-primary-red hover:text-white"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    )}

                    {(fileError ||
                      errors.resume) && (
                      <p
                        data-career-error="true"
                        className="mt-3 text-sm font-bold text-primary-red"
                      >
                        {fileError ||
                          errors.resume}
                      </p>
                    )}
                  </div>

                  {submissionError ? (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="flex items-start gap-3 rounded-[22px] border border-red-200 bg-red-50 p-5 text-red-700"
                    >
                      <AlertCircle
                        size={22}
                        className="mt-0.5 shrink-0"
                      />

                      <p className="text-sm font-bold leading-7">
                        {
                          submissionError
                        }
                      </p>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex min-h-[62px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 text-lg font-black !text-white shadow-[0_20px_48px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {submitting ? (
                      <>
                        <Loader2
                          size={20}
                          className="animate-spin"
                        />

                        {selectedOpening
                          ? "Submitting Application..."
                          : "Submitting Resume..."}
                      </>
                    ) : (
                      <>
                        {selectedOpening
                          ? "Submit Job Application"
                          : "Submit My Resume"}

                        <Send size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.aside
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.65,
            }}
            className="space-y-6 xl:sticky xl:top-28"
          >
            <div className="relative isolate overflow-hidden rounded-[34px] bg-primary-blue p-8 shadow-[0_30px_85px_rgba(27,63,104,0.2)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

              <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-primary-red/20 blur-[80px]" />

              <div className="relative z-10">
                <BriefcaseBusiness
                  size={34}
                  className="text-primary-red"
                />

                <p className="mt-6 text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                  {selectedOpening
                    ? "Selected Opening"
                    : "Future Opportunities"}
                </p>

                <h3 className="mt-4 text-3xl font-black leading-tight text-white">
                  {selectedOpening
                    ? selectedOpening.title
                    : "Let Us Know Where You Can Contribute"}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-white/65">
                  {selectedOpening
                    ? `Your application will be submitted for ${selectedOpening.title} in the ${selectedOpening.department} department.`
                    : "Submitting your profile does not guarantee employment. Applications are reviewed according to current and future organizational requirements."}
                </p>

                <div className="mt-7 space-y-3">
                  {(selectedOpening
                    ? [
                        `Job ID: ${selectedOpening.jobId}`,
                        selectedOpening.department,
                        selectedOpening.location,
                        selectedOpening.experience,
                      ]
                    : [
                        "Engineering & Design",
                        "Manufacturing & Quality",
                        "Projects & Site Execution",
                        "Sales & Corporate Functions",
                      ]
                  ).map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4"
                    >
                      <BadgeCheck
                        size={18}
                        className="shrink-0 text-primary-red"
                      />

                      <span className="text-sm font-black text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_20px_60px_rgba(27,63,104,0.08)]">
              <h3 className="text-xl font-black text-primary-blue">
                Before You Submit
              </h3>

              <div className="mt-5 space-y-4">
                {[
                  "Use your latest updated resume.",
                  "Mention your experience accurately.",
                  "Include relevant project or industry experience.",
                  "Ensure your phone and email details are correct.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-primary-red"
                    />

                    <p className="text-sm font-semibold leading-7 text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

type CareerFieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function CareerField({
  label,
  required = false,
  error,
  children,
}: CareerFieldProps) {
  return (
    <label
      className="block"
      data-career-error={
        error ? "true" : undefined
      }
    >
      <span className="text-sm font-black text-primary-blue">
        {label}

        {required && (
          <span className="ml-1 text-primary-red">
            *
          </span>
        )}
      </span>

      {children}

      {error && (
        <span className="mt-2 block text-sm font-bold text-primary-red">
          {error}
        </span>
      )}
    </label>
  );
}

function formatFileSize(
  bytes: number,
) {
  if (bytes < 1024) {
    return `${bytes} Bytes`;
  }

  if (
    bytes <
    1024 * 1024
  ) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    bytes /
    (1024 * 1024)
  ).toFixed(1)} MB`;
}