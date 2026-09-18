# Yasin Kara Portfolio — Proje notu

## Amaç

İş başvurularında ve profesyonel profillerde paylaşılacak, özenli ve anlaşılır bir geliştirici portfolyosu. Varsayılan dil İngilizce; Türkçe, İspanyolca, Arapça, Rusça ve Almanca da desteklenir. Tek sayfa; projeler, hakkında, teknik araçlar ve iletişim bölümleri. Kullanıcıyla iletişim Türkçe.

## Doğrulanmış profil

- Yasin Kara; Kütahya, Türkiye'de yaşıyor.
- Lojistik mühendisi olarak çalışıyor; daha önce üretim vardiya mühendisliği yaptı.
- Yazılım sektörüne geçiş için iş başvuruları yapıyor.
- GoIT Full Stack Developer eğitimini 14 Ağustos 2026'da tamamladı.
- JavaScript, TypeScript, React, Redux Toolkit, HTML5, CSS3, responsive design, Node.js, Express.js, MongoDB, Mongoose, REST API, JWT, Swagger, Axios, Vite, Git ve GitHub ile çalıştı.
- Node.js bilgisini uygulamalarla pekiştiriyor. Kıdem veya uzmanlık iddiası kullanılmayacak.
- Operasyon organizasyonu, sorumluluk alma, problem çözme ve ekip çalışması deneyimi yazılıma geçiş anlatısının temelidir.
- gentle.vie ayrı bir kişisel marka fikridir; bu sitenin kimliği Yasin Kara'dır.

## Doğrulanmış projeler

### TaskPro

Rol: Full Stack Developer. İşlev, teknoloji ve kişisel katkı ayrıntıları sağlanmadı. İngilizce açıklama yalnızca doğrulanmış rolü belirtir; katkı ve teknoloji listeleri boştur.

### Money Guard

React/Redux ekip projesi. Yedi kişilik ekipte Team Lead. Teknik sorumluluklar: Redux Toolkit, token kalıcılığı, API istemcisi, kimlik doğrulama ve işlem, kategori, istatistik, döviz verileri. Kullanıcı, gelir veya performans metriği sağlanmadı.

### Cinemania

JavaScript ekip projesi; Team Lead. Vite, Axios ve TMDB kullanıldı. Weekly Trends, film detay modalı, arayüz geliştirmeleri ve performans iyileştirmeleri üzerinde çalışıldı. Sayısal iyileşme iddiası sağlanmadı.

## Tasarım kararları

- Koyu antrasit ana zemin, sıcak kırık beyaz metin, ölçülü şampanya/açık altın vurgular.
- Tipografinin öne çıktığı giriş, geniş boşluklar, ince ayırıcılar ve büyük ekranda kontrollü asimetri.
- Fontsource üzerinden yerel Manrope ve Cormorant Garamond; en fazla iki yazı tipi ailesi ve Türkçe karakter desteği.
- Projelere geniş, tipografik kapaklar. Bunlar uygulama ekran görüntüsü olarak sunulmaz.
- Fotoğraf kullanılmaz; stok insan fotoğrafı veya yapay portre eklenmez.
- Kısa, sakin etkileşimler; `prefers-reduced-motion` desteği. Otomatik kayan içerik, özel imleç veya kaydırmayı ele geçiren efektler kullanılmaz.
- Semantik yapı, erişilebilir mobil menü ve görünür klavye odağı.

## Teknik kararlar

- React + TypeScript + Vite; sade CSS, CSS değişkenleri ve anlaşılır bölüm bileşenleri.
- Merkezi içerik: `src/data/portfolio.ts`.
- Proje görseli için isteğe bağlı `image` alanı: `src`, `alt`, gerçek `width` ve `height`.
- Proje adresleri için isteğe bağlı `repositoryUrl` ve `liveUrl`.
- İletişim için isteğe bağlı `profile.contact.email`, `github`, `linkedin`, `cv`.
- Sağlanmamış veya geçersiz adreslere ait etkileşim gösterilmez. Sahte iletişim formu yoktur.
- İlk sürümde router, backend, veritabanı, üyelik veya yönetim paneli yoktur.
- Gerçek alan adı sağlanmadan canonical ya da sosyal paylaşım URL'si oluşturulmaz.

