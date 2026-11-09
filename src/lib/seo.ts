import type { Metadata } from "next"
import type { Locale } from "@/lib/locale"
import { localePath } from "@/lib/locale"
import { shortName, siteName, siteUrl } from "@/lib/site"

type PageMetaInput = {
  locale: Locale
  path?: string
  title: string
  description: string
}

export function pageMetadata({
  locale,
  path = "",
  title,
  description,
}: PageMetaInput): Metadata {
  const canonical = localePath(locale, path)
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        tr: localePath("tr", path),
        en: localePath("en", path),
        "x-default": localePath("tr", path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteName.tr,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? ["en_US"] : ["tr_TR"],
      type: "website",
      images: [
        {
          url: "/images/hero-daglar.jpg",
          width: 1200,
          height: 675,
          alt:
            locale === "tr"
              ? "Doğu Anadolu dağlarında gün doğumu"
              : "Sunrise over the mountains of Eastern Anatolia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-daglar.jpg"],
    },
  }
}

export function rootMetadata(locale: Locale): Metadata {
  const description =
    locale === "tr"
      ? "Doğu ve Güneydoğu Anadolu'nun spor turizmi potansiyelini tanıtan, şehirleri ve paydaşları buluşturan gönüllü iş birliği platformu."
      : "A voluntary cooperation platform presenting the sports-tourism potential of Eastern and Southeastern Anatolia."
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteName[locale],
      template: `%s | ${shortName[locale]}`,
    },
    description,
    applicationName: siteName.tr,
    authors: [{ name: siteName.tr }],
    creator: siteName.tr,
    keywords:
      locale === "tr"
        ? [
            "spor turizmi",
            "Doğu Anadolu",
            "Güneydoğu Anadolu",
            "kış sporları",
            "doğa sporları",
            "bölgesel kalkınma",
          ]
        : [
            "sports tourism",
            "Eastern Anatolia",
            "Southeastern Anatolia",
            "winter sports",
            "outdoor sports",
          ],
    robots: { index: true, follow: true },
    icons: { icon: "/brand/logo.jpg", apple: "/brand/logo.jpg" },
    alternates: {
      canonical: localePath(locale),
      languages: {
        tr: localePath("tr"),
        en: localePath("en"),
        "x-default": localePath("tr"),
      },
    },
    openGraph: {
      title: siteName[locale],
      description,
      url: localePath(locale),
      siteName: siteName.tr,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: locale === "tr" ? ["en_US"] : ["tr_TR"],
      type: "website",
      images: [
        {
          url: "/images/hero-daglar.jpg",
          width: 1200,
          height: 675,
          alt:
            locale === "tr"
              ? "Doğu Anadolu dağlarında gün doğumu"
              : "Sunrise over the mountains of Eastern Anatolia",
        },
      ],
    },
  }
}
