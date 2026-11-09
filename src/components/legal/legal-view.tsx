import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import type { LegalPage } from "@/content/legal"
import type { Locale } from "@/lib/locale"
import { localePath, tx } from "@/lib/locale"

export function LegalView({ locale, page }: { locale: Locale; page: LegalPage }) {
  const tr = locale === "tr"
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={tr ? "Taslak" : "Draft"}
        title={tx(page.title, locale)}
        lede={tx(page.description, locale)}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tx(page.title, locale) },
        ]}
      />
      <Container className="max-w-3xl space-y-4 py-14">
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph.tr} className="text-base leading-8 text-navy/85">
            {tx(paragraph, locale)}
          </p>
        ))}
      </Container>
    </>
  )
}