## Tamamlanan işler

- Doğrulanmış profil, proje, teknoloji ve gezinme verileri merkezi TypeScript katmanına aktarıldı.
- İletişim, proje bağlantıları ve gerçek ekran görüntüleri için isteğe bağlı alanlar tanımlandı.
- Kurulum, içerik düzenleme ve çalışma kuralları belgelendi.
- React + TypeScript + Vite ile çalışan İngilizce tek sayfa tamamlandı: Header, Hero, Selected Work, About, Technical Toolkit, Contact ve Footer.
- Antrasit zemin, şampanya vurguları, yerel Manrope/Cormorant Garamond fontları ve responsive editoryal düzen uygulandı.
- TaskPro, Money Guard ve Cinemania için üç farklı tipografik kapak hazırlandı. Kapak yazıları `coverTitle` alanından yönetilir; gerçek `image` eklendiğinde kapak yerini görsele bırakır.
- Money Guard ve Cinemania katkıları, klavyeyle kullanılabilen yerel `details` / `summary` öğeleriyle sunuldu.
- Mobil menü, Escape ile kapanma ve odağı geri getirme, bölüm bağlantıları, içeriğe atlama bağlantısı ve azaltılmış hareket desteği tamamlandı.
- İletişim ve proje adresleri için biçim doğrulaması eklendi. Eksik/geçersiz bağlantılar görünmez; adresin erişilebilirliği gerçek içerik eklenince ayrıca kontrol edilmelidir.
- Sayfa başlığı, açıklaması ve YK favicon eklendi. Canonical veya sosyal paylaşım adresi uydurulmadı.

## Uygulama ve kontrol durumu

Tarayıcı doğrulaması 15 Eylül 2026'da yerel Chrome'un başsız modunda, Playwright ve axe-core ile yapıldı. Test araçları uygulama bağımlılıklarına eklenmedi; `.verification/` altında tutulur ve Git/ESLint kapsamı dışındadır.

- 1440 × 1000 masaüstü, 768 × 1024 tablet, 390 × 844 telefon ve 320 × 740 küçük telefon boyutlarında yatay taşma bulunmadı.
- Masaüstü, tablet ve telefon ekran görüntüleri görsel olarak incelendi; hizalama ve metin kesilmesi sorunu görülmedi.
- Mobil menünün Enter ile açılması, Tab sırası, Escape ile kapanıp odağı düğmeye geri vermesi ve üç bölüm bağlantısının menüyü kapatarak hedefi göstermesi geçti.
- Her iki proje ayrıntısının Enter ile açılması ve Space ile kapanması geçti.
- İç bağlantı hedefleri ve tek h1 kontrolü geçti. Testlerde tarayıcı konsol hatası veya başarısız kaynak isteği bulunmadı.
- `prefers-reduced-motion` altında animasyon/geçişlerin kapandığı ve kaydırmanın `auto` olduğu doğrulandı.
- Masaüstü, telefon ve açık mobil menüde axe WCAG 2/2.1 A/AA taraması ihlal bildirmedi. Bu otomatik tarama, kapsamlı manuel erişilebilirlik denetimi veya farklı tarayıcı garantisi değildir.
- Yerel rapor: `.verification/report.json` — 28 kontrol başarılı. Ekran görüntüleri aynı dizinde tutulur.

16 Eylül 2026 kapanış kontrolleri:

- `npm.cmd run build`: başarılı; TypeScript ve Vite üretim derlemesi tamamlandı.
- `npm.cmd run lint`: başarılı; sıfır uyarı koşulu sağlandı.
- `npm.cmd run typecheck`: başarılı.

Önizleme: `npm.cmd run dev` → `http://127.0.0.1:5173/`. Windows PowerShell'de npm yürütme ilkesi hatası yaşanırsa `npm` yerine `npm.cmd` kullanılır. Üretim dosyaları `npm.cmd run build` ile `dist/` içine yazılır.

