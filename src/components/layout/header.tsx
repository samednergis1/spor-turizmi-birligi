"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from "@/components/layout/container"
import { navigation, ui, type NavItem } from "@/content/ui"
import type { Locale } from "@/lib/locale"
import { swapLocale } from "@/lib/locale"
import { siteName } from "@/lib/site"
import { cn } from "cn"

function isActive(pathname: string, href: string) {
  if (href === "/tr" || href === "/en") return pathname === href
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  return <HeaderNav key={pathname} locale={locale} pathname={pathname} />
}

function HeaderNav({ locale, pathname }: { locale: Locale; pathname: string }) {
  const labels = ui(locale)
  const items = navigation(locale)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-ivory/95 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-3 py-3">
        <Link href={items[0].href} className="flex min-w-0 items-center gap-3">
          <Image
            src="/brand/logo.jpg"
            alt={siteName[locale]}
            width={72}
            height={72}
            priority
            className="size-14 shrink-0 rounded-full object-cover ring-2 ring-gold/70 sm:size-16"
          />
          <span className="min-w-0">
            <span className="hidden truncate text-[11px] font-semibold tracking-[0.16em] text-navy/70 uppercase sm:block">
              {locale === "tr" ? "Doğu ve Güneydoğu Anadolu" : "Eastern and Southeastern Anatolia"}
            </span>
            <span className="mt-1 block font-display text-lg leading-none text-navy sm:text-xl">
              {locale === "tr" ? "Spor Turizmi Birliği" : "Sports Tourism Union"}
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} pathname={pathname} label={labels.language} />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-11 lg:hidden"
                  aria-label={labels.menu}
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,24rem)] bg-ivory">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl text-navy">
                  {locale === "tr" ? "Menü" : "Menu"}
                </SheetTitle>
                <SheetDescription>{siteName[locale]}</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1 overflow-y-auto px-4 pb-8" aria-label={labels.menu}>
                {items.map((item) => (
                  <MobileItem
                    key={item.href}
                    item={item}
                    pathname={pathname}
                    open={mobileSection === item.href}
                    onToggle={() =>
                      setMobileSection((current) => (current === item.href ? null : item.href))
                    }
                    onNavigate={() => setSheetOpen(false)}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
      <Container className="hidden pb-3 lg:block">
        <nav className="flex flex-wrap gap-1" aria-label={labels.menu}>
          {items.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={() => setOpenMenu(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null)
                }}
              >
                <button
                  type="button"
                  className={cn(
                    "inline-flex h-10 items-center gap-1 rounded-full px-3 text-sm font-medium text-navy hover:bg-muted",
                    isActive(pathname, item.href) && "bg-navy text-ivory hover:bg-navy"
                  )}
                  aria-expanded={openMenu === item.href}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu((current) => (current === item.href ? null : item.href))}
                >
                  {item.label}
                  <ChevronDown className="size-4" aria-hidden="true" />
                </button>
                <div
                  className={cn(
                    "absolute top-full left-0 z-50 min-w-64 pt-2",
                    openMenu === item.href ? "block" : "hidden"
                  )}
                >
                  <div className="rounded-2xl border border-border bg-card p-2 shadow-xl">
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-navy hover:bg-accent"
                      onClick={() => setOpenMenu(null)}
                    >
                      {item.label}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2 text-sm text-navy hover:bg-accent"
                        aria-current={pathname === child.href ? "page" : undefined}
                        onClick={() => setOpenMenu(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center rounded-full px-3 text-sm font-medium text-navy hover:bg-muted",
                  isActive(pathname, item.href) && "bg-navy text-ivory hover:bg-navy"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </Container>
    </header>
  )
}

function LanguageSwitch({
  locale,
  pathname,
  label,
}: {
  locale: Locale
  pathname: string
  label: string
}) {
  return (
    <div className="flex items-center rounded-full border border-border bg-card p-1" aria-label={label}>
      {(["tr", "en"] as const).map((code) => (
        <Link
          key={code}
          href={swapLocale(pathname, code)}
          hrefLang={code}
          lang={code}
          aria-current={locale === code ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase",
            locale === code ? "bg-navy text-ivory" : "text-navy hover:bg-muted"
          )}
        >
          {code}
        </Link>
      ))}
    </div>
  )
}

function MobileItem({
  item,
  pathname,
  open,
  onToggle,
  onNavigate,
}: {
  item: NavItem
  pathname: string
  open: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  if (!item.children) {
    return (
      <Link
        href={item.href}
        aria-current={isActive(pathname, item.href) ? "page" : undefined}
        className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-navy hover:bg-muted"
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    )
  }
  return (
    <div className="rounded-xl">
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between rounded-xl px-3 text-left text-base font-medium text-navy hover:bg-muted"
        aria-expanded={open}
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown className={cn("size-4 transition", open && "rotate-180")} />
      </button>
      {open ? (
        <div className="mb-2 ml-3 flex flex-col border-l border-gold/60 pl-3">
          <Link href={item.href} onClick={onNavigate} className="flex min-h-11 items-center text-sm font-semibold text-navy">
            {item.label}
          </Link>
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="flex min-h-11 items-center text-sm text-navy"
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}
