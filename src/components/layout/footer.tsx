import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { navigation } from "@/content/ui"
import type { Locale } from "@/lib/locale"
import { localePath } from "@/lib/locale"
import { legalNotice, legalNoticeEn, siteName, slogan, supportingLine } from "@/lib/site"

export function Footer({ locale }: { locale: Locale }) {
  const tr = locale === "tr"
  const items = navigation(locale)
  const year = 2026
  return (
    <footer className="mt-auto border-t border-gold/40 bg-navy text-ivory">
      <Container className="grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link href={localePath(locale)} className="inline-flex items-center gap-3">
            <Image
              src="/brand/logo.jpg"
              alt={siteName[locale]}
              width={64}
              height={64}
              className="size-14 rounded-full object-cover"
            />
            <span>
              <span className="block text-[11px] tracking-[0.14em] text-gold uppercase">
                {tr ? "Doğu ve Güneydoğu Anadolu" : "Eastern and Southeastern Anatolia"}
              </span>
              <span className="mt-1 block font-display text-xl leading-none">
                {tr ? "Spor Turizmi Birliği" : "Sports Tourism Union"}
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-ivory/80">{slogan[locale]}</p>
          <p className="mt-2 text-sm text-gold">{supportingLine[locale]}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8">
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-gold uppercase">
              {tr ? "Kurum" : "Union"}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {items.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/85 hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-gold uppercase">
              {tr ? "Keşfet" : "Explore"}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {items.slice(4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/85 hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-gold uppercase">
              {tr ? "Bilgilendirme" : "Information"}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href={localePath(locale, "/kvkk")} className="text-ivory/85 hover:text-gold">
                  {tr ? "KVKK Aydınlatma Metni" : "Clarification Text"}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, "/cerez-politikasi")} className="text-ivory/85 hover:text-gold">
                  {tr ? "Çerez Politikası" : "Cookie Policy"}
                </Link>
              </li>
              <li>
                <Link href={localePath(locale, "/gizlilik")} className="text-ivory/85 hover:text-gold">
                  {tr ? "Gizlilik Politikası" : "Privacy Policy"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="pb-10">
        <div className="rounded-2xl border border-gold/50 bg-navy-deep/70 p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-gold uppercase">
            {tr ? "Hukuki Durum" : "Legal Status"}
          </p>
          {!tr ? (
            <p className="mt-2 text-xs text-ivory/60">
              The Turkish sentence is the canonical notice. The English line is a translation.
            </p>
          ) : null}
          <p className="mt-3 text-sm leading-7 text-ivory">{legalNotice}</p>
          {!tr ? <p className="mt-3 text-sm leading-7 text-ivory/75">{legalNoticeEn}</p> : null}
        </div>
        <p className="mt-6 text-xs text-ivory/60">
          © {year} {siteName[locale]}
        </p>
      </Container>
    </footer>
  )
}
