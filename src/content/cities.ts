import type { Copy } from "@/lib/locale"

export type RegionId = "dogu" | "guneydogu"

export type City = {
  slug: string
  name: string
  plate: string
  region: RegionId
  x: number
  y: number
  themes: string[]
  summary: Copy
  geography: Copy
  sports: Copy
  development: Copy
}

export const regions: {
  id: RegionId
  slug: string
  title: Copy
  lede: Copy
  image: string
  imageAlt: Copy
}[] = [
  {
    id: "dogu",
    slug: "dogu-anadolu",
    title: { tr: "Doğu Anadolu", en: "Eastern Anatolia" },
    lede: {
      tr: "Yüksek platolar, uzun kış, büyük göller ve derin vadiler. Doğu Anadolu illeri; kış sporları, yüksek irtifa, su ve doğa temelli spor turizmi için birlikte okunabilecek bir coğrafya sunar.",
      en: "High plateaus, long winters, large lakes and deep valleys. The provinces of Eastern Anatolia can be read together for winter sports, altitude, water and nature-based sports tourism.",
    },
    image: "/images/kis-sporlari.jpg",
    imageAlt: {
      tr: "Karlı bir dağ sırtı ve uzak kayakçılar",
      en: "A snowy mountain ridge with distant skiers",
    },
  },
  {
    id: "guneydogu",
    slug: "guneydogu-anadolu",
    title: { tr: "Güneydoğu Anadolu", en: "Southeastern Anatolia" },
    lede: {
      tr: "Taş kentler, Mezopotamya ovaları, vadiler ve güçlü kültürel miras. Güneydoğu Anadolu illeri; geleneksel sporlar, açık hava etkinlikleri ve kültürle iç içe spor turizmi için bir zemin oluşturur.",
      en: "Stone cities, Mesopotamian plains, valleys and a deep cultural heritage. The provinces of Southeastern Anatolia offer a setting for traditional sports, outdoor events and culture-led sports tourism.",
    },
    image: "/images/tas-sehir.jpg",
    imageAlt: {
      tr: "Altın ışıkta kireçtaşı bir tepe kenti",
      en: "A limestone hill town in golden light",
    },
  },
]

const sharedInfra: Copy = {
  tr: "Spor tesisleri, sahalar ve kamp merkezlerine ilişkin doğrulanmış bir envanter bu sayfada henüz yer almıyor. Liste, yerel yönetimler ve spor paydaşlarıyla teyit edildikten sonra eklenecektir.",
  en: "A confirmed inventory of sports facilities, pitches and camp centres is not published on this page yet. It will be added after checks with local authorities and sports stakeholders.",
}

const sharedAccess: Copy = {
  tr: "Konaklama ve ulaşım bilgileri, işletme ve sefer kaynakları doğrulanmadan yayımlanmaz. Ayrıntılı aktarma bilgisi ayrıca işlenecektir.",
  en: "Accommodation and transport details are not published before operator and service sources are confirmed. Transfer information will be added separately.",
}

export const verificationNote: Copy = {
  tr: "Bu sayfadaki ifadeler coğrafi ve kültürel potansiyeli tarif eder. Tesis, parkur, kapasite, etkinlik takvimi ve hizmet bilgileri yerel kaynaklarla doğrulanmadan yayımlanmaz.",
  en: "The wording on this page describes geographic and cultural potential. Facilities, routes, capacity, event calendars and services are not published until local sources confirm them.",
}

