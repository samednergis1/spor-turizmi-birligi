import type { Copy } from "@/lib/locale"

export type Sport = {
  slug: string
  title: Copy
  menu: Copy
  summary: Copy
  image: string
  imageAlt: Copy
  body: Copy[]
  examples: Copy[]
}

export const sports: Sport[] = [
  {
    slug: "kis-sporlari",
    title: { tr: "Kış Sporları", en: "Winter Sports" },
    menu: { tr: "Kış Sporları", en: "Winter Sports" },
    summary: {
      tr: "Kayak, snowboard, kış kampları ve kış sporları organizasyonları.",
      en: "Skiing, snowboarding, winter camps and winter-sports events.",
    },
    image: "/images/kis-sporlari.jpg",
    imageAlt: {
      tr: "Karlı bir sırtta uzak kayakçılar",
      en: "Distant skiers on a snowy ridge",
    },
    body: [
      {
        tr: "Doğu Anadolu'nun yüksek platoları ve uzun kar örtüsü, kış sporlarını bölgenin en görünür spor turizmi başlıklarından biri yapar. Erzurum bu okumada sık anılır; Ağrı, Kars, Ardahan, Bitlis ve Erzincan gibi iller de kendi rakım ve iklimleriyle ayrıca çalışılmalıdır.",
        en: "The high plateaus and long snow cover of Eastern Anatolia make winter sports one of the region's most visible sports-tourism themes. Erzurum is often cited; provinces such as Ağrı, Kars, Ardahan, Bitlis and Erzincan should also be studied for their own elevation and climate.",
      },
      {
        tr: "Bu sayfa pist uzunluğu, lift kapasitesi veya konaklama kontenjanı vermez. Kış turizmi ürünü; kar güvenliği, pist işletmesi, sağlık erişimi ve ulaşım birlikte doğrulandığında anlatılabilir.",
        en: "This page does not give piste length, lift capacity or bed quotas. A winter product can be described only when snow safety, slope operation, medical access and transport are confirmed together.",
      },
    ],
    examples: [
      { tr: "Kayak ve snowboard", en: "Skiing and snowboarding" },
      { tr: "Kış kampları", en: "Winter camps" },
      { tr: "Kayaklı yürüyüş ve kış doğa etkinlikleri", en: "Ski touring and winter nature events" },
    ],
  },
  {
    slug: "doga-ve-macera",
    title: { tr: "Doğa ve Macera Sporları", en: "Nature and Adventure Sports" },
    menu: { tr: "Doğa ve Macera", en: "Nature and Adventure" },
    summary: {
      tr: "Dağcılık, trekking, yamaç paraşütü, bisiklet ve doğa yürüyüşleri.",
      en: "Mountaineering, trekking, paragliding, cycling and hiking.",
    },
    image: "/images/hero-daglar.jpg",
    imageAlt: {
      tr: "Gün doğumunda yüksek dağ sırtları ve bir yürüyüş izi",
      en: "High ridges and a walking path at sunrise",
    },
    body: [
      {
        tr: "İki bölge, dağcılık ve trekkingten bisiklet ve doğa yürüyüşüne uzanan geniş bir açık alan çeşitliliği barındırır. Siirt vadileri, Tunceli ve Hakkari'nin sarp coğrafyası, Adıyaman'ın yüksek alanları ve Van çevresindeki volkanik dağlar bu çeşitliliğin örnekleridir.",
        en: "The two regions hold a wide outdoor range, from mountaineering and trekking to cycling and hiking. The valleys of Siirt, the steep country of Tunceli and Hakkari, the high ground of Adıyaman and the volcanic mountains around Van are examples.",
      },
      {
        tr: "Macera sporları izin, rehberlik, sigorta ve arama-kurtarma düzeni olmadan ürünleştirilmemelidir. Yamaç paraşütü gibi branşlar ancak uçuşa uygunluk ve yerel otorite görüşü alındıktan sonra duyurulur.",
        en: "Adventure sports should not be turned into a product without permits, guiding, insurance and a search-and-rescue arrangement. Disciplines such as paragliding are announced only after airspace suitability and a view from the local authority.",
      },
    ],
    examples: [
      { tr: "Dağcılık ve trekking", en: "Mountaineering and trekking" },
      { tr: "Doğa yürüyüşü ve bisiklet", en: "Hiking and cycling" },
      { tr: "Yamaç paraşütü için ön değerlendirme", en: "Preliminary assessment for paragliding" },
    ],
  },
  {
    slug: "su-sporlari",
    title: { tr: "Su Sporları", en: "Water Sports" },
    menu: { tr: "Su Sporları", en: "Water Sports" },
    summary: {
      tr: "Kano, kürek, yelken, yüzme ve uygun alanlarda su sporları organizasyonları.",
      en: "Canoeing, rowing, sailing, swimming and water-sports events where the setting is suitable.",
    },
    image: "/images/gol-ve-su.jpg",
    imageAlt: {
      tr: "Yüksek bir gölde uzak bir kano",
      en: "A distant kayak on a highland lake",
    },
    body: [
      {
        tr: "Van Gölü ve Elazığ'daki Hazar Gölü, içerik çalışmasında su sporları için örneklenen başlıca alanlardır. Bingöl, Bitlis, Tunceli, Batman ve Siirt'te akarsu veya göl çevreleri ayrıca incelenebilir.",
        en: "Lake Van and Lake Hazar in Elazığ are the main areas cited for water sports in the content brief. River or lake settings in Bingöl, Bitlis, Tunceli, Batman and Siirt can be studied as well.",
      },
      {
        tr: "Su sıcaklığı, rüzgâr, iskele, cankurtaran düzeni ve tekne trafiği doğrulanmadan branş vaadi yapılmaz. Baraj gölleri ve korunan kıyılar ayrı izin rejimine tabidir.",
        en: "No discipline is promised before water temperature, wind, piers, lifeguard arrangements and boat traffic are confirmed. Reservoirs and protected shores follow separate permit regimes.",
      },
    ],
    examples: [
      { tr: "Kano ve kürek", en: "Canoeing and rowing" },
      { tr: "Yelken ve yüzme", en: "Sailing and swimming" },
      { tr: "Uygun kıyılarda organizasyon", en: "Events on suitable shores" },
    ],
  },
  {
    slug: "kamp-ve-outdoor",
    title: { tr: "Kamp ve Outdoor", en: "Camping and Outdoor" },
    menu: { tr: "Kamp ve Outdoor", en: "Camping and Outdoor" },
    summary: {
      tr: "Kampçılık, oryantiring, dağ bisikleti ve açık hava etkinlikleri.",
      en: "Camping, orienteering, mountain biking and outdoor events.",
    },
    image: "/images/hero-daglar.jpg",
    imageAlt: {
      tr: "Açık bir dağ yolunda gün ışığı",
      en: "Daylight on an open mountain path",
    },
    body: [
      {
        tr: "Kamp ve outdoor, iki bölgede en yaygın başlayabilecek spor turizmi biçimidir. Çünkü büyük tesis beklemeden, taşınabilir ve küçük gruplu programlarla denenebilir. Yine de kamp yeri izni, ateş, atık ve su başlıkları hafife alınmamalıdır.",
        en: "Camping and outdoor activity may be the easiest sports-tourism form to begin, because it can be tried with portable, small-group programmes rather than large facilities. Permits, fire, waste and water should still not be taken lightly.",
      },
      {
        tr: "Oryantiring ve dağ bisikleti, haritalanmış arazi ve yerel anlaşma olmadan ilan edilmez. Bu sayfa belirli kamp alanı işletmesi önermez.",
        en: "Orienteering and mountain biking are not announced without mapped ground and a local agreement. This page does not recommend a particular campsite operator.",
      },
    ],
    examples: [
      { tr: "Kampçılık", en: "Camping" },
      { tr: "Oryantiring", en: "Orienteering" },
      { tr: "Dağ bisikleti ve açık hava buluşmaları", en: "Mountain biking and outdoor gatherings" },
    ],
  },
  {
    slug: "yuksek-irtifa",
    title: {
      tr: "Yüksek İrtifa ve Performans Kampları",
      en: "Altitude and Performance Camps",
    },
    menu: { tr: "Yüksek İrtifa", en: "Altitude" },
    summary: {
      tr: "Takım kampları, atletik performans çalışmaları ve sezon öncesi hazırlıklar.",
      en: "Team camps, athletic performance work and pre-season preparation.",
    },
    image: "/images/kis-sporlari.jpg",
    imageAlt: {
      tr: "Yüksek ve karlı bir plato",
      en: "A high, snowy plateau",
    },
    body: [
      {
        tr: "Yüksek irtifa kampları, özellikle Erzurum odağında bölgenin uluslararası spor çevreleriyle konuşabileceği başlıklardandır. Ağrı, Erzincan, Hakkari ve Şırnak gibi illerin rakımı da ayrı ayrı değerlendirilebilir.",
        en: "Altitude camps, especially around Erzurum, are a theme through which the region can speak with international sport. The elevation of provinces such as Ağrı, Erzincan, Hakkari and Şırnak can be assessed separately.",
      },
      {
        tr: "Kamp; saha, salon, sağlık erişimi, konaklama standardı ve ulaşım süresi doğrulanmadan satışa çıkarılamaz. Bu platform kamp kontenjanı veya federasyon anlaşması ilan etmez.",
        en: "A camp cannot be offered for sale until pitch, hall, medical access, lodging standard and travel time are confirmed. This platform does not announce camp quotas or a federation agreement.",
      },
    ],
    examples: [
      { tr: "Takım kampları", en: "Team camps" },
      { tr: "Atletik performans çalışmaları", en: "Athletic performance work" },
      { tr: "Sezon öncesi hazırlık", en: "Pre-season preparation" },
    ],
  },
  {
    slug: "geleneksel-sporlar",
    title: { tr: "Geleneksel Sporlar", en: "Traditional Sports" },
    menu: { tr: "Geleneksel Sporlar", en: "Traditional Sports" },
    summary: {
      tr: "Atlı sporlar, geleneksel okçuluk ve kültürel spor organizasyonları.",
      en: "Equestrian sports, traditional archery and cultural sports events.",
    },
    image: "/images/tas-sehir.jpg",
    imageAlt: {
      tr: "Altın saat ışığında taş bir kent",
      en: "A stone city in golden-hour light",
    },
    body: [
      {
        tr: "Atlı sporlar, geleneksel okçuluk ve yerel spor gösterileri, Güneydoğu'nun kültürel mirasıyla spor turizmini buluşturan başlıklardır. Kars, Diyarbakır, Mardin, Gaziantep ve Şanlıurfa bu konuşmanın güçlü duraklarıdır.",
        en: "Equestrian sports, traditional archery and local sports displays are themes that join Southeastern heritage with sports tourism. Kars, Diyarbakır, Mardin, Gaziantep and Şanlıurfa are strong stops in that conversation.",
      },
      {
        tr: "Geleneksel spor, sahne gösterisine indirgenmemelidir. Kulüp, usta ve yerel toplulukla kurulan ilişki, hayvan refahı ve alan izni ürünün parçasıdır. Bu sayfa belirli bir kulüp veya müsabaka sonucu duyurmaz.",
        en: "Traditional sport should not be reduced to a stage show. The relationship with clubs, practitioners and the local community, animal welfare and site permission are part of the product. This page announces neither a club nor a competition result.",
      },
    ],
    examples: [
      { tr: "Atlı sporlar", en: "Equestrian sports" },
      { tr: "Geleneksel okçuluk", en: "Traditional archery" },
      { tr: "Kültürel spor organizasyonları", en: "Cultural sports events" },
    ],
  },
  {
    slug: "salon-sporlari",
    title: { tr: "Salon Sporları", en: "Indoor Sports" },
    menu: { tr: "Salon Sporları", en: "Indoor Sports" },
    summary: {
      tr: "Spor organizasyonları açısından turizm potansiyeli oluşturur.",
      en: "It creates tourism potential through sports events.",
    },
    image: "/images/tas-sehir.jpg",
    imageAlt: {
      tr: "Bölgeden bir kent görünümü",
      en: "A city view from the region",
    },
    body: [
      {
        tr: "Salon sporları, spor organizasyonları açısından turizm potansiyeli oluşturur. Basketbol, voleybol, hentbol ve benzeri karşılaşmalar sporcu ile seyirci hareketini aynı kente toplayabilir.",
        en: "Indoor sports create tourism potential through sports events. Basketball, volleyball, handball and similar fixtures can bring athletes and spectators to the same city.",
      },
      {
        tr: "Bu sayfa salon adı, kapasite veya fikstür vermez. Organizasyon, tesis ve konaklama bilgisi yerel kaynaklarla doğrulanmadan ürün gibi sunulmaz.",
        en: "This page does not name a hall, a capacity or a fixture. An event, a facility and lodging are not presented as a product before local sources confirm them.",
      },
    ],
    examples: [
      { tr: "Basketbol, voleybol ve hentbol", en: "Basketball, volleyball and handball" },
      { tr: "Salon turnuvaları", en: "Indoor tournaments" },
      { tr: "Sporcu ve seyirci hareketi", en: "Athlete and spectator travel" },
    ],
  },
]

export function getSport(slug: string) {
  return sports.find((sport) => sport.slug === slug)
}
