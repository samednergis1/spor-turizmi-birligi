import Image from "next/image"
import { Container } from "@/components/layout/container"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import type { Locale } from "@/lib/locale"

export function PageHero({
  locale,
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  crumbs,
}: {
  locale: Locale
  eyebrow?: string
  title: string
  lede?: string
  image?: string
  imageAlt?: string
  crumbs: { href?: string; label: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy text-ivory">
      {image ? (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/45" />
      <Container className="relative py-12 sm:py-16">
        <Breadcrumbs locale={locale} items={crumbs} tone="light" />
        {eyebrow ? (
          <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-gold uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl leading-tight text-ivory sm:text-5xl">{title}</h1>
        {lede ? <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/85 sm:text-lg">{lede}</p> : null}
      </Container>
    </section>
  )
}
