import Link from "next/link"
import type { Locale } from "@/lib/locale"
import { ui } from "@/content/ui"

export function Breadcrumbs({
  locale,
  items,
  tone = "dark",
}: {
  locale: Locale
  items: { href?: string; label: string }[]
  tone?: "dark" | "light"
}) {
  const labels = ui(locale)
  const light = tone === "light"
  return (
    <nav aria-label={labels.breadcrumb}>
      <ol
        className={
          light
            ? "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ivory/75"
            : "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground"
        }
      >
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-gold">
                  /
                </span>
              ) : null}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={light ? "hover:text-ivory hover:underline" : "hover:text-navy hover:underline"}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={last ? (light ? "text-ivory" : "text-navy") : undefined}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
