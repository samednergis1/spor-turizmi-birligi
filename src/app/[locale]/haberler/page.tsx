import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { categoryLabel, news, newsCategories } from "@/content/news"
import { formatDate } from "@/lib/format"
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
    path: "/haberler",
    title: locale === "tr" ? "Haberler ve Duyurular" : "News and Notices",
    description:
      locale === "tr"
        ? "Tarihi ve kaynağı belli duyurular. Doğrulanmamış etkinlik haberi yayımlanmaz."
        : "Notices with a date and a source. Unconfirmed event news is not published.",
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
        eyebrow={tr ? "Haberler ve Duyurular" : "News and Notices"}
        title={tr ? "Kaynaksız Cümle Haber Olmaz." : "A Sentence Without a Source Is Not News."}
        lede={
          tr
            ? "Kategoriler hazır. İçerik, ancak tarih ve kaynak birlikte yazılabildiğinde eklenir."
            : "The categories are ready. An item is added only when a date and a source can be written together."
        }
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "Haberler ve Duyurular" : "News and Notices" },
        ]}
      />
      <Container className="grid gap-10 py-14 lg:grid-cols-12">
        <ul className="space-y-4 lg:col-span-8">
          {news.map((item) => (
            <li key={item.slug}>
              <article className="rounded-3xl border border-border bg-card p-5">
                <p className="text-xs font-semibold tracking-wide text-teal-ink uppercase">
                  {categoryLabel(item.category, locale)} · {formatDate(item.date, locale)}
                </p>
                <h2 className="mt-2 text-3xl text-navy">
                  <Link href={localePath(locale, `/haberler/${item.slug}`)} className="hover:text-teal-ink">
                    {tx(item.title, locale)}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{tx(item.summary, locale)}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {tr ? "Kaynak" : "Source"}: {tx(item.source, locale)}
                </p>
              </article>
            </li>
          ))}
        </ul>
        <aside className="lg:col-span-4">
          <h2 className="text-xl text-navy">{tr ? "Kategoriler" : "Categories"}</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {newsCategories.map((category) => (
              <li key={category.id} className="rounded-xl bg-muted px-3 py-2">
                {tx(category.label, locale)}
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </>
  )
}
