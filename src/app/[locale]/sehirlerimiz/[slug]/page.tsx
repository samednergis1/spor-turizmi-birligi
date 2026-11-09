import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import {
  accessNote,
  cities,
  citiesByRegion,
  facilityNote,
  getCity,
  getRegion,
  regions,
  verificationNote,
} from "@/content/cities"
import { getSport, sports } from "@/content/sports"
import { ui } from "@/content/ui"
import { isLocale, localePath, tx } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return [
    ...regions.map((region) => ({ slug: region.slug })),
    ...cities.map((city) => ({ slug: city.slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const region = getRegion(slug)
  const city = getCity(slug)
  if (!region && !city) return {}
  const title = region ? tx(region.title, locale) : city?.name ?? ""
  const description = region ? tx(region.lede, locale) : city ? tx(city.summary, locale) : ""
  return pageMetadata({
    locale,
    path: `/sehirlerimiz/${slug}`,
    title,
    description,
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const region = getRegion(slug)
  const city = getCity(slug)
  if (!region && !city) notFound()
  const labels = ui(locale)
  const tr = locale === "tr"
  const home = localePath(locale)
  const citiesHref = localePath(locale, "/sehirlerimiz")

  if (region) {
    return (
      <>
        <PageHero
          locale={locale}
          eyebrow={tr ? "Şehirlerimiz" : "Our Cities"}
          title={tx(region.title, locale)}
          lede={tx(region.lede, locale)}
          image={region.image}
          imageAlt={tx(region.imageAlt, locale)}
          crumbs={[
            { href: home, label: tr ? "Ana Sayfa" : "Home" },
            { href: citiesHref, label: tr ? "Şehirlerimiz" : "Our Cities" },
            { label: tx(region.title, locale) },
          ]}
        />
        <Container className="py-14">
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">{tx(verificationNote, locale)}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {citiesByRegion(region.id).map((item) => (
              <li key={item.slug}>
                <Link href={localePath(locale, `/sehirlerimiz/${item.slug}`)} className="block h-full rounded-3xl border border-border bg-card p-5 hover:border-teal">
                  <h2 className="text-2xl text-navy">{item.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{tx(item.summary, locale)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </>
    )
  }

  if (!city) notFound()
  const regionMeta = regions.find((item) => item.id === city.region)
  const related = city.themes.map((theme) => getSport(theme)).filter((item) => item !== undefined)

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={regionMeta ? tx(regionMeta.title, locale) : undefined}
        title={city.name}
        lede={tx(city.summary, locale)}
        image={regionMeta?.image}
        imageAlt={regionMeta ? tx(regionMeta.imageAlt, locale) : city.name}
        crumbs={[
          { href: home, label: tr ? "Ana Sayfa" : "Home" },
          { href: citiesHref, label: tr ? "Şehirlerimiz" : "Our Cities" },
          regionMeta
            ? { href: localePath(locale, `/sehirlerimiz/${regionMeta.slug}`), label: tx(regionMeta.title, locale) }
            : { label: city.name },
          { label: city.name },
        ]}
      />
      <Container className="grid gap-10 py-14 lg:grid-cols-12">
        <div className="space-y-8 lg:col-span-8">
          <p className="rounded-2xl border border-gold/50 bg-card p-4 text-sm leading-6 text-navy">
            {tx(verificationNote, locale)}
          </p>
          <Section title={labels.geography} body={tx(city.geography, locale)} />
          <Section title={labels.sportsPotential} body={tx(city.sports, locale)} />
          <Section title={labels.facilities} body={tx(facilityNote, locale)} />
          <Section title={labels.access} body={tx(accessNote, locale)} />
          <Section title={labels.events} body={labels.eventsEmpty} />
          <Section title={labels.development} body={tx(city.development, locale)} />
        </div>
        <aside className="space-y-6 lg:col-span-4">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            {regionMeta ? (
              <div className="relative h-44">
                <Image src={regionMeta.image} alt="" fill sizes="400px" className="object-cover" />
              </div>
            ) : null}
            <div className="p-5">
              <p className="text-xs font-semibold tracking-wide text-teal-ink uppercase">{labels.gallery}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{labels.galleryNote}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{labels.plates}</dt>
                  <dd className="font-semibold text-navy">{city.plate}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{labels.region}</dt>
                  <dd className="text-right font-semibold text-navy">
                    {regionMeta ? tx(regionMeta.title, locale) : ""}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-navy">{labels.relatedSports}</h2>
            <ul className="mt-3 space-y-2">
              {related.map((sport) => (
                <li key={sport.slug}>
                  <Link href={localePath(locale, `/spor-turizmi/${sport.slug}`)} className="text-sm font-medium text-navy hover:text-teal-ink">
                    {tx(sport.menu, locale)}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              {sports.length} {tr ? "başlık açık" : "themes are open"}
            </p>
          </div>
        </aside>
      </Container>
    </>
  )
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="text-2xl text-navy">{title}</h2>
      <p className="mt-2 text-base leading-7 text-navy/85">{body}</p>
    </section>
  )
}
