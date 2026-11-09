import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { cn } from "cn"

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold tracking-[0.18em] text-teal-ink uppercase">404</p>
      <h1 className="mt-3 max-w-xl text-4xl text-navy">Bu sayfa bulunamadı.</h1>
      <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
        This page was not found. Adres değişmiş veya hiç açılmamış olabilir.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/tr" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>
          Ana Sayfa
        </Link>
        <Link href="/en" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-11 px-5")}>
          Home
        </Link>
      </div>
    </Container>
  )
}
