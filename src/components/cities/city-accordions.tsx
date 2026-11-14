import Link from "next/link"
import { CityPhoto } from "@/components/cities/city-photo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { citiesByRegion, type RegionId } from "@/content/cities"
import { ui } from "@/content/ui"
import type { Locale } from "@/lib/locale"
import { localePath, tx } from "@/lib/locale"

export function CityAccordions({
  locale,
  region,
}: {
  locale: Locale
  region: RegionId
}) {
  const labels = ui(locale)
  const tr = locale === "tr"
  const list = citiesByRegion(region)

  return (
    <Accordion multiple className="gap-2">
      {list.map((city) => (
        <AccordionItem key={city.slug} value={city.slug} className="rounded-2xl border border-border bg-card px-4">
          <AccordionTrigger className="py-4 text-base hover:no-underline">
            <span className="flex items-baseline gap-3">
              <span className="text-xs font-semibold text-muted-foreground">{city.plate}</span>
              <span className="text-xl font-bold text-navy">{city.name}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pb-3 text-sm leading-6 text-navy/85">
              <CityPhoto city={city} locale={locale} className="rounded-xl" />
              <p>{tx(city.summary, locale)}</p>
              <p>
                <span className="font-semibold text-navy">{labels.geography}. </span>
                {tx(city.geography, locale)}
              </p>
              <p>
                <span className="font-semibold text-navy">{labels.sportsPotential}. </span>
                {tx(city.sports, locale)}
              </p>
              <Link
                href={localePath(locale, `/sehirlerimiz/${city.slug}`)}
                className="inline-flex font-semibold text-teal-ink hover:underline"
              >
                {tr ? "İl Sayfasını Aç" : "Open the Province Page"}
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
