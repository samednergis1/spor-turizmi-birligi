import type { MetadataRoute } from "next"
import { cities, regions } from "@/content/cities"
import { articles } from "@/content/knowledge"
import { legalPages } from "@/content/legal"
import { news } from "@/content/news"
import { sports } from "@/content/sports"
import { locales } from "@/lib/locale"
import { siteUrl, updatedOn } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/birligimiz",
    "/sehirlerimiz",
    ...regions.map((region) => `/sehirlerimiz/${region.slug}`),
    ...cities.map((city) => `/sehirlerimiz/${city.slug}`),
    "/spor-turizmi",
    ...sports.map((sport) => `/spor-turizmi/${sport.slug}`),
    "/projelerimiz",
    "/yatirim-ve-is-birlikleri",
    "/haberler",
    ...news.map((item) => `/haberler/${item.slug}`),
    "/bilgi-merkezi",
    ...articles.map((article) => `/bilgi-merkezi/${article.slug}`),
    "/iletisim",
    ...legalPages.map((page) => `/${page.slug}`),
  ]

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: updatedOn,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: {
          tr: `${siteUrl}/tr${path}`,
          en: `${siteUrl}/en${path}`,
        },
      },
    }))
  )
}
