import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { articles, getArticle } from "@/content/knowledge"
import { isLocale, localePath, tx } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const article = getArticle(slug)
  if (!article) return {}
  return pageMetadata({
    locale,
    path: `/bilgi-merkezi/${slug}`,
    title: tx(article.title, locale),
    description: tx(article.summary, locale),
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const article = getArticle(slug)
  if (!article) notFound()
  const tr = locale === "tr"
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={tr ? "Bilgi Merkezi" : "Knowledge Centre"}
        title={tx(article.title, locale)}
        lede={tx(article.summary, locale)}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { href: localePath(locale, "/bilgi-merkezi"), label: tr ? "Bilgi Merkezi" : "Knowledge Centre" },
          { label: tx(article.title, locale) },
        ]}
      />
      <Container className="max-w-3xl space-y-4 py-14">
        {article.body.map((paragraph) => (
          <p key={paragraph.tr} className="text-base leading-8 text-navy/85">
            {tx(paragraph, locale)}
          </p>
        ))}
      </Container>
    </>
  )
}
