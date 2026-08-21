"use client";

import Link from "next/link";
import {
  ChangeEvent,
  FormEvent,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileText,
  Headphones,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  UploadCloud,
  UsersRound,
  X,
} from "lucide-react";

import Container from "@/components/layout/Container";

type FormState = {
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

type FormErrors = Partial<
  Record<keyof FormState | "attachment", string>
>;

type QuoteApiResponse = {
  success?: boolean;
  message?: string;
  errors?: FormErrors;
};

const initialFormState: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  projectLocation: "",
  industry: "",
  projectType: "",
  approximateArea: "",
  buildingWidth: "",
  buildingLength: "",
  clearHeight: "",
  craneRequired: "",
  mezzanineRequired: "",
  roofingRequirement: "",
  timeline: "",
  projectDescription: "",
  website: "",
};

const industries = [
  "Warehousing",
  "Manufacturing",
  "Logistics",
  "Automobile",
  "Food Processing",
  "Pharmaceutical",
  "FMCG",
  "Textile",
  "Electronics",
  "Cold Storage",
  "Infrastructure & Construction",
  "Commercial",
  "Other",
];

const projectTypes = [
  "Pre-Engineered Building",
  "Industrial Factory",
  "Warehouse",
  "Logistics Facility",
  "Manufacturing Plant",
  "Cold Storage Building",
  "Roofing & Cladding",
  "Standing Seam Roofing",
  "Structural Steel Building",
  "Building Expansion",
  "Other",
];

const roofingOptions = [
  "Standing Seam Roofing",
  "Single Skin Roofing",
  "Sandwich Panel Roofing",
  "Roofing & Cladding System",
  "Deck Sheet System",
  "Not Sure — Need Guidance",
];

const timelineOptions = [
  "Immediately",
  "Within 1 Month",
  "1–3 Months",
  "3–6 Months",
  "6–12 Months",
  "Planning Stage",
];

const benefits = [
  {
    icon: UsersRound,
    title: "Engineering Consultation",
    description:
      "Technical review by experienced engineering and project teams.",
  },
  {
    icon: Building2,
    title: "Customized Proposal",
    description:
      "Project-specific recommendations aligned with your requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Solution",
    description:
      "Controlled manufacturing and multi-stage quality processes.",
  },
  {
    icon: Clock3,
    title: "Structured Response",
    description:
      "Clear technical discussion and quotation planning after review.",
  },
  {
    icon: MapPin,
    title: "Pan-India Support",
    description:
      "Engineering, manufacturing and execution capabilities across India.",
  },
];

const inputClassName =
  "mt-2 min-h-[58px] min-w-0 w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10";

const selectClassName =
  "mt-2 min-h-[58px] min-w-0 w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold text-primary-blue outline-none transition-all duration-300 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10";

