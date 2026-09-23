# Yasin Kara Portfolio — Proje notu

## Amaç

İş başvurularında ve profesyonel profillerde paylaşılacak, özenli ve anlaşılır bir geliştirici portfolyosu. Varsayılan dil İngilizce; Türkçe, İspanyolca, Arapça, Rusça ve Almanca da desteklenir. Üç sayfa: Anasayfa, Projelerim ve İletişim. Hakkımda sayfası kullanıcının isteğiyle kaldırıldı. Kullanıcıyla iletişim Türkçe.

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

Rol: Full Stack Developer, ekip projesi. React, Redux Toolkit, Node.js, Express.js, MongoDB, Mongoose, JWT, Swagger ve Vite. Board/column CRUD akışları, dashboard API ve kart entegrasyonu, etiket filtreleri, tema değiştirme ve görev çalışma alanlarının kalıcılığı üzerinde çalıştı.

### Money Guard

Altı kişilik ekipte Team Lead. React, Redux Toolkit, Redux Persist, React Router, Axios, React Hook Form, Yup, Chart.js ve Vite. Finans paneli, kimlik doğrulama, korumalı rotalar, işlem yönetimi, bakiye ve istatistik geliştirmesini yönetti; asenkron durum, oturum kalıcılığı, API istemcileri, form doğrulama ve grafik raporlama üzerinde çalıştı. Önceki yedi kişilik ekip bilgisi kullanıcının güncel CV bilgisiyle düzeltildi.

### Cinemania

Beş kişilik ekipte Team Lead. HTML, CSS, JavaScript, REST API, Vite ve TMDB. Ekip geliştirme sürecini yönetti; TMDB ile film keşfi, sayfalama, film detay penceresi, duyarlı arayüz, haftanın trendleri ve performans iyileştirmelerine katkı sağladı. Sayısal iyileşme iddiası sağlanmadı.

## Tasarım kararları

