import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { articles } from "@/content/knowledge"
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
    path: "/bilgi-merkezi",
    title: locale === "tr" ? "Bilgi Merkezi" : "Knowledge Centre",
    description:
      locale === "tr"
        ? "Spor turizminin tanımı, bölgesel avantajlar, rapor disiplini, yatırım ve organizasyon rehberi."
        : "A definition of sports tourism, regional advantages, report discipline, and guides to investment and events.",
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
        eyebrow={tr ? "Bilgi Merkezi" : "Knowledge Centre"}
        title={tr ? "Rakam, Kaynağıyla Birlikte Gelir" : "A Figure Arrives With Its Source"}
        lede={
          tr
            ? "Rehber metinler yayındadır. İstatistik ve indirilebilir raporlar, yazar ve yıl belli olmadan eklenmez."
            : "The guide essays are published. Statistics and downloadable reports are not added without an author and a year."
        }
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "Bilgi Merkezi" : "Knowledge Centre" },
        ]}
      />
      <Container className="py-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <li key={article.slug}>
              <Link href={localePath(locale, `/bilgi-merkezi/${article.slug}`)} className="block h-full rounded-3xl border border-border bg-card p-5 hover:border-teal">
                <h2 className="text-2xl text-navy">{tx(article.title, locale)}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{tx(article.summary, locale)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
