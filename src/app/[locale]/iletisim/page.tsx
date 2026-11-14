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
        title={tr ? "İletişim" : "Contact"}
        lede={tr ? "Form hemen aşağıda." : "The form is just below."}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "İletişim" : "Contact" },
        ]}
      />
      <Container className="py-8 sm:py-10">
        <Suspense fallback={<div className="h-40 rounded-3xl bg-muted" />}>
          <ContactForm locale={locale} source="iletisim" />
        </Suspense>
        <details className="mt-6 rounded-2xl border border-border bg-card p-4">
          <summary className="cursor-pointer text-sm font-semibold text-navy">{labels.contactChannel}</summary>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{labels.noEmail}</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{labels.noAddress}</p>
        </details>
      </Container>
    </>
  )
}
