# Yasin Kara Portfolio

Yasin Kara'nın projelerini, teknik çalışmalarını ve mühendislikten yazılıma geçişini sunan, altı dil destekli dört sayfalık geliştirici portfolyosu. Varsayılan dil İngilizcedir.

## Kurulum ve çalıştırma

Node.js ve npm kurulu bir ortamda proje kökünden çalıştırın. Vite sürümünün Node.js gereksinimini `package.json` üzerinden kontrol edin.

```sh
npm install
npm run dev
```

Terminalde gösterilen yerel adresi tarayıcıda açın. Geliştirme sunucusunu durdurmak için `Ctrl+C` kullanın.

Varsayılan önizleme adresi `http://127.0.0.1:5173/` olur. Windows PowerShell, `npm.ps1` için yürütme ilkesi hatası verirse aynı komutları `npm.cmd` ile çalıştırın; örneğin `npm.cmd run dev`. Sistem yürütme ilkesini değiştirmeniz gerekmez. Kilitli paket sürümleriyle temiz kurulum için `npm ci` kullanabilirsiniz.

## Üretim ve kontroller

```sh
npm run build
npm run lint
npm run typecheck
npm run preview
```

`build`, dağıtıma hazır dosyaları `dist/` altında oluşturur. `preview`, son üretim çıktısını yerel ortamda sunar; önce build çalıştırılmalıdır. Kontrollerin gerçek çalıştırma sonuçları `PROJECT_BRIEF.md` içinde tutulur.

## Teknoloji ve tasarım