## 18 Eylül 2026 — Dil desteği ve header revizesi

- Sağ üste yerel SVG bayrakları ve dilin kendi adını gösteren küçük bir açılır dil menüsü eklendi.
- Altı dil için profil, proje katkıları, gezinme, bölüm başlıkları, erişilebilirlik metinleri ve sayfa metadata çevirileri hazırlandı. Özel adlar ve teknik ürün adları korunur.
- Varsayılan İngilizce; seçilen dil `yasin-kara-language` anahtarında tutulur. Geçersiz kayıt ve engellenmiş localStorage güvenli biçimde ele alınır.
- Arapçada genel sayfa yönü/sütun sırası değişmez; metin blokları RTL okunur. Rusça için Cormorant Garamond Kiril karakterleri eklendi.
- Ortak veriler `src/data/portfolio.ts`, çeviriler `src/i18n/locales/`, dil ve responsive ek stilleri `src/i18n/language.css` üzerinden yönetilir.
- Header logosu yalnızca `YK` yapıldı. Gezinme bağlantılarının başındaki sayılar kaldırıldı. Proje bağlantısı Türkçede `Projelerim`, İngilizcede `My projects` ve diğer dillerde karşılığı olacak şekilde güncellendi.
- `npm.cmd run build`, `npm.cmd run lint` ve `npm.cmd run typecheck` başarılı.
- Altı dil × dört ekran boyutunda (1440, 768, 390 ve 320 px genişlik) yerel Chrome testleri tamamlandı: 24 senaryo, 351 kontrol başarılı. Yatay taşma veya ana metinlerde kesilme bulunmadı.
- Dil seçimi, yenilemede kalıcılık, İngilizce varsayılan, geçersiz kayıt, engellenmiş localStorage, klavye/dışarı tıklama davranışı ve çevrilmiş mobil menü doğrulandı.
- Arapça metinlerin RTL, sayfa düzeninin LTR kaldığı doğrulandı. Arapça, Rusça ve Almanca masaüstü/mobil ekran görüntüleri incelendi.
- Masaüstü ve telefonda tüm diller için axe WCAG A/AA taramaları ihlal bildirmedi; tarayıcı hatası veya başarısız kaynak isteği görülmedi. Otomatik tarama kapsamlı manuel erişilebilirlik denetiminin yerine geçmez.
- Yerel test raporu `.verification/language-report.json`; test betiği `.verification/verify-languages.mjs`. Bu yerel araçlar Git kapsamı dışındadır.

## Kullanıcıdan beklenen içerikler

1. İletişim e-posta adresi; GitHub ve LinkedIn profil adresleri.
2. Paylaşılacak gerçek CV dosyası veya erişilebilir bağlantısı.
3. Üç proje için repository ve canlı site adresleri.
4. Projelerin gerçek ekran görüntüleri ve varsa tercih edilen görsel sıralaması.
5. TaskPro'nun doğrulanmış işlevleri, kullanılan teknolojileri ve Yasin'in kişisel katkıları.
6. Yayın için gerçek alan adı; sosyal paylaşım görseli isteniyorsa kullanılacak içerik.

Eksik içerikler ilk tasarımın geliştirilmesini engellemez. Yaş, maaş, özel hayat, kullanıcı sayısı, gelir, müşteri logosu, referans veya uydurma başarı iddiası eklenmez.

## Sıradaki işler

- Kullanıcının tasarım revizesini değerlendirmek.
- Gerçek bağlantı ve ekran görüntülerini sağlandıkça merkezi veriye eklemek; erişilebilirlik ve yükleme davranışını yeniden kontrol etmek.
- Gerçek alan adı ve yayın ortamı belli olduğunda ilgili metadata ve dağıtım ayarlarını tamamlamak.

## Anlamlı commit mesajı önerileri

- `feat: build Yasin Kara developer portfolio`
- `content: add verified project links and screenshots`
- `refine: improve portfolio layout from design feedback`

Mesajlar yalnızca ilgili gerçek geliştirme aşaması tamamlandığında kullanılmalıdır; yapay commit üretilmez.
