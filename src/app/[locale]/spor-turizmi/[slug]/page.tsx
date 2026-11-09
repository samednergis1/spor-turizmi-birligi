import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { citiesByTheme } from "@/content/cities"
import { getSport, sports } from "@/content/sports"
import { ui } from "@/content/ui"
import { isLocale, localePath, tx } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return sports.map((sport) => ({ slug: sport.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const sport = getSport(slug)
  if (!sport) return {}
  return pageMetadata({
    locale,
    path: `/spor-turizmi/${slug}`,
    title: tx(sport.title, locale),
    description: tx(sport.summary, locale),
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const sport = getSport(slug)
  if (!sport) notFound()
  const labels = ui(locale)
  const tr = locale === "tr"
  const related = citiesByTheme(sport.slug)

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={tr ? "Spor Turizmi" : "Sports Tourism"}
        title={tx(sport.title, locale)}
        lede={tx(sport.summary, locale)}
        image={sport.image}
        imageAlt={tx(sport.imageAlt, locale)}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { href: localePath(locale, "/spor-turizmi"), label: tr ? "Spor Turizmi" : "Sports Tourism" },
          { label: tx(sport.menu, locale) },
        ]}
      />
      <Container className="grid gap-10 py-14 lg:grid-cols-12">
        <article className="space-y-4 lg:col-span-7">
          {sport.body.map((paragraph) => (
            <p key={paragraph.tr} className="text-base leading-8 text-navy/85">
              {tx(paragraph, locale)}
            </p>
          ))}
          <ul className="mt-6 grid gap-2">
            {sport.examples.map((example) => (
              <li key={example.tr} className="rounded-2xl bg-accent px-4 py-3 text-sm font-medium text-navy">
                {tx(example, locale)}
              </li>
            ))}
          </ul>
        </article>
        <aside className="lg:col-span-5">
          <h2 className="text-2xl text-navy">{labels.relatedCities}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {related.map((city) => (
              <li key={city.slug}>
                <Link href={localePath(locale, `/sehirlerimiz/${city.slug}`)} className="block rounded-2xl border border-border bg-card px-4 py-3 hover:border-teal">
                  <span className="font-display text-xl text-navy">{city.name}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">{tx(city.summary, locale)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </>
  )
}
