import type { RegionId } from "@/content/cities"

export const MAP_WIDTH = 960
export const MAP_HEIGHT = 640

export type ProvinceShape = {
  slug: string
  name: string
  region: RegionId
  regionLabel: string
  summary: string
  image: string
  d: string
  labelX: number
  labelY: number
}
