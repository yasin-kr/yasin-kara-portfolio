# Yasin Kara Portfolio

Yasin Kara'nın projelerini, teknik çalışmalarını ve mühendislikten yazılıma geçişini sunan İngilizce, tek sayfalık geliştirici portfolyosu.

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

- React, TypeScript ve Vite; sade CSS.
- Koyu antrasit zemin, sıcak kırık beyaz yazı ve ölçülü şampanya vurgular.
- Fontsource paketlerinden yerel sunulan Manrope ve Cormorant Garamond yazı tipleri; Türkçe karakter desteği.
- Router, backend veya mesaj gönderme servisi gerektirmeyen tek sayfa.

## İçeriği düzenleme

Profil, proje, teknoloji ve gezinme verilerinin merkezi `src/data/portfolio.ts` dosyasıdır:

- `profile`: isim, unvan, tanıtım, konum, hakkında metinleri ve eğitim.
- `profile.contact`: isteğe bağlı `email`, `github`, `linkedin` ve `cv` alanları.
- `projects`: doğrulanmış roller, açıklamalar, katkılar ve teknolojiler.
- `toolkit`: Frontend, Backend ve Tools grupları.
- `navigation`: bölüm bağlantıları.

İletişim alanları gerçek bilgi sağlanana kadar boş bırakılmıştır. E-posta adresini düz metin olarak, sosyal bağlantıları geçerli tam HTTPS adresleriyle girin. CV için gerçek bir dosya yolu veya erişilebilir HTTPS adresi kullanın. Yerel dosya `public/` altında tutulabilir; örneğin gerçek dosya eklendiğinde `/yasin-kara-cv.pdf`.

Projeler için `repositoryUrl` ve `liveUrl` isteğe bağlıdır. Yalnızca gerçek, geçerli adresleri ekleyin. Bir alanın bulunmaması bağlantının gösterilmemesini sağlar; `#` gibi işlevsiz adresler kullanmayın.

`src/utils/links.ts`, bağlantı biçimlerini doğrular. Sosyal ve proje bağlantıları tam HTTP/HTTPS adresi olmalıdır. CV için HTTP/HTTPS adresi veya `/yasin-kara-cv.pdf` gibi `.pdf`, `.doc`, `.docx` uzantılı kökten başlayan yerel yol kabul edilir. Bu kontrol, uzak adresin erişilebilirliğini veya dosyanın varlığını sınamaz; gerçek içeriği eklerken bağlantıyı tarayıcıda kontrol edin.

Gerçek ekran görüntüleri sağlandığında dosyayı `public/` altına ekleyip ilgili projeye `image: { src, alt, width, height }` tanımlayın. `width` ve `height` görselin gerçek piksel boyutları olmalı; `alt` görünen içeriği kısa ve anlamlı biçimde açıklamalıdır. Büyük görselleri web için sıkıştırın. Görsel yokken gösterilen tipografik kapaklar, proje ekran görüntüsü değildir.

`cover` alanı kapağın görsel düzenini, `coverTitle` alanı tipografik kapaktaki bir veya iki metin parçasını belirler. Projenin adını değiştirirken `coverTitle` metnini de güncelleyin. `coverTitle` verilmezse kapakta `name` gösterilir. `image` eklendiğinde tipografik kapak otomatik olarak gerçek görselle değiştirilir; görsel gecikmeli yüklenir ve kırpılmadan gösterilir.

Renk, boşluk ve tipografi değerlerini stil dosyasındaki CSS değişkenlerinden düzenleyin. Sayfa başlığı ve açıklaması `index.html` içindedir. Gerçek alan adı sağlanmadan canonical veya sosyal paylaşım URL'si eklemeyin.

## Kodun yapısı

```text
src/
  App.tsx              # Sayfanın bölüm sırası
  main.tsx             # React ve yerel fontların başlangıcı
  components/          # Header, Hero, SelectedWork, About, Toolkit, Contact, Footer
  data/portfolio.ts    # Düzenlenebilir profil ve proje içeriği
  utils/links.ts       # İsteğe bağlı bağlantıların biçim kontrolü
  styles.css           # Tasarım değişkenleri, bölümler, responsive kurallar
public/favicon.svg     # YK site simgesi
```

Mobil menü yerel bir düğmeyle açılır; `Escape` ile kapanır ve odak düğmeye döner. Money Guard ve Cinemania katkıları, tarayıcının yerel `details` / `summary` bileşeniyle açılır. Klavye için görünür odak, içeriğe atlama bağlantısı ve azaltılmış hareket tercihi desteklenir.

## İçerik sınırları

TaskPro'nun yalnızca Full Stack Developer rolü doğrulanmıştır; işlevleri, teknoloji yığını ve kişisel katkıları bilinmiyor. Eksik bilgileri projenin isminden çıkarmayın. Ziyaretçiye TODO metni, sahte istatistik, tamamlanmamış bağlantı veya sahte mesaj formu göstermeyin.

Yeni çalışmadan önce `AGENTS.md` ve `PROJECT_BRIEF.md` dosyalarını okuyun. Eksik bağlantılar, görseller ve sonraki adımlar proje notunda listelenmiştir.
