"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { projects, projectStatusLabel, type ProjectStatus } from "@/content/projects"
import { ui } from "@/content/ui"
import type { Locale } from "@/lib/locale"
import { tx } from "@/lib/locale"
import { cn } from "cn"

const order: ProjectStatus[] = ["fikir", "planlama", "devam", "tamamlandi"]

export function ProjectBoard({ locale }: { locale: Locale }) {
  const labels = ui(locale)
  const [status, setStatus] = useState<ProjectStatus | "all">("all")
  const visible = projects.filter((project) => status === "all" || project.status === status)

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={labels.status}>
        <FilterButton active={status === "all"} onClick={() => setStatus("all")}>
          {labels.allStatuses}
        </FilterButton>
        {order.map((item) => (
          <FilterButton key={item} active={status === item} onClick={() => setStatus(item)}>
            {tx(projectStatusLabel[item], locale)}
          </FilterButton>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          {labels.noResults}
        </p>
      ) : (
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug} className="rounded-3xl border border-border bg-card p-5 shadow-sm">
              <Badge variant={project.status === "planlama" ? "secondary" : "outline"} className="h-6">
                {tx(projectStatusLabel[project.status], locale)}
              </Badge>
              <h3 className="mt-3 text-2xl text-navy">{tx(project.title, locale)}</h3>
              <dl className="mt-4 space-y-3 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-navy">{labels.purpose}</dt>
                  <dd className="text-muted-foreground">{tx(project.purpose, locale)}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">{labels.audience}</dt>
                  <dd className="text-muted-foreground">{tx(project.audience, locale)}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-navy">{labels.places}</dt>
                  <dd className="text-muted-foreground">{tx(project.places, locale)}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-navy/80">{tx(project.note, locale)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "h-10 rounded-full border px-4 text-sm font-medium",
        active ? "border-navy bg-navy text-ivory" : "border-border bg-card text-navy hover:bg-muted"
      )}
    >
      {children}
    </button>
  )
}
