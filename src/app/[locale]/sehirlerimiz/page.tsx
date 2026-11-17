import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CityAccordions } from "@/components/cities/city-accordions"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { RegionMap } from "@/components/map/region-map"
import { regions } from "@/content/cities"
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
        title={tr ? "Her İl İçin Uygun Şablon" : "A Fitting Template for Every Province"}
        titleClassName="text-5xl sm:text-6xl lg:text-7xl"
        lede={tr ? "Ayrıntı için ilin adına dokunun." : "Tap a province name for the details."}
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
                {tr ? "Bölge Sayfası" : "Region Page"}
              </Link>
            </div>
            <div className="mt-4">
              <CityAccordions locale={locale} region={region.id} />
            </div>
          </section>
        ))}
      </Container>
    </>
  )
}
