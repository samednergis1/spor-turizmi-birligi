"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Container className="py-24">
      <h1 className="text-4xl text-navy">Sayfa şu anda açılamadı.</h1>
      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
        This page could not be opened. Yeniden deneyebilirsiniz.
      </p>
      <Button type="button" className="mt-6 h-11 px-5" onClick={() => reset()}>
        Yeniden dene
      </Button>
    </Container>
  )
}
