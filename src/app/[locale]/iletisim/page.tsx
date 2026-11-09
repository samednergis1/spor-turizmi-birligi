import type { Metadata } from "next"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { ContactForm } from "@/components/forms/contact-form"
import { ui } from "@/content/ui"
import { isLocale, localePath } from "@/lib/locale"
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
    path: "/iletisim",
    title: locale === "tr" ? "İletişim" : "Contact",
    description:
      locale === "tr"
        ? "Ön iletişim formu. Açık adres ve kurumsal e-posta, teyit edilmeden yayımlanmaz."
        : "An early contact form. A street address and corporate email are not published before they are confirmed.",
  })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const labels = ui(locale)
  const tr = locale === "tr"
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={tr ? "İletişim" : "Contact"}
        title={tr ? "Önce kanal, sonra adres." : "The channel first, the address later."}
        lede={labels.noAddress}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "İletişim" : "Contact" },
        ]}
      />
      <Container className="grid gap-8 py-14 lg:grid-cols-12">
        <aside className="space-y-4 lg:col-span-4">
          <h2 className="text-2xl text-navy">{labels.contactChannel}</h2>
          <p className="text-sm leading-7 text-muted-foreground">{labels.noEmail}</p>
          <p className="text-sm leading-7 text-muted-foreground">{labels.noAddress}</p>
        </aside>
        <div className="lg:col-span-8">
          <Suspense fallback={<div className="h-40 rounded-3xl bg-muted" />}>
            <ContactForm locale={locale} />
          </Suspense>
        </div>
      </Container>
    </>
  )
}
