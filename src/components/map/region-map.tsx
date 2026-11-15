import { RegionMapView } from "@/components/map/region-map-view"
import { projectProvinces } from "@/components/map/project-provinces"
import { ui } from "@/content/ui"
import type { Locale } from "@/lib/locale"

export function RegionMap({ locale }: { locale: Locale }) {
  const labels = ui(locale)
  const provinces = projectProvinces(locale)
  return <RegionMapView locale={locale} hint={labels.mapHint} provinces={provinces} />
}
