import type { Copy } from "@/lib/locale"

export type ProjectStatus = "fikir" | "planlama" | "devam" | "tamamlandi"

export type Project = {
  slug: string
  title: Copy
  purpose: Copy
  audience: Copy
  places: Copy
  status: ProjectStatus
  note: Copy
}

export const projectStatusLabel: Record<ProjectStatus, Copy> = {
  fikir: { tr: "Proje önerisi", en: "Proposal" },
  planlama: { tr: "Planlama", en: "Planning" },
  devam: { tr: "Devam ediyor", en: "In progress" },
  tamamlandi: { tr: "Tamamlandı", en: "Completed" },
}

export const projects: Project[] = [
  {
    slug: "bolgesel-calistaylar",
    title: {
      tr: "Bölgesel Spor Turizmi Çalıştayları",
      en: "Regional Sports Tourism Workshops",
    },
    purpose: {
      tr: "İllerin spor turizmi önceliklerini aynı masada konuşmak ve doğrulanabilir bir gündem çıkarmak.",
      en: "To discuss provincial sports-tourism priorities at one table and produce a verifiable agenda.",
    },
    audience: {
      tr: "Yerel yönetimler, spor kulüpleri, turizm paydaşları, üniversiteler ve kamu kurumları.",
      en: "Local governments, sports clubs, tourism stakeholders, universities and public institutions.",
    },
    places: { tr: "Bölge geneli", en: "The region as a whole" },
    status: "fikir",
    note: {
      tr: "Tarih, ev sahibi il ve katılımcı listesi teyit edilmeden duyurulmayacaktır.",
      en: "Date, host province and participant list will not be announced before confirmation.",
    },
  },
  {
    slug: "yedi-bolge-yedi-sehir",
    title: {
      tr: "7 Bölge 7 Şehir Spor Turizmi Buluşmaları",
      en: "Seven Regions, Seven Cities Gatherings",
    },
    purpose: {
      tr: "Doğu ve Güneydoğu deneyimini Türkiye'nin diğer bölgeleriyle karşılıklı öğrenme biçiminde ele almak.",
      en: "To treat the Eastern and Southeastern experience as mutual learning with Türkiye's other regions.",
    },
    audience: {
      tr: "Bölgesel ağlar, kent yönetimleri ve spor turizmi üzerine çalışan kurumlar.",
      en: "Regional networks, city administrations and organisations working on sports tourism.",
    },
    places: { tr: "Ulusal ölçek, ev sahibi iller sonra belirlenecek", en: "National scale; host provinces to be chosen later" },
    status: "fikir",
    note: {
      tr: "Bu başlık bir tur programı veya kontenjan duyurusu değildir.",
      en: "This heading is not a tour programme or a quota announcement.",
    },
  },
  {
    slug: "spor-turizmi-zirvesi",
    title: {
      tr: "Doğu ve Güneydoğu Anadolu Spor Turizmi Zirvesi",
      en: "Eastern and Southeastern Anatolia Sports Tourism Summit",
    },
    purpose: {
      tr: "Bölgenin spor turizmi gündemini yıllık ve izlenebilir bir buluşmada toplamak.",
      en: "To gather the region's sports-tourism agenda in an annual, trackable meeting.",
    },
    audience: {
      tr: "Kamu, yerel yönetim, spor, turizm, üniversite ve yatırımcı paydaşları.",
      en: "Public bodies, local government, sport, tourism, universities and investor stakeholders.",
    },
    places: { tr: "Ev sahibi şehir seçimi yapılmadı", en: "No host city has been selected" },
    status: "fikir",
    note: {
      tr: "Zirve adı, tarih açıklanmadan ticari kayıt veya sponsorluk taahhüdü oluşturmaz.",
      en: "The summit name creates neither commercial registration nor a sponsorship commitment before a date is set.",
    },
  },
  {
    slug: "sehir-envanteri",
    title: {
      tr: "Şehirlerin Spor Turizmi Envanteri",
      en: "City Sports Tourism Inventory",
    },
    purpose: {
      tr: "Her il için aynı şablonla, kaynaklı ve güncellenebilir bir spor turizmi profili hazırlamak.",
      en: "To prepare a sourced, updatable sports-tourism profile for every province on the same template.",
    },
    audience: {
      tr: "İçerik editörleri, yerel paydaşlar, araştırmacılar ve yatırımcı ön görüşmeleri.",
      en: "Content editors, local stakeholders, researchers and early investor conversations.",
    },
    places: { tr: "Haritadaki il çerçevesi", en: "The provincial frame on the map" },
    status: "planlama",
    note: {
      tr: "Bu sitenin şehir sayfaları envanterin ilk iskeletidir. Tesis ve etkinlik alanları boş bırakılmıştır.",
      en: "The city pages of this site are the inventory's first skeleton. Facility and event fields are intentionally empty.",
    },
  },
  {
    slug: "uluslararasi-kamplar",
    title: {
      tr: "Uluslararası Spor Kampları ve Organizasyonları",
      en: "International Sports Camps and Events",
    },
    purpose: {
      tr: "Yüksek irtifa, kış ve kültür başlıklarında uluslararası takımlarla ölçülü iş birlikleri tasarlamak.",
      en: "To design measured cooperation with international teams around altitude, winter and culture.",
    },
    audience: {
      tr: "Kulüpler, kamp organizatörleri ve ev sahibi kent yönetimleri.",
      en: "Clubs, camp organisers and host city administrations.",
    },
    places: {
      tr: "Öncelikli okuma: Erzurum ve uygunluğu doğrulanacak diğer iller",
      en: "First reading: Erzurum, and other provinces once suitability is confirmed",
    },
    status: "fikir",
    note: {
      tr: "Herhangi bir federasyon, kulüp veya ülke ile anlaşma bulunduğu anlamına gelmez.",
      en: "It does not mean an agreement exists with any federation, club or country.",
    },
  },
  {
    slug: "genclik-spor-turizmi",
    title: {
      tr: "Gençlik ve Spor Turizmi Projeleri",
      en: "Youth and Sports Tourism Projects",
    },
    purpose: {
      tr: "Gençlerin kendi şehirlerinin spor alanlarını tanıması ve bölgeler arası değişim için güvenli programlar önermek.",
      en: "To propose safe programmes for young people to know their city's sporting places and to exchange across the region.",
    },
    audience: {
      tr: "Gençlik grupları, üniversite toplulukları, kulüpler ve eğitim kurumları.",
      en: "Youth groups, university communities, clubs and educational institutions.",
    },
    places: { tr: "Bölge geneli", en: "The region as a whole" },
    status: "fikir",
    note: {
      tr: "Reşit olmayan katılımcılar için veli izni, refakat ve güvenli ulaşım ayrıca tasarlanmalıdır. Bu site kayıt kabul etmez.",
      en: "Parental consent, supervision and safe transport for minors must be designed separately. This site does not take registrations.",
    },
  },
  {
    slug: "tanitim-programlari",
    title: {
      tr: "Bölgesel Spor Turizmi Tanıtım Programları",
      en: "Regional Sports Tourism Promotion Programmes",
    },
    purpose: {
      tr: "Doğrulanmış görüntü, şehir profili ve branş anlatısını ulusal ve uluslararası paydaşlara açık bir dille taşımak.",
      en: "To carry confirmed imagery, city profiles and discipline narratives to national and international stakeholders in plain language.",
    },
    audience: {
      tr: "Basın, turizm paydaşları, spor kurumları ve uluslararası ağlar.",
      en: "Press, tourism stakeholders, sports bodies and international networks.",
    },
    places: { tr: "Bölge geneli", en: "The region as a whole" },
    status: "planlama",
    note: {
      tr: "Tanıtım, henüz doğrulanmamış tesis veya etkinlik vaadi içeremez. Bu sitenin dili o sınıra göre kuruludur.",
      en: "Promotion cannot promise facilities or events that are not yet confirmed. The language of this site is built to that limit.",
    },
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
