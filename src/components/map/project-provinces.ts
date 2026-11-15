import { geoMercator, geoPath, type GeoPermissibleObjects } from "d3-geo"
import { MAP_HEIGHT, MAP_WIDTH, type ProvinceShape } from "@/components/map/map-frame"
import { cities, regions } from "@/content/cities"
import type { Locale } from "@/lib/locale"
import { tx } from "@/lib/locale"
import provinces from "@/data/turkey-provinces.json"

/**
 * Province boundaries from Turkey-Maps-GeoJSON (Apache-2.0):
 * https://github.com/alpers/Turkey-Maps-GeoJSON
 */
const TARGET_NAMES = [
  "Ağrı",
  "Ardahan",
  "Bingöl",
  "Bitlis",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Hakkâri",
  "Iğdır",
  "Kars",
  "Malatya",
  "Muş",
  "Tunceli",
  "Van",
  "Adıyaman",
  "Batman",
  "Diyarbakır",
  "Gaziantep",
  "Kilis",
  "Mardin",
  "Siirt",
  "Şanlıurfa",
  "Şırnak",
] as const

export type { ProvinceShape }
export { MAP_HEIGHT, MAP_WIDTH }

type ProvinceProperties = { name?: string; number?: number }

function fold(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("tr-TR")
    .replaceAll("â", "a")
    .replaceAll("î", "i")
    .replaceAll("û", "u")
    .replaceAll("ı", "i")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
}

const targetNames = new Set(TARGET_NAMES.map(fold))

function featureName(properties: ProvinceProperties | null) {
  return typeof properties?.name === "string" ? properties.name : ""
}

export function projectProvinces(locale: Locale): ProvinceShape[] {
  const collection = provinces as {
    type: "FeatureCollection"
    features: { type: "Feature"; properties: ProvinceProperties; geometry: GeoPermissibleObjects }[]
  }
  const features = collection.features.filter((feature) => targetNames.has(fold(featureName(feature.properties))))
  if (features.length !== TARGET_NAMES.length) {
    const found = new Set(features.map((feature) => fold(featureName(feature.properties))))
    const missing = TARGET_NAMES.filter((name) => !found.has(fold(name)))
    throw new Error(`Province map is missing: ${missing.join(", ")}`)
  }

  const filtered = { type: "FeatureCollection" as const, features }
  const projection = geoMercator().fitExtent(
    [
      [32, 28],
      [MAP_WIDTH - 32, MAP_HEIGHT - 28],
    ],
    filtered as unknown as GeoPermissibleObjects,
  )
  const path = geoPath(projection)
  const citiesByName = new Map(cities.map((city) => [fold(city.name), city]))

  const shapes = features.flatMap((feature) => {
    const city = citiesByName.get(fold(featureName(feature.properties)))
    const d = path(feature as unknown as GeoPermissibleObjects)
    const centroid = path.centroid(feature as unknown as GeoPermissibleObjects)
    if (!city || !d || !Number.isFinite(centroid[0]) || !Number.isFinite(centroid[1])) return []
    const region = regions.find((item) => item.id === city.region)
    return [
      {
        slug: city.slug,
        name: city.name,
        region: city.region,
        regionLabel: region ? tx(region.title, locale) : "",
        summary: tx(city.summary, locale),
        image: city.image ?? "",
        d,
        labelX: centroid[0],
        labelY: centroid[1],
      },
    ]
  })

  if (shapes.length !== TARGET_NAMES.length) {
    const found = new Set(shapes.map((shape) => fold(shape.name)))
    const missing = TARGET_NAMES.filter((name) => !found.has(fold(name)))
    throw new Error(`Province map could not join city data: ${missing.join(", ")}`)
  }

  return nudgeLabels(shapes)
}

function nudgeLabels(shapes: ProvinceShape[]) {
  const placed: { x: number; y: number }[] = []
  const ordered = [...shapes].sort((a, b) => b.d.length - a.d.length)
  const next = new Map<string, { x: number; y: number }>()
  for (const shape of ordered) {
    let x = shape.labelX
    let y = shape.labelY
    for (let attempt = 0; attempt < 6; attempt += 1) {
      const crowded = placed.some((point) => Math.hypot(point.x - x, point.y - y) < 34)
      if (!crowded) break
      y += 11
    }
    placed.push({ x, y })
    next.set(shape.slug, { x, y })
  }
  return shapes.map((shape) => {
    const label = next.get(shape.slug)
    return label ? { ...shape, labelX: label.x, labelY: label.y } : shape
  })
}
