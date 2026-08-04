"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  User,
} from "lucide-react";

import Container from "@/components/layout/Container";

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

type ApiResponse = {
  success?: boolean;
  message?: string;
  errors?: ContactFormErrors;
};

type SubmissionStatus = {
  type: "success" | "error" | null;
  message: string;
};

const initialFormValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

const initialSubmissionStatus: SubmissionStatus = {
  type: null,
  message: "",
};

export default function ContactForm() {
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialFormValues);

  const [errors, setErrors] =
    useState<ContactFormErrors>({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>(
      initialSubmissionStatus,
    );

  function updateField(
    field: keyof ContactFormValues,
    value: string,
  ): void {
    setFormValues((previousValues) => ({
      ...previousValues,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [field]: undefined,
      }));
    }

    if (submissionStatus.type) {
      setSubmissionStatus(
        initialSubmissionStatus,
      );
    }
  }

  function handleInputChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ): void {
    const field =
      event.target.name as keyof ContactFormValues;

    updateField(field, event.target.value);
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmissionStatus(
      initialSubmissionStatus,
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      let result: ApiResponse;

      try {
        result = (await response.json()) as ApiResponse;
      } catch {
        result = {
          success: false,
          message:
            "An unexpected server response was received.",
        };
      }

      if (!response.ok || !result.success) {
        if (result.errors) {
          setErrors(result.errors);
        }

        setSubmissionStatus({
          type: "error",
          message:
            result.message ??
            "Unable to submit your enquiry. Please try again.",
        });

        return;
      }

      setFormValues(initialFormValues);

      setSubmissionStatus({
        type: "success",
        message:
          result.message ??
          "Your enquiry has been submitted successfully.",
      });
    } catch (error) {
      console.error(
        "Contact form request failed:",
        error,
      );

      setSubmissionStatus({
        type: "error",
        message:
          "A network error occurred. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function getInputClassName(
    hasError: boolean,
  ): string {
    return [
      "h-14 w-full rounded-xl border bg-white pl-12 pr-4",
      "text-gray-900 outline-none transition",
      "placeholder:text-gray-500",
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-gray-300 focus:border-primary-red focus:ring-2 focus:ring-primary-red/10",
    ].join(" ");
  }

  return (
    <section
      id="contact-form"
      className="bg-[#f7f9fc] py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
              Get In Touch
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl">
              Let&apos;s Discuss Your
              <span className="block text-primary-blue">
                Next PEB Project
              </span>
            </h2>

            <p className="mt-7 text-lg leading-9 text-gray-600">
              Whether you&apos;re planning a warehouse,
              factory, logistics hub or industrial facility,
              our engineering team is ready to help you with
              customized Pre-Engineered Building solutions.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Building2 size={24} />
                </div>

                <div>
                  <p className="font-black text-primary-blue">
                    Complete Turnkey Solutions
                  </p>

                  <p className="text-gray-600">
                    Design • Engineering • Manufacturing •
                    Erection
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <ArrowRight size={24} />
                </div>

                <div>
                  <p className="font-black text-primary-blue">
                    Fast Response
                  </p>

                  <p className="text-gray-600">
                    Our team will connect with you promptly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[34px] border border-gray-200 bg-white p-8 shadow-[0_25px_70px_rgba(27,63,104,0.10)]"
          >
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >
              

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="relative">
                    <User
                      size={18}
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
                    />

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      autoComplete="name"
                      maxLength={80}
                      value={formValues.name}
                      onChange={handleInputChange}
                      className={getInputClassName(
                        Boolean(errors.name),
                      )}
                      aria-invalid={Boolean(
                        errors.name,
                      )}
                      aria-describedby={
                        errors.name
                          ? "contact-name-error"
                          : undefined
                      }
                    />
                  </div>

                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="mt-2 text-sm font-medium text-red-600"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Building2
                      size={18}
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
                    />

                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      autoComplete="organization"
                      maxLength={120}
                      value={formValues.company}
                      onChange={handleInputChange}
                      className={getInputClassName(
                        Boolean(errors.company),
                      )}
                      aria-invalid={Boolean(
                        errors.company,
                      )}
                      aria-describedby={
                        errors.company
                          ? "contact-company-error"
                          : undefined
                      }
                    />
                  </div>

                  {errors.company && (
                    <p
                      id="contact-company-error"
                      className="mt-2 text-sm font-medium text-red-600"
                    >
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
                    />

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      autoComplete="email"
                      inputMode="email"
                      maxLength={160}
                      value={formValues.email}
                      onChange={handleInputChange}
                      className={getInputClassName(
                        Boolean(errors.email),
                      )}
                      aria-invalid={Boolean(
                        errors.email,
                      )}
                      aria-describedby={
                        errors.email
                          ? "contact-email-error"
                          : undefined
                      }
                    />
                  </div>

                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="mt-2 text-sm font-medium text-red-600"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
                    />

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={20}
                      value={formValues.phone}
                      onChange={handleInputChange}
                      className={getInputClassName(
                        Boolean(errors.phone),
                      )}
                      aria-invalid={Boolean(
                        errors.phone,
                      )}
                      aria-describedby={
                        errors.phone
                          ? "contact-phone-error"
                          : undefined
                      }
                    />
                  </div>

                  {errors.phone && (
                    <p
                      id="contact-phone-error"
                      className="mt-2 text-sm font-medium text-red-600"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project requirements... *"
                  maxLength={3000}
                  value={formValues.message}
                  onChange={handleInputChange}
                  className={[
                    "w-full resize-y rounded-xl border bg-white p-5",
                    "text-gray-900 outline-none transition",
                    "placeholder:text-gray-500",
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-gray-300 focus:border-primary-red focus:ring-2 focus:ring-primary-red/10",
                  ].join(" ")}
                  aria-invalid={Boolean(
                    errors.message,
                  )}
                  aria-describedby={
                    errors.message
                      ? "contact-message-error"
                      : "contact-message-count"
                  }
                />

                <div className="mt-2 flex items-start justify-between gap-4">
                  <div>
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="text-sm font-medium text-red-600"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <p
                    id="contact-message-count"
                    className="shrink-0 text-xs text-gray-500"
                  >
                    {formValues.message.length}/3000
                  </p>
                </div>
              </div>

              {submissionStatus.type && (
                <div
                  role={
                    submissionStatus.type === "error"
                      ? "alert"
                      : "status"
                  }
                  aria-live="polite"
                  className={[
                    "flex items-start gap-3 rounded-xl border p-4",
                    submissionStatus.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-700",
                  ].join(" ")}
                >
                  {submissionStatus.type === "success" ? (
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={21}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <p className="text-sm font-semibold leading-6">
                    {submissionStatus.message}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-primary-red px-8 py-4 font-black !text-white shadow-xl shadow-primary-red/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      size={18}
                      className="mr-2 animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry

                    <ArrowRight
                      size={18}
                      className="ml-2"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}