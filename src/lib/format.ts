import type { Locale } from "@/lib/locale"

export function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(`${iso}T12:00:00+03:00`))
}
