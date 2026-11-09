import type { Metadata } from "next"
import { Newsreader, Outfit } from "next/font/google"
import { notFound } from "next/navigation"
import { CookieNotice } from "@/components/layout/cookie-notice"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { JsonLd } from "@/components/seo/json-ld"
import { ui } from "@/content/ui"
import { isLocale } from "@/lib/locale"
import { rootMetadata } from "@/lib/seo"
import { siteName, siteUrl } from "@/lib/site"
import "../globals.css"

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-newsreader",
  display: "swap",
})

export function generateStaticParams() {
  return [{ locale: "tr" }, { locale: "en" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return rootMetadata(locale)
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const labels = ui(locale)

  return (
    <html lang={locale} className={`${outfit.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          {labels.skip}
        </a>
        <Header locale={locale} />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <CookieNotice locale={locale} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName[locale],
            url: `${siteUrl}/${locale}`,
            inLanguage: locale === "tr" ? "tr-TR" : "en",
          }}
        />
      </body>
    </html>
  )
}
