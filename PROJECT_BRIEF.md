# Yasin Kara Portfolio — Proje notu

## Amaç

İş başvurularında ve profesyonel profillerde paylaşılacak, özenli ve anlaşılır bir geliştirici portfolyosu. Varsayılan dil İngilizce; Türkçe, İspanyolca, Arapça, Rusça ve Almanca da desteklenir. Dört sayfa: Anasayfa, Projelerim, Hakkımda ve İletişim. Kullanıcıyla iletişim Türkçe.

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

- Kullanıcının seçtiği koyu lacivert (#000d15, #05172f) ana zeminler; arduvaz (#2d3c4c), antrasit (#2f2f2b) ve gri (#525453) yardımcı yüzeyler; sıcak kırık beyaz metin ve şampanya vurgular.
- Tipografinin öne çıktığı giriş, geniş boşluklar, ince ayırıcılar ve büyük ekranda kontrollü asimetri.
- Fontsource üzerinden yerel Manrope ve Cormorant Garamond; en fazla iki yazı tipi ailesi ve Türkçe karakter desteği.
- Projelere geniş, tipografik kapaklar. Bunlar uygulama ekran görüntüsü olarak sunulmaz.
- Fotoğraf kullanılmaz; stok insan fotoğrafı veya yapay portre eklenmez.
- Kısa, sakin etkileşimler; `prefers-reduced-motion` desteği. Otomatik kayan içerik, özel imleç veya kaydırmayı ele geçiren efektler kullanılmaz.
- Semantik yapı, erişilebilir mobil menü ve görünür klavye odağı.

## Teknik kararlar

- React + TypeScript + Vite; CSS Modules, CSS değişkenleri ve anlaşılır bölüm bileşenleri.
- Merkezi içerik: `src/data/portfolio.ts`.
- Proje görseli için isteğe bağlı `image` alanı: `src`, `alt`, gerçek `width` ve `height`.
- Proje adresleri için isteğe bağlı `repositoryUrl` ve `liveUrl`.
- İletişim için isteğe bağlı `profile.contact.email`, `github`, `linkedin`, `cv`.
- Sağlanmamış veya geçersiz adreslere ait etkileşim gösterilmez. Sahte iletişim formu yoktur.
- Vite MPA yapısında dört gerçek HTML girişi ve standart sayfa bağlantıları vardır. Ek router, backend, veritabanı, üyelik veya yönetim paneli yoktur.
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

## 20 Eylül 2026 — Header hover efekti

- YK logosu ve header bölüm bağlantılarına, metin genişliğinde soldan sağa açılan ince şampanya alt çizgi eklendi.
- Logo hover ve klavye odağında şampanya rengine geçer. Aynı alt çizgi klavye odağında da görünür; mevcut azaltılmış hareket tercihi geçişi kapatır.
- Çizgi mutlak konumlandırılır; yerleşimde kaymaya neden olmaz. Arapçada da animasyon başlangıcı soldadır.
- Build, lint ve typecheck başarılı. Bu küçük stil değişikliği için tarayıcı test paketi yeniden çalıştırılmadı.

## 21 Eylül 2026 — Logo hover düzeltmesi

- YK logosunun alt çizgisi kaldırıldı; hover ve klavye odağında yalnızca şampanya renk geçişi korunur.
- Bölüm bağlantılarındaki soldan sağa alt çizgi efekti devam eder.
- Build, lint ve typecheck başarılı. Tarayıcı test paketi bu küçük düzeltme için yeniden çalıştırılmadı.

## 21 Eylül 2026 — Sabit header

- Header, tam genişlikte antrasit arka planla kaydırma sırasında ekranın üstünde kalır (`position: sticky`).
- Bölüm bağlantıları için header yüksekliğine bağlı kaydırma payı eklendi; başlıklar header altında gizlenmez. Mobil menü açıldığında üst satır yüksekliği korunur.
- Build, lint ve typecheck başarılı. Yerel Chrome'da 1440 ve 390 px genişlikte kaydırma ve Hakkımda bağlantısı kontrol edildi: header üst konumu 0 px, bölüm başlığı header altında görünür ve yatay taşma yok.

## 21 Eylül 2026 — Konum bilgisinin kaldırılması

- Kullanıcının isteğiyle konum bilgisi Hero ve Contact bölümlerinden, ortak profil verisinden ve altı dilin çeviri alanlarından kaldırıldı. Konumu sitede yeniden yayımlamayın.
- Statik HTML ve tüm dillerin meta açıklamaları konum içermeyecek şekilde güncellendi. Kullanılmayan konum stilleri ve eski derleme kalıntıları temizlendi.
- Build, lint ve typecheck başarılı. Kaynak ve derleme dosyalarında konum ifadelerinin kalmadığı metin aramasıyla doğrulandı.

## 21 Eylül 2026 — Dört sayfalı yapı

- Kullanıcıyla kararlaştırılan yapı uygulandı: `/`, `/projects/`, `/about/`, `/contact/`. Her sayfa kendi HTML girişiyle derlenir; ek bağımlılık kullanılmaz.
- Anasayfaya kısa proje önizlemeleri ve hakkında özeti yerleştirildi. Proje kartları Projelerim sayfasında ilgili projeye bağlanır.
- Hakkımda sayfası mühendislikten yazılıma geçiş, eğitim, Money Guard/Cinemania ekip sorumlulukları ve teknik araçlardan oluşur. Yeni kişisel iddia eklenmedi.
- İletişim kendi sayfasına taşındı; henüz sağlanmamış iletişim kanalları için işlevsiz bağlantı üretilmedi.
- Header/footer dört sayfaya yönlendirir ve aktif sayfayı belirtir. Sabit header, YK renk efekti, menü alt çizgileri, altı dil ve konumun kaldırılması korunur.
- Her sayfada tek h1 ve dile/sayfaya uygun başlık/açıklama vardır. Sayfa içi bağlantılar, içeriğe atlama ve başa dönme bağlantıları güncellendi.
- Build, lint ve typecheck geçti. Üretim çıktısı `http://127.0.0.1:4173/` üzerinden Chrome ile doğrulandı: dört sayfa × altı dil × masaüstü/mobil için 408 kontrol başarılı; tarayıcı hatası yok.
- Doğrudan adres açma, yenileme, geri/ileri gezinme, dil kalıcılığı, aktif menü, sabit header ve proje bağlantıları doğrulandı. İngilizce masaüstü/mobil ve Arapça mobil axe taramalarında ihlal bulunmadı.
- 320 ve 768 px genişliklerde İngilizce, Arapça ve Almanca ile ek 24 sayfa senaryosunda yatay taşma veya başlık kesilmesi bulunmadı. Türkçe masaüstü ve Arapça/Almanca mobil ekran görüntüleri görsel olarak incelendi.
- Yerel test betiği `.verification/verify-pages.mjs`, raporu `.verification/pages-report.json`; bu doğrulama dosyaları Git kapsamı dışındadır.

## 21 Eylül 2026 — Başlık noktaları

- Altı dilde bölüm başlıklarının sonundaki noktalar, ana isim başlığının ve tipografik proje kapaklarının dekoratif noktaları kaldırıldı. Hakkımda monogramındaki nokta ve kullanılmayan nokta stilleri temizlendi.
- Build, lint ve typecheck başarılı. Bu metin/dekorasyon değişikliği için tarayıcı test paketi yeniden çalıştırılmadı.

## 22 Eylül 2026 — CSS Modules geçişi

- Proje zaten React + TypeScript + Vite kullanıyordu; mevcut React bileşenleri ve dört HTML girişli yapı korundu.
- Üç global stil dosyası `src/App.module.css` içinde mevcut öncelik sırasıyla birleştirildi. Bileşenlerin tüm stil sınıfları modül içe aktarımlarıyla bağlandı; mobil menü, ok yönü, sayfa ve proje kapağı varyantları da yerel sınıfları kullanır.
- Tasarım değişkenleri, belge sıfırlamaları ve temel tipografi genel kapsamda kalır. Sayfa içi bağlantının kimliği değişmesin diye `#work-title` seçicisi açıkça global tanımlandı. Yeni bağımlılık eklenmedi.
- Build, lint ve typecheck başarılı. Dört sayfa × üç dil (İngilizce, Arapça, Almanca) × üç genişlik (1440, 390, 320 px) için 36 üretim ekran görüntüsü önceki sürümle birebir aynı; yatay taşma yok.
- Yerel karşılaştırma betiği `.verification/verify-modules.mjs`; sonuçlar `.verification/modules-before.json` ve `.verification/modules-after.json` içinde, Git kapsamı dışındadır.
- Altı dil × dört sayfa × masaüstü/mobil için 408 tarayıcı kontrolü başarılı: dil kalıcılığı, mobil menü, doğrudan açılış, geri/ileri gezinme, sabit header, proje bağlantıları ve seçili senaryolarda axe erişilebilirlik taramaları geçti. Tarayıcı hatası yok. Modül sınıflarına uyarlanan yerel betik `.verification/verify-module-pages.mjs`, rapor `.verification/modules-pages-report.json`.

## 23 Eylül 2026 — Header menü hizalaması

- Masaüstünde gezinme menüsü eşit yan sütunlarla header'ın ortasına alındı; dil seçici sağda kalır. Menü arkasına %6 opaklıkta şampanya tonu ve 12 px köşe yuvarlama eklendi. Mobilde açılan menü bağlantıları da ortalandı.
- Build, lint ve typecheck başarılı. Chrome'da altı dil × beş genişlik (1440, 768, 701, 390, 320 px) için 30 senaryoda ortalama, yatay taşma ve dil seçiciyle çakışma kontrolleri geçti.

## 23 Eylül 2026 — Oval logo ve şampanya menü

- YK logosu masaüstünde 29 px, mobilde 26 px yapıldı; oval arka plan eklendi. Logo ve gezinme menüsü arka planı, Hero'daki Kara yazısıyla aynı `--color-accent` rengini kullanır.
- Açık arka planda okunabilirlik için logo ve menü yazıları antrasit yapıldı; hover koyu kahverengi, menü alt çizgisi metin rengindedir. Aktif menü kalın yazıyla belirtilir; klavye odağı koyu çerçeveyle görünür.
- Build, lint ve typecheck başarılı. Altı dil ve beş genişlikte 30 header hizalama/taşma kontrolü geçti; masaüstü ekran görüntüsü incelendi.

## 23 Eylül 2026 — Kullanıcı renk paleti

- Ana zemin #000d15, bölüm yüzeyi #05172f, çizgiler ve Money Guard kapağı #2d3c4c, Cinemania kapağı #2f2f2b, TaskPro kapağı #525453 yapıldı. Dil menüsü hover yüzeyi de yeni palete uyarlandı.
- Kırık beyaz metinler ve kullanıcının önceki isteğindeki şampanya logo/menü vurgusu korundu. TaskPro kapağında koyu zemin için açık yazı ve çizgi kullanıldı. Dört HTML girişinin theme-color değeri ve favicon zemini güncellendi.
- Build, lint ve typecheck başarılı. Dört sayfanın masaüstü/mobil toplam sekiz axe WCAG A/AA taramasında ihlal bulunmadı; mobil görünüm ekran görüntüsünden incelendi.

## 23 Eylül 2026 — Ortak iki tonlu sayfa düzeni

- Dört sayfanın tam genişlikteki ana içerik alanına #05172f arka plan uygulandı. Header ve footer #000d15 koyu zeminde kalır; Hakkımda örneğindeki açık orta alan/koyu üst-alt düzeni tüm sayfalara yayıldı.
- Build, lint ve typecheck başarılı. Dört sayfa × masaüstü/mobil için sekiz axe WCAG A/AA taraması ihlal bildirmedi.

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