- React, TypeScript ve Vite; CSS Modules.
- Koyu lacivert zemin (#000d15, #05172f), arduvaz/antrasit/gri yardımcı yüzeyler (#2d3c4c, #2f2f2b, #525453), kırık beyaz yazı ve şampanya vurgular.
- Fontsource paketlerinden yerel sunulan Manrope ve Cormorant Garamond yazı tipleri; Türkçe karakter desteği.
- Vite çok sayfalı yapı (MPA): dört gerçek HTML girişi, ortak React bileşenleri ve standart sayfa bağlantıları. Ek router, backend veya mesaj gönderme servisi yoktur.

## Sayfalar ve yayınlama

| Sayfa | Adres | İçerik |
| --- | --- | --- |
| Anasayfa | `/` | Tanıtım, üç proje önizlemesi, kısa hakkında özeti |
| Projelerim | `/projects/` | Proje kapakları, roller, teknolojiler, kişisel katkılar |
| Hakkımda | `/about/` | Mühendislikten yazılıma geçiş, eğitim, ekip deneyimi, teknik araçlar |
| İletişim | `/contact/` | İletişim daveti ve sağlandığında gerçek bağlantılar |

Sayfa adresleri `src/data/pages.ts`, sayfa bileşenleri `src/pages/` içinde bulunur. Her HTML girişindeki `data-page`, gösterilecek sayfayı belirler. Header ve footer ortak kullanılır; aktif sayfa `aria-current="page"` ile belirtilir. Dil seçimi aynı origin üzerindeki tüm sayfalarda localStorage üzerinden korunur.

`npm run build` çıktısı `dist/index.html`, `dist/projects/index.html`, `dist/about/index.html` ve `dist/contact/index.html` dosyalarını içerir. Statik yayın ortamına **dist klasörünün tamamını** yükleyin; URL kökünden yayınlayın ve dizinler için `index.html` sunumunu etkin tutun. Tüm adresleri anasayfaya yönlendiren SPA rewrite kuralı eklemeyin. Gerçek HTML dosyaları sayesinde sayfa yenileme ve doğrudan bağlantılar sunucu tarafında özel router gerektirmez. Alt klasör altında yayınlanacaksa Vite `base` ve `pagePaths` değerleri birlikte uyarlanmalıdır.

Üretim önizlemesi: `npm.cmd run preview` → `http://127.0.0.1:4173/`.

## İçeriği düzenleme

Profil, proje ve teknoloji verilerinin merkezi `src/data/portfolio.ts` dosyasıdır:

- `profile`: isim, unvan, tanıtım, hakkında metinleri ve eğitim. Konum bilgisi yayımlanmaz.
- `profile.contact`: isteğe bağlı `email`, `github`, `linkedin` ve `cv` alanları.
- `projects`: doğrulanmış roller, açıklamalar, katkılar ve teknolojiler.
- `toolkit`: Frontend, Backend ve Tools grupları.
- Sayfa yolları `src/data/pages.ts`; gezinme etiketleri altı dilin çeviri dosyalarındadır.

## Dil desteği

Sağ üstteki bayraklı menüden İngilizce, Türkçe, İspanyolca, Arapça, Rusça veya Almanca seçilebilir. İlk ziyarette tarayıcı dilinden bağımsız olarak İngilizce açılır. Seçim `yasin-kara-language` localStorage anahtarında saklanır ve yenilemede korunur. Kayıt geçersizse İngilizceye dönülür; depolama engelliyse seçim yalnızca geçerli sayfada korunur.

- `src/i18n/locales/en.ts`, ortak İngilizce profil ve proje içeriklerini `src/data/portfolio.ts` dosyasından alır.
- Diğer dillerin profil, proje ve arayüz çevirileri `src/i18n/locales/{tr,es,ar,ru,de}.ts` dosyalarındadır. İçerik değişikliklerinde tüm dil dosyalarını güncelleyin.
- `src/i18n/types.ts`, her dilde gereken alanları tanımlar; `{name}` yer tutucusunu koruyun.
- `LanguageProvider`, seçimi, çevrilmiş içerikleri, HTML `lang` bilgisini ve sayfa başlığı/açıklamasını yönetir. Görünür gezinme etiketleri çeviri dosyalarındadır.
- Arapçada genel düzen ve sütun sırası LTR kalır; yalnızca metin blokları RTL olur. Arapça metinlerde sistemin Tahoma/Arial desteği, Rusça editoryal başlıklarda yerel Kiril fontları kullanılır.
- Bayraklar yerel SVG dosyalarıdır: İngilizce için Birleşik Krallık, Türkçe için Türkiye, İspanyolca için İspanya, Arapça için BAE, Rusça için Rusya, Almanca için Almanya. Seçenekler dilin kendi adıyla da gösterilir.
- Dil menüsü ok tuşları, Home/End, Enter/Space, Tab ve Escape ile kullanılabilir; dışarı tıklayınca kapanır.

Header logosu `YK` monogramıdır. Menüde sıra numarası yoktur; Anasayfa, Projelerim, Hakkımda ve İletişim bağlantıları seçilen dilde gösterilir. Header üstte sabit kalır; logoda yalnızca renk, sayfa bağlantılarında soldan sağa alt çizgi hover efekti bulunur.

## Bağlantı ve görselleri ekleme

İletişim alanları gerçek bilgi sağlanana kadar boş bırakılmıştır. E-posta adresini düz metin olarak, sosyal bağlantıları geçerli tam HTTPS adresleriyle girin. CV için gerçek bir dosya yolu veya erişilebilir HTTPS adresi kullanın. Yerel dosya `public/` altında tutulabilir; örneğin gerçek dosya eklendiğinde `/yasin-kara-cv.pdf`.

Projeler için `repositoryUrl` ve `liveUrl` isteğe bağlıdır. Yalnızca gerçek, geçerli adresleri ekleyin. Bir alanın bulunmaması bağlantının gösterilmemesini sağlar; `#` gibi işlevsiz adresler kullanmayın.

`src/utils/links.ts`, bağlantı biçimlerini doğrular. Sosyal ve proje bağlantıları tam HTTP/HTTPS adresi olmalıdır. CV için HTTP/HTTPS adresi veya `/yasin-kara-cv.pdf` gibi `.pdf`, `.doc`, `.docx` uzantılı kökten başlayan yerel yol kabul edilir. Bu kontrol, uzak adresin erişilebilirliğini veya dosyanın varlığını sınamaz; gerçek içeriği eklerken bağlantıyı tarayıcıda kontrol edin.

Gerçek ekran görüntüleri sağlandığında dosyayı `public/` altına ekleyip ilgili projeye `image: { src, alt, width, height }` tanımlayın. `width` ve `height` görselin gerçek piksel boyutları olmalı; `alt` görünen içeriği kısa ve anlamlı biçimde açıklamalıdır. Büyük görselleri web için sıkıştırın. Görsel yokken gösterilen tipografik kapaklar, proje ekran görüntüsü değildir.

`cover` alanı kapağın görsel düzenini, `coverTitle` alanı tipografik kapaktaki bir veya iki metin parçasını belirler. Projenin adını değiştirirken `coverTitle` metnini de güncelleyin. `coverTitle` verilmezse kapakta `name` gösterilir. `image` eklendiğinde tipografik kapak otomatik olarak gerçek görselle değiştirilir; görsel gecikmeli yüklenir ve kırpılmadan gösterilir.

Renk, boşluk ve tipografi değerlerini stil dosyasındaki CSS değişkenlerinden düzenleyin. Statik sayfa başlığı/açıklaması her sayfanın HTML girişindedir; seçilen dildeki metadata `LanguageProvider` tarafından güncellenir. Gerçek alan adı sağlanmadan canonical veya sosyal paylaşım URL'si eklemeyin.

## Stil yapısı

React bileşenleri `src/App.module.css` dosyasını `styles` nesnesi olarak içe aktarır. Sınıf adları Vite tarafından yerelleştirilir; koşullu menü, ok ve proje kapağı sınıfları da bu nesneden seçilir. Ortak bileşenler, sayfa düzenleri ve dil uyarlamaları aynı modülde tutularak mevcut stil önceliği korunur. Tasarım değişkenleri, HTML sıfırlamaları ve temel tipografi belge genelinde geçerlidir. Sayfa içi bağlantı kimlikleri sabittir; CSS içindeki `#work-title` seçicisi açıkça `:global(...)` kullanır. Ek stil bağımlılığı yoktur.

## Kodun yapısı

```text
src/
  App.tsx              # Ortak sayfa düzeni ve HTML girişine göre sayfa seçimi
  main.tsx             # React ve yerel fontların başlangıcı
  components/          # Header, Hero, SelectedWork, About, Toolkit, Contact, Footer
  data/portfolio.ts    # Düzenlenebilir profil ve proje içeriği
  data/pages.ts        # Sayfa adresleri ve mevcut HTML girişinin kimliği
  pages/               # Dört sayfa bileşeni ve sayfa düzenleri
  i18n/                # Altı dilin çevirileri ve dil bağlamı
  utils/links.ts       # İsteğe bağlı bağlantıların biçim kontrolü
  App.module.css       # Yerel stil sınıfları, tasarım değişkenleri ve responsive kurallar
public/favicon.svg     # YK site simgesi
index.html             # Anasayfa girişi
projects/index.html    # Projelerim girişi
about/index.html       # Hakkımda girişi
contact/index.html     # İletişim girişi
```

Mobil menü yerel bir düğmeyle açılır; `Escape` ile kapanır ve odak düğmeye döner. Money Guard ve Cinemania katkıları, tarayıcının yerel `details` / `summary` bileşeniyle açılır. Klavye için görünür odak, içeriğe atlama bağlantısı ve azaltılmış hareket tercihi desteklenir.

## İçerik sınırları

TaskPro'nun yalnızca Full Stack Developer rolü doğrulanmıştır; işlevleri, teknoloji yığını ve kişisel katkıları bilinmiyor. Eksik bilgileri projenin isminden çıkarmayın. Ziyaretçiye TODO metni, sahte istatistik, tamamlanmamış bağlantı veya sahte mesaj formu göstermeyin.

Yeni çalışmadan önce `AGENTS.md` ve `PROJECT_BRIEF.md` dosyalarını okuyun. Eksik bağlantılar, görseller ve sonraki adımlar proje notunda listelenmiştir.
