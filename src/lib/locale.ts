export const locales = ["tr", "en"] as const

export type Locale = (typeof locales)[number]

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export type Copy = { tr: string; en: string }

export function tx(copy: Copy, locale: Locale) {
  return copy[locale]
}

export function localePath(locale: Locale, path = "") {
  const suffix = path.startsWith("/") ? path : path ? `/${path}` : ""
  return `/${locale}${suffix}`
}

export function swapLocale(pathname: string, next: Locale) {
  const stripped = pathname.replace(/^\/(tr|en)(?=\/|$)/, "")
  return `/${next}${stripped}`
}
