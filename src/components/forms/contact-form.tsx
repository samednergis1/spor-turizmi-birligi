"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ui } from "@/content/ui"
import type { ContactSource } from "@/lib/contact-message"
import type { Locale } from "@/lib/locale"
import { cn } from "cn"

type Errors = Partial<Record<"name" | "email" | "subject" | "message" | "consent", string>>

export function ContactForm({ locale, source }: { locale: Locale; source: ContactSource }) {
  const labels = ui(locale)
  const params = useSearchParams()
  const preset = params.get("konu") ?? "genel"
  const initialSubject = labels.subjects.some((item) => item.value === preset) ? preset : "genel"
  const [trackedPreset, setTrackedPreset] = useState(initialSubject)
  const [subject, setSubject] = useState(initialSubject)
  if (trackedPreset !== initialSubject) {
    setTrackedPreset(initialSubject)
    setSubject(initialSubject)
  }
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorCode, setErrorCode] = useState<"unconfigured" | "delivery">("delivery")
  const [resetKey, setResetKey] = useState(0)

  const subjectOptions = labels.subjects
  const described = labels.formDisclaimer

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-teal/40 bg-accent p-6 sm:p-8" role="status">
        <h2 className="font-display text-3xl text-navy">{labels.successTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-navy/80">{labels.successBody}</p>
        <Button
          type="button"
          className="mt-6 h-11 px-5"
          onClick={() => {
            setStatus("idle")
            setSubject(initialSubject)
            setResetKey((value) => value + 1)
          }}
        >
          {labels.another}
        </Button>
      </div>
    )
  }

  return (
    <form
      key={`${initialSubject}-${resetKey}`}
      className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-8"
      noValidate
      onSubmit={async (event) => {
        event.preventDefault()
        if (status === "loading") return
        const data = new FormData(event.currentTarget)
        const nextErrors: Errors = {}
        const name = String(data.get("name") ?? "").trim()
        const email = String(data.get("email") ?? "").trim()
        const message = String(data.get("message") ?? "").trim()
        const chosen = String(data.get("subject") ?? "")
        const consent = data.get("consent") === "on"
        if (name.length < 2) nextErrors.name = labels.required
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = labels.emailInvalid
        if (!chosen) nextErrors.subject = labels.required
        if (message.length < 20) nextErrors.message = labels.messageShort
        if (!consent) nextErrors.consent = labels.consentRequired
        setErrors(nextErrors)
        if (Object.keys(nextErrors).length > 0) return
        setStatus("loading")
        const response = await fetch("/api/iletisim", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source,
            subject: chosen,
            name,
            email,
            organization: String(data.get("organization") ?? "").trim(),
            role: String(data.get("role") ?? "").trim(),
            phone: String(data.get("phone") ?? "").trim(),
            message,
            consent: true,
            companyWebsite: String(data.get("companyWebsite") ?? ""),
          }),
        }).catch(() => null)
        if (!response?.ok) {
          const body = (await response?.json().catch(() => null)) as { error?: string } | null
          setErrorCode(body?.error === "unconfigured" ? "unconfigured" : "delivery")
          setStatus("error")
          return
        }
        setStatus("success")
      }}
    >
      <p className="text-sm leading-6 text-muted-foreground">{described}</p>
      <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="name" label={labels.formName} error={errors.name}>
          <Input id="name" name="name" autoComplete="name" required aria-invalid={Boolean(errors.name)} className="h-11" />
        </Field>
        <Field id="email" label={labels.formEmail} error={errors.email}>
          <Input id="email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} className="h-11" />
        </Field>
        <Field id="organization" label={`${labels.formOrg} (${labels.optional})`}>
          <Input id="organization" name="organization" autoComplete="organization" className="h-11" />
        </Field>
        <Field id="role" label={`${labels.formRole} (${labels.optional})`}>
          <Input id="role" name="role" autoComplete="organization-title" className="h-11" />
        </Field>
        <Field id="phone" label={`${labels.formPhone} (${labels.optional})`}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" className="h-11" />
        </Field>
        <Field id="subject" label={labels.formSubject} error={errors.subject}>
          <select
            id="subject"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-navy outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="message" label={labels.formMessage} error={errors.message}>
            <Textarea id="message" name="message" required minLength={20} rows={6} aria-invalid={Boolean(errors.message)} className="min-h-36" />
          </Field>
        </div>
      </div>
      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm leading-6 text-navy">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-4 accent-navy"
            aria-invalid={Boolean(errors.consent)}
          />
          <span>{labels.consent}</span>
        </label>
        {errors.consent ? (
          <p className="mt-2 text-sm text-destructive" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </div>
      {status === "error" ? (
        <p className="mt-5 text-sm leading-6 text-destructive" role="alert">
          {errorCode === "unconfigured" ? labels.unconfigured : labels.sendError}
        </p>
      ) : null}
      <Button type="submit" className="mt-6 h-12 px-6 text-base" disabled={status === "loading"}>
        {status === "loading" ? labels.sending : labels.send}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className={cn("text-sm text-destructive")} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
