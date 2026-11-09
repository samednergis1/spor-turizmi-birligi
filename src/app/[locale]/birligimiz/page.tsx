import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { legalNotice, legalNoticeEn } from "@/lib/site"
import { isLocale, localePath } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

const principles = [
  {
    tr: ["İş birliği", "Ortak hedefler doğrultusunda birlikte hareket etmek."],
    en: ["Cooperation", "Moving together toward shared goals."],
  },
  {
    tr: ["Sürdürülebilirlik", "Doğal ve kültürel değerleri koruyarak gelişmek."],
    en: ["Sustainability", "Developing while protecting natural and cultural assets."],
  },
  {
    tr: ["Bölgesel kalkınma", "Spor turizmini ekonomik ve sosyal gelişim aracı olarak değerlendirmek."],
    en: ["Regional development", "Treating sports tourism as a tool for economic and social development."],
  },
  {
    tr: ["Erişilebilirlik", "Farklı şehirleri ve paydaşları ortak platformda buluşturmak."],
    en: ["Access", "Bringing different cities and stakeholders onto a shared platform."],
  },
  {
    tr: ["Yenilikçilik", "Yeni projeler ve uygulamalar geliştirmek."],
    en: ["Innovation", "Developing new projects and practices."],
  },
  {
    tr: ["Uluslararasılaşma", "Bölgenin potansiyelini farklı pazarlara tanıtmak."],
    en: ["International outlook", "Presenting the region's potential to different markets."],
  },
] as const

