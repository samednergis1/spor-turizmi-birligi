import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Container } from "@/components/layout/container"
import { PageHero } from "@/components/layout/page-hero"
import { ProjectBoard } from "@/components/projects/project-board"
import { isLocale, localePath } from "@/lib/locale"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return pageMetadata({
    locale,
    path: "/projelerimiz",
    title: locale === "tr" ? "Projelerimiz" : "Projects",
    description:
      locale === "tr"
        ? "Fikir, planlama, devam eden ve tamamlanan çalışmaları ayrı etiketlerle izleyen proje panosu."
        : "A project board that keeps proposals, planning, work in progress and completed work under separate labels.",
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
        eyebrow={tr ? "Projelerimiz" : "Projects"}
        title={tr ? "Henüz uygulanmamış fikir, fikir olarak kalır." : "An idea that has not been carried out stays an idea."}
        lede={
          tr
            ? "Her kartta amaç, hedef kitle, ilgili yer ve durum birlikte durur. Tarih ve paydaş adı, teyit edilmeden eklenmez."
            : "Each card keeps purpose, audience, place and status together. A date or partner name is not added before it is confirmed."
        }
        image="/images/kis-sporlari.jpg"
        imageAlt={tr ? "Kışın yüksek bir sırt" : "A high ridge in winter"}
        crumbs={[
          { href: localePath(locale), label: tr ? "Ana Sayfa" : "Home" },
          { label: tr ? "Projelerimiz" : "Projects" },
        ]}
      />
      <Container className="py-14">
        <ProjectBoard locale={locale} />
      </Container>
    </>
  )
}