- Kullanıcının seçtiği koyu lacivert (#000d15, #05172f) ana zeminler; arduvaz (#2d3c4c), antrasit (#2f2f2b) ve gri (#525453) yardımcı yüzeyler; sıcak kırık beyaz metin ve şampanya vurgular.
- Tipografinin öne çıktığı giriş, geniş boşluklar, ince ayırıcılar ve büyük ekranda kontrollü asimetri.
- Fontsource üzerinden yerel Manrope ve Cormorant Garamond; en fazla iki yazı tipi ailesi ve Türkçe karakter desteği.
- Proje kartlarında kullanıcının sağladığı ekran görüntüleri gösterilir; görseli bulunmayan projelerde tipografik kapak kullanılabilir.
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
- Vite MPA yapısında üç gerçek HTML girişi ve standart sayfa bağlantıları vardır. Ek router, backend, veritabanı, üyelik veya yönetim paneli yoktur.
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

## 23 Eylül 2026 — Görünenin arkasında iskeleti

- Anasayfada Hero ile proje önizlemeleri arasına `ScrollStory` bağlantısı eklendi. `storyScenes` boş; kullanıcı ilk sahneyi sağlamadan ziyaretçiye bölüm, boşluk veya geçici içerik gösterilmez. Dört sahnenin kesin metinleri/görselleri üretilmedi.
- Tekrar kullanılabilir `StoryScene`, ayrı CSS Module ve doğal kaydırma konumuna bağlı hareket altyapısı hazırlandı. Yeni bağımlılık yok. Reduced motion ve kısa ekranlarda normal içerik akışı kullanılır. Arapça metin yönü korunur.
- Görseller `public/images/story/` altında tutulacak; `01-first-look.webp` ve devam eden sıra önerildi. Sahne varlıkları merkezi portfolyo verisinde, başlık/açıklama/alt metinler altı dilin `story.scenes` alanında yönetilir. Çalışma başlığı altı dile eklendi.
- Build, lint ve typecheck başarılı. Altı dil × masaüstü/mobil toplam 12 tarayıcı senaryosunda boş bölüm/görsel isteği, yatay taşma veya JS hatası yok. Gerçek sahne hareketi ve okunma süresi, ilk görsel/metin geldikten sonra ayarlanıp doğrulanacak.
- Uygulama ve dosya adlandırma notları: `docs/scroll-story.md`. Kökteki kullanıcı dosyası `ilk-bakis.png` değiştirilmedi ve kullanılmadı. Sıradaki adım ilk sahnenin görseli, kesin başlığı ve açıklamasını almak.

## 23 Eylül 2026 — İlk anlatım sahnesi

- Kullanıcının “İlk izlenim tesadüf değildir.” başlığı ve verdiği açıklama Türkçede aynen kullanıldı; İngilizce, İspanyolca, Arapça, Rusça ve Almanca çevirileri eklendi. Diğer üç sahne eklenmedi.
- `ilk-bakis.png` özgün dosyası korunarak `public/images/story/01-first-look.png` yoluna kopyalandı; 1672 × 941 px görsel kırpılmadan, lazy yükleme ve gerçek boyutlarla kullanılır. Görsel içine yazı eklenmedi.
- İlk sahne anasayfada giriş ve projeler arasındadır. Görsel bekler, yukarı kayıp küçülerek solar; başlık/açıklama sakin bir aralıkta görünür. Yukarı kaydırma aynı hareketi geri sarar. Mobilde görsel ve metin tek merkezlenmiş grup oluşturur; kısa ekran/reduced motion normal akışı kullanır.
- Build, lint ve typecheck başarılı. İlk masaüstü/mobil ekran görüntüleri incelendi; mobil boşluk revize edildi. İkinci sahne için kullanıcı görseli ve kesin metin bekleniyor.
- Son düzenlemede altı dil ve dört ekran ölçüsünde 92 kontrol geçti: görsel yüklenmesi, tek sahne, ileri/geri hareket, metinlerin ekrana sığması, reduced-motion geçişi ve Türkçe/Arapça axe taramaları. JS hatası veya taşma yok. Son mobil ekran görüntüsü incelendi. Yerel rapor `.verification/first-scene-report.json`.

## 23 Eylül 2026 — Kısa pencerelerde kaydırma düzeltmesi

- Kullanıcı sahnenin sabit kaldığını bildirdi. Hook ve CSS içindeki 740 px yükseklik koşulunun kısa masaüstü pencerelerinde de hareketi kapattığı tespit edilip kaldırıldı. Yalnızca sistemin reduced-motion tercihi statik görünümü etkinleştirir.
- Kısa masaüstü penceresinde boşluklar ve yazı boyutları uyarlandı; yatay telefon için iki sütunlu sahne eklendi.
- Build, lint ve typecheck geçti. 1366×650, 1280×720, 390×667, 320×568 ve 844×390 ölçülerinde altı dilde 130 kontrol başarılı. 1366×650 pencerede gerçek mouse wheel ile ölçek 1 → 0,85 → 0,55, opaklık 1 → 0 ve geri kaydırmada önceki konuma dönüş doğrulandı. Ekran görüntüsü incelendi. Rapor: `.verification/first-scene-short-report.json`.

## 23 Eylül 2026 — Hareket tercihi için açık kontrol

- Kullanıcı 5173 adresinde hâlâ sabit görünüm bildirdi. Aynı geliştirme adresinde ayrı Chrome oturumunda gerçek kaydırma çalışıyor; kullanıcının açık sekmesine bağlı tarayıcı erişimi olmadığı için kişisel sekmesindeki neden kesinleştirilemedi. Windows MinAnimate=0 iken test Chrome'u reduced-motion=false raporluyor; bu nedenle sistem ayarı tek başına kesin neden sayılmadı.
- Bölüm başlığının altına altı dilde kaydırma efektini aç/kapat düğmesi eklendi. İlk açılış sistemin reduced-motion tercihine uyar; ziyaretçinin açık seçimi yalnızca bu bölümü etkinleştirebilir. React durumu hem CSS hem hareket hook'unun tek kaynağı oldu; ayrı CSS medya koşulunun kullanıcı seçimini engellemesi önlendi. Seçim sistem ayarlarını değiştirmez ve sayfa yenilenince sıfırlanır.
- Build, lint ve typecheck geçti. Kullanıcının 5173 adresinde masaüstü/mobil ve reduce/no-preference kombinasyonlarında varsayılan tercih, düğmeyle etkinleştirme, gerçek wheel kaydırması ve durdurma doğrulandı. Yerel betik: `.verification/motion-control.mjs`.

## 23 Eylül 2026 — İkinci anlatım sahnesi

- Kökte bulunan `ilk-dokunus.png`, kaynak korunarak `public/images/story/02-first-touch.png` yoluna kopyalandı (1672 × 941 px). İlk sahnenin ardından `first-touch` olarak eklendi.
- Kullanıcının “Karmaşıklığı kullanıcıya bırakmam.” başlığı ve açıklaması Türkçede aynen kullanıldı; diğer beş dilin çevirileri ve görsel alt metinleri eklendi. İstenen şekilde mevcut hareket yapısı korundu; detay revizesi yapılmadı.
- Build, lint ve typecheck başarılı. 5173 geliştirme adresinde altı dil × masaüstü/mobil toplam 12 senaryoda iki sahne sırası, görsel yüklenmesi, metin görünürlüğü, ekrana sığma ve taşma kontrolleri geçti. Mobil ekran görüntüsü incelendi. Üçüncü sahnenin kesin metni bekleniyor.

## 23 Eylül 2026 — Üçüncü anlatım sahnesi

- `perdenin-arkasi.png` kaynak dosyası korunarak `public/images/story/03-behind-scenes.png` yoluna kopyalandı (1672 × 941 px); üçüncü sırada `behind-scenes` olarak eklendi.
- Kullanıcının “Görünenin arkasında bir sistem var.” başlığı ve açıklaması Türkçede aynen kullanıldı. Beş dilde çeviriler ve altı dilde görsel alt metinleri eklendi. Mevcut hareket yapısı korundu; dördüncü sahne eklenmedi.
- Build, lint ve typecheck başarılı. 5173 adresinde altı dil × masaüstü/mobil için 12 senaryoda üç sahne, görsel yüklenmesi, metin görünürlüğü, ekrana sığma ve taşma kontrolleri geçti. Mobil ekran görüntüsü incelendi. Dördüncü sahnenin görseli ve kesin metni bekleniyor.

## 23 Eylül 2026 — Dördüncü sahne ve ışık izi

- `sahadan-yazilima-alternatif.png`, özgün dosya korunarak `public/images/story/04-my-perspective.png` yoluna kopyalandı (1672 × 941 px). Kullanıcının başlık ve açıklaması aynen Türkçe kullanıldı; beş dilin çevirileri ve altı dilde alt metin eklendi. Dört sahne tamamlandı.
- Altın ışık kıvrımlarına göre özgün görsel koordinatlarında `lightTrail` SVG yolu çizildi. `TrailImage` bileşeni görsel ve SVG'yi aynı kapsayıcıya bağlar; contain/meet merkezleme ile küçülme ve responsive boyut değişikliklerinde yol hizası korunur. Kaynak resme nokta veya yazı işlenmedi.
- Parlak çekirdek ve hafif altın parıltı, mevcut kaydırma ilerlemesinin %4–60 aralığında yolun uzunluğu boyunca hareket eder; zamanlayıcı/sonsuz döngü yok. Yukarı kaydırma aynı yolu geri sarar. Reduced-motion etkinse (bölüm elle açılmış olsa bile) nokta gizlenir. Önceki üç sahnenin hareket hesapları korunur.
- Build, lint ve typecheck başarılı. Beş ekran ölçüsünde SVG/görsel koordinat eşleşmesi, ileri/geri hareket, sabit kaydırmada durma, reduced-motion ve sahne sayısı dahil 35 kontrol geçti. Altı dil × masaüstü/mobil için ek 12 okunabilirlik/görsel kontrolü geçti. Yolun görsele oturuşu geçici kontrol çizgisiyle, son masaüstü/mobil görünüm ekran görüntüleriyle incelendi. Yerel rapor: `.verification/trail-report.json`.

## 23 Eylül 2026 — İlk sahne kompozisyonu

- Yalnızca ilk sahnede masaüstü başlık/açıklama solda, görsel sağda konumlandırıldı. Mobilde metin sola hizalı ve görselin üstündedir; Arapça metin kendi RTL yönünü korur.
- Görselin sert köşeleri kaldırıldı; yatay/dikey CSS maskeleriyle dört kenar sayfa zeminine yumuşakça karıştırıldı. Özgün resim dosyası ve diğer üç sahnenin yerleşimi değiştirilmedi.
- Build, lint ve typecheck başarılı. Altı dil × masaüstü/mobil için 12 okunabilirlik ve taşma kontrolü geçti; Türkçe masaüstü/mobil ekran görüntüleri incelendi.

## 23 Eylül 2026 — Dört sahnede canlı görsel ve ortak yerleşim

- İlk sahnenin kenar maskesi %16–20'lik alan yerine dış %6 ile sınırlandı; görsellerde doygunluk %12, parlaklık %6 artırıldı. Özgün dosyalar değiştirilmedi.
- Solda metin/sağda görsel ve mobilde metin üstte düzeni dört sahneye yayıldı. Yumuşak kenarlar tüm görsellere uygulandı. Dördüncü sahnede görsel ve SVG ortak kapsayıcıda maskelenir.
- Build, lint ve typecheck geçti. Dört sahne × altı dil × masaüstü/mobil için 48 yerleşim/okunabilirlik kontrolü ve ışık noktasının beş ekran ölçüsünde 35 hizalama/hareket kontrolü başarılı. Masaüstü görselleri incelendi.

## 23 Eylül 2026 — Hakkımda kaldırılması ve başlık numaraları

- Kullanıcının isteğiyle Hakkımda sayfası, anasayfadaki kısa hakkımda alanı, header/footer bağlantıları, About/Toolkit bileşenleri ve ilgili HTML derleme girişi kaldırıldı. Site Anasayfa, Projelerim ve İletişim olarak üç sayfadır. Dört sahneli anlatım korunur.
- Altı dilde küçük bölüm başlıklarının sayı ve eğik çizgi önekleri kaldırıldı. Proje kartlarının kendilerine ait numaraları bu isteğin kapsamında değiştirilmedi.
- Build, lint ve typecheck başarılı. Eski Hakkımda üretim dosyası temizlendi ve yeni derlemede bulunmadığı doğrulandı. Üç sayfa × altı dil × masaüstü/mobil toplam 36 tarayıcı senaryosunda üç menü bağlantısı, Hakkımda alanlarının yokluğu, numarasız bölüm başlıkları ve yatay taşma kontrolü geçti.

## 23 Eylül 2026 — Dördüncü sahne metin güncellemesi

- Kullanıcının onayladığı “İyi bir çözüm, doğru soruyla başlar.” başlığı ve kod yazmadan önce problemi anlamayı, gereksiz adımları azaltmayı anlatan açıklama dördüncü sahneye eklendi. Altı dilde karşılıkları güncellendi.
- Görsel, ışık noktası ve kaydırma davranışı korundu. Bölüm dokümantasyonu güncellendi.
- Build, lint ve typecheck başarılı. Altı dil × masaüstü/mobil toplam 12 tarayıcı senaryosunda metinlerin sığması, görünürlüğü ve yatay taşma kontrolleri geçti.

## 23 Eylül 2026 — Proje kartı görselleri

- Kökteki `task-pro.jpeg`, `money-guard-tablet.jpeg` ve `Cinemania.jpeg` dosyaları `public/images/projects/` klasörüne kopyalanıp ilgili projelerin merkezi `image` alanlarına bağlandı. Anasayfa ve Projelerim kartlarında görünür; özgün dosyalar korunur.
- Gerçek görsel ölçüleri kullanıldı. Mevcut `object-fit: contain` ile ekran görüntüleri kırpılmadan gösterilir; lazy loading korunur.
- Build, lint ve typecheck geçti. İki sayfa × mobil/masaüstü dört tarayıcı kontrolünde üç görselin yüklenmesi ve yatay taşma olmaması doğrulandı.

## 23 Eylül 2026 — Header logosu ve menü etkileşimi

- `logo_yk.png`, `public/images/` klasörüne kopyalanıp header logosu olarak eklendi. Logo ve menünün sabit şampanya arka planları kaldırıldı.
- Menü bağlantılarında hover/klavye odağında %10 opak şampanya zemin, basılıyken `scale(0.94)` eklendi. Aktif sayfa metni şampanya renginde; azaltılmış hareket tercihinde geçişler kapalıdır.
- Build, lint ve typecheck başarılı. Mobil/masaüstünde logo yüklenmesi, şeffaf menü, hover rengi, basma ölçeği ve yatay taşma kontrol edildi.

## 23 Eylül 2026 — Proje görsellerinin yenilenmesi

- Kullanıcının yenilediği `Cinemania.jpeg` ve `money-guard-tablet.jpeg` dosyaları yayınlanan görsel klasörüne aktarıldı. Money Guard ölçüleri 1800 × 1125 olarak güncellendi; Cinemania 1800 × 2654 ölçülerindedir.
- Kaynak ve hedef dosyaların SHA-256 değerleri eşleşiyor. Build, lint ve typecheck geçti.

## 23 Eylül 2026 — Anasayfa butonları

- Anasayfadaki pozisyonlara açıklık yazısı ve keşfetmeye devam et bağlantısı kaldırıldı.
- İki ana bağlantı ovalleştirildi; proje bağlantısının okuna hover/odak hareketi eklendi. Basıldığında proje bağlantısı soluk mavi, iletişim bağlantısı soluk şampanya olur ve %4 küçülür.
- Sayfa başına dön bağlantısı ince çerçeveli oval yüzey, yukarı hareket eden ok ve basma efektiyle yenilendi.
- Build, lint ve typecheck geçti. Mobil/masaüstünde kaldırılan öğeler, basma renkleri/ölçekleri, oval köşeler, yatay taşma ve sayfa başına dönüş kontrol edildi.

## 23 Eylül 2026 — Görselli hero

- `background-hero.png` anasayfada tam genişlikte hero görseli olarak eklendi; yüksek yükleme önceliği verildi. Yasin Kara başlığı solda gerçek HTML metni olarak, şampanya tonları ve katmanlı gölgelerle derinlik hissi kazanır.
- Rol, açıklama ve mevcut butonlar sol kompozisyona alındı. Mobil kadraj ve koyu geçişler okunabilirliğe göre ayarlandı; alt kenar bölüm zeminine yumuşakça geçer.
- Build, lint ve typecheck geçti. Mobil/masaüstünde görsel yüklenmesi ve yatay taşma kontrol edildi; ekran görüntüleri incelendi.

## 23 Eylül 2026 — Seçili proje kartları

- Dört sahnenin ardından gelen anasayfa projeler bölümü tam genişlikte, hero görselinden örneklenen `#03152b` mavi zeminle düzenlendi.
- Üç kartın tamamına oval çerçeve, hafif koyu yüzey ve gölge eklendi. Hover destekli cihazlarda kart bütünü 8 px yükselip `scale(1.025)` ile büyür; reduced-motion tercihinde bu hareket kapalıdır.
- Build, lint ve typecheck geçti. Mobil/masaüstü ölçülerinde üç kart, hover dönüşümü, yatay taşma ve reduced-motion kontrol edildi.

## 23 Eylül 2026 — Canlı proje bağlantıları

- Kullanıcının verdiği TaskPro (`https://goit-react-nodejs-taskpro-1.onrender.com/`), Money Guard (`https://money-guard-client.vercel.app/login`) ve Cinemania (`https://yasin-kr.github.io/cinemania/`) adresleri merkezi veriye eklendi.
- Projelerim sayfasında her proje için mevcut altı dilli “Siteyi ziyaret et” metnini kullanan oval buton gösterilir. Proje adını içeren başlık/erişilebilir etiket ve güvenli yeni sekme bağlantısı eklendi.
- Build, lint ve typecheck geçti; üç butonun adres ve başlıkları tarayıcıda doğrulandı. Harici sitelerin çalışma durumu test edilmedi.

## 23 Eylül 2026 — CV bilgilerine göre proje içerikleri

- Üç projenin teknoloji listeleri ve iki maddelik katkıları kullanıcının verdiği CV bilgileriyle güncellendi. İngilizce merkezi veri ve diğer beş dilin çevirileri eşleştirildi. Money Guard altı, Cinemania beş kişilik ekip olarak düzeltildi.
- Mevcut kart tasarımı, yerel details/summary açılır alanları ve canlı bağlantılar korundu. TaskPro'nun katkı alanı da içerik sağlandığı için görünür oldu.
- Build, lint ve typecheck geçti. Altı dil × iki ekran ölçüsünde 12 senaryoda katkı alanları açıldı; teknoloji/madde sayıları, metin ve sayfa taşması, canlı bağlantıların değişmemesi doğrulandı.

## 23 Eylül 2026 — Ayırıcılar ve kart basma etkisi

- Header menüsünün alt çizgi efekti, header alt kenarı ve footer üst ayırıcısı kaldırıldı.
- Cinemania görseli kullanıcının `cinemania-image.png` dosyasıyla değiştirildi (1824 × 920); her iki sayfa merkezi görsel verisini kullanır.
- Anasayfa kartlarının bütün yüzeyi mevcut proje bağlantısına bağlandı. Hover sırasında yükselen kart basılıyken hafif küçülür, bırakıldığında hover konumuna döner; reduced-motion tercihi korunur.
- Build, lint ve typecheck geçti. Mobil/masaüstünde yeni görsel yüklenmesi, kenarların kaldırılması, hover/basma dönüşümleri ve yatay taşma kontrol edildi.

## 23 Eylül 2026 — Proje sıra numaraları

- Projelerim sayfasında proje bilgilerinin üzerindeki /01, /02 ve /03 kaldırıldı. Build, lint ve typecheck geçti.

## 23 Eylül 2026 — İletişim çağrısı

- İletişim bölümündeki durum yazısı “İletişim için bana yazın” olarak değiştirildi ve başındaki dekoratif nokta kaldırıldı. Altı dil güncellendi; build, lint ve typecheck geçti.

## 23 Eylül 2026 — İletişim formu

- İletişim sayfasında Başa dön bağlantısı kaldırıldı; diğer sayfalarda korunur. Koyu yüzey, ince şampanya çerçeve, serif başlık ve oval butonla ad/e-posta/konu/mesaj formu eklendi.
- Kullanıcının verdiği `theyasin@icloud.com` merkezi iletişim verisine eklendi. Form HTML doğrulamasından sonra mesajı mailto ile e-posta uygulamasında açar; doğrudan sunucu üzerinden gönderim yapmaz ve bu davranış formda açıklanır. Yeni servis veya bağımlılık eklenmedi.
- Altı dil tamamlandı. Build, lint ve typecheck geçti. Altı dil × mobil/masaüstü 12 senaryoda zorunlu alan doğrulaması, taşma ve Başa dön bağlantısının yokluğu kontrol edildi. Mobil ekran görüntüsü incelendi; gerçek e-posta gönderilmedi.

## 23 Eylül 2026 — Kart hover düzeltmesi ve görsel bağlantıları

- Kart hover/focus durumu medya koşulundan çıkarıldı; 12 px yükselme ve `scale(1.035)` uygulanır. Reduced-motion durumunda global kural geçişi kapatır, son hover görünümü anında uygulanır. Basma görünümü korunur.
- Projelerim sayfasındaki üç proje görseli ilgili canlı siteye `_blank` ve `noopener noreferrer` ile bağlandı.
- Build, lint ve typecheck geçti. Normal/reduced-motion durumlarında hover dönüşümü ve üç görsel bağlantısının adres/hedef özellikleri tarayıcıda doğrulandı.

## 23 Eylül 2026 — İletişim metni ve form taslağı

- İletişim açıklaması proje, iş birliği ve fikir paylaşımına odaklanan metinle altı dilde yenilendi. Görünen e-posta bağlantısı kaldırıldı.
- Formda Ad-Soyad/Gönder etiketleri kullanıldı; e-posta uygulaması açıklaması ve mailto gönderim davranışı kaldırıldı. Kullanıcı backend'i daha sonra ekleyeceği için Gönder şimdilik devre dışıdır; sahte başarı mesajı gösterilmez.
- Build, lint ve typecheck geçti. Form gönderim servisini bağlamak sonraki iştir.

## 23 Eylül 2026 — Anasayfa metin üslubu

- Dört sahnenin metni birinci tekil şahıs anlatımından çıkarılıp görsel dil, anlaşılır arayüz, uygulama sistemi ve ihtiyaç tanımına odaklandı. İkinci başlık “Karmaşık süreçler, anlaşılır arayüzler.” olarak yenilendi.
- Hero açıklaması “React, TypeScript ve Node.js ile tasarımın işlevsellikle buluştuğu web uygulamaları.”; alt slogan “Net tasarım. Tutarlı deneyim.” oldu. Altı dil güncellendi; hero sloganındaki mühendislik vurgusu kaldırıldı.
- Build, lint ve typecheck geçti.
- Dört sahne × altı dil × mobil/masaüstü toplam 48 yerleşim kontrolü geçti; metinlerde taşma saptanmadı.

## 23 Eylül 2026 — Proje görsel etkileşimleri

- Projelerim sayfasındaki görsel bağlantıları yuvarlatılmış köşe, ince çerçeve ve hafif gölgeyle düzenlendi. Görsel hover/odakta %5,5 büyür; kapsayıcının overflow sınırı dışarı taşmayı önler. Basıldığında ölçek azalır ve hafif kararır.
- Canlı site bağlantıları korunur. Build, lint ve typecheck geçti; üç görselde mobil/masaüstü hover, basma, kırpma ve yatay taşma kontrolleri başarılı.

## 23 Eylül 2026 — Tarafsız metin dili ve görsel sınırları

- Altı dilde kişisel anlatım kaldırıldı. Projelerim/Katkılarım başlıkları Projeler/Projeye katkılar olarak değişti; katkılar yapılan işi tanımlayan kısa maddelere dönüştü. İletişim, form başlığı ve kullanılmayan profil metinleri de tarafsızlaştırıldı.
- Projeler sayfasındaki görsel bağlantılarının görünür dış çerçevesi, zemini ve gölgesi kaldırıldı. Sabit en-boy oranı yerine görselin doğal oranı kullanılır; yumuşak köşe ve kutu içinde yakınlaşma korunur.
- Build, lint ve typecheck geçti. Üç sayfa × altı dil × mobil/masaüstü 36 senaryoda taşma ve proje görsel sınırlarının gerçek resim yüksekliğiyle eşleşmesi doğrulandı.

## 23 Eylül 2026 — Açık/koyu tema

- Header'a cam efektli güneş/ay anahtarı eklendi. Klavye ile kullanılabilen switch ve altı dilli erişilebilir etiket içerir; reduced-motion tercihi gözetilir.
- Varsayılan koyu tema korunur. Açık tema kırık beyaz/açık mavi yüzeyler, lacivert metin ve koyu altın vurgular kullanır. Hero görselinin koyu kompozisyonu kendi okunabilir renkleriyle korunur; proje kartları ve form açık temaya uyarlanır.
- Tercih `yasin-kara-theme` localStorage anahtarında tutulur; üç sayfa arasında ve yenilemede korunur. Depolama erişimi yoksa mevcut sekmede çalışır.
- Build, lint ve typecheck geçti. 320/390/768/1366 px genişliklerde üç sayfa, tema kalıcılığı, klavye geçişi ve yatay taşma/header çakışması kontrol edildi. Mobil açık tema ekran görüntüsü incelendi.

## 23 Eylül 2026 — Kompakt tema anahtarı

- Tema anahtarı referansa uygun 62 × 32 px boyutuna küçültüldü. Koyu/açık cam yüzey, turuncu ışıklı düğme ve SVG ay/güneş ikonları kullanıldı.
- İki yönde 520 ms yumuşak geçiş ve uçta hafif taşarak geri oturan easing eklendi; reduced-motion durumunda geçiş kapalıdır. Dil seçiciyle arasına mevcut ayırıcıyla aynı renkte ince çizgi eklendi.
- Build, lint ve typecheck geçti. 320/390/1366 px genişliklerde iki yönlü geçiş, boyut, ayırıcı ve yatay taşma kontrol edildi.

## 23 Eylül 2026 — Mobil menü ve açık tema okunabilirliği

- Mobil hamburger ekranın yatay merkezine alındı; metin etiketi görsel olarak gizlenirken erişilebilir adı korundu. Çok dar ekranlarda dil bayrağı gizlenerek dil kodu ve tema anahtarı için alan bırakılır.
- Açık temada teknoloji listesi ve iletişim açıklaması koyu lacivert yapıldı. Canlı site butonuna belirgin metin, çerçeve ve açık mavi yüzey uygulandı.
- Build, lint ve typecheck geçti. 320/390/600/1366 px ekranlarda ortalama, kontrol çakışmaları, renkler ve taşma kontrol edildi.

## 23 Eylül 2026 — Toggle kayma düzeltmesi

- Kullanıcının açık isteğiyle tema anahtarının dairesi iki yönde 600 ms yumuşak geçiş ve hafif esnemeyle kayar. Global reduced-motion kuralının bu küçük kontrolü tamamen durdurması yerine, yalnızca bu kontrol için esnemesiz 180 ms geçiş uygulanır; diğer hareket tercihleri değişmez.
- Build, lint ve typecheck geçti. Normal/reduced-motion modlarında iki yönün ara konumları ve son konumları tarayıcıda doğrulandı.

## 23 Eylül 2026 — Varsayılan kaydırma anlatımı

- Kaydırma efektini aç/kapat butonu ve elle seçim durumu kaldırıldı. Dört sahne normal kullanımda varsayılan hareketlidir; sistemin reduced-motion tercihi sabit görünümü etkinleştirir.
- Build, lint ve typecheck geçti. Normal ve reduced-motion tarayıcı bağlamlarında butonun yokluğu ve dört sahnenin ilgili hareket durumu doğrulandı.

## 23 Eylül 2026 — Yayın öncesi temizlik

- Boş About klasörü, npm önbelleği, geçici doğrulama klasörü, gereksiz `.gitkeep` ve eski yayın Cinemania görseli temizlendi. Artık görünmeyen kaydırma kontrolünün stilleri/çevirileri ve eski mailto açıklama alanları kaldırıldı.
- README ve kaydırmalı anlatım belgesi güncellendi. Kullanılan kaynak kodu, görseller ve bağımlılıklar korundu.
- Build, lint ve typecheck başarılı. Üç sayfa ve tüm görseller mobil/masaüstünde doğrulandı. Ham kök görsellerinin silinmesi otomatik onay incelemesinde reddedildi; ayrı kullanıcı onayı bekleniyor ve bu dosyalar commit kapsamına alınmıyor.

## 23 Eylül 2026 — Vercel hazırlığı

- Vite, npm ci, npm run build ve dist ayarları `vercel.json` içinde tanımlandı. Üç HTML girişini korumak için SPA rewrite eklenmedi; adreslerde trailing slash kullanılır.
- Yerel Vercel bağlantısı/CLI ve bağlı Vercel hesabı bulunmadığından gerçek yayın henüz başlatılmadı. GitHub reposunun Vercel panelinden içe aktarılması gerekir. Form gönderimi backend bağlanana kadar pasiftir.

## İletişim başlığı düzeltmesi

- Türkçe form başlığı “Mesaj oluşturun” olarak noktasız güncellendi. Typecheck geçti; bu noktalama değişikliği için build/lint yeniden çalıştırılmadı.
- Kullanıcı backend kurulumunu yarına erteledi; gönderim pasif kalır.

## Kullanıcıdan beklenen içerikler

1. GitHub ve LinkedIn profil adresleri; iletişim e-postası `theyasin@icloud.com` olarak eklendi.
2. Paylaşılacak gerçek CV dosyası veya erişilebilir bağlantısı.
3. Üç proje için repository adresleri; canlı site adresleri eklendi.
4. Varsa proje ekran görüntülerinin sonraki revizeleri ve tercih edilen görsel sıralaması; üç projenin ilk görselleri eklendi.
5. Varsa proje bilgilerindeki sonraki güncellemeler; üç projenin teknoloji ve katkıları CV bilgilerine göre tamamlandı.
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
