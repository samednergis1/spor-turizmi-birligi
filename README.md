# Doğu ve Güneydoğu Anadolu Spor Turizmi Birliği

Bölgesel spor turizmini tanıtan, şehirleri ve paydaşları aynı çatıda buluşturan iki dilli web sitesi. Oluşum, gönüllü bir iş birliği platformudur; sitede resmî tüzel kişilik varmış gibi bir üyelik, aidat veya bağış akışı yoktur.

## Çalıştırma

```bash
npm install
npm run dev
```

Geliştirme sunucusu `3456` portunda açılır. Üretim derlemesi için `npm run build` ve `npm run start`.

Kök adres Türkçe ana sayfaya yönlenir. İngilizce için adresin başına `/en` eklenir. Örnek: `/tr/sehirlerimiz/van`, `/en/spor-turizmi/kis-sporlari`.

İsteğe bağlı ortam değişkeni `NEXT_PUBLIC_SITE_URL`, kanonik adres ve site haritası için kullanılır. Tanımlı değilse yerel adres esas alınır.

## Ne var?

- Yapışkan üst menü, açılır şehir ve spor menüleri, mobil panel ve TR/EN geçişi
- Ana sayfa: açılış alanı, tanıtım, harita, branşlar, proje etiketleri, haber ve iş birliği çağrısı
- Birliğimiz, 23 il profili, altı spor alanı, projeler, yatırım formu, haber, bilgi merkezi ve iletişim
- Alt bilgide zorunlu hukuki uyarı
- Sayfa başlıkları, açıklamalar, `hreflang`, `sitemap.xml` ve `robots.txt`

Şehir sayfalarındaki tesis, etkinlik ve ulaşım alanları bilinçli olarak boştur. Doğrulanmamış kapasite veya yatırım vaadi yazılmaz. İletişim formu bu sürümde veriyi bir sunucuya kaydetmez.
