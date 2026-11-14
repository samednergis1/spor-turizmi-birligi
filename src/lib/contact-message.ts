export const contactSources = ["iletisim", "yatirim"] as const
export const contactSubjects = ["genel", "yatirim", "isbirligi", "organizasyon"] as const

export type ContactSource = (typeof contactSources)[number]
export type ContactSubject = (typeof contactSubjects)[number]

export type ContactPayload = {
  source: ContactSource
  subject: ContactSubject
  name: string
  email: string
  organization: string
  role: string
  phone: string
  message: string
  consent: boolean
  companyWebsite: string
}

const sourceLabel: Record<ContactSource, string> = {
  iletisim: "İletişim Formu",
  yatirim: "Yatırım Başvurusu",
}

const subjectLabel: Record<ContactSubject, string> = {
  genel: "Genel İletişim",
  yatirim: "Yatırım ve Proje Önerisi",
  isbirligi: "Kurumsal İş Birliği",
  organizasyon: "Organizasyon ve Etkinlik Ortaklığı",
}

function text(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max)
}

export function parseContactPayload(input: unknown): ContactPayload | null {
  if (!input || typeof input !== "object") return null
  const body = input as Record<string, unknown>
  const source = text(body.source, 20)
  const subject = text(body.subject, 20)
  if (!contactSources.includes(source as ContactSource)) return null
  if (!contactSubjects.includes(subject as ContactSubject)) return null
  const name = text(body.name, 120)
  const email = text(body.email, 200)
  const message = text(body.message, 4000)
  if (name.length < 2) return null
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null
  if (message.length < 20) return null
  if (body.consent !== true) return null
  return {
    source: source as ContactSource,
    subject: subject as ContactSubject,
    name,
    email,
    organization: text(body.organization, 160),
    role: text(body.role, 160),
    phone: text(body.phone, 40),
    message,
    consent: true,
    companyWebsite: text(body.companyWebsite, 200),
  }
}

export function contactMailLabels(payload: ContactPayload) {
  return {
    source: sourceLabel[payload.source],
    subject: subjectLabel[payload.subject],
  }
}
