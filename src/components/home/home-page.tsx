import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Bike,
  Compass,
  Handshake,
  Mountain,
  Snowflake,
  Dumbbell,
  Target,
  Tent,
  Waves,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { RegionMap } from "@/components/map/region-map"
import { cities, regions } from "@/content/cities"
import { news, categoryLabel } from "@/content/news"
import { projects, projectStatusLabel } from "@/content/projects"
import { sports } from "@/content/sports"
import type { Locale } from "@/lib/locale"
import { localePath, tx } from "@/lib/locale"
import { formatDate } from "@/lib/format"
import { cn } from "cn"

const icons = {
  "kis-sporlari": Snowflake,
  "doga-ve-macera": Mountain,
  "su-sporlari": Waves,
  "kamp-ve-outdoor": Tent,
  "yuksek-irtifa": Compass,
  "geleneksel-sporlar": Target,
  "salon-sporlari": Dumbbell,
} as const

const featured = ["erzurum", "van", "elazig", "siirt", "diyarbakir", "mardin"]

export function HomePage({ locale }: { locale: Locale }) {
  const tr = locale === "tr"
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-9.5rem)] overflow-hidden bg-navy text-ivory">
        <Image
          src="/images/hero-daglar.jpg"
          alt={
            tr
              ? "Gün doğumunda karlı dağlar, turkuaz bir akarsu ve uzakta yürüyüşçüler"
              : "Snowy mountains at sunrise, a turquoise river and distant walkers"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/25" />
        <Container className="relative flex min-h-[calc(100svh-9.5rem)] flex-col justify-end py-14 sm:py-20">
          <p className="text-2xl font-bold tracking-wide text-gold sm:text-4xl">
            {tr ? "Sporla Keşfet, Turizmle Geliştir" : "Discover Through Sport, Develop Through Tourism"}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            {tr ? "Bölgenin Gücü, Sporun Geleceği" : "The Region's Strength, the Future of Sport"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/90">
            {tr
              ? "Doğu ve Güneydoğu Anadolu'nun doğal, kültürel ve sportif zenginliklerini ortak bir vizyonla buluşturuyoruz."
              : "We bring together the natural, cultural and sporting wealth of Eastern and Southeastern Anatolia around a shared vision."}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-ivory/75 sm:text-base">
            {tr
              ? "Şehirlerimizin spor turizmi potansiyelini tanıtıyor, paydaşlar arasında iş birliğini güçlendiriyor ve sürdürülebilir projelerin geliştirilmesine katkı sunuyoruz."
              : "We present the sports-tourism potential of our cities, strengthen cooperation among stakeholders and contribute to sustainable projects."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={localePath(locale, "/birligimiz")}
              className={cn(buttonVariants({ size: "lg" }), "h-12 bg-gold px-5 text-base text-navy hover:bg-gold/90")}
            >
              {tr ? "Birliğimizi Tanıyın" : "Meet the Union"}
            </Link>
            <Link
              href={localePath(locale, "/sehirlerimiz")}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 border-ivory/40 bg-ivory/10 px-5 text-base text-ivory hover:bg-ivory hover:text-navy")}
            >
              {tr ? "Şehirlerimizi Keşfedin" : "Explore the Cities"}
            </Link>
            <Link
              href={localePath(locale, "/yatirim-ve-is-birlikleri")}
              className={cn(buttonVariants({ size: "lg" }), "h-12 bg-teal px-5 text-base text-navy hover:bg-teal/90")}
            >
              {tr ? "İş Birliği Geliştirin" : "Build Cooperation"}
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-ink uppercase">
              {tr ? "Tanıtım" : "Introduction"}
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-navy">
              {tr ? "Potansiyel, Ortak Bir Cümlede Buluşuyor" : "Potential, Gathered in One Shared Sentence"}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-navy/85 lg:col-span-8">
            <p>
              {tr
                ? "Doğu ve Güneydoğu Anadolu, sahip olduğu doğal güzellikleri, coğrafi çeşitliliği, kültürel mirası ve sportif imkânlarıyla Türkiye'nin önemli spor turizmi potansiyellerinden birini barındırmaktadır."
                : "Eastern and Southeastern Anatolia holds one of Türkiye's important sports-tourism potentials, through its natural beauty, geographic variety, cultural heritage and sporting possibilities."}
            </p>
            <details className="text-base leading-8">
              <summary className="cursor-pointer text-sm font-semibold text-navy">
                {tr ? "Devamını Oku" : "Read More"}
              </summary>
              <p className="mt-3">
                {tr
                  ? "Doğu ve Güneydoğu Anadolu Spor Turizmi Birliği olarak bu potansiyelin ortaya çıkarılması, geliştirilmesi ve ulusal ve uluslararası alanda tanıtılması için çalışıyoruz. Şehirlerimizi, kurumlarımızı, spor paydaşlarımızı ve yatırımcılarımızı ortak bir hedef etrafında buluşturarak spor turizminin bölgesel kalkınmaya katkısını artırmayı amaçlıyoruz."
                  : "As the Eastern and Southeastern Anatolia Sports Tourism Union, we work to reveal, develop and present this potential nationally and internationally. We aim to increase the contribution of sports tourism to regional development by gathering our cities, institutions, sports stakeholders and investors around a shared goal."}
              </p>
              <p className="mt-3 border-l-2 border-gold pl-4 text-sm leading-7 text-muted-foreground">
                {tr
                  ? "Birlik adı kurumsal addır. Oluşum, gönüllü bir iş birliği platformudur ve hâlihazırda resmî tüzel kişilik statüsü bulunmamaktadır."
                  : "The union name is the institutional name. The initiative is a voluntary cooperation platform and does not currently have official legal-entity status."}
              </p>
            </details>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-teal-ink uppercase">
                {tr ? "Şehirleri Keşfet" : "Explore the Cities"}
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl text-navy">
                {tr ? "İki Bölge, Tek Harita" : "Two Regions, One Map"}
              </h2>
            </div>
            <Link href={localePath(locale, "/sehirlerimiz")} className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal-ink">
              {tr ? "Şehirlerin Tamamı" : "All Cities"} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={localePath(locale, `/sehirlerimiz/${region.slug}`)}
                className="group relative min-h-48 overflow-hidden rounded-3xl"
              >
                <Image src={region.image} alt={tx(region.imageAlt, locale)} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-3xl text-ivory">{tx(region.title, locale)}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-ivory/80">{tx(region.lede, locale)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <RegionMap locale={locale} />
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((slug) => {
              const city = cities.find((item) => item.slug === slug)
              if (!city) return null
              const region = regions.find((item) => item.id === city.region)
              return (
                <li key={slug}>
                  <Link href={localePath(locale, `/sehirlerimiz/${city.slug}`)} className="flex h-full flex-col rounded-2xl border border-border bg-ivory p-4 hover:border-teal">
                    <span className="text-xs font-semibold tracking-wide text-teal-ink uppercase">
                      {region ? tx(region.title, locale) : ""}
                    </span>
                    <span className="mt-1 font-display text-2xl text-navy">{city.name}</span>
                    <span className="mt-2 text-sm leading-6 text-muted-foreground">{tx(city.summary, locale)}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-ink uppercase">
              {tr ? "Spor Turizmi Alanları" : "Sports Tourism Themes"}
            </p>
            <h2 className="mt-3 text-4xl text-navy">
              {tr ? "Branşa Göre Bakın" : "Look by Discipline"}
            </h2>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport) => {
              const Icon = icons[sport.slug as keyof typeof icons] ?? Bike
              return (
                <li key={sport.slug}>
                  <Link href={localePath(locale, `/spor-turizmi/${sport.slug}`)} className="flex h-full flex-col rounded-3xl border border-border bg-card p-5 hover:border-gold">
                    <span className="grid size-12 place-items-center rounded-2xl bg-accent text-teal-ink">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-2xl text-navy">{tx(sport.title, locale)}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{tx(sport.summary, locale)}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                      {tr ? "Alanı Aç" : "Open the Theme"} <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      <section className="border-y border-border bg-navy py-16 text-ivory sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
                {tr ? "Projelerimiz" : "Projects"}
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl">
                {tr ? "Fikir, Planlama, Devam Eden, Tamamlanan" : "Proposal, Planning, In Progress, Completed"}
              </h2>
            </div>
            <Link href={localePath(locale, "/projelerimiz")} className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
              {tr ? "Tüm Başlıklar" : "All Headings"} <ArrowRight className="size-4" />
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-ivory/75">
            {tr
              ? "Tamamlanan ve devam eden çalışmalar, doğrulanmış bir faaliyet kaydı oluştuğunda bu etiketlerle listelenir. Aşağıdaki başlıklar henüz fikir veya planlama aşamasındadır."
              : "Completed and in-progress work will be listed with those labels once a confirmed record exists. The headings below are still proposals or in planning."}
          </p>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <li key={project.slug} className="rounded-3xl border border-ivory/15 bg-navy-deep/50 p-5">
                <Badge variant="secondary" className="h-6">
                  {tx(projectStatusLabel[project.status], locale)}
                </Badge>
                <h3 className="mt-4 text-2xl">{tx(project.title, locale)}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/75">{tx(project.purpose, locale)}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-ink uppercase">
              {tr ? "Haberler ve Duyurular" : "News and Notices"}
            </p>
            <h2 className="mt-3 text-4xl text-navy">
              {tr ? "Tarihi ve Kaynağı Belli Olanlar" : "Only What Has a Date and a Source"}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {tr
                ? "Doğrulanmamış etkinlik, tesis açılışı veya yatırım haberi yayımlanmaz."
                : "Unconfirmed events, facility openings or investment news are not published."}
            </p>
          </div>
          <ul className="space-y-4 lg:col-span-3">
            {news.map((item) => (
              <li key={item.slug}>
                <Link href={localePath(locale, `/haberler/${item.slug}`)} className="block rounded-3xl border border-border bg-card p-5 hover:border-teal">
                  <p className="text-xs font-semibold tracking-wide text-teal-ink uppercase">
                    {categoryLabel(item.category, locale)} · {formatDate(item.date, locale)}
                  </p>
                  <h3 className="mt-2 text-2xl text-navy">{tx(item.title, locale)}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{tx(item.summary, locale)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 overflow-hidden rounded-[2rem] bg-navy text-ivory md:grid-cols-2">
            <div className="p-8 sm:p-10">
              <Handshake className="size-8 text-gold" aria-hidden="true" />
              <h2 className="mt-4 text-4xl">
                {tr ? "Bölgenin Potansiyeline Birlikte Değer Katalım" : "Let Us Add Value to the Region's Potential Together"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-ivory/80">
                {tr
                  ? "Kamu kurumları, yerel yönetimler, spor kuruluşları, turizm paydaşları ve yatırımcılar için açık bir ön iletişim kanalı. Başvuru; üyelik, ortaklık veya yatırım onayı değildir."
                  : "An open early-contact channel for public institutions, local governments, sports bodies, tourism stakeholders and investors. A request is not membership, partnership or investment approval."}
              </p>
              <Link
                href={localePath(locale, "/yatirim-ve-is-birlikleri")}
                className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 bg-gold px-5 text-base text-navy hover:bg-gold/90")}
              >
                {tr ? "İş Birliği Geliştirin" : "Build Cooperation"}
              </Link>
            </div>
            <div className="relative min-h-64">
              <Image
                src="/images/gol-ve-su.jpg"
                alt={tr ? "Yüksek bir göl ve uzak bir kano" : "A highland lake and a distant kayak"}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
