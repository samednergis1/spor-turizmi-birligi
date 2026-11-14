import type { Copy } from "@/lib/locale"

export type LegalPage = {
  slug: "gizlilik" | "kvkk" | "cerez-politikasi"
  title: Copy
  description: Copy
  paragraphs: Copy[]
}

const draft: Copy = {
  tr: "Bu metin yayından önce hukuk incelemesi gerektiren bir taslaktır. Veri sorumlusu, saklama süresi ve başvuru mercii, resmî tüzel kişilik netleşmeden kesinleşmiş sayılmaz.",
  en: "This text is a draft that needs legal review before publication. The data controller, retention period and complaint body are not settled until an official legal entity is clear.",
}

export const legalPages: LegalPage[] = [
  {
    slug: "gizlilik",
    title: { tr: "Gizlilik Politikası", en: "Privacy Policy" },
    description: {
      tr: "Bu sürüme ait gizlilik taslağı. Form iletisi e-posta olarak gider; sitede bir kopyası saklanmaz.",
      en: "The privacy draft for this version. A form message is sent by email; the site does not keep a copy.",
    },
    paragraphs: [
      draft,
      {
        tr: "Site, şehirler, spor alanları ve iş birliği kanalları hakkında kamuya açık bilgi sunar. İletişim ve ön başvuru formuna yazılan ad, e-posta ve mesaj, spor@doguveguneydogustb.com adresine e-posta olarak iletilir. Site bu iletinin bir kopyasını kendi veri tabanında saklamaz.",
        en: "The site offers public information about cities, sports themes and cooperation channels. The name, email and message written in the contact or early-request form are emailed to spor@doguveguneydogustb.com. The site does not keep a copy in its own database.",
      },
      {
        tr: "Zorunlu olmayan çerez ve ziyaret ölçümü kullanılmaz. Çerez bildiriminin kapatılması, tarayıcınızın yerel deposunda bir işaret bırakır. Bu işaret kişisel profil oluşturmaz.",
        en: "Non-essential cookies and visit measurement are not used. Closing the cookie notice leaves a mark in your browser's local storage. That mark does not build a personal profile.",
      },
      {
        tr: "Kurumsal e-posta ve veri sorumlusu bilgisi, hukukî yapı netleştikten sonra bu sayfaya eklenecektir. O zamana kadar kişisel veri talebi için işletilen bir başvuru kanalı yoktur.",
        en: "A corporate email and data-controller details will be added to this page once the legal structure is clear. Until then there is no operating channel for personal-data requests.",
      },
    ],
  },
  {
    slug: "kvkk",
    title: { tr: "KVKK Aydınlatma Metni", en: "Clarification Text" },
    description: {
      tr: "6698 sayılı Kanun bakımından yayın öncesi aydınlatma taslağı.",
      en: "A pre-publication privacy notice draft in light of Law No. 6698.",
    },
    paragraphs: [
      draft,
      {
        tr: "Amaç, bölgesel spor turizmi hakkında ön iletişim kurmaktır. İletilen veriler: ad soyad, e-posta, telefon, kurum, unvan, konu ve mesaj. Ad, e-posta ve telefon zorunludur. Bu veriler e-posta hizmeti üzerinden spor@doguveguneydogustb.com adresine gider. Site kendi veri tabanında bir kayıt tutmaz.",
        en: "The purpose is early contact about regional sports tourism. The data sent: name, email, phone, organisation, title, subject and message. Name, email and phone are required. That data goes by an email service to spor@doguveguneydogustb.com. The site does not keep a record in its own database.",
      },
      {
        tr: "Hukuki sebep, açık rıza veya meşru menfaat gibi başlıklar yayın öncesi hukuk danışmanlığıyla seçilecektir. İlgili kişi hakları; bilgi talep etme, düzeltme, silme ve şikâyet, veri sorumlusu belli olduktan sonra işletilecektir.",
        en: "Legal grounds such as explicit consent or legitimate interest will be chosen with counsel before publication. Data-subject rights, including access, correction, deletion and complaint, will operate once a controller is identified.",
      },
      {
        tr: "Formdaki onay kutusu, bu sınırlı taslağı okuduğunuzu belirtir. Üyelik, aidat, bağış veya sözleşme ilişkisi kurmaz.",
        en: "The consent box states that you have read this limited draft. It does not create membership, a fee, a donation or a contract.",
      },
    ],
  },
  {
    slug: "cerez-politikasi",
    title: { tr: "Çerez Politikası", en: "Cookie Policy" },
    description: {
      tr: "Bu sürümde ölçüm çerezi yoktur. Bildirim tercihi yerelde saklanır.",
      en: "This version has no measurement cookie. The notice preference is stored locally.",
    },
    paragraphs: [
      draft,
      {
        tr: "Sitenin çalışması için üçüncü taraf reklam veya analitik çerezi yüklenmez. Tarayıcınız, sayfaları göstermek için kendi teknik kayıtlarını tutabilir. Bunlar bu politikanın yönettiği pazarlama çerezleri değildir.",
        en: "No third-party advertising or analytics cookie is loaded for the site to work. Your browser may keep its own technical records in order to show pages. Those are not marketing cookies governed by this policy.",
      },
      {
        tr: "Çerez bildirimini kapattığınızda `dgastb-cookie-notice` anahtarı yerel depoda saklanır. Anahtarı silmek bildirimi yeniden gösterir. Bu tercih başka bir siteyle paylaşılmaz.",
        en: "When you close the cookie notice, the key `dgastb-cookie-notice` is stored in local storage. Deleting the key shows the notice again. The preference is not shared with another site.",
      },
    ],
  },
]

export function getLegal(slug: string) {
  return legalPages.find((page) => page.slug === slug)
}
