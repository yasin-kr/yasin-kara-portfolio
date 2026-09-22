# Çalışma kuralları

- Başlamadan önce `PROJECT_BRIEF.md` ve mevcut kodu okuyun; mevcut çalışmayı koruyun.
- Varsayılan site dili İngilizcedir; İngilizce, Türkçe, İspanyolca, Arapça, Rusça ve Almanca desteklenir. Kullanıcıyla iletişim ve proje notları Türkçedir.
- Yasin Kara ana kimliktir. Doğrulanmamış kişisel bilgi, teknoloji, katkı, bağlantı veya başarı metriği eklemeyin.
- Ortak profil/proje bilgilerini `src/data/portfolio.ts`, çevrilebilir metinleri `src/i18n/locales/` üzerinden yönetin. Yeni metinleri altı dile ekleyin. Eksik alanları ziyaretçiye TODO veya işlevsiz buton olarak göstermeyin.
- Dil seçimini `yasin-kara-language` localStorage anahtarında saklayın. Arapçada sayfa düzenini LTR tutun; yalnızca metin bloklarını RTL yapın. YK ve proje/teknoloji adlarını çevirmeyin.
- React + TypeScript + Vite ve CSS Modules yapısını koruyun. Gereksiz bağımlılık, router veya backend eklemeyin.
- Dört HTML girişli çok sayfalı yapıyı koruyun: `/`, `/projects/`, `/about/`, `/contact/`. Sayfa yolları `src/data/pages.ts` içindedir. Yayında tüm adresleri anasayfaya yönlendiren SPA rewrite kullanmayın.
- Antrasit, kırık beyaz ve şampanya renklerini; geniş boşlukları ve ölçülü tipografiyi koruyun. Gerçek görsel yokken tipografik proje kapakları kullanın.
- Semantik HTML, klavye erişimi, görünür odak ve azaltılmış hareket tercihini gözetin. Mobil ve masaüstünde taşma ile okunabilirliği kontrol edin.
- Değişikliğe uygun build, lint ve typecheck kontrollerini çalıştırın; çalıştırılmayan kontrolü başarılı diye raporlamayın.
- Tamamlanan işleri, kontrol sonuçlarını ve kalan içerikleri `PROJECT_BRIEF.md` içine güncelleyin. Yapay Git etkinliği veya anlamsız commit üretmeyin.
