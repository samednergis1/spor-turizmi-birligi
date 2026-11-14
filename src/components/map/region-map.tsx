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
        <div className="relative aspect-[780/560] w-full bg-[radial-gradient(circle_at_72%_18%,#e7f6f6,transparent_34%),linear-gradient(#f4efe4,#e4eef4)]">
          <svg
            viewBox="0 0 780 560"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label={labels.mapLabel}
          >
            <path
              d="M140 250 L160 160 L300 110 L500 40 L650 40 L760 140 L770 220 L740 340 L700 450 L560 390 L480 360 L380 360 L250 370 L120 340 L120 280 Z"
              fill="#142B46"
              opacity="0.16"
              stroke="#142B46"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M40 470 L70 400 L160 350 L250 340 L400 340 L520 350 L600 390 L640 450 L560 500 L400 530 L200 540 L40 530 L20 480 Z"
              fill="#C5A96A"
              opacity="0.42"
              stroke="#A78B4A"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <text x="360" y="150" fill="#142B46" fontSize="18" fontWeight="700" fontFamily="Montserrat, sans-serif">
              {locale === "tr" ? "Doğu Anadolu" : "Eastern Anatolia"}
            </text>
            <text x="180" y="470" fill="#142B46" fontSize="16" fontWeight="700" fontFamily="Montserrat, sans-serif">
              {locale === "tr" ? "Güneydoğu Anadolu" : "Southeastern Anatolia"}
            </text>
          </svg>
          <ul className="absolute inset-0 m-0 list-none p-0">
            {cities.map((city) => {
              const region = regions.find((item) => item.id === city.region)
              return (
                <li
                  key={city.slug}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${(city.x / 780) * 100}%`,
                    top: `${(city.y / 560) * 100}%`,
                  }}
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
