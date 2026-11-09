import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { categoryLabel, getNews, news } from "@/content/news"
import { formatDate } from "@/lib/format"
import { isLocale, localePath, tx } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const item = getNews(slug)
  if (!item) return {}
  return pageMetadata({
    locale,
    path: `/haberler/${slug}`,
    title: tx(item.title, locale),
    description: tx(item.summary, locale),
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const item = getNews(slug)
  if (!item) notFound()
  const tr = locale === "tr"
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={`${categoryLabel(item.category, locale)} · ${formatDate(item.date, locale)}`}
        title={tx(item.title, locale)}
        lede={tx(item.summary, locale)}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { href: localePath(locale, "/haberler"), label: tr ? "Haberler ve Duyurular" : "News and Notices" },
          { label: tx(item.title, locale) },
        ]}
      />
      <Container className="max-w-3xl py-14">
        <p className="text-sm text-muted-foreground">
          {tr ? "Kaynak" : "Source"}: {tx(item.source, locale)}
        </p>
        <article className="mt-6 space-y-4">
          {item.body.map((paragraph) => (
            <p key={paragraph.tr} className="text-base leading-8 text-navy/85">
              {tx(paragraph, locale)}
            </p>
          ))}
        </article>
      </Container>
    </>
  )
}
