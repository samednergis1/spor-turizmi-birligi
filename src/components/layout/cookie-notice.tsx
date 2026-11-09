"use client"

import dynamic from "next/dynamic"
import type { Locale } from "@/lib/locale"

const CookieBanner = dynamic(() => import("@/components/layout/cookie-banner"), { ssr: false })

export function CookieNotice({ locale }: { locale: Locale }) {
  return <CookieBanner locale={locale} />
}