export const cities: City[] = [
  {
    slug: "agri",
    name: "Ağrı",
    plate: "04",
    region: "dogu",
    x: 601,
    y: 207,
    themes: ["yuksek-irtifa", "doga-ve-macera", "kis-sporlari"],
    summary: {
      tr: "Ağrı, Türkiye'nin en yüksek dağlık kütlelerinden birinin eteğinde yer alır. Yüksek irtifa, sert kış ve açık arazi; performans kampları ile doğa sporları için incelenebilecek bir coğrafya sunar.",
      en: "Ağrı stands at the foot of one of Türkiye's highest mountain massifs. Altitude, a hard winter and open country offer geography worth studying for performance camps and nature sports.",
    },
    geography: {
      tr: "Büyük Ağrı Dağı ve çevresindeki volkanik yükselti, ovaya inen eşikler ve keskin iklim farkı şehrin temel karakteridir.",
      en: "Mount Ararat, the surrounding volcanic high ground, the descent toward the plain and sharp climatic contrast define the province.",
    },
    sports: {
      tr: "Yüksek irtifa yürüyüşleri, kış koşullarında hazırlık çalışmaları ve doğa temelli rotalar açısından potansiyel taşır. İşaretlenmiş parkur veya işletme bilgisi bu aşamada verilmez.",
      en: "It has potential for high-altitude walking, preparation in winter conditions and nature-based routes. Marked trails and operators are not listed at this stage.",
    },
    development: {
      tr: "İrtifa kampları, rehberlik standartları ve dağ güvenliği başlıkları, yerel paydaşlarla çalışılabilecek gelişim alanlarıdır.",
      en: "Altitude camps, guiding standards and mountain safety are development themes that can be explored with local stakeholders.",
    },
  },
  {
    slug: "ardahan",
    name: "Ardahan",
    plate: "75",
    region: "dogu",
    x: 569,
    y: 77,
    themes: ["kis-sporlari", "doga-ve-macera", "kamp-ve-outdoor"],
    summary: {
      tr: "Ardahan, yüksek plato ve uzun kış mevsimiyle öne çıkan bir sınır ilidir. Açık arazi; kış sporları ve doğa temelli etkinlikler için saha araştırmasına uygundur.",
      en: "Ardahan is a border province known for its high plateau and long winter. Open country suits field research for winter sports and nature-based events.",
    },
    geography: {
      tr: "Yüksek rakımlı platolar, akarsular ve seyrek yerleşim dokusu şehrin açık alan karakterini belirler.",
      en: "High plateaus, rivers and a sparse settlement pattern shape its open-country character.",
    },
    sports: {
      tr: "Kış koşullarında dayanıklılık çalışmaları, kayaklı yürüyüş ve kampçılık açısından değerlendirilebilecek bir iklim ve araziye sahiptir.",
      en: "Its climate and terrain can be considered for winter endurance work, ski touring and camping.",
    },
    development: {
      tr: "Küçük ölçekli kış etkinlikleri ve yayla dönemine yayılan açık hava programları, aceleci kapasite vaadi olmadan planlanabilir.",
      en: "Small winter events and highland outdoor programmes can be planned without premature capacity claims.",
    },
  },
  {
    slug: "bingol",
    name: "Bingöl",
    plate: "12",
    region: "dogu",
    x: 372,
    y: 286,
    themes: ["doga-ve-macera", "su-sporlari", "kamp-ve-outdoor"],
    summary: {
      tr: "Bingöl, dağlar ile akarsu ve göl alanlarının iç içe geçtiği bir geçiş coğrafyasıdır. Doğa ve suya dayalı etkinlikler için potansiyel taşıyan bir ildir.",
      en: "Bingöl is a transition landscape where mountains meet rivers and lakes. It carries potential for nature and water-based activities.",
    },
    geography: {
      tr: "Dağlık eşikler, vadiler ve göl çevreleri şehrin doğal çeşitliliğini oluşturur.",
      en: "Mountain thresholds, valleys and lake shores make up its natural variety.",
    },
    sports: {
      tr: "Doğa yürüyüşü, göl ve akarsu çevresinde su sporları ile kampçılık, doğrulanacak parkurlarla birlikte ele alınabilir.",
      en: "Walking, water sports around lakes and rivers, and camping can be considered once routes are confirmed.",
    },
    development: {
      tr: "Göl çevrelerinde erişim, güvenlik ve taşıma kapasitesi birlikte çalışılması gereken başlıklardır.",
      en: "Access, safety and carrying capacity around the lakes need to be studied together.",
    },
  },
  {
    slug: "bitlis",
    name: "Bitlis",
    plate: "13",
    region: "dogu",
    x: 516,
    y: 332,
    themes: ["kis-sporlari", "doga-ve-macera", "su-sporlari"],
    summary: {
      tr: "Bitlis, volkanik göller, geçitler ve dağlık eşiklerle anılır. Kış, doğa ve su temelli sporlar açısından araştırılabilecek bir profil çizer.",
      en: "Bitlis is associated with volcanic lakes, passes and mountain thresholds. Its profile can be researched for winter, nature and water-based sports.",
    },
    geography: {
      tr: "Nemrut kalderası ve çevresindeki volkanik göller ile derin vadiler, şehrin bilinen doğal değerlerindendir. Ziyaret koşulları yerel duyurularla teyit edilmelidir.",
      en: "The Nemrut caldera, nearby volcanic lakes and deep valleys are among its known natural assets. Visit conditions should be checked against local notices.",
    },
    sports: {
      tr: "Krater gölleri çevresi doğa ve sınırlı su etkinlikleri, yüksek eşikler ise kış ve yürüyüş potansiyeli açısından not edilebilir.",
      en: "The crater lakes suggest nature and limited water activities; the high ground suggests winter and walking potential.",
    },
    development: {
      tr: "Korunan ve hassas doğal alanlarda faaliyet, ilgili mevzuat ve taşıma kapasitesiyle birlikte ele alınmalıdır.",
      en: "Activity in sensitive natural areas should be considered together with the relevant rules and carrying capacity.",
    },
  },
  {
    slug: "elazig",
    name: "Elazığ",
    plate: "23",
    region: "dogu",
    x: 257,
    y: 306,
    themes: ["su-sporlari", "doga-ve-macera", "kamp-ve-outdoor"],
    summary: {
      tr: "Elazığ, Hazar Gölü çevresindeki su ve doğa sporları bakımından içerik dosyasında örneklenen iller arasındadır.",
      en: "Elazığ is one of the provinces cited in the content brief for water and nature sports around Lake Hazar.",
    },
    geography: {
      tr: "Hazar Gölü, kıyı şeridi ve yakın dağlık alanlar şehrin spor turizmi okumasının merkezindedir.",
      en: "Lake Hazar, its shoreline and the nearby mountains sit at the centre of the province's sports-tourism reading.",
    },
    sports: {
      tr: "Göl yüzeyi kano, kürek ve yüzme gibi branşlar için araştırılabilir. Kıyı ve dağ eteği ise kamp ve doğa yürüyüşü potansiyeli taşır. İşletme ve güvenlik koşulları ayrıca doğrulanmalıdır.",
      en: "The lake can be studied for canoeing, rowing and swimming. The shore and foothills carry camping and walking potential. Operators and safety conditions still need confirmation.",
    },
    development: {
      tr: "Kıyı erişimi, iskele ve su güvenliği ile konaklama ilişkisi, yatırım konuşulmadan önce netleştirilecek altyapı başlıklarıdır.",
      en: "Shore access, piers, water safety and the link to accommodation are infrastructure questions to settle before any investment talk.",
    },
  },
  {
    slug: "erzincan",
    name: "Erzincan",
    plate: "24",
    region: "dogu",
    x: 282,
    y: 205,
    themes: ["kis-sporlari", "doga-ve-macera", "yuksek-irtifa"],
    summary: {
      tr: "Erzincan, yüksek dağ sıraları ile verimli ovaların bir arada bulunduğu bir geçiş kentidir. Kış, doğa ve irtifa çalışmaları için değerlendirilebilecek bir eşik sunar.",
      en: "Erzincan is a threshold city where high ranges meet a fertile plain. It offers ground that can be assessed for winter, nature and altitude work.",
    },
    geography: {
      tr: "Munzur ve Keşiş dağlarının uzantıları ile Karasu vadisi, şehrin açık alan omurgasını oluşturur.",
      en: "Extensions of the Munzur and Keşiş ranges and the Karasu valley form the backbone of its open landscape.",
    },
    sports: {
      tr: "Dağ yürüyüşü, kışa hazırlık kampları ve yüksek eşiklerde irtifa çalışmaları açısından potansiyel not edilebilir.",
      en: "Mountain walking, winter preparation camps and altitude work on the high ground can be noted as potential.",
    },
    development: {
      tr: "Geçit kenti olması, bölgesel kamp programlarında ulaşım durağı olarak da değerlendirilebilir.",
      en: "As a pass city it can also be considered as a transport stop in regional camp programmes.",
    },
  },
  {
    slug: "erzurum",
    name: "Erzurum",
    plate: "25",
    region: "dogu",
    x: 441,
    y: 191,
    themes: ["kis-sporlari", "yuksek-irtifa", "kamp-ve-outdoor"],
    summary: {
      tr: "Erzurum, uzun kış sezonu ve yüksek rakımıyla kış sporları ve yüksek irtifa kampları bakımından bölgenin en çok anılan merkezlerindendir.",
      en: "With its long winter and high elevation, Erzurum is among the region's most cited centres for winter sports and altitude camps.",
    },
    geography: {
      tr: "Palandöken kütlesi ve geniş yüksek platolar, kış sporları okumasının coğrafi temelini oluşturur. Tesis kapasitesi bu sayfada beyan edilmez.",
      en: "The Palandöken massif and broad high plateaus are the geographic basis of that winter-sports reading. Facility capacity is not stated here.",
    },
    sports: {
      tr: "Kayak ve snowboard potansiyeli, kış kampları ve sezon öncesi yüksek irtifa hazırlıkları içerik çalışmalarının öncelikli başlıklarıdır.",
      en: "Ski and snowboard potential, winter camps and pre-season altitude preparation are the priority themes for further content work.",
    },
    development: {
      tr: "Uluslararası kamp takvimi, pist ve konaklama ilişkisi ile ulaşım ancak kaynak gösterilerek işlenmelidir.",
      en: "International camp calendars, the link between slopes and lodging, and transport should be written only with sources.",
    },
  },
  {
    slug: "hakkari",
    name: "Hakkari",
    plate: "30",
    region: "dogu",
    x: 663,
    y: 409,
    themes: ["doga-ve-macera", "yuksek-irtifa", "kamp-ve-outdoor"],
    summary: {
      tr: "Hakkari, ülkenin en sarp dağlık alanlarından birinde yer alır. Trekking, yüksek irtifa ve kamp temelli faaliyetler için dikkatle planlanması gereken bir potansiyel barındırır.",
      en: "Hakkari lies in some of the country's steepest mountains. It holds potential for trekking, altitude and camping that needs careful planning.",
    },
    geography: {
      tr: "Cilo-Sat dağları ve derin vadiler, şehrin yüksek ve parçalı arazi karakterini tanımlar.",
      en: "The Cilo-Sat mountains and deep valleys define its high, broken terrain.",
    },
    sports: {
      tr: "Dağcılık ve uzun yürüyüşler coğrafi olarak mümkündür; güvenlik, izin ve mevsim koşulları her programın ön koşuludur.",
      en: "Mountaineering and long walks are geographically plausible; security, permits and season are preconditions for any programme.",
    },
    development: {
      tr: "Rehberlik, arama-kurtarma iş birliği ve sınırlı grup kapasitesi, bu ilde gelişimin sorumlu çerçevesidir.",
      en: "Guiding, search-and-rescue cooperation and limited group size are the responsible frame for development here.",
    },
  },
  {
    slug: "igdir",
    name: "Iğdır",
    plate: "76",
    region: "dogu",
    x: 690,
    y: 189,
    themes: ["doga-ve-macera", "geleneksel-sporlar", "kamp-ve-outdoor"],
    summary: {
      tr: "Iğdır, yüksek dağ silueti ile alçak ova ikliminin karşı karşıya geldiği bir sınır ilidir. Doğa sporları ve kültürel-sportif buluşmalar için incelenebilir.",
      en: "Iğdır is a border province where a high mountain skyline meets a lowland climate. It can be studied for nature sports and cultural sporting gatherings.",
    },
    geography: {
      tr: "Ağrı Dağı'nın görüş alanı, ova ve sınır geçişleri şehrin konumunu tanımlar.",
      en: "Views of Mount Ararat, the plain and border crossings define its position.",
    },
    sports: {
      tr: "Ova ölçeğinde bisiklet ve açık hava etkinlikleri, dağ eteğinde ise doğa yürüyüşü potansiyeli ayrıştırılarak çalışılmalıdır.",
      en: "Cycling and outdoor events on the plain, and walking on the foothills, should be studied as separate propositions.",
    },
    development: {
      tr: "Sınır kenti olması, komşu pazarlarla spor turizmi iletişimi için ayrıca değerlendirilebilir; bu bir taahhüt değildir.",
      en: "As a border city it can also be considered for sports-tourism dialogue with neighbouring markets. That is not a commitment.",
    },
  },
  {
    slug: "kars",
    name: "Kars",
    plate: "36",
    region: "dogu",
    x: 605,
    y: 125,
    themes: ["kis-sporlari", "geleneksel-sporlar", "doga-ve-macera"],
    summary: {
      tr: "Kars, yüksek plato, uzun kış ve güçlü kültürel mirasın birlikte okunabildiği bir ildir. Kış sporları, doğa etkinlikleri ve geleneksel sporlar açısından potansiyel taşır.",
      en: "Kars can be read through its high plateau, long winter and strong cultural heritage. It carries potential for winter sports, nature events and traditional sports.",
    },
    geography: {
      tr: "Ani başta olmak üzere kültürel miras alanları ile açık bozkır ve yüksek eşikler bir aradadır. Miras alanlarındaki ziyaret, ilgili kurumların kurallarına bağlıdır.",
      en: "Heritage sites, notably Ani, sit alongside open steppe and high ground. Visits to heritage sites follow the rules of the responsible institutions.",
    },
    sports: {
      tr: "Kış mevsimi, atlı sporlar ve açık arazide doğa yürüyüşü aynı ilde farklı mevsim programlarına ayrılabilir.",
      en: "Winter, equestrian sports and walking on open ground can be separated into different seasonal programmes.",
    },
    development: {
      tr: "Kültür rotası ile spor programını aynı vaatte birleştirmeden, mevsim ve alan yönetimini ayırmak daha sağlıklı bir çerçevedir.",
      en: "A sounder frame keeps culture routes and sports programmes from being promised as a single package, and separates season from site management.",
    },
  },
  {
    slug: "malatya",
    name: "Malatya",
    plate: "44",
    region: "dogu",
    x: 179,
    y: 336,
    themes: ["doga-ve-macera", "kamp-ve-outdoor", "kis-sporlari"],
    summary: {
      tr: "Malatya, dağ etekleri, vadiler ve güçlü tarımsal-kültürel kimliğiyle doğa ve açık hava etkinlikleri için bir eşik kentidir.",
      en: "Malatya is a threshold city of foothills, valleys and a strong agricultural and cultural identity, suited to nature and outdoor events.",
    },
    geography: {
      tr: "Beydağı çevresi ve Tohma vadisi gibi eşikler, ova ile yüksek alan arasındaki geçişi görünür kılar.",
      en: "Thresholds such as the Beydağı area and the Tohma valley make the passage from plain to high ground visible.",
    },
    sports: {
      tr: "Doğa yürüyüşü, dağ bisikleti ve kampçılık potansiyeli kent ölçeğindeki organizasyonlarla birlikte düşünülebilir.",
      en: "Walking, mountain biking and camping potential can be considered alongside city-scale events.",
    },
    development: {
      tr: "Kayısı hasadı dönemiyle çakışan etkinlik takvimi, tarım ve spor takvimini birbirine yük etmeden kurulmalıdır.",
      en: "An event calendar that overlaps the apricot harvest should be built without setting agriculture and sport against each other.",
    },
  },
  {
    slug: "mus",
    name: "Muş",
    plate: "49",
    region: "dogu",
    x: 462,
    y: 300,
    themes: ["doga-ve-macera", "kis-sporlari", "kamp-ve-outdoor"],
    summary: {
      tr: "Muş, ova ile dağ kuşaklarının birleştiği bir coğrafyada yer alır. Doğa yürüyüşleri ve kış koşullarına dayalı hazırlık çalışmaları açısından incelenebilir.",
      en: "Muş sits where a plain meets mountain belts. It can be studied for walking and preparation in winter conditions.",
    },
    geography: {
      tr: "Muş Ovası ve çevresindeki dağlık kuşak, açık ve kapalı araziyi aynı ilde buluşturur.",
      en: "The Muş plain and the surrounding mountain belt bring open and enclosed terrain into the same province.",
    },
    sports: {
      tr: "Düzlüklerde dayanıklılık koşuları, dağ eteğinde yürüyüş ve kış kampı potansiyeli ayrıştırılabilir.",
      en: "Endurance running on the flat, walking on the foothills and winter camps can be treated as distinct potentials.",
    },
    development: {
      tr: "İl ölçeğinde sade kamp merkezleri, büyük tesis vaadinden daha gerçekçi bir ilk adımdır.",
      en: "Modest camp centres at provincial scale are a more realistic first step than a promise of large facilities.",
    },
  },
  {
    slug: "tunceli",
    name: "Tunceli",
    plate: "62",
    region: "dogu",
    x: 287,
    y: 265,
    themes: ["doga-ve-macera", "su-sporlari", "kamp-ve-outdoor"],
    summary: {
      tr: "Tunceli, derin vadileri ve akarsu sistemleriyle doğa, su ve kamp temelli sporlar için öne çıkan potansiyel alanlardandır.",
      en: "With deep valleys and river systems, Tunceli stands out for nature, water and camp-based sports.",
    },
    geography: {
      tr: "Munzur Vadisi ve çevresindeki dağlık yapı, şehrin doğal karakterinin temelidir. Korunan alanlarda faaliyet ilgili mevzuata bağlıdır; bu sayfa izin veya parkur beyanı içermez.",
      en: "The Munzur valley and surrounding mountains are the basis of its natural character. Activity in protected areas follows the relevant rules; this page states neither a permit nor a route.",
    },
    sports: {
      tr: "Trekking, kanyon ve akarsu sporları ile kampçılık coğrafi olarak konuşulabilir. Her biri ayrı izin ve güvenlik çerçevesi gerektirir.",
      en: "Trekking, canyon and river sports, and camping can be discussed geographically. Each needs its own permit and safety frame.",
    },
    development: {
      tr: "Taşıma kapasitesi ve yerel yaşam üzerindeki etki, ürün geliştirmenin ön koşulu olarak ele alınmalıdır.",
      en: "Carrying capacity and the effect on local life should be treated as preconditions for any product.",
    },
  },
  {
    slug: "van",
    name: "Van",
    plate: "65",
    region: "dogu",
    x: 630,
    y: 322,
    themes: ["su-sporlari", "doga-ve-macera", "kamp-ve-outdoor"],
    summary: {
      tr: "Van, Van Gölü ve çevresindeki açık alanlarla su sporları ve doğa turizmi açısından örneklenen illerin başında gelir.",
      en: "Van is a leading example in the brief for water sports and nature tourism, thanks to Lake Van and the open country around it.",
    },
    geography: {
      tr: "Van Gölü'nün geniş yüzeyi, kıyı yerleşimleri ve çevredeki volkanik dağlar şehrin coğrafi omurgasını oluşturur.",
      en: "The broad surface of Lake Van, the shore settlements and the surrounding volcanic mountains form the province's geographic spine.",
    },
    sports: {
      tr: "Kano, kürek, yelken ve yüzme göl ölçeğinde araştırılabilir. Kıyı ve adalar çevresi doğa ve kamp programlarına eklenebilir. Su güvenliği ve mevsim ayrıca doğrulanmalıdır.",
      en: "Canoeing, rowing, sailing and swimming can be researched at the scale of the lake. Shores and islands can join nature and camp programmes. Water safety and season still need confirmation.",
    },
    development: {
      tr: "Kıyı erişimi, iskele standardı ve göl taşımacılığı ile spor kullanımı arasındaki ilişki öncelikli çalışma başlığıdır.",
      en: "The relationship between shore access, pier standards, lake transport and sporting use is a priority workstream.",
    },
  },
  {
    slug: "adiyaman",
    name: "Adıyaman",
    plate: "02",
    region: "guneydogu",
    x: 173,
    y: 392,
    themes: ["doga-ve-macera", "yuksek-irtifa", "geleneksel-sporlar"],
    summary: {
      tr: "Adıyaman, Nemrut Dağı ve Fırat havzasıyla kültür, doğa ve yüksek alan yürüyüşlerinin birlikte düşünülebileceği bir ildir.",
      en: "Adıyaman, with Mount Nemrut and the Euphrates basin, is a province where culture, nature and high walking can be considered together.",
    },
    geography: {
      tr: "Nemrut Dağı'nın kommagene mirası ve baraj gölleri çevresi, farklı ziyaret rejimleri olan iki ayrı alandır.",
      en: "The Commagene heritage of Mount Nemrut and the country around the reservoir lakes are two areas with different visit regimes.",
    },
    sports: {
      tr: "Yüksek alan yürüyüşü ve kültür rotasına bağlı açık hava etkinlikleri potansiyel taşır. Miras alanında spor faaliyeti, koruma kurallarına bağlıdır.",
      en: "High walking and outdoor events linked to a culture route have potential. Sport on the heritage site depends on conservation rules.",
    },
    development: {
      tr: "Kültür turizmi ile spor programının aynı gün içine sıkıştırılması yerine, ayrı ve ölçülü ürünler daha uygundur.",
      en: "Measured, separate products are more suitable than compressing culture tourism and a sports programme into the same day.",
    },
  },
  {
    slug: "batman",
    name: "Batman",
    plate: "72",
    region: "guneydogu",
    x: 428,
    y: 381,
    themes: ["su-sporlari", "doga-ve-macera", "kamp-ve-outdoor"],
    summary: {
      tr: "Batman, Dicle havzası ve çevresindeki eşiklerle su ve doğa sporları açısından değerlendirilebilecek bir konumdadır.",
      en: "Batman sits on the Tigris basin and nearby thresholds, a position that can be assessed for water and nature sports.",
    },
    geography: {
      tr: "Hasankeyf ve Dicle çevresi kültürel ve doğal bir okuma sunar. Alan yönetimi ve ziyaret koşulları ilgili kurumların duyurularına bağlıdır.",
      en: "Hasankeyf and the Tigris offer a cultural and natural reading. Site management and visit conditions follow notices from the responsible institutions.",
    },
    sports: {
      tr: "Akarsu sporları ve kıyı yürüyüşleri coğrafi olarak not edilebilir. Su yapılarındaki faaliyet, işletmeci ve güvenlik iznine bağlıdır.",
      en: "River sports and shore walks can be noted geographically. Activity on water structures depends on the operator and on safety permission.",
    },
    development: {
      tr: "Kültürel alanların spor kullanımına açılması ancak koruma çerçevesi netleşince konuşulmalıdır.",
      en: "Opening cultural sites to sporting use should be discussed only once the conservation frame is clear.",
    },
  },
  {
    slug: "diyarbakir",
    name: "Diyarbakır",
    plate: "21",
    region: "guneydogu",
    x: 348,
    y: 378,
    themes: ["geleneksel-sporlar", "doga-ve-macera", "su-sporlari"],
    summary: {
      tr: "Diyarbakır, surları, Hevsel Bahçeleri ve Dicle kıyısıyla kültürel miras ile açık alan kullanımının iç içe geçtiği bir merkezdir.",
      en: "Diyarbakır is a centre where heritage and open space meet, through its walls, the Hevsel Gardens and the Tigris bank.",
    },
    geography: {
      tr: "Sur içi, Hevsel ve Dicle kıyısı farklı kullanım yoğunluklarına sahip üç ayrı dokudur.",
      en: "The walled city, Hevsel and the Tigris bank are three fabrics with different intensities of use.",
    },
    sports: {
      tr: "Geleneksel spor gösterileri, kıyı yürüyüşleri ve kent ölçeğinde organizasyonlar için bir buluşma kenti olarak okunabilir. Sur içi kullanım, koruma kurallarına bağlıdır.",
      en: "It can be read as a meeting city for traditional sports displays, shore walks and city-scale events. Use inside the walls follows conservation rules.",
    },
    development: {
      tr: "Miras alanını etkinlik alanına çevirmeden, kent çeperinde spor kullanımını büyütmek daha ölçülü bir yaklaşımdır.",
      en: "Growing sporting use on the urban edge, without turning the heritage site into an event ground, is the more measured approach.",
    },
  },
  {
    slug: "gaziantep",
    name: "Gaziantep",
    plate: "27",
    region: "guneydogu",
    x: 92,
    y: 457,
    themes: ["geleneksel-sporlar", "kamp-ve-outdoor"],
    summary: {
      tr: "Gaziantep, mutfak kültürü, müzeleri ve kent ölçeğiyle büyük buluşmalar açısından Güneydoğu'nun güçlü merkezlerindendir. Tesis kapasitesi bu sayfada beyan edilmez.",
      en: "Through its food culture, museums and urban scale, Gaziantep is one of Southeastern Anatolia's strong centres for large gatherings. Facility capacity is not stated here.",
    },
    geography: {
      tr: "Kent, Mezopotamya'nın kuzey eşiğinde, ova ile dağ eteğinin birleştiği bir konumdadır.",
      en: "The city sits on the northern threshold of Mesopotamia, where plain and foothill meet.",
    },
    sports: {
      tr: "Geleneksel spor gösterileri ve kent içi organizasyonlar ile yakın çevrede açık hava etkinlikleri birlikte düşünülebilir.",
      en: "Traditional sports displays and in-city events can be considered together with outdoor activities nearby.",
    },
    development: {
      tr: "Konaklama arzı ile spor organizasyonu takviminin ilişkisi, doğrulanmış işletme verisiyle ayrıca kurulmalıdır.",
      en: "The link between accommodation supply and a sports calendar should be built later, from confirmed operator data.",
    },
  },
  {
    slug: "kilis",
    name: "Kilis",
    plate: "79",
    region: "guneydogu",
    x: 69,
    y: 490,
    themes: ["doga-ve-macera", "kamp-ve-outdoor", "geleneksel-sporlar"],
    summary: {
      tr: "Kilis, sınır konumu ve küçük ölçekli kent dokusuyla toplum temelli spor etkinlikleri için sakin bir ölçek sunar.",
      en: "Kilis offers a quiet scale for community sports events, through its border position and small-city fabric.",
    },
    geography: {
      tr: "Ova üzerindeki alçak kent ve yakın kırsal, kısa süreli açık hava programlarına elverişli bir ölçektedir.",
      en: "The low city on the plain and the nearby countryside are at a scale that suits short outdoor programmes.",
    },
    sports: {
      tr: "Okçuluk, yürüyüş ve küçük kamp buluşmaları gibi düşük altyapılı etkinlikler öncelikli incelenebilir.",
      en: "Low-infrastructure events such as archery, walking and small camp gatherings can be examined first.",
    },
    development: {
      tr: "Sınırlı konaklama kapasitesi varsayılmadan, günübirlik ve küçük grup modeli esas alınmalıdır.",
      en: "A day-visit and small-group model should be the default, without assuming spare accommodation.",
    },
  },
  {
    slug: "mardin",
    name: "Mardin",
    plate: "47",
    region: "guneydogu",
    x: 393,
    y: 434,
    themes: ["geleneksel-sporlar", "doga-ve-macera", "kamp-ve-outdoor"],
    summary: {
      tr: "Mardin, taş mimarisi ve Mezopotamya eşiğiyle kültür turizminin güçlü adreslerindendir. Geleneksel sporlar, kültürel etkinliklerle ölçülü biçimde buluşabilir.",
      en: "Mardin is a strong address for cultural tourism through its stone architecture and Mesopotamian threshold. Traditional sports can meet cultural events in a measured way.",
    },
    geography: {
      tr: "Kalker sırt üzerindeki tarihi doku ile ovaya bakan eşik, iki farklı hareket alanı oluşturur.",
      en: "The historic fabric on the limestone ridge and the threshold looking over the plain create two different fields of movement.",
    },
    sports: {
      tr: "Tarihi dokuda yoğun sportif kullanım önerilmez. Geleneksel spor gösterileri ve ova tarafında açık hava etkinlikleri ayrı ele alınmalıdır.",
      en: "Intensive sporting use inside the historic fabric is not recommended. Traditional sports displays and outdoor events on the plain side should be handled apart.",
    },
    development: {
      tr: "Taşıma kapasitesi ve taşınmaz kültürü, etkinlik büyüklüğünün üst sınırını belirlemelidir.",
      en: "Carrying capacity and the built heritage should set the upper limit of event size.",
    },
  },
  {
    slug: "siirt",
    name: "Siirt",
    plate: "56",
    region: "guneydogu",
    x: 501,
    y: 376,
    themes: ["doga-ve-macera", "kamp-ve-outdoor", "su-sporlari"],
    summary: {
      tr: "Siirt, içerik dosyasında doğa ve macera sporları başlığıyla örneklenen iller arasındadır. Vadi, dağ ve kırsal doku bu okumanın zeminini oluşturur.",
      en: "Siirt is one of the provinces cited in the brief under nature and adventure sports. Valleys, mountains and rural fabric are the ground of that reading.",
    },
    geography: {
      tr: "Botan Çayı vadisi ve çevresindeki dağlık eşikler, ilin en belirgin doğal koridorlarıdır.",
      en: "The Botan valley and the surrounding mountain thresholds are the province's clearest natural corridors.",
    },
    sports: {
      tr: "Trekking, dağ bisikleti ve uygun kesimlerde akarsu sporları araştırılabilir. Parkur işareti ve işletme bilgisi bu sayfada yoktur.",
      en: "Trekking, mountain biking and, on suitable stretches, river sports can be researched. This page lists neither trail marks nor operators.",
    },
    development: {
      tr: "Vadi güvenliği, mevsimsel su rejimi ve yerel rehberlik ilk yatırım konuşmasından önce gelmelidir.",
      en: "Valley safety, the seasonal water regime and local guiding should come before any talk of investment.",
    },
  },
  {
    slug: "sanliurfa",
    name: "Şanlıurfa",
    plate: "63",
    region: "guneydogu",
    x: 218,
    y: 448,
    themes: ["geleneksel-sporlar", "doga-ve-macera", "kamp-ve-outdoor"],
    summary: {
      tr: "Şanlıurfa, Göbeklitepe başta olmak üzere erken tarih izlerini taşıyan bir kültür odağıdır. Geleneksel sporlar ve açık alan etkinlikleri, kültür rotalarıyla yan yana düşünülebilir.",
      en: "Şanlıurfa is a cultural focus of early history, notably Göbeklitepe. Traditional sports and outdoor events can sit beside culture routes.",
    },
    geography: {
      tr: "Kalker platolar, Harran Ovası ve kutsal alanlar farklı ziyaret rejimleri olan katmanlardır.",
      en: "Limestone plateaus, the Harran plain and sacred sites are layers with different visit regimes.",
    },
    sports: {
      tr: "Geleneksel okçuluk, atlı gösteriler ve ova ölçeğinde açık hava buluşmaları potansiyel taşır. Arkeolojik alanlarda sportif kullanım ayrıca izin gerektirir.",
      en: "Traditional archery, equestrian displays and outdoor gatherings at the scale of the plain have potential. Sporting use of archaeological sites needs separate permission.",
    },
    development: {
      tr: "Kültür varlıklarının çevresinde etkinlik, kazı ve koruma takvimiyle çatışmadan planlanmalıdır.",
      en: "Events around cultural assets should be planned so they do not collide with excavation and conservation calendars.",
    },
  },
  {
    slug: "sirnak",
    name: "Şırnak",
    plate: "73",
    region: "guneydogu",
    x: 547,
    y: 414,
    themes: ["doga-ve-macera", "yuksek-irtifa", "kamp-ve-outdoor"],
    summary: {
      tr: "Şırnak, dağlık eşikler ve vadilerle doğa, yüksek irtifa ve kamp temelli faaliyetler açısından incelenebilecek bir coğrafyaya sahiptir.",
      en: "Şırnak has mountainous thresholds and valleys that can be studied for nature, altitude and camp-based activities.",
    },
    geography: {
      tr: "Cudi Dağı çevresi ve derin vadiler, ilin yüksek ve parçalı arazi karakterini belirler.",
      en: "The country around Cudi and the deep valleys shape its high, broken terrain.",
    },
    sports: {
      tr: "Dağ yürüyüşü ve kamp potansiyeli coğrafi olarak vardır. Güvenlik, izin ve mevsim her programın ön koşuludur.",
      en: "Walking and camping potential exists geographically. Security, permits and season are preconditions for every programme.",
    },
    development: {
      tr: "Küçük gruplar, yerel rehberlik ve arama-kurtarma iş birliği gelişimin sorumlu çerçevesidir.",
      en: "Small groups, local guiding and search-and-rescue cooperation are the responsible frame for development.",
    },
  },
]

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug)
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug)
}

export function citiesByRegion(region: RegionId) {
  return cities.filter((city) => city.region === region)
}

export function citiesByTheme(theme: string) {
  return cities.filter((city) => city.themes.includes(theme))
}

export const facilityNote = sharedInfra
export const accessNote = sharedAccess