const stakeholders = [
  ["Yerel yönetimler", "Local governments"],
  ["Kamu kurumları", "Public institutions"],
  ["Spor kulüpleri ve spor kuruluşları", "Sports clubs and sports organisations"],
  ["Üniversiteler", "Universities"],
  ["Turizm paydaşları", "Tourism stakeholders"],
  ["Yatırımcılar", "Investors"],
  ["Sivil toplum", "Civil society"],
] as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({
    locale,
    path: "/birligimiz",
    title: locale === "tr" ? "Birliğimiz" : "The Union",
    description:
      locale === "tr"
        ? "Hakkımızda, misyon, vizyon, temel ilkeler ve paydaş yapısı. Gönüllü bir spor turizmi iş birliği platformu."
        : "About, mission, vision, principles and stakeholder structure. A voluntary sports-tourism cooperation platform.",
  })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const tr = locale === "tr"
  const home = localePath(locale)

  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={tr ? "Birliğimiz" : "The Union"}
        title={tr ? "Paydaşların gönüllü iş birliği platformu." : "A voluntary cooperation platform of stakeholders."}
        lede={
          tr
            ? "Spor turizmini yalnızca organizasyon değil, şehirlerin ekonomik ve sosyal gelişimine katkı sunan stratejik bir alan olarak görüyoruz."
            : "We see sports tourism not only as events, but as a strategic field that can contribute to the economic and social development of cities."
        }
        image="/images/hero-daglar.jpg"
        imageAlt={tr ? "Dağ sırtlarında gün doğumu" : "Sunrise on mountain ridges"}
        crumbs={[
          { href: home, label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "Birliğimiz" : "The Union" },
        ]}
      />
      <Container className="space-y-16 py-14">
        <section id="hakkimizda" className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-3xl text-navy lg:col-span-4">{tr ? "Hakkımızda" : "About"}</h2>
          <div className="space-y-4 text-base leading-8 text-navy/85 lg:col-span-8">
            <p>
              {tr
                ? "Doğu ve Güneydoğu Anadolu Spor Turizmi Birliği, Doğu ve Güneydoğu Anadolu bölgelerinin spor turizmi alanındaki potansiyelini geliştirmek ve bu alanda sürdürülebilir iş birlikleri oluşturmak amacıyla bir araya gelen paydaşların oluşturduğu bir oluşumdur."
                : "The Eastern and Southeastern Anatolia Sports Tourism Union is an initiative formed by stakeholders who come together to develop the sports-tourism potential of the two regions and to build sustainable cooperation."}
            </p>
            <p>
              {tr
                ? "Bölgenin doğal alanlarının, spor tesislerinin, kültürel değerlerinin ve insan kaynağının spor turizmi perspektifiyle değerlendirilmesini önemsiyoruz. Yerel yönetimler, kamu kurumları, spor kulüpleri, üniversiteler, turizm kuruluşları, yatırımcılar ve sivil toplum paydaşları arasında güçlü bir iletişim ağı oluşturmayı hedefliyoruz."
                : "We care about reading the region's natural areas, sports facilities, cultural assets and people through sports tourism. We aim to build a strong communication network among local governments, public institutions, sports clubs, universities, tourism organisations, investors and civil society."}
            </p>
            <p>
              {tr
                ? "Bizim için spor turizmi; yalnızca organizasyon düzenlemek değil, şehirlerin ekonomik ve sosyal gelişimine katkı sunan, bölgesel tanıtımı güçlendiren ve yeni fırsatlar oluşturan stratejik bir alandır."
                : "For us, sports tourism is not only organising events. It is a strategic field that can contribute to the economic and social development of cities, strengthen regional promotion and open new opportunities."}
            </p>
          </div>
        </section>

        <section id="misyon-vizyon" className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl bg-navy p-6 text-ivory sm:p-8">
            <h2 className="text-3xl">{tr ? "Misyonumuz" : "Mission"}</h2>
            <p className="mt-4 text-sm leading-7 text-ivory/85">
              {tr
                ? "Doğu ve Güneydoğu Anadolu'nun spor turizmi potansiyelini ortaya çıkarmak, geliştirmek ve tanıtmak; bölgesel paydaşlar arasında iş birliğini güçlendirmek; spor, turizm ve yatırım alanlarında sürdürülebilir projelerin geliştirilmesine katkı sunmak."
                : "To reveal, develop and present the sports-tourism potential of Eastern and Southeastern Anatolia; to strengthen cooperation among regional stakeholders; and to contribute to sustainable projects in sport, tourism and investment."}
            </p>
          </article>
          <article className="rounded-3xl border border-gold/50 bg-card p-6 sm:p-8">
            <h2 className="text-3xl text-navy">{tr ? "Vizyonumuz" : "Vision"}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {tr
                ? "Doğu ve Güneydoğu Anadolu'yu ulusal ve uluslararası ölçekte tanınan, tercih edilen ve sürdürülebilir spor turizmi destinasyonları arasında konumlandırmak; bölgenin sportif, doğal ve kültürel değerlerini uluslararası iş birlikleriyle buluşturan güçlü bir ekosistemin gelişmesine katkı sunmak."
                : "To help place Eastern and Southeastern Anatolia among recognised, preferred and sustainable sports-tourism destinations, and to contribute to an ecosystem that connects the region's sporting, natural and cultural assets with international cooperation."}
            </p>
          </article>
        </section>

        <section id="ilkeler">
          <h2 className="text-3xl text-navy">{tr ? "Temel ilkelerimiz" : "Principles"}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => {
              const [title, body] = item[locale]
              return (
                <li key={title} className="rounded-3xl border border-border bg-card p-5">
                  <h3 className="text-2xl text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </li>
              )
            })}
          </ul>
        </section>

        <section id="organizasyon" className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl text-navy">{tr ? "Organizasyon yapımız" : "How we are organised"}</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {tr
                ? "Kişi ve unvan bilgileri teyit edilmeden yayımlanmaz. Aşağıdaki halkalar, hedeflenen paydaş çevresini gösterir; resmî üyelik veya yetki listesi değildir."
                : "Names and titles are not published before they are confirmed. The groups below show the intended circle of stakeholders. They are not an official membership or authority list."}
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {stakeholders.map(([trLabel, enLabel]) => (
              <li key={trLabel} className="rounded-2xl bg-accent px-4 py-3 text-sm font-medium text-navy">
                {tr ? trLabel : enLabel}
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-3xl border border-gold/60 bg-card p-6">
          <h2 className="text-2xl text-navy">{tr ? "Hukuki durum" : "Legal status"}</h2>
          <p className="mt-3 text-sm leading-7 text-navy">{legalNotice}</p>
          {!tr ? <p className="mt-3 text-sm leading-7 text-muted-foreground">{legalNoticeEn}</p> : null}
        </aside>
      </Container>
    </>
  )
}
