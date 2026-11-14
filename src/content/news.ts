import type { Copy } from "@/lib/locale"

export type NewsCategory =
  | "birlik"
  | "bolge"
  | "sehir"
  | "organizasyon"
  | "isbirligi"
  | "etkinlik"
  | "basin"

export const newsCategories: { id: NewsCategory; label: Copy }[] = [
  { id: "birlik", label: { tr: "Birlikten Haberler", en: "From the Union" } },
  { id: "bolge", label: { tr: "Bölgesel Spor Turizmi", en: "Regional Sports Tourism" } },
  { id: "sehir", label: { tr: "Şehirlerden Haberler", en: "News from the Cities" } },
  { id: "organizasyon", label: { tr: "Spor Organizasyonları", en: "Sports Events" } },
  { id: "isbirligi", label: { tr: "İş Birlikleri", en: "Cooperation" } },
  { id: "etkinlik", label: { tr: "Toplantılar ve Etkinlikler", en: "Meetings and Events" } },
  { id: "basin", label: { tr: "Basın Açıklamaları", en: "Press Statements" } },
]

export type NewsItem = {
  slug: string
  date: string
  category: NewsCategory
  source: Copy
  title: Copy
  summary: Copy
  body: Copy[]
}

export const news: NewsItem[] = [
  {
    slug: "platform-hazirlik-notu",
    date: "2026-11-10",
    category: "birlik",
    source: {
      tr: "Platform hazırlık notu",
      en: "Platform preparation note",
    },
    title: {
      tr: "Dijital platform taslağı yayına hazırlanıyor",
      en: "The digital platform draft is being prepared",
    },
    summary: {
      tr: "Site; şehir profilleri, spor turizmi alanları ve iş birliği kanallarını bir araya getiren bir taslak olarak açıldı. Bu not bir basın açıklaması veya tüzel kişilik duyurusu değildir.",
      en: "The site opens as a draft that brings together city profiles, sports-tourism themes and cooperation channels. This note is not a press statement or an announcement of a legal entity.",
    },
    body: [
      {
        tr: "Doğu ve Güneydoğu Anadolu Spor Turizmi Birliği için hazırlanan dijital platform, bölgesel spor turizmini tanıtmak ve paydaşlar arasında iletişimi kolaylaştırmak üzere taslak olarak yayımlanıyor.",
        en: "The digital platform prepared for the Eastern and Southeastern Anatolia Sports Tourism Union is published as a draft, to present regional sports tourism and to make contact among stakeholders easier.",
      },
      {
        tr: "Şehir sayfalarındaki ifadeler coğrafi potansiyeli tarif eder. Tesis, etkinlik takvimi ve yatırım bilgisi, yerel kaynak doğrulanmadan eklenmeyecektir. Haberler de ancak tarihi ve kaynağı belli içeriklerle büyüyecektir.",
        en: "Wording on the city pages describes geographic potential. Facility, calendar and investment details will not be added before local sources are confirmed. News will grow only with items that have a date and a source.",
      },
      {
        tr: "Oluşumun hâlihazırda resmî tüzel kişilik statüsü bulunmamaktadır. Sitedeki formlar ön iletişim içindir; üyelik, aidat, bağış veya ortaklık onayı üretmez. İleti e-posta olarak gider, sitede bir kopyası saklanmaz.",
        en: "The initiative does not currently have official legal-entity status. Forms on the site are for early contact; they do not create membership, fees, donations or partnership approval. The message goes by email, and the site does not keep a copy.",
      },
    ],
  },
]

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug)
}

export function categoryLabel(id: NewsCategory, locale: "tr" | "en") {
  return newsCategories.find((item) => item.id === id)?.label[locale] ?? id
}
