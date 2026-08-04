"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  IndianRupee,
  Link2,
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

type JobApplicationFormState = {
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

type JobApplicationErrors = Partial<
  Record<keyof JobApplicationFormState | "resume", string>
>;

type JobApplicationApiResponse = {
  success?: boolean;
  message?: string;
  errors?: JobApplicationErrors;
};

const initialFormState: JobApplicationFormState = {
  position: "",
  fullName: "",
  email: "",
  phone: "",
  currentLocation: "",
  currentCompany: "",
  experience: "",
  qualification: "",
  currentSalary: "",
  expectedSalary: "",
  noticePeriod: "",
  portfolioUrl: "",
  message: "",
};

const experienceOptions = [
  "Fresher",
  "Less than 1 Year",
  "1–3 Years",
  "3–5 Years",
  "5–8 Years",
  "8–12 Years",
  "12+ Years",
];

const noticePeriodOptions = [
  "Immediate",
  "15 Days",
  "30 Days",
  "45 Days",
  "60 Days",
  "90 Days",
  "More than 90 Days",
  "Negotiable",
];

const inputClassName =
  "mt-2 min-h-[58px] w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10";

const selectClassName =
  "mt-2 min-h-[58px] w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold text-primary-blue outline-none transition-all duration-300 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10";

export default function JobApplicationForm() {
  const searchParams = useSearchParams();

  const positionFromUrl =
    searchParams.get("position")?.trim() || "";

  const [formData, setFormData] =
    useState<JobApplicationFormState>({
      ...initialFormState,
      position: positionFromUrl,
    });

  const [errors, setErrors] =
    useState<JobApplicationErrors>({});

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [fileError, setFileError] =
    useState("");

  const [submissionError, setSubmissionError] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const fileInputRef =
    useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!positionFromUrl) {
      return;
    }

    setFormData((current) => ({
      ...current,
      position: positionFromUrl,
    }));
  }, [positionFromUrl]);

  const updateField = (
    field: keyof JobApplicationFormState,
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
    const nextErrors: JobApplicationErrors = {};

    if (!formData.position.trim()) {
      nextErrors.position =
        "Please enter the position you are applying for.";
    }

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
      formData.phone.replace(/\D/g, "").length < 10
    ) {
      nextErrors.phone =
        "Please enter a valid phone number.";
    }

    if (!formData.currentLocation.trim()) {
      nextErrors.currentLocation =
        "Please enter your current location.";
    }

    if (!formData.experience) {
      nextErrors.experience =
        "Please select your total experience.";
    }

    if (
      formData.portfolioUrl.trim() &&
      !/^https?:\/\/[^\s]+$/i.test(
        formData.portfolioUrl.trim(),
      )
    ) {
      nextErrors.portfolioUrl =
        "Please enter a complete URL beginning with http:// or https://.";
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

    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase() ?? "";

    const allowedExtensions = [
      "pdf",
      "doc",
      "docx",
    ];

    if (!allowedExtensions.includes(extension)) {
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

    const maxSize = 10 * 1024 * 1024;

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
            "[data-job-error='true']",
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
      const requestData = new FormData();

      Object.entries(formData).forEach(
        ([field, value]) => {
          requestData.append(field, value);
        },
      );

      requestData.append(
        "resume",
        selectedFile,
      );

      const response = await fetch(
        "/api/careers/apply",
        {
          method: "POST",
          body: requestData,
        },
      );

      let result: JobApplicationApiResponse;

      try {
        result =
          (await response.json()) as JobApplicationApiResponse;
      } catch {
        result = {
          success: false,
          message:
            "An unexpected response was received from the server.",
        };
      }

      if (!response.ok || !result.success) {
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
                "[data-job-error='true']",
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
        position: positionFromUrl,
      });

      setErrors({});
      setSubmissionError("");
      removeFile();
    } catch (error) {
      console.error(
        "Job application request failed:",
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
    <section className="relative overflow-hidden bg-[#f7f9fc] pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          <Link
            href="/careers#open-positions"
            className="inline-flex items-center gap-2 font-black !text-primary-blue transition-colors hover:!text-primary-red"
          >
            <ArrowLeft size={18} />
            Back to Current Openings
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto mt-12 max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
              <BriefcaseBusiness size={15} />
              Job Application
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-[-0.05em] text-primary-blue md:text-6xl lg:text-[72px]">
              Apply to Join Steelbuild
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-9 text-gray-600">
              Submit your professional details and latest resume
              for consideration against the selected position.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-10 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.11)]"
            >
              {submitted ? (
                <div className="flex min-h-[720px] items-center justify-center p-8 md:p-12">
                  <div className="max-w-xl text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-red/10 text-primary-red">
                      <CheckCircle2 size={40} />
                    </div>

                    <p className="mt-7 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                      Application Submitted
                    </p>

                    <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl">
                      Thank You for Applying
                    </h2>

                    <p className="mt-5 text-base font-medium leading-8 text-gray-600">
                      Your application and resume have been
                      submitted successfully. Our HR team will
                      review your profile against the requirements
                      of the selected role.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                      <button
                        type="button"
                        onClick={() =>
                          setSubmitted(false)
                        }
                        className="inline-flex min-h-[56px] items-center justify-center rounded-2xl bg-primary-red px-7 py-4 font-black !text-white transition hover:bg-primary-blue"
                      >
                        Submit Another Application
                      </button>

                      <Link
                        href="/careers#open-positions"
                        className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-primary-blue/15 bg-white px-7 py-4 font-black !text-primary-blue transition hover:bg-primary-blue hover:!text-white"
                      >
                        View Other Openings
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="border-b border-gray-200 bg-primary-blue px-7 py-8 md:px-10">
                    <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                      Candidate Application
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
                      Professional Information
                    </h2>

                    <p className="mt-3 text-sm font-medium leading-7 text-white/65">
                      Fields marked with an asterisk are required.
                    </p>
                  </div>

                  <div className="space-y-10 p-7 md:p-10">
                    <ApplicationField
                      label="Position Applied For"
                      required
                      error={errors.position}
                    >
                      <div className="relative">
                        <BriefcaseBusiness
                          size={18}
                          className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                        />

                        <input
                          type="text"
                          value={formData.position}
                          onChange={(event) =>
                            updateField(
                              "position",
                              event.target.value,
                            )
                          }
                          placeholder="Enter position name"
                          maxLength={160}
                          aria-invalid={Boolean(
                            errors.position,
                          )}
                          className={`${inputClassName} pr-12`}
                        />
                      </div>
                    </ApplicationField>

                    <div className="grid gap-6 md:grid-cols-2">
                      <ApplicationField
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
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </ApplicationField>

                      <ApplicationField
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
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </ApplicationField>

                      <ApplicationField
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
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </ApplicationField>

                      <ApplicationField
                        label="Current Location"
                        required
                        error={errors.currentLocation}
                      >
                        <div className="relative">
                          <MapPin
                            size={18}
                            className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                          />

                          <input
                            type="text"
                            value={formData.currentLocation}
                            onChange={(event) =>
                              updateField(
                                "currentLocation",
                                event.target.value,
                              )
                            }
                            placeholder="City, State"
                            maxLength={150}
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </ApplicationField>

                      <ApplicationField
                        label="Current Company"
                        error={errors.currentCompany}
                      >
                        <div className="relative">
                          <Building2
                            size={18}
                            className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                          />

                          <input
                            type="text"
                            value={formData.currentCompany}
                            onChange={(event) =>
                              updateField(
                                "currentCompany",
                                event.target.value,
                              )
                            }
                            placeholder="Enter organization name"
                            maxLength={180}
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </ApplicationField>

                      <ApplicationField
                        label="Total Experience"
                        required
                        error={errors.experience}
                      >
                        <select
                          value={formData.experience}
                          onChange={(event) =>
                            updateField(
                              "experience",
                              event.target.value,
                            )
                          }
                          className={selectClassName}
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
                      </ApplicationField>

                      <ApplicationField
                        label="Highest Qualification"
                        error={errors.qualification}
                      >
                        <div className="relative">
                          <GraduationCap
                            size={18}
                            className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                          />

                          <input
                            type="text"
                            value={formData.qualification}
                            onChange={(event) =>
                              updateField(
                                "qualification",
                                event.target.value,
                              )
                            }
                            placeholder="Example: B.Tech Civil"
                            maxLength={180}
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </ApplicationField>

                      <ApplicationField
                        label="Notice Period"
                        error={errors.noticePeriod}
                      >
                        <div className="relative">
                          <Clock3
                            size={18}
                            className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                          />

                          <select
                            value={formData.noticePeriod}
                            onChange={(event) =>
                              updateField(
                                "noticePeriod",
                                event.target.value,
                              )
                            }
                            className={`${selectClassName} pr-12`}
                          >
                            <option value="">
                              Select notice period
                            </option>

                            {noticePeriodOptions.map(
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
                        </div>
                      </ApplicationField>

                      <ApplicationField
                        label="Current Salary"
                        error={errors.currentSalary}
                      >
                        <div className="relative">
                          <IndianRupee
                            size={18}
                            className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                          />

                          <input
                            type="text"
                            value={formData.currentSalary}
                            onChange={(event) =>
                              updateField(
                                "currentSalary",
                                event.target.value,
                              )
                            }
                            placeholder="Example: ₹8 LPA"
                            maxLength={100}
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </ApplicationField>

                      <ApplicationField
                        label="Expected Salary"
                        error={errors.expectedSalary}
                      >
                        <div className="relative">
                          <IndianRupee
                            size={18}
                            className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                          />

                          <input
                            type="text"
                            value={formData.expectedSalary}
                            onChange={(event) =>
                              updateField(
                                "expectedSalary",
                                event.target.value,
                              )
                            }
                            placeholder="Example: ₹10 LPA"
                            maxLength={100}
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </ApplicationField>

                      <div className="md:col-span-2">
                        <ApplicationField
                          label="Portfolio or LinkedIn URL"
                          error={errors.portfolioUrl}
                        >
                          <div className="relative">
                            <Link2
                              size={18}
                              className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                            />

                            <input
                              type="url"
                              value={formData.portfolioUrl}
                              onChange={(event) =>
                                updateField(
                                  "portfolioUrl",
                                  event.target.value,
                                )
                              }
                              placeholder="https://linkedin.com/in/your-profile"
                              maxLength={500}
                              className={`${inputClassName} pr-12`}
                            />
                          </div>
                        </ApplicationField>
                      </div>
                    </div>

                    <ApplicationField
                      label="Cover Note"
                      error={errors.message}
                    >
                      <textarea
                        value={formData.message}
                        onChange={(event) =>
                          updateField(
                            "message",
                            event.target.value,
                          )
                        }
                        rows={6}
                        maxLength={3000}
                        placeholder="Briefly explain your relevant experience, skills and interest in this position..."
                        className="mt-2 w-full resize-y rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold leading-7 text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10"
                      />

                      <div className="mt-2 text-right text-xs font-semibold text-gray-400">
                        {formData.message.length}/3000
                      </div>
                    </ApplicationField>

                    <div
                      data-job-error={
                        fileError || errors.resume
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
                        id="job-resume-file"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="sr-only"
                      />

                      {!selectedFile ? (
                        <label
                          htmlFor="job-resume-file"
                          className="group mt-3 flex min-h-[190px] cursor-pointer flex-col items-center justify-center rounded-[26px] border-2 border-dashed border-gray-300 bg-[#f8fafc] px-6 py-8 text-center transition-all duration-300 hover:border-primary-red hover:bg-primary-red/[0.025]"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                            <UploadCloud size={27} />
                          </div>

                          <p className="mt-5 font-black text-primary-blue">
                            Choose your latest resume
                          </p>

                          <p className="mt-2 text-sm font-medium text-gray-500">
                            PDF, DOC or DOCX. Maximum 10 MB.
                          </p>
                        </label>
                      ) : (
                        <div className="mt-3 flex items-center justify-between gap-4 rounded-[24px] border border-primary-red/20 bg-primary-red/[0.035] p-5">
                          <div className="flex min-w-0 items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                              <Paperclip size={22} />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate font-black text-primary-blue">
                                {selectedFile.name}
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
                        <p className="mt-3 text-sm font-bold text-primary-red">
                          {fileError ||
                            errors.resume}
                        </p>
                      )}
                    </div>

                    {submissionError ? (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-[22px] border border-red-200 bg-red-50 p-5 text-red-700"
                      >
                        <AlertCircle
                          size={22}
                          className="mt-0.5 shrink-0"
                        />

                        <p className="text-sm font-bold leading-7">
                          {submissionError}
                        </p>
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex min-h-[62px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 text-lg font-black !text-white shadow-[0_20px_48px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {submitting ? (
                        <>
                          <Loader2
                            size={20}
                            className="animate-spin"
                          />

                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Job Application
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="space-y-6 xl:sticky xl:top-28"
            >
              <div className="relative isolate overflow-hidden rounded-[34px] bg-primary-blue p-8 shadow-[0_30px_85px_rgba(27,63,104,0.2)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

                <div className="relative z-10">
                  <BadgeCheck
                    size={34}
                    className="text-primary-red"
                  />

                  <p className="mt-6 text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                    Selected Position
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight text-white">
                    {formData.position ||
                      "Steelbuild Career Opportunity"}
                  </h2>

                  <p className="mt-5 text-sm font-medium leading-7 text-white/65">
                    Your application will be shared with the
                    Steelbuild HR team for review against the
                    requirements of this position.
                  </p>

                  <div className="mt-7 space-y-3">
                    {[
                      "Resume attached securely",
                      "Application sent directly to HR",
                      "Candidate acknowledgement email",
                      "Profile reviewed for selected role",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4"
                      >
                        <CheckCircle2
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
                <FileText
                  size={28}
                  className="text-primary-red"
                />

                <h3 className="mt-5 text-xl font-black text-primary-blue">
                  Application Checklist
                </h3>

                <div className="mt-5 space-y-4">
                  {[
                    "Upload your latest resume.",
                    "Use a valid email and phone number.",
                    "Mention accurate experience details.",
                    "Add portfolio or LinkedIn URL where relevant.",
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
        </div>
      </Container>
    </section>
  );
}

type ApplicationFieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function ApplicationField({
  label,
  required = false,
  error,
  children,
}: ApplicationFieldProps) {
  return (
    <label
      className="block"
      data-job-error={
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

function formatFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} Bytes`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(
    bytes /
    (1024 * 1024)
  ).toFixed(1)} MB`;
}