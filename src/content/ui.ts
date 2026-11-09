import type { Locale } from "@/lib/locale"
import { localePath } from "@/lib/locale"
import { sports } from "@/content/sports"

export type NavItem = {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

export function navigation(locale: Locale): NavItem[] {
  const tr = locale === "tr"
  const p = (path = "") => localePath(locale, path)
  return [
    { href: p(), label: tr ? "Ana Sayfa" : "Home" },
    { href: p("/birligimiz"), label: tr ? "Birliğimiz" : "The Union" },
    {
      href: p("/sehirlerimiz"),
      label: tr ? "Şehirlerimiz" : "Our Cities",
      children: [
        { href: p("/sehirlerimiz/dogu-anadolu"), label: tr ? "Doğu Anadolu" : "Eastern Anatolia" },
        {
          href: p("/sehirlerimiz/guneydogu-anadolu"),
          label: tr ? "Güneydoğu Anadolu" : "Southeastern Anatolia",
        },
      ],
    },
    {
      href: p("/spor-turizmi"),
      label: tr ? "Spor Turizmi" : "Sports Tourism",
      children: sports.map((sport) => ({
        href: p(`/spor-turizmi/${sport.slug}`),
        label: sport.menu[locale],
      })),
    },
    { href: p("/projelerimiz"), label: tr ? "Projelerimiz" : "Projects" },
    {
      href: p("/yatirim-ve-is-birlikleri"),
      label: tr ? "Yatırım ve İş Birlikleri" : "Investment and Cooperation",
    },
    { href: p("/haberler"), label: tr ? "Haberler ve Duyurular" : "News and Notices" },
    { href: p("/bilgi-merkezi"), label: tr ? "Bilgi Merkezi" : "Knowledge Centre" },
    { href: p("/iletisim"), label: tr ? "İletişim" : "Contact" },
  ]
}

export function ui(locale: Locale) {
  const tr = locale === "tr"
  return {
    skip: tr ? "İçeriğe geç" : "Skip to content",
    menu: tr ? "Menü" : "Menu",
    close: tr ? "Kapat" : "Close",
    language: tr ? "Dil" : "Language",
    allCities: tr ? "Tüm şehirler" : "All cities",
    allSports: tr ? "Tüm branşlar" : "All disciplines",
    readMore: tr ? "Devamını oku" : "Read more",
    explore: tr ? "İncele" : "Explore",
    backHome: tr ? "Ana sayfaya dön" : "Back to the home page",
    notFoundTitle: tr ? "Bu sayfa bulunamadı" : "This page was not found",
    notFoundBody: tr
      ? "Adres değişmiş veya hiç açılmamış olabilir. Menüden sürdürebilirsiniz."
      : "The address may have changed or never existed. You can continue from the menu.",
    breadcrumb: tr ? "Sayfa yolu" : "Breadcrumb",
    source: tr ? "Kaynak" : "Source",
    updated: tr ? "Güncelleme" : "Updated",
    draft: tr ? "Taslak" : "Draft",
    legalEyebrow: tr ? "Hukuki durum" : "Legal status",
    translationNote: tr
      ? ""
      : "The Turkish sentence below is the canonical notice. The English line is a translation.",
    cookie: tr
      ? "Bu sürümde zorunlu olmayan çerez ve ziyaret ölçümü kullanılmıyor. Tercihleriniz yalnızca bu bildirimi kapatmak için tarayıcınızda saklanır."
      : "This version does not use non-essential cookies or visit measurement. Your browser only stores a preference to hide this notice.",
    cookieAction: tr ? "Anladım" : "Understood",
    cookiePolicy: tr ? "Çerez politikası" : "Cookie policy",
    privacy: tr ? "Gizlilik" : "Privacy",
    kvkk: tr ? "KVKK aydınlatma" : "Privacy notice",
    plates: tr ? "Plaka" : "Plate",
    region: tr ? "Bölge" : "Region",
    relatedSports: tr ? "İlgili spor alanları" : "Related sports themes",
    relatedCities: tr ? "Bu başlıkla okunabilecek iller" : "Provinces that can be read with this theme",
    geography: tr ? "Doğal ve coğrafi değerler" : "Natural and geographic assets",
    sportsPotential: tr ? "Spor turizmi olanakları" : "Sports-tourism possibilities",
    facilities: tr ? "Tesis ve altyapı" : "Facilities and infrastructure",
    access: tr ? "Konaklama ve ulaşım" : "Accommodation and transport",
    events: tr ? "Etkinlik ve organizasyonlar" : "Events",
    eventsEmpty: tr
      ? "Tarihi ve kaynağı belli bir etkinlik takvimi henüz eklenmedi."
      : "An event calendar with dates and sources has not been added yet.",
    development: tr ? "Gelişim ve yatırım alanları" : "Development and investment themes",
    gallery: tr ? "Görsel" : "Image",
    galleryNote: tr
      ? "Yer tutucu görsel, ilin kendisine ait bir fotoğraf arşivi değildir. İzinli fotoğraflar ayrıca eklenecektir."
      : "The placeholder image is not a photograph of this province. Licensed photographs will be added separately.",
    mapLabel: tr ? "İl haritası" : "Province map",
    mapHint: tr
      ? "Harita, iki bölgenin illerini gösterir. Kapsama alınacak iller oluşum tarafından netleştirilecektir. Bir ili açmak için noktayı seçin."
      : "The map shows the provinces of the two regions. Which provinces are in scope will be confirmed by the initiative. Choose a point to open a province.",
    noResults: tr ? "Bu süzgeçte kayıt yok." : "Nothing matches this filter.",
    purpose: tr ? "Amaç" : "Purpose",
    audience: tr ? "Hedef kitle" : "Audience",
    places: tr ? "İlgili yer" : "Place",
    status: tr ? "Durum" : "Status",
    allStatuses: tr ? "Tümü" : "All",
    formName: tr ? "Ad soyad" : "Full name",
    formOrg: tr ? "Kurum veya kuruluş" : "Organisation",
    formRole: tr ? "Görev veya unvan" : "Role or title",
    formEmail: tr ? "E-posta" : "Email",
    formPhone: tr ? "Telefon" : "Phone",
    formSubject: tr ? "Başvuru konusu" : "Subject",
    formMessage: tr ? "Mesaj" : "Message",
    optional: tr ? "isteğe bağlı" : "optional",
    consent: tr
      ? "Bu formun ön iletişim amacıyla tasarlandığını, bu sürümde bilgilerin bir sunucuya kaydedilmediğini ve aydınlatma metninin taslak olduğunu okudum."
      : "I have read that this form is designed for early contact, that this version does not store information on a server, and that the privacy notice is a draft.",
    send: tr ? "İletiyi hazırla" : "Prepare the message",
    sending: tr ? "Kontrol ediliyor" : "Checking",
    successTitle: tr ? "İleti bu cihazda hazırlandı" : "The message was prepared on this device",
    successBody: tr
      ? "Bilgiler bir sunucuya gönderilmedi ve kaydedilmedi. Yayın öncesi kurumsal e-posta bağlandığında form gerçek bir kanala alınacaktır. O zamana kadar bu önizleme, alanların tamamlandığını göstermek içindir."
      : "The details were not sent to a server and were not stored. When a corporate email is connected before launch, the form will use a real channel. Until then this preview only shows that the fields are complete.",
    another: tr ? "Yeni bir ileti yaz" : "Write another message",
    required: tr ? "Bu alan gerekli." : "This field is required.",
    emailInvalid: tr ? "Geçerli bir e-posta yazın." : "Enter a valid email address.",
    messageShort: tr ? "Mesajı biraz daha açın." : "Please write a little more.",
    consentRequired: tr ? "Devam etmek için onay gerekli." : "Consent is required to continue.",
    subjects: [
      { value: "genel", label: tr ? "Genel iletişim" : "General contact" },
      { value: "yatirim", label: tr ? "Yatırım ve proje önerisi" : "Investment and project proposal" },
      { value: "isbirligi", label: tr ? "Kurumsal iş birliği" : "Institutional cooperation" },
      { value: "organizasyon", label: tr ? "Organizasyon ve etkinlik ortaklığı" : "Event partnership" },
    ],
    formDisclaimer: tr
      ? "Bu form bir ön iletişim ve değerlendirme başvurusudur. Başvuru yapılması üyelik, ortaklık, yatırım onayı veya herhangi bir taahhüt anlamına gelmez."
      : "This form is an early contact and review request. Sending it does not mean membership, partnership, investment approval or any commitment.",
    noAddress: tr
      ? "Açık adres veya resmî ofis bilgisi yayımlanmamıştır."
      : "No street address or official office has been published.",
    noEmail: tr
      ? "Kurumsal e-posta, hukukî yapı ve alan adı netleştikten sonra yayımlanacaktır."
      : "A corporate email will be published once the legal structure and domain are settled.",
    contactChannel: tr ? "İletişim kanalı" : "Contact channel",
  }
}