export default function QuoteForm() {
  const [formData, setFormData] =
    useState<FormState>(initialFormState);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [fileError, setFileError] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [
    submissionError,
    setSubmissionError,
  ] = useState("");

  const fileInputRef =
    useRef<HTMLInputElement | null>(null);

  const updateField = (
    field: keyof FormState,
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
    const nextErrors: FormErrors = {};

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

    if (
      !formData.projectLocation.trim()
    ) {
      nextErrors.projectLocation =
        "Please enter the project location.";
    }

    if (!formData.industry) {
      nextErrors.industry =
        "Please select an industry.";
    }

    if (!formData.projectType) {
      nextErrors.projectType =
        "Please select a project type.";
    }

    if (
      !formData.projectDescription.trim()
    ) {
      nextErrors.projectDescription =
        "Please describe your project requirement.";
    } else if (
      formData.projectDescription.trim()
        .length < 20
    ) {
      nextErrors.projectDescription =
        "Please provide at least 20 characters about your project.";
    }

    setErrors(nextErrors);

    return (
      Object.keys(nextErrors).length === 0
    );
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file =
      event.target.files?.[0];

    setFileError("");

    setErrors((current) => ({
      ...current,
      attachment: undefined,
    }));

    setSubmissionError("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    const allowedExtensions = [
      "pdf",
      "dwg",
      "dxf",
      "zip",
      "rar",
      "jpg",
      "jpeg",
      "png",
    ];

    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase() ?? "";

    if (
      !allowedExtensions.includes(
        extension,
      )
    ) {
      setSelectedFile(null);

      setFileError(
        "Please upload PDF, DWG, DXF, ZIP, RAR, JPG or PNG files only.",
      );

      event.target.value = "";

      return;
    }

    const maxSize =
      25 * 1024 * 1024;

    if (file.size > maxSize) {
      setSelectedFile(null);

      setFileError(
        "File size must be less than 25 MB.",
      );

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
      attachment: undefined,
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
        const firstErrorField =
          document.querySelector(
            "[data-form-error='true']",
          );

        firstErrorField?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);

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

      if (selectedFile) {
        requestData.append(
          "attachment",
          selectedFile,
        );
      }

      const response = await fetch(
        "/api/request-quote",
        {
          method: "POST",
          body: requestData,
        },
      );

      let result: QuoteApiResponse;

      try {
        result =
          (await response.json()) as QuoteApiResponse;
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

          if (
            result.errors.attachment
          ) {
            setFileError(
              result.errors.attachment,
            );
          }

          window.setTimeout(() => {
            const firstErrorField =
              document.querySelector(
                "[data-form-error='true']",
              );

            firstErrorField?.scrollIntoView(
              {
                behavior: "smooth",
                block: "center",
              },
            );
          }, 0);
        }

        setSubmissionError(
          result.message ||
            "Unable to submit your quotation request. Please try again.",
        );

        return;
      }

      setSubmitted(true);
      setFormData(initialFormState);
      setErrors({});
      setSubmissionError("");
      removeFile();
    } catch (error) {
      console.error(
        "Quotation form request failed:",
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
      id="quote-form"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
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
          className="relative z-10 mx-auto min-w-0 max-w-4xl text-center"
        >
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <FileText
              size={15}
              className="shrink-0"
            />

            <span className="min-w-0">
              Project Requirement Form
            </span>
          </span>

          <h2 className="mt-7 break-words text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Tell Us About Your Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl break-words text-lg font-medium leading-8 text-gray-600">
            Share the available project details
            below. More information helps our
            team understand your requirements
            and prepare a more relevant
            technical response.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid min-w-0 gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">
          {/* Form */}
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
            className="min-w-0 overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.11)]"
          >
            {submitted ? (
              <div className="flex min-h-[700px] min-w-0 items-center justify-center p-8 md:p-12">
                <div className="min-w-0 max-w-xl text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-red/10 text-primary-red">
                    <CheckCircle2 size={40} />
                  </div>

                  <p className="mt-7 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                    Requirement Submitted
                  </p>

                  <h3 className="mt-4 break-words text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl">
                    Thank You for Sharing Your Project
                  </h3>

                  <p className="mt-5 break-words text-base font-medium leading-8 text-gray-600">
                    Your requirement has been recorded.
                    Our team will review the submitted
                    information before contacting you
                    for the next discussion.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSubmitted(false)
                    }
                    className="mt-8 inline-flex min-h-[56px] max-w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 text-center font-black text-white shadow-[0_18px_40px_rgba(194,17,25,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
                  >
                    <span className="min-w-0">
                      Submit Another Requirement
                    </span>

                    <ArrowRight
                      size={19}
                      className="shrink-0"
                    />
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="min-w-0"
              >
                {/* Form header */}
                <div className="min-w-0 border-b border-gray-200 bg-primary-blue px-7 py-8 md:px-10">
                  <p className="break-words text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                    Request Your Customized Quote
                  </p>

                  <h3 className="mt-3 break-words text-2xl font-black leading-tight text-white md:text-3xl">
                    Project Information
                  </h3>

                  <p className="mt-3 max-w-2xl break-words text-sm font-medium leading-7 text-white/65">
                    Fields marked with an asterisk
                    are required. Other technical
                    details may be shared based on
                    current availability.
                  </p>
                </div>

                <div className="min-w-0 space-y-12 p-7 md:p-10">
                  {/* Contact details */}
                  <FormSection
                    number="01"
                    title="Contact Information"
                    description="Tell us who we should contact regarding this project."
                  >
                    <div className="grid min-w-0 gap-6 md:grid-cols-2">
                      <FormField
                        label="Full Name"
                        required
                        error={errors.fullName}
                      >
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
                          className={inputClassName}
                          aria-invalid={Boolean(
                            errors.fullName,
                          )}
                        />
                      </FormField>

                      <FormField label="Company Name">
                        <input
                          type="text"
                          value={
                            formData.companyName
                          }
                          onChange={(event) =>
                            updateField(
                              "companyName",
                              event.target.value,
                            )
                          }
                          placeholder="Enter company name"
                          className={inputClassName}
                        />
                      </FormField>

                      <FormField
                        label="Email Address"
                        required
                        error={errors.email}
                      >
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(event) =>
                            updateField(
                              "email",
                              event.target.value,
                            )
                          }
                          placeholder="name@company.com"
                          className={inputClassName}
                          aria-invalid={Boolean(
                            errors.email,
                          )}
                        />
                      </FormField>

                      <FormField
                        label="Phone Number"
                        required
                        error={errors.phone}
                      >
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
                          className={inputClassName}
                          aria-invalid={Boolean(
                            errors.phone,
                          )}
                        />
                      </FormField>
                    </div>
                  </FormSection>

                  {/* Project details */}
                  <FormSection
                    number="02"
                    title="Project Information"
                    description="Share the project location, application and available dimensions."
                  >
                    <div className="grid min-w-0 gap-6 md:grid-cols-2">
                      <FormField
                        label="Project Location"
                        required
                        error={
                          errors.projectLocation
                        }
                      >
                        <input
                          type="text"
                          value={
                            formData.projectLocation
                          }
                          onChange={(event) =>
                            updateField(
                              "projectLocation",
                              event.target.value,
                            )
                          }
                          placeholder="City, State"
                          className={inputClassName}
                          aria-invalid={Boolean(
                            errors.projectLocation,
                          )}
                        />
                      </FormField>

                      <FormField
                        label="Industry"
                        required
                        error={errors.industry}
                      >
                        <select
                          value={
                            formData.industry
                          }
                          onChange={(event) =>
                            updateField(
                              "industry",
                              event.target.value,
                            )
                          }
                          className={
                            selectClassName
                          }
                          aria-invalid={Boolean(
                            errors.industry,
                          )}
                        >
                          <option value="">
                            Select industry
                          </option>

                          {industries.map(
                            (industry) => (
                              <option
                                key={industry}
                                value={industry}
                              >
                                {industry}
                              </option>
                            ),
                          )}
                        </select>
                      </FormField>

                      <FormField
                        label="Project Type"
                        required
                        error={errors.projectType}
                      >
                        <select
                          value={
                            formData.projectType
                          }
                          onChange={(event) =>
                            updateField(
                              "projectType",
                              event.target.value,
                            )
                          }
                          className={
                            selectClassName
                          }
                          aria-invalid={Boolean(
                            errors.projectType,
                          )}
                        >
                          <option value="">
                            Select project type
                          </option>

                          {projectTypes.map(
                            (projectType) => (
                              <option
                                key={
                                  projectType
                                }
                                value={
                                  projectType
                                }
                              >
                                {projectType}
                              </option>
                            ),
                          )}
                        </select>
                      </FormField>

                      <FormField label="Approximate Area">
                        <div className="relative min-w-0">
                          <Ruler
                            size={18}
                            className="pointer-events-none absolute right-5 top-1/2 translate-y-[2px] text-primary-red"
                          />

                          <input
                            type="text"
                            value={
                              formData.approximateArea
                            }
                            onChange={(event) =>
                              updateField(
                                "approximateArea",
                                event.target
                                  .value,
                              )
                            }
                            placeholder="Example: 100,000 Sq. Ft."
                            className={`${inputClassName} pr-12`}
                          />
                        </div>
                      </FormField>

                      <FormField label="Building Width">
                        <input
                          type="text"
                          value={
                            formData.buildingWidth
                          }
                          onChange={(event) =>
                            updateField(
                              "buildingWidth",
                              event.target.value,
                            )
                          }
                          placeholder="Example: 60 metres"
                          className={inputClassName}
                        />
                      </FormField>

                      <FormField label="Building Length">
                        <input
                          type="text"
                          value={
                            formData.buildingLength
                          }
                          onChange={(event) =>
                            updateField(
                              "buildingLength",
                              event.target.value,
                            )
                          }
                          placeholder="Example: 150 metres"
                          className={inputClassName}
                        />
                      </FormField>

                      <FormField label="Clear Height">
                        <input
                          type="text"
                          value={
                            formData.clearHeight
                          }
                          onChange={(event) =>
                            updateField(
                              "clearHeight",
                              event.target.value,
                            )
                          }
                          placeholder="Example: 12 metres"
                          className={inputClassName}
                        />
                      </FormField>

                      <FormField label="Expected Timeline">
                        <select
                          value={
                            formData.timeline
                          }
                          onChange={(event) =>
                            updateField(
                              "timeline",
                              event.target.value,
                            )
                          }
                          className={
                            selectClassName
                          }
                        >
                          <option value="">
                            Select timeline
                          </option>

                          {timelineOptions.map(
                            (timeline) => (
                              <option
                                key={timeline}
                                value={timeline}
                              >
                                {timeline}
                              </option>
                            ),
                          )}
                        </select>
                      </FormField>
                    </div>
                  </FormSection>

                  {/* Technical details */}
                  <FormSection
                    number="03"
                    title="Technical Requirements"
                    description="Select the options currently known for your building."
                  >
                    <div className="grid min-w-0 gap-7 md:grid-cols-2">
                      <RadioGroup
                        label="Crane Requirement"
                        value={
                          formData.craneRequired
                        }
                        options={[
                          "Yes",
                          "No",
                          "Not Sure",
                        ]}
                        onChange={(value) =>
                          updateField(
                            "craneRequired",
                            value,
                          )
                        }
                      />

                      <RadioGroup
                        label="Mezzanine Requirement"
                        value={
                          formData.mezzanineRequired
                        }
                        options={[
                          "Yes",
                          "No",
                          "Not Sure",
                        ]}
                        onChange={(value) =>
                          updateField(
                            "mezzanineRequired",
                            value,
                          )
                        }
                      />

                      <div className="min-w-0 md:col-span-2">
                        <FormField label="Roofing Requirement">
                          <select
                            value={
                              formData.roofingRequirement
                            }
                            onChange={(event) =>
                              updateField(
                                "roofingRequirement",
                                event.target
                                  .value,
                              )
                            }
                            className={
                              selectClassName
                            }
                          >
                            <option value="">
                              Select roofing requirement
                            </option>

                            {roofingOptions.map(
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
                        </FormField>
                      </div>
                    </div>
                  </FormSection>

                  {/* Project brief */}
                  <FormSection
                    number="04"
                    title="Project Description & Drawings"
                    description="Add supporting information to help our team understand the project."
                  >
                    <FormField
                      label="Project Description"
                      required
                      error={
                        errors.projectDescription
                      }
                    >
                      <textarea
                        value={
                          formData.projectDescription
                        }
                        onChange={(event) =>
                          updateField(
                            "projectDescription",
                            event.target.value,
                          )
                        }
                        placeholder="Describe the building use, operational requirements, structural needs, project status and any other relevant information..."
                        rows={7}
                        maxLength={5000}
                        aria-invalid={Boolean(
                          errors.projectDescription,
                        )}
                        className="mt-2 min-w-0 w-full resize-y rounded-2xl border border-gray-200 bg-white px-5 py-4 text-base font-semibold leading-7 text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10"
                      />
                    </FormField>

                    <div className="mt-7 min-w-0">
                      <p className="break-words text-sm font-black text-primary-blue">
                        Upload Drawing or Project File
                      </p>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.dwg,.dxf,.zip,.rar,.jpg,.jpeg,.png"
                        onChange={
                          handleFileChange
                        }
                        className="sr-only"
                        id="project-file"
                      />

                      {!selectedFile ? (
                        <label
                          htmlFor="project-file"
                          className="group mt-3 flex min-h-[190px] min-w-0 cursor-pointer flex-col items-center justify-center rounded-[26px] border-2 border-dashed border-gray-300 bg-[#f8fafc] px-6 py-8 text-center transition-all duration-300 hover:border-primary-red hover:bg-primary-red/[0.025]"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                            <UploadCloud
                              size={27}
                            />
                          </div>

                          <p className="mt-5 break-words font-black text-primary-blue">
                            Choose a file to upload
                          </p>

                          <p className="mt-2 max-w-md break-words text-sm font-medium leading-6 text-gray-500">
                            PDF, DWG, DXF, ZIP, RAR,
                            JPG or PNG. Maximum file
                            size: 25 MB.
                          </p>
                        </label>
                      ) : (
                        <div className="mt-3 flex min-w-0 items-center justify-between gap-4 rounded-[24px] border border-primary-red/20 bg-primary-red/[0.035] p-5">
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
                            aria-label="Remove uploaded file"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-primary-red hover:bg-primary-red hover:text-white"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      )}

                      {(fileError ||
                        errors.attachment) && (
                        <p
                          data-form-error="true"
                          className="mt-3 break-words text-sm font-bold text-primary-red"
                        >
                          {fileError ||
                            errors.attachment}
                        </p>
                      )}
                    </div>
                  </FormSection>

                  {/* Consent */}
                  <div className="min-w-0 rounded-[26px] border border-primary-blue/10 bg-[#f8fafc] p-6">
                    <div className="flex min-w-0 items-start gap-3">
                      <ShieldCheck
                        size={22}
                        className="mt-0.5 shrink-0 text-primary-red"
                      />

                      <p className="min-w-0 break-words text-sm font-semibold leading-7 text-gray-600">
                        By submitting this form, you
                        authorize Steelbuild Infra
                        Projects Limited to contact you
                        regarding your project
                        requirement. Your submitted
                        information will be used for
                        quotation and project
                        discussion purposes.
                      </p>
                    </div>
                  </div>

                  {submissionError ? (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="flex min-w-0 items-start gap-3 rounded-[22px] border border-red-200 bg-red-50 p-5 text-red-700"
                    >
                      <AlertCircle
                        size={22}
                        className="mt-0.5 shrink-0"
                      />

                      <p className="min-w-0 break-words text-sm font-bold leading-7">
                        {submissionError}
                      </p>
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex min-h-[62px] w-full min-w-0 items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 text-center text-lg font-black text-white shadow-[0_20px_48px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:shadow-[0_26px_60px_rgba(27,63,104,0.24)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    <span className="min-w-0">
                      {submitting
                        ? "Submitting Requirement..."
                        : "Request My Quote"}
                    </span>

                    {!submitting && (
                      <Send
                        size={20}
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
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
            className="min-w-0 space-y-6 xl:sticky xl:top-28"
          >
            {/* Benefits */}
            <div className="min-w-0 overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_26px_75px_rgba(27,63,104,0.1)]">
              <div className="min-w-0 bg-primary-blue p-7 md:p-8">
                <p className="break-words text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                  Why Request a Quote?
                </p>

                <h3 className="mt-4 break-words text-3xl font-black leading-tight tracking-[-0.04em] text-white">
                  Professional Support Before You Build
                </h3>

                <p className="mt-4 break-words text-sm font-medium leading-7 text-white/65">
                  Every submitted requirement is
                  evaluated according to the
                  information available at the
                  quotation stage.
                </p>
              </div>

              <div className="min-w-0 space-y-3 p-6">
                {benefits.map((benefit) => {
                  const Icon =
                    benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="group flex min-w-0 gap-4 rounded-[22px] border border-gray-200 bg-[#f8fafc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/20 hover:bg-white hover:shadow-[0_16px_45px_rgba(27,63,104,0.08)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red transition group-hover:bg-primary-red group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="break-words font-black text-primary-blue">
                          {benefit.title}
                        </h4>

                        <p className="mt-2 break-words text-sm font-medium leading-6 text-gray-500">
                          {
                            benefit.description
                          }
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Immediate assistance */}
            <div className="relative isolate min-w-0 overflow-hidden rounded-[34px] bg-primary-blue p-7 shadow-[0_30px_85px_rgba(27,63,104,0.2)] md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

              <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-primary-red/20 blur-[80px]" />

              <div className="relative z-10 min-w-0">
                <Headphones
                  size={34}
                  className="text-primary-red"
                />

                <p className="mt-6 break-words text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                  Immediate Assistance
                </p>

                <h3 className="mt-4 break-words text-2xl font-black leading-tight text-white">
                  Prefer to Discuss Your Requirement Directly?
                </h3>

                <p className="mt-4 break-words text-sm font-medium leading-7 text-white/65">
                  Contact our team through phone or
                  email for preliminary project
                  discussion.
                </p>

                <div className="mt-7 min-w-0 space-y-3">
                  <Link
                    href="tel:+918130199427"
                    className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4 !text-white transition-all duration-300 hover:bg-primary-red"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Phone size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white/55">
                        Call Our Team
                      </p>

                      <p className="mt-1 break-words font-black">
                        +91 81301 99427
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="mailto:info@steelbuildinfra.com"
                    className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4 !text-white transition-all duration-300 hover:bg-primary-red"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <Mail size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white/55">
                        Email Requirement
                      </p>

                      <p className="mt-1 break-all font-black">
                        info@steelbuildinfra.com
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

type FormSectionProps = {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

function FormSection({
  number,
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section className="min-w-0">
      <div className="mb-7 flex min-w-0 items-start gap-4 border-b border-gray-200 pb-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-sm font-black text-primary-red">
          {number}
        </div>

        <div className="min-w-0">
          <h4 className="break-words text-xl font-black text-primary-blue">
            {title}
          </h4>

          <p className="mt-2 break-words text-sm font-medium leading-6 text-gray-500">
            {description}
          </p>
        </div>
      </div>

      <div className="min-w-0">
        {children}
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function FormField({
  label,
  required = false,
  error,
  children,
}: FormFieldProps) {
  return (
    <label
      className="block min-w-0"
      data-form-error={
        error ? "true" : undefined
      }
    >
      <span className="break-words text-sm font-black text-primary-blue">
        {label}

        {required && (
          <span className="ml-1 text-primary-red">
            *
          </span>
        )}
      </span>

      {children}

      {error && (
        <span className="mt-2 block break-words text-sm font-bold text-primary-red">
          {error}
        </span>
      )}
    </label>
  );
}

type RadioGroupProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

function RadioGroup({
  label,
  value,
  options,
  onChange,
}: RadioGroupProps) {
  return (
    <fieldset className="min-w-0">
      <legend className="break-words text-sm font-black text-primary-blue">
        {label}
      </legend>

      <div className="mt-3 grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
        {options.map((option) => {
          const selected =
            value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() =>
                onChange(option)
              }
              className={`min-h-[52px] min-w-0 break-words rounded-2xl border px-2 py-3 text-xs font-black leading-5 transition-all duration-300 sm:px-4 sm:text-sm ${
                selected
                  ? "border-primary-red bg-primary-red text-white shadow-[0_12px_30px_rgba(194,17,25,0.2)]"
                  : "border-gray-200 bg-white text-primary-blue hover:border-primary-red/30 hover:bg-primary-red/[0.03]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function formatFileSize(
  bytes: number,
) {
  if (bytes < 1024) {
    return `${bytes} Bytes`;
  }

  if (bytes < 1024 * 1024) {
    return `${(
      bytes / 1024
    ).toFixed(1)} KB`;
  }

  return `${(
    bytes /
    (1024 * 1024)
  ).toFixed(1)} MB`;
}