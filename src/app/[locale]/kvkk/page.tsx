import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LegalView } from "@/components/legal/legal-view"
import { getLegal } from "@/content/legal"
import { isLocale, tx } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const page = getLegal("kvkk")
  if (!isLocale(locale) || !page) return {}
  return pageMetadata({
    locale,
    path: "/kvkk",
    title: tx(page.title, locale),
    description: tx(page.description, locale),
  })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const page = getLegal("kvkk")
  if (!isLocale(locale) || !page) notFound()
  return <LegalView locale={locale} page={page} />
}
