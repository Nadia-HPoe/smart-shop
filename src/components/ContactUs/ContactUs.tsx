"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecaptcha } from "@/hooks/useRecaptcha";
import ReCAPTCHA from "react-google-recaptcha";
import Title from "../Title/Title";
import styles from "./contactus.module.scss";
import Image from "next/image";

type FormData = {
  store: string;
  address: string;
  email: string;
  contact: string;
  agree: boolean;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: "onSubmit",
    defaultValues: {
      store: "",
      address: "",
      email: "",
      contact: "",
      agree: false,
    },
  });

  const {
    recaptchaRef,
    recaptchaToken,
    resetRecaptcha,
    setRecaptchaToken,
    isLoading,
  } = useRecaptcha({
    onVerify: (token) => {
      console.log(
        "reCAPTCHA verified with token:",
        token.substring(0, 10) + "..."
      );
      setRecaptchaToken(token);
    },
  });

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!recaptchaToken) {
      setSubmitError("Please complete the reCAPTCHA verification.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.store);
      formData.append("address", data.address);
      formData.append("email", data.email);
      formData.append("contact", data.contact);

      const response = await fetch("https://feedback.foodfutures.net", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitSuccess(
          "Your feedback was successfully submitted. Thank you!"
        );
        reset();
        resetRecaptcha();
        setRecaptchaToken("");
      } else {
        setSubmitError("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("An error occurred during submission. Please try again.");
    }
  };

  return (
    <section className={styles.contactus} id='contactus'>
      <Title title='Contact Us' />
      <Image
        className={styles.image}
        src='/images/contactUs/bannerUnco.svg'
        alt='contactUs'
        width={1920}
        height={526}
      />
      <Image
        className={styles.image_mobile}
        src='/images/contactUs/banner_mobile.png'
        alt='mobile'
        width={390}
        height={216}
      />
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={styles.inputsRow}>
          <div className={styles.inputGroup}>
            <label htmlFor='store'>Your Store Name*</label>
            <input
              id='store'
              type='text'
              {...register("store", { required: "Store name is required" })}
              aria-invalid={!!errors.store}
              aria-describedby='store-error'
            />
            {errors.store && (
              <p className={styles.error} id='store-error' role='alert'>
                {errors.store.message}
              </p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor='address'>Address*</label>
            <input
              id='address'
              type='text'
              {...register("address", { required: "Address is required" })}
              aria-invalid={!!errors.address}
              aria-describedby='address-error'
            />
            {errors.address && (
              <p className={styles.error} id='address-error' role='alert'>
                {errors.address.message}
              </p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='email'>Email*</label>
            <input
              id='email'
              type='email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              aria-invalid={!!errors.email}
              aria-describedby='email-error'
            />
            {errors.email && (
              <p className={styles.error} id='email-error' role='alert'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor='contact'>How to Contact You*</label>
            <input
              id='contact'
              type='text'
              {...register("contact", {
                required: "Contact information is required",
              })}
              aria-invalid={!!errors.contact}
              aria-describedby='contact-error'
            />
            {errors.contact && (
              <p className={styles.error} id='contact-error' role='alert'>
                {errors.contact.message}
              </p>
            )}
          </div>
        </div>
        <div className={styles.checkboxRow}>
          <input
            id='agree'
            type='checkbox'
            {...register("agree", {
              required: "You must agree to the Privacy Policy",
            })}
            aria-invalid={!!errors.agree}
            aria-describedby='agree-error'
          />
          <label htmlFor='agree' className={styles.checkboxLabel}>
            I have read and agree to the{" "}
            <a
              href='/privacy-policy'
              target='_blank'
              rel='noopener noreferrer'
              tabIndex={0}
              className={styles.privacyPolicyLink}
            >
              Privacy Policy
            </a>
          </label>
          {errors.agree && (
            <p className={styles.error} id='agree-error' role='alert'>
              {errors.agree.message}
            </p>
          )}
        </div>
        <div className={styles.inputGroup}>
          {isLoading && <p>Loading reCAPTCHA...</p>}
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_TOKEN!}
            onChange={(token) => setRecaptchaToken(token || "")}
            ref={recaptchaRef}
          />
        </div>

        {submitError && (
          <p className={styles.submitError} role='alert' aria-live='assertive'>
            {submitError}
          </p>
        )}
        {submitSuccess && (
          <p className={styles.submitSuccess} role='status' aria-live='polite'>
            {submitSuccess}
          </p>
        )}
        <button
          type='submit'
          disabled={isSubmitting || isLoading}
          className={styles.submitBtn}
          aria-busy={isSubmitting || isLoading}
        >
          {isSubmitting ? "Submitting..." : "Increase Store Profit"}
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
