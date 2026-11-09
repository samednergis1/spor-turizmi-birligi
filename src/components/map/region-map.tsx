import Link from "next/link"
import { cities, regions } from "@/content/cities"
import { ui } from "@/content/ui"
import type { Locale } from "@/lib/locale"
import { localePath, tx } from "@/lib/locale"

export function RegionMap({ locale }: { locale: Locale }) {
  const labels = ui(locale)
  return (
    <div>
      <p className="mb-4 max-w-3xl text-sm leading-6 text-muted-foreground">{labels.mapHint}</p>
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="relative aspect-[780/560] w-full bg-[radial-gradient(circle_at_30%_30%,#e7f6f6,transparent_42%),linear-gradient(#f7f1e4,#e7eef5)]">
          <svg viewBox="0 0 780 560" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <path
              d="M150 120 C220 70 360 80 470 130 C560 170 620 150 700 210 C650 280 600 340 520 390 C430 430 300 400 230 340 C170 280 120 190 150 120Z"
              fill="#142B46"
              opacity="0.08"
            />
            <path
              d="M40 390 C120 340 220 360 300 410 C360 450 300 530 180 530 C90 520 30 470 40 390Z"
              fill="#C5A96A"
              opacity="0.18"
            />
            <path
              d="M40 48c80 18 150-10 210 24"
              fill="none"
              stroke="#142B46"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.35"
            />
            <path
              d="M70 78c90 22 160-6 230 28"
              fill="none"
              stroke="#C5A96A"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <ul className="absolute inset-0 m-0 list-none p-0" aria-label={labels.mapLabel}>
            {cities.map((city) => {
              const region = regions.find((item) => item.id === city.region)
              return (
                <li
                  key={city.slug}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${(city.x / 780) * 100}%`, top: `${(city.y / 560) * 100}%` }}
                >
                  <Link
                    href={localePath(locale, `/sehirlerimiz/${city.slug}`)}
                    className="group flex items-center gap-1.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                    title={`${city.name} · ${region ? tx(region.title, locale) : ""}`}
                  >
                    <span className="relative grid size-8 place-items-center">
                      <span className="absolute size-8 rounded-full bg-teal/20 group-hover:bg-teal/35" />
                      <span className="relative size-2.5 rounded-full bg-navy ring-2 ring-gold" />
                    </span>
                    <span className="hidden rounded-full bg-ivory/95 px-2 py-0.5 text-[11px] font-semibold text-navy shadow-sm md:inline">
                      {city.name}
                    </span>
                    <span className="sr-only">
                      {city.name}, {region ? tx(region.title, locale) : ""}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
