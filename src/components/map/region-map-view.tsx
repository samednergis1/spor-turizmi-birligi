"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, type FocusEvent, type MouseEvent } from "react"
import { MAP_HEIGHT, MAP_WIDTH, type ProvinceShape } from "@/components/map/map-frame"
import type { Locale } from "@/lib/locale"
import { localePath } from "@/lib/locale"
import { cn } from "cn"

export function RegionMapView({
  locale,
  hint,
  provinces,
}: {
  locale: Locale
  hint: string
  provinces: ProvinceShape[]
}) {
  const tr = locale === "tr"
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const active = provinces.find((province) => province.slug === activeSlug) ?? null

  function provinceFromEvent(event: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>) {
    const slug = (event.target as Element).closest?.("[data-province]")?.getAttribute("data-province")
    if (slug) setActiveSlug(slug)
  }

  return (
    <div>
      <p className="mb-4 max-w-3xl text-sm leading-6 text-muted-foreground">{hint}</p>
      <div
        className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_17.5rem]"
        onMouseOver={provinceFromEvent}
        onFocus={provinceFromEvent}
        onMouseLeave={() => setActiveSlug(null)}
      >
        <div className="overflow-hidden rounded-3xl border border-border bg-[#e7eef2]">
          <svg
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="h-auto w-full"
            role="img"
            aria-label={tr ? "Doğu ve Güneydoğu Anadolu il sınırları" : "Province boundaries of Eastern and Southeastern Anatolia"}
          >
            <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="#e7eef2" />
            {provinces.map((province) => {
              const selected = province.slug === activeSlug
              return (
                <Link
                  key={province.slug}
                  href={localePath(locale, `/sehirlerimiz/${province.slug}`)}
                  data-province={province.slug}
                  className="group outline-none"
                  aria-label={`${province.name}, ${province.regionLabel}`}
                >
                  <path
                    d={province.d}
                    strokeLinejoin="round"
                    className={cn(
                      "stroke-[#f6f3ec] stroke-[1.4] transition-colors group-hover:fill-[#14706e] group-focus-visible:fill-[#14706e]",
                      selected ? "fill-[#14706e]" : province.region === "dogu" ? "fill-[#1b4668]" : "fill-[#c6a15d]",
                    )}
                  />
                </Link>
              )
            })}
            {provinces.map((province) => {
              const selected = province.slug === activeSlug
              return (
                <text
                  key={`${province.slug}-label`}
                  x={province.labelX}
                  y={province.labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={cn(
                    "pointer-events-none text-[15px] font-semibold",
                    selected || province.region === "dogu" ? "fill-[#f6f3ec]" : "fill-[#142b46]",
                  )}
                  style={{ fontFamily: "var(--font-montserrat), Montserrat, sans-serif" }}
                >
                  {province.name}
                </text>
              )
            })}
          </svg>
        </div>
        <aside className="overflow-hidden rounded-3xl border border-border bg-card">
          {active ? (
            <Link href={localePath(locale, `/sehirlerimiz/${active.slug}`)} className="block hover:bg-accent">
              <span className="relative block aspect-[16/10]">
                <Image
                  src={active.image}
                  alt={tr ? `${active.name} görünümü` : `View of ${active.name}`}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </span>
              <span className="block p-4">
                <span className="text-xs font-semibold tracking-wide text-teal-ink uppercase">{active.regionLabel}</span>
                <span className="mt-1 block font-display text-2xl text-navy">{active.name}</span>
                <span className="mt-2 block text-sm leading-6 text-muted-foreground">{active.summary}</span>
              </span>
            </Link>
          ) : (
            <div className="p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                {tr ? "Bir ilin üzerine gelin veya seçin. Ayrıntı ve görsel il sayfasında açılır." : "Hover or focus a province. The province page opens the detail and the photograph."}
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-navy">
                <li className="flex items-center gap-2">
                  <span className="size-3 rounded-sm bg-[#1b4668]" />
                  {tr ? "Doğu Anadolu" : "Eastern Anatolia"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-3 rounded-sm bg-[#c6a15d]" />
                  {tr ? "Güneydoğu Anadolu" : "Southeastern Anatolia"}
                </li>
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
