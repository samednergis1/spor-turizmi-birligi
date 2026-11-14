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
    tr: ["Yatırım ve Proje Önerisi", "Tesis, kamp, ekipman veya organizasyon fikrini ön görüşmeye açmak."],
    en: ["Investment and Project Proposal", "Open an idea for a facility, camp, equipment or event to an early conversation."],
  },
  {
    konu: "isbirligi",
    tr: ["Kurumsal İş Birliği", "Kurumunuzun bölgesel ağ ile nasıl konuşabileceğini yazmak."],
    en: ["Institutional Cooperation", "Describe how your organisation might speak with the regional network."],
  },
  {
    konu: "organizasyon",
    tr: ["Organizasyon ve Etkinlik Ortaklığı", "Bir buluşma, kamp veya gösteri için ev sahibi ya da içerik ortağı aramak."],
    en: ["Event Partnership", "Look for a host or content partner for a gathering, camp or display."],
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
        title={tr ? "Bölgenin Potansiyeline Birlikte Değer Katıyoruz." : "Adding Value to the Region's Potential Together."}
        lede={tr ? "Üç başvuru türünden birini seçin." : "Choose one of the three request types."}
        image="/images/tas-sehir.jpg"
        imageAlt={tr ? "Taş kent ve ova" : "A stone city and the plain"}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "Yatırım ve İş Birlikleri" : "Investment and Cooperation" },
        ]}
      />
      <Container className="space-y-12 py-14">
        <details className="max-w-3xl text-sm leading-7 text-navy/80">
          <summary className="cursor-pointer font-semibold text-navy">{tr ? "Kısa Not" : "A Short Note"}</summary>
          <p className="mt-3">
            {tr
              ? "Kamu, yerel yönetim, spor kuruluşları ve yatırımcılar arasında ön iletişim desteklenir. Bu sayfa getiri, arsa veya teşvik vaat etmez."
              : "Early contact among public bodies, local government, sports organisations and investors is supported. This page does not promise a return, land or an incentive."}
          </p>
        </details>
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
          <h2 className="text-3xl text-navy">{tr ? "Ön Başvuru" : "Early Request"}</h2>
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
