import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { HomePage } from "@/components/home/home-page"
import { isLocale } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"
import { siteName } from "@/lib/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const description =
    locale === "tr"
      ? "Doğu ve Güneydoğu Anadolu'nun doğal, kültürel ve sportif zenginliklerini ortak bir vizyonla buluşturan gönüllü spor turizmi platformu."
      : "A voluntary sports-tourism platform gathering the natural, cultural and sporting wealth of Eastern and Southeastern Anatolia."
  return {
    ...pageMetadata({ locale, title: siteName[locale], description }),
    title: { absolute: siteName[locale] },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <HomePage locale={locale} />
}
