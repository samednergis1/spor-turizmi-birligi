import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { RegionMap } from "@/components/map/region-map"
import { citiesByRegion, regions, verificationNote } from "@/content/cities"
import { isLocale, localePath, tx } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({
    locale,
    path: "/sehirlerimiz",
    title: locale === "tr" ? "Şehirlerimiz" : "Our Cities",
    description:
      locale === "tr"
        ? "Doğu Anadolu ve Güneydoğu Anadolu illerinin spor turizmi potansiyeline temkinli bir giriş."
        : "A careful introduction to the sports-tourism potential of Eastern and Southeastern Anatolia.",
  })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const tr = locale === "tr"
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={tr ? "Şehirlerimiz" : "Our Cities"}
        title={tr ? "Her il için aynı şablon." : "The same template for every province."}
        lede={tx(verificationNote, locale)}
        image="/images/tas-sehir.jpg"
        imageAlt={tr ? "Altın ışıkta taş bir kent" : "A stone city in golden light"}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "Şehirlerimiz" : "Our Cities" },
        ]}
      />
      <Container className="space-y-12 py-14">
        <RegionMap locale={locale} />
        {regions.map((region) => (
          <section key={region.id}>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-3xl text-navy">{tx(region.title, locale)}</h2>
              <Link href={localePath(locale, `/sehirlerimiz/${region.slug}`)} className="text-sm font-semibold text-teal-ink hover:underline">
                {tr ? "Bölge sayfası" : "Region page"}
              </Link>
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {citiesByRegion(region.id).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={localePath(locale, `/sehirlerimiz/${city.slug}`)}
                    className="block h-full rounded-2xl border border-border bg-card p-4 hover:border-teal"
                  >
                    <span className="text-xs font-semibold text-muted-foreground">{city.plate}</span>
                    <span className="mt-1 block font-display text-2xl text-navy">{city.name}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">{tx(city.summary, locale)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </>
  )
}
