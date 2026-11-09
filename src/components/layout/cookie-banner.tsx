"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ui } from "@/content/ui"
import type { Locale } from "@/lib/locale"
import { localePath } from "@/lib/locale"

const STORAGE_KEY = "dgastb-cookie-notice"

export default function CookieBanner({ locale }: { locale: Locale }) {
  const labels = ui(locale)
  const [visible, setVisible] = useState(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) !== "1"
    } catch {
      return true
    }
  })

  if (!visible) return null

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-border bg-card p-4 shadow-2xl sm:inset-x-6">
      <p className="text-sm leading-6 text-navy">{labels.cookie}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button
          type="button"
          className="h-10 px-4"
          onClick={() => {
            try {
              window.localStorage.setItem(STORAGE_KEY, "1")
            } catch {
              /* preference stays visible if storage is blocked */
            }
            setVisible(false)
          }}
        >
          {labels.cookieAction}
        </Button>
        <Link
          href={localePath(locale, "/cerez-politikasi")}
          className="text-sm font-medium text-teal-ink underline-offset-4 hover:underline"
        >
          {labels.cookiePolicy}
        </Link>
      </div>
    </div>
  )
}
