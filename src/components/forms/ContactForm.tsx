"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { ArrowRight } from "lucide-react";

import { SelectInput } from "@/components/forms/SelectInput";
import { TextareaInput } from "@/components/forms/TextareaInput";
import { TextInput } from "@/components/forms/TextInput";
import { Button } from "@/components/ui/Button";
import type { ContactContent } from "@/content/home";

export interface ContactFormProps {
  form: ContactContent["form"];
  className?: string;
}

export function ContactForm({ form, className }: ContactFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    router.push("/thank-you");
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className={`grid gap-6 ${form.lastNameLabel ? "grid-cols-2" : "grid-cols-1"}`}>
          <TextInput
            id="contact-first-name"
            label={form.firstNameLabel}
            placeholder={form.firstNamePlaceholder}
            type="text"
            required
          />
          {form.lastNameLabel && (
            <TextInput
              id="contact-last-name"
              label={form.lastNameLabel}
              placeholder={form.lastNamePlaceholder}
              type="text"
            />
          )}
        </div>

        {(form.companyLabel || form.phoneLabel) && (
          <div className="grid grid-cols-2 gap-6">
            {form.companyLabel && (
              <TextInput
                id="contact-company"
                label={form.companyLabel}
                placeholder={form.companyPlaceholder}
                type="text"
              />
            )}
            {form.phoneLabel && (
              <TextInput
                id="contact-phone"
                label={form.phoneLabel}
                placeholder={form.phonePlaceholder}
                type="tel"
              />
            )}
          </div>
        )}

        <TextInput
          id="contact-email"
          label={form.emailLabel}
          placeholder={form.emailPlaceholder}
          type="email"
          required
        />

        {form.serviceLabel && form.serviceOptions && (
          <SelectInput
            id="contact-service"
            label={form.serviceLabel}
            placeholder={form.servicePlaceholder}
            options={form.serviceOptions}
          />
        )}

        {form.eventLabel && (
          <TextInput
            id="contact-event"
            label={form.eventLabel}
            placeholder={form.eventPlaceholder}
            type="text"
          />
        )}

        {form.messageLabel && (
          <TextareaInput
            id="contact-message"
            label={form.messageLabel}
            placeholder={form.messagePlaceholder}
            rows={4}
          />
        )}

        {form.consentLabel && (
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="contact-consent"
              required
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-brand-blue"
            />
            <label htmlFor="contact-consent" className="text-sm leading-snug text-gray-500">
              {form.consentLabel}
            </label>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          className="flex w-full items-center justify-center py-4 text-lg"
        >
          {loading ? "Sending…" : form.ctaLabel}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </form>
  );
}
