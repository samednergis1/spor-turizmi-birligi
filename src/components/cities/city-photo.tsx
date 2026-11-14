import Image from "next/image"
import { cityImage, regions, type City } from "@/content/cities"
import type { Locale } from "@/lib/locale"
import { tx } from "@/lib/locale"
import { cn } from "cn"

export function CityPhoto({
  city,
  locale,
  className,
  sizes = "(min-width: 1024px) 36vw, 100vw",
  priority = false,
}: {
  city: City
  locale: Locale
  className?: string
  sizes?: string
  priority?: boolean
}) {
  const region = regions.find((item) => item.id === city.region)
  const src = cityImage(city)
  const alt = city.image ? city.name : region ? tx(region.imageAlt, locale) : city.name

  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden rounded-2xl", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  )
}
