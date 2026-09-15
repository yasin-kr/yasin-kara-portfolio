# Yasin Kara Portfolio — Proje notu

## Amaç

İş başvurularında ve profesyonel profillerde paylaşılacak, özenli ve anlaşılır bir İngilizce geliştirici portfolyosu. Tek sayfa; Work, About, Technical Toolkit ve Contact bölümleri. Kullanıcıyla iletişim Türkçe.

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

## Uygulama ve kontrol durumu

Bu bölüm, ana uygulama tamamlandıktan sonra gerçek sonuçlarla güncellenecek. Henüz doğrulanmış build, lint, typecheck veya tarayıcı kontrol sonucu kaydedilmedi.

## Kullanıcıdan beklenen içerikler

1. İletişim e-posta adresi; GitHub ve LinkedIn profil adresleri.
2. Paylaşılacak gerçek CV dosyası veya erişilebilir bağlantısı.
3. Üç proje için repository ve canlı site adresleri.
4. Projelerin gerçek ekran görüntüleri ve varsa tercih edilen görsel sıralaması.
5. TaskPro'nun doğrulanmış işlevleri, kullanılan teknolojileri ve Yasin'in kişisel katkıları.
6. Yayın için gerçek alan adı; sosyal paylaşım görseli isteniyorsa kullanılacak içerik.

Eksik içerikler ilk tasarımın geliştirilmesini engellemez. Yaş, maaş, özel hayat, kullanıcı sayısı, gelir, müşteri logosu, referans veya uydurma başarı iddiası eklenmez.

## Sıradaki işler

- Uygulamanın çalışan ilk sürümünü tamamlamak ve masaüstü/mobil görünümünü incelemek.
- Build, lint ve typecheck sonuçlarını bu dosyaya kaydetmek.
- Kullanıcının tasarım revizesini değerlendirmek.
- Gerçek bağlantı ve ekran görüntülerini sağlandıkça merkezi veriye eklemek; erişilebilirlik ve yükleme davranışını yeniden kontrol etmek.
- Gerçek alan adı ve yayın ortamı belli olduğunda ilgili metadata ve dağıtım ayarlarını tamamlamak.

## Anlamlı commit mesajı önerileri

- `feat: build Yasin Kara developer portfolio`
- `content: add verified project links and screenshots`
- `refine: improve portfolio layout from design feedback`

Mesajlar yalnızca ilgili gerçek geliştirme aşaması tamamlandığında kullanılmalıdır; yapay commit üretilmez.
