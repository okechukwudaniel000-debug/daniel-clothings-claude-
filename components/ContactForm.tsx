"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>();
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, message } = data;
    const mailtoLink = `mailto:okechukwudaniel000@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      message
    )}%0A%0AFrom:%20${name}%0AEmail:%20${email}`;

    // eslint-disable-next-line react-hooks/immutability
    window.location.href = mailtoLink;

    // Simulate a delay to allow the mail client to open
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmissionMessage(
      "Your message has been prepared in your email client."
    );
    reset();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 max-w-xl mx-auto"
    >
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full bg-background border border-gold/20 rounded-lg px-4 py-3 text-primary placeholder-secondary/50 focus:ring-gold focus:border-gold transition-colors"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full bg-background border border-gold/20 rounded-lg px-4 py-3 text-primary placeholder-secondary/50 focus:ring-gold focus:border-gold transition-colors"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            rows={4}
            placeholder="Your Message"
            className="w-full bg-background border border-gold/20 rounded-lg px-4 py-3 text-primary placeholder-secondary/50 focus:ring-gold focus:border-gold transition-colors"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-background font-bold py-3 px-6 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Preparing Message..." : "Send Message"}
          </button>
        </div>
        {submissionMessage && (
          <p className="text-green-500 text-sm mt-4 text-center">
            {submissionMessage}
          </p>
        )}
      </div>
    </motion.form>
  );
}
