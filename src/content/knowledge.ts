import type { Copy } from "@/lib/locale"

export type Article = {
  slug: string
  title: Copy
  summary: Copy
  body: Copy[]
}

export const articles: Article[] = [
  {
    slug: "spor-turizmi-nedir",
    title: { tr: "Spor turizmi nedir?", en: "What is sports tourism?" },
    summary: {
      tr: "Sporu izlemek, yapmak veya bir yere hazırlanmak için seyahat etmenin; konaklama, ulaşım ve yerel ekonomiyle kurduğu ilişki.",
      en: "How travelling to watch sport, play it or prepare for it relates to lodging, transport and the local economy.",
    },
    body: [
      {
        tr: "Spor turizmi, bir müsabakayı izlemek, bir branşı yerinde yapmak ya da sezon öncesi hazırlık için başka bir coğrafyaya gitmekle başlar. Asıl etki, sporcunun ve izleyicinin konaklama, yeme-içme, ulaşım ve rehberlik talebiyle şehre yayılır.",
        en: "Sports tourism begins when someone travels to watch a competition, practise a discipline or prepare before a season. The wider effect spreads through the town in demand for lodging, food, transport and guiding.",
      },
      {
        tr: "Tek bir büyük organizasyon da spor turizmidir, hafta sonu yapılan bir doğa yürüyüşü de. İkisi aynı altyapıyı istemez. Bu platform, Doğu ve Güneydoğu Anadolu'da her iki ölçeği de aynı ciddiyetle ele almayı amaçlar.",
        en: "A single large event is sports tourism, and so is a weekend hike. They do not ask for the same infrastructure. This platform aims to treat both scales in Eastern and Southeastern Anatolia with the same care.",
      },
      {
        tr: "Sağlıklı bir spor turizmi anlatısı; nereye gidildiğini, hangi mevsimde gidildiğini, kimin karşıladığını ve doğal alanın bunu taşıyıp taşıyamayacağını birlikte söyler. Yalnızca manzara fotoğrafı yeterli değildir.",
        en: "A sound account of sports tourism says where people go, in which season, who receives them and whether the natural place can carry it. A landscape photograph is not enough on its own.",
      },
    ],
  },
  {
    slug: "turkiyede-gelisim",
    title: {
      tr: "Türkiye'de spor turizminin gelişimi",
      en: "How sports tourism has developed in Türkiye",
    },
    summary: {
      tr: "Kıyı, kent ve yüksek alan deneyimlerinin yanına, bölgesel iş birliğiyle büyüyebilecek bir iç Anadolu ve doğu anlatısı eklemek.",
      en: "Adding an inland and eastern narrative, able to grow through regional cooperation, beside coastal, urban and highland experience.",
    },
    body: [
      {
        tr: "Türkiye'de spor turizmi çoğu zaman kıyı tatili, büyük kent organizasyonları ve belirli kış merkezleri üzerinden anlatılır. Bu anlatı gerçektir fakat ülkenin tamamını kapsamaz. Yüksek plato, göl, vadi ve kültürel miras, doğu ve güneydoğuda ayrı bir cümle ister.",
        en: "Sports tourism in Türkiye is often told through coastal holidays, big-city events and a few winter centres. That account is real, but it does not cover the country. High plateaus, lakes, valleys and heritage in the east and southeast need a sentence of their own.",
      },
      {
        tr: "Gelişim, her ile aynı tesisi kurmak değildir. Önce hangi branşın hangi mevsime ve hangi taşıma kapasitesine uyduğu bilinmelidir. Envanter bu yüzden tanıtım filminden önce gelir.",
        en: "Development is not building the same facility in every province. First it has to be known which discipline fits which season and which carrying capacity. That is why an inventory comes before a promotional film.",
      },
      {
        tr: "Bu sitede ulusal istatistik tekrarlanmaz. Rakam, ancak kaynağı ve yılıyla birlikte bilgi merkezine eklenecektir.",
        en: "National statistics are not repeated on this site. A figure will enter the knowledge centre only with its source and year.",
      },
    ],
  },
  {
    slug: "bolgesel-avantajlar",
    title: {
      tr: "Doğu ve Güneydoğu Anadolu'nun sportif avantajları",
      en: "Sporting advantages of Eastern and Southeastern Anatolia",
    },
    summary: {
      tr: "Yükseklik, kar, büyük göller, vadiler ve yaşayan kültürel sporlar aynı bölge ailesinde buluşur.",
      en: "Elevation, snow, large lakes, valleys and living cultural sports meet in the same family of regions.",
    },
    body: [
      {
        tr: "Doğu Anadolu'nun avantajı rakım ve kıştır. Uzun kar örtüsü kış sporlarını, yüksek platolar ise performans kamplarını konuşulur kılar. Van ve Hazar gibi geniş su yüzeyleri, aynı bölgeye su sporlarını ekler.",
        en: "Eastern Anatolia's advantage is elevation and winter. A long snow cover makes winter sports discussable, and high plateaus do the same for performance camps. Broad waters such as Van and Hazar add water sports to the same region.",
      },
      {
        tr: "Güneydoğu Anadolu'nun avantajı kültürle iç içe açık havadır. Geleneksel okçuluk, atlı sporlar ve taş kentlerin çevresindeki eşikler, sporun yalnızca tesisle değil mirasla da anlatılabileceğini gösterir.",
        en: "Southeastern Anatolia's advantage is open air woven with culture. Traditional archery, equestrian sports and the thresholds around stone cities show that sport can be told through heritage as well as facilities.",
      },
      {
        tr: "Avantaj, kendiliğinden ürün değildir. Güvenlik, izin, rehberlik ve doğru mevsim seçilmeden avantaj iddiası ziyaretçiye yük olur. Şehir sayfaları bu yüzden temkinli yazılmıştır.",
        en: "An advantage is not automatically a product. Without safety, permits, guiding and the right season, the claim becomes a burden on the visitor. City pages are written with that caution.",
      },
    ],
  },
  {
    slug: "potansiyel-raporlari",
    title: {
      tr: "Bölgesel potansiyel nasıl raporlanır?",
      en: "How should regional potential be reported?",
    },
    summary: {
      tr: "Kaynak, tarih, yöntem ve sınır. Potansiyel cümlesi bu dördü olmadan rapora dönüşmez.",
      en: "Source, date, method and limit. A sentence about potential does not become a report without these four.",
    },
    body: [
      {
        tr: "İyi bir bölgesel rapor; ili, branşı, mevsimi ve görülen kısıtı aynı tabloda tutar. 'Uygundur' demek yerine 'şu koşullarda incelenebilir' demek, sonraki yatırımcıyı da korur.",
        en: "A good regional report keeps province, discipline, season and the constraint that was observed in the same table. Saying 'it can be examined under these conditions', rather than 'it is suitable', also protects the next investor.",
      },
      {
        tr: "Bu bilgi merkezinde henüz indirilebilir bir rapor dosyası yoktur. Raporlar, yöntemi ve yazarı belli olduğunda ayrı bir kayıtla eklenecektir. Uydurma yüzde veya sıralama yayımlanmayacaktır.",
        en: "This knowledge centre does not yet hold a downloadable report. Reports will be added as separate records when their method and author are clear. Invented percentages or rankings will not be published.",
      },
    ],
  },
  {
    slug: "yatirim-rehberi",
    title: {
      tr: "Spor turizmi yatırım rehberi",
      en: "A guide to sports-tourism investment",
    },
    summary: {
      tr: "Yatırım konuşması; yer, mevsim, işletme modeli ve taşıma kapasitesi bilinmeden başlamamalı.",
      en: "An investment conversation should not start before place, season, operating model and carrying capacity are known.",
    },
    body: [
      {
        tr: "Spor turizminde yatırım, çoğu zaman tesisle özdeşleştirilir. Oysa rehberlik hizmeti, küçük kamp işletmesi, ekipman kiralama, sporcu ağırlama ve etkinlik organizasyonu da yatırımdır. Hepsi aynı ölçekte sermaye istemez.",
        en: "Investment in sports tourism is often equated with a facility. Guiding, a small camp business, equipment hire, athlete hosting and event organisation are investments too. They do not all ask for the same capital.",
      },
      {
        tr: "Bu platform yatırım onayı vermez, arsa önermez ve getiri taahhüt etmez. Başvuru formu yalnızca ön iletişim içindir. Ciddi bir görüşme, doğrulanmış envanter ve ilgili kamu kurumlarının çerçevesiyle yürür.",
        en: "This platform does not approve investment, suggest land or promise a return. The application form is only for early contact. A serious conversation runs on a confirmed inventory and the frame of the relevant public institutions.",
      },
      {
        tr: "Önce sorulacak sorular basittir: Hangi ay kullanılacak? Kim işletecek? Acil sağlık erişimi ne kadar uzakta? Doğal alan bunu her hafta taşır mı?",
        en: "The first questions are simple. Which month will it be used? Who will operate it? How far is emergency care? Can the natural place carry it every week?",
      },
    ],
  },
  {
    slug: "organizasyon-rehberi",
    title: {
      tr: "Spor organizasyonu düzenleme rehberi",
      en: "A guide to organising a sports event",
    },
    summary: {
      tr: "Küçük bir açık hava buluşması bile izin, güvenlik, sigorta ve açık bir iptal kuralı ister.",
      en: "Even a small outdoor gathering needs permission, safety, insurance and a clear cancellation rule.",
    },
    body: [
      {
        tr: "Organizasyonun ilk işi yer seçmek değil, yerin kime ait olduğunu ve hangi izne bağlı olduğunu öğrenmektir. Orman, mera, kıyı, baraj, sit alanı ve kent meydanı aynı formu doldurmaz.",
        en: "The first task of an event is not choosing a place, but learning who the place belongs to and which permission it depends on. Forest, pasture, shore, reservoir, heritage site and city square do not share one form.",
      },
      {
        tr: "Sporcu güvenliği, seyirci yönetimi, su, atık ve hava muhalefeti için iptal senaryosu yazılmadan duyuru yapılmamalıdır. Genç ve çocuk katılımcılarda refakat ayrıca tasarlanır. Bu site etkinlik kaydı almaz.",
        en: "An announcement should not go out before athlete safety, spectator management, water, waste and a cancellation scenario for bad weather are written. Supervision of young people and children is designed separately. This site does not take event entries.",
      },
      {
        tr: "Ortaklık teklifi, yatırım sayfasındaki organizasyon formundan iletilebilir. İletilen metin bu sürümde saklanmaz; yayın öncesi kurumsal kanal bağlanacaktır.",
        en: "A partnership proposal can be sent through the event form on the investment page. This version does not store the text; a corporate channel will be connected before launch.",
      },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
