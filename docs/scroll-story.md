# Kaydırmalı anlatım

Anasayfada hero ile proje önizlemeleri arasındaki dört sahne, `ScrollStory` ve tekrar kullanılabilir `StoryScene` bileşenlerinden oluşur.

## İçerik ve görseller

- Görseller `public/images/story/` altında tutulur. Kökte ikinci kopya bulundurulmaz.
- Sıra: `01-first-look.png`, `02-first-touch.png`, `03-behind-scenes.png`, `04-my-perspective.png`.
- Görsel yolları ve gerçek boyutları `src/data/portfolio.ts` içindedir.
- Başlık, açıklama ve alt metinler `src/i18n/locales/` üzerinden altı dilde yönetilir. Yazılar gerçek HTML metnidir.
- Arapçada yalnızca metin blokları RTL olur; sayfa düzeni değişmez.

## Hareket

Kaydırma hareketi varsayılan olarak açıktır; aç/kapat butonu yoktur. `prefers-reduced-motion: reduce` etkinse sahneler sabit ve okunabilir gösterilir.

`useSceneProgress`, görünür sahnede kaydırma konumundan ilerleme hesaplar. Görsel önce sabit kalır, ardından küçülerek yukarı çekilir ve solar. Yukarı kaydırma hareketi geri sarar. Sürekli zamanlayıcı kullanılmaz.

Masaüstünde metin solda, görsel sağdadır; mobilde metin üsttedir. Dış kenarlardaki maske görseli bölüm zeminine yedirir.

## Dördüncü sahnenin ışık noktası

`TrailImage`, 1672 × 941 kaynak görselle aynı kapsayıcıda bir SVG katmanı kullanır. `portfolio.ts` içindeki `lightTrail` yolu altın ışık izini takip eder. Nokta `getPointAtLength` ile kaydırma ilerlemesine bağlı hareket eder; kaydırma durunca durur. Reduced-motion durumunda gizlenir.

Görsel veya kadraj değişirse SVG yolu yeniden kontrol edilmelidir. Görsel ve SVG aynı en-boy oranı ve merkezlemeyi kullanmalıdır.
