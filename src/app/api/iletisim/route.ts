import { contactMailLabels, parseContactPayload } from "@/lib/contact-message"

const recipient = "spor@doguveguneydogustb.com"

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 })
  }

  const payload = parseContactPayload(json)
  if (!payload) return Response.json({ error: "invalid" }, { status: 400 })
  if (payload.companyWebsite) return Response.json({ ok: true })

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) return Response.json({ error: "unconfigured" }, { status: 503 })

  const labels = contactMailLabels(payload)
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `[${labels.source}] ${labels.subject}`,
      from_name: payload.name,
      email: payload.email,
      replyto: payload.email,
      Kaynak: labels.source,
      Konu: labels.subject,
      "Ad Soyad": payload.name,
      "E-posta": payload.email,
      Kurum: payload.organization || "—",
      Unvan: payload.role || "—",
      Telefon: payload.phone || "—",
      Mesaj: payload.message,
      Alıcı: recipient,
    }),
    signal: AbortSignal.timeout(12000),
  }).catch(() => null)

  if (!response?.ok) return Response.json({ error: "delivery" }, { status: 502 })
  const result = (await response.json().catch(() => null)) as { success?: boolean } | null
  if (!result?.success) return Response.json({ error: "delivery" }, { status: 502 })
  return Response.json({ ok: true })
}
