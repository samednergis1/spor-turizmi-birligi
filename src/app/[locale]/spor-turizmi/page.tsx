import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Dumbbell, Mountain, Snowflake, Target, Tent, Compass, Waves } from "lucide-react"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { sports } from "@/content/sports"
import { isLocale, localePath, tx } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

const icons = {
  "kis-sporlari": Snowflake,
  "doga-ve-macera": Mountain,
  "su-sporlari": Waves,
  "kamp-ve-outdoor": Tent,
  "yuksek-irtifa": Compass,
  "geleneksel-sporlar": Target,
  "salon-sporlari": Dumbbell,
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({
    locale,
    path: "/spor-turizmi",
    title: locale === "tr" ? "Spor Turizmi" : "Sports Tourism",
    description:
      locale === "tr"
        ? "Kış, doğa ve macera, su, kamp, yüksek irtifa, geleneksel sporlar ve salon sporları."
        : "Winter, nature and adventure, water, camping, altitude, traditional sports and indoor sports.",
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
        eyebrow={tr ? "Spor Turizmi" : "Sports Tourism"}
        title={tr ? "Yedi Alan, Tek Bölgesel Okuma" : "Seven Themes, One Regional Reading"}
        lede={
          tr
            ? "Branşlar coğrafyaya göre seçilir. Tesis, parkur ve organizasyon bilgisi doğrulanmadan ürün gibi sunulmaz."
            : "Disciplines are chosen according to geography. Facilities, routes and events are not presented as products before they are confirmed."
        }
        image="/images/gol-ve-su.jpg"
        imageAlt={tr ? "Yüksek bir göl" : "A highland lake"}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "Spor Turizmi" : "Sports Tourism" },
        ]}
      />
      <Container className="py-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {sports.map((sport) => {
            const Icon = icons[sport.slug as keyof typeof icons]
            return (
              <li key={sport.slug}>
                <Link href={localePath(locale, `/spor-turizmi/${sport.slug}`)} className="flex h-full gap-4 rounded-3xl border border-border bg-card p-5 hover:border-gold">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent text-teal-ink">
                    <Icon aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-display text-2xl text-navy">{tx(sport.title, locale)}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">{tx(sport.summary, locale)}</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  )
}
