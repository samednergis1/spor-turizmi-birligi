import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { ContactForm } from "@/components/forms/contact-form"
import { isLocale, localePath } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

const kinds = [
  {
    konu: "yatirim",
    tr: ["Yatırım ve proje önerisi", "Tesis, kamp, ekipman veya organizasyon fikrini ön görüşmeye açmak."],
    en: ["Investment and project proposal", "Open an idea for a facility, camp, equipment or event to an early conversation."],
  },
  {
    konu: "isbirligi",
    tr: ["Kurumsal iş birliği", "Kurumunuzun bölgesel ağ ile nasıl konuşabileceğini yazmak."],
    en: ["Institutional cooperation", "Describe how your organisation might speak with the regional network."],
  },
  {
    konu: "organizasyon",
    tr: ["Organizasyon ve etkinlik ortaklığı", "Bir buluşma, kamp veya gösteri için ev sahibi ya da içerik ortağı aramak."],
    en: ["Event partnership", "Look for a host or content partner for a gathering, camp or display."],
  },
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
    path: "/yatirim-ve-is-birlikleri",
    title: locale === "tr" ? "Yatırım ve İş Birlikleri" : "Investment and Cooperation",
    description:
      locale === "tr"
        ? "Bölgenin potansiyeline birlikte değer katmak için ön iletişim. Başvuru onay veya taahhüt değildir."
        : "Early contact for adding value to the region's potential together. A request is not approval or a commitment.",
  })
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const tr = locale === "tr"
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={tr ? "Yatırım ve İş Birlikleri" : "Investment and Cooperation"}
        title={tr ? "Bölgenin Potansiyeline Birlikte Değer Katıyoruz." : "Adding value to the region's potential together."}
        lede={
          tr
            ? "Doğu ve Güneydoğu Anadolu, spor turizmi alanında geliştirilebilecek önemli fırsatlara sahiptir. Spor tesisleri, konaklama altyapısı, kamp merkezleri, doğa sporları alanları ve organizasyonlar gibi başlıklarda yeni iş birlikleri geliştirilebilir."
            : "Eastern and Southeastern Anatolia holds important opportunities that can be developed in sports tourism. New cooperation can be explored around sports facilities, accommodation, camp centres, nature-sports places and events."
        }
        image="/images/tas-sehir.jpg"
        imageAlt={tr ? "Taş kent ve ova" : "A stone city and the plain"}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "Yatırım ve İş Birlikleri" : "Investment and Cooperation" },
        ]}
      />
      <Container className="space-y-12 py-14">
        <p className="max-w-3xl text-base leading-8 text-navy/85">
          {tr
            ? "Birlik olarak kamu kurumları, yerel yönetimler, özel sektör temsilcileri, spor kuruluşları ve yatırımcılar arasında iletişim kurulmasını ve ortak çalışma fırsatlarının değerlendirilmesini destekliyoruz. Bu sayfa getiri, arsa veya teşvik vaat etmez."
            : "As a union we support contact among public institutions, local governments, private-sector representatives, sports organisations and investors, and the review of opportunities to work together. This page does not promise a return, land or an incentive."}
        </p>
        <ul className="grid gap-4 md:grid-cols-3">
          {kinds.map((kind) => {
            const [title, body] = kind[locale]
            return (
              <li key={kind.konu}>
                <Link
                  href={`${localePath(locale, "/yatirim-ve-is-birlikleri")}?konu=${kind.konu}#basvuru`}
                  className="block h-full rounded-3xl border border-border bg-card p-5 hover:border-gold"
                >
                  <h2 className="text-2xl text-navy">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </Link>
              </li>
            )
          })}
        </ul>
        <div id="basvuru">
          <h2 className="text-3xl text-navy">{tr ? "Ön başvuru" : "Early request"}</h2>
          <div className="mt-6">
            <Suspense fallback={<div className="h-40 rounded-3xl bg-muted" />}>
              <ContactForm locale={locale} />
            </Suspense>
          </div>
        </div>
      </Container>
    </>
  )
}
