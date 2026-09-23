import type { Translation } from "../types";

const tr: Translation = {
  theme: { lightMode: "Açık tema" },
  contactForm: {
  "title": "Mesaj oluşturun",
  "name": "Ad-Soyad",
  "email": "E-posta adresiniz",
  "subject": "Konu",
  "message": "Mesajınız",
  "send": "Gönder"
},
  story: {
    title: "Görünenin arkasında",
    scenes: {
      "my-perspective": {
        title: "İyi bir çözüm, doğru soruyla başlar.",
        description: "Etkili bir ürünün temeli, ihtiyacın doğru tanımlanmasıdır. Gereksiz adımların azaltılması ve süreçlerin sadeleştirilmesi, tasarım ve geliştirme kararlarına yön verir.",
        imageAlt:
          "Koyu bir labirentin içinden kıvrılarak geçen altın ışık izi, sağ üstteki düzenli bağlantı yapısına ulaşıyor.",
      },
      "behind-scenes": {
        title: "Görünenin arkasında bir sistem var.",
        description: "Her etkileşimin arkasında veri akışı, uygulama mantığı ve birbirine bağlı bileşenler yer alır. Bu parçaların uyumu, görsel tasarımı çalışan bir ürüne dönüştürür.",
        imageAlt:
          "Koyu mavi zeminde ışıklı veri yolları, şeffaf katmanlardan geçerek bir arayüz panelinde birleşiyor.",
      },
      "first-touch": {
        title: "Karmaşık süreçler, anlaşılır arayüzler.",
        description: "Açık bir bilgi düzeni ve tutarlı etkileşimler, kullanıcıya yol gösterir. Aranan içeriğe ulaşmak ve bir sonraki adımı anlamak, deneyimin doğal bir parçasıdır.",
        imageAlt:
          "Açık zemin üzerinde düzenli mavi arayüz kartları ve yanlarında geometrik parçalar.",
      },
      "first-look": {
        title: "İlk izlenim tesadüf değildir.",
        description: "Renk, ışık ve boşluk; arayüzün karakterini daha ilk bakışta belirler. Dengeli bir görsel dil, içeriği öne çıkarır ve deneyime bütünlük kazandırır.",
        imageAlt:
          "Koyu lacivert bir mekânda mavi ve altın ışıkla aydınlanan cam ve metal yüzeyler.",
      },
    },
  },
  profile: {
    role: "Full Stack Geliştirici",
    intro: "React, TypeScript ve Node.js ile tasarımın işlevsellikle buluştuğu web uygulamaları.",
    availability: "İletişim",
    contactIntro: "Proje ve iş birliği talepleri için iletişim formu üzerinden mesaj iletilebilir.",
    about: ["Proje geliştirme deneyimi."],
    education: {
      name: "GoIT Full Stack Developer",
      completed: "14 Ağustos 2026",
    },
  },
  projects: {
  "taskpro": {
    "role": "Full Stack Geliştirici",
    "summary": "Full Stack geliştirme kapsamında tamamlanan bir ekip projesi.",
    "contributions": ["Board ve column oluşturma, görüntüleme, güncelleme ve silme akışları; dashboard bileşenlerinin backend API entegrasyonu.","Dashboard ve kart entegrasyonu, etiket bazlı filtreleme, tema değiştirme ve görev çalışma alanlarının kalıcılığı."]
  },
  "money-guard": {
    "role": "Ekip Lideri",
    "summary": "Altı kişilik bir ekiple geliştirilen React ve Redux projesi.",
    "contributions": ["Finans paneli, kimlik doğrulama, korumalı rotalar, işlem yönetimi, bakiye ve istatistik geliştirmesinin koordinasyonu.","Asenkron durum yönetimi, oturum kalıcılığı, yeniden kullanılabilir API istemcileri, form doğrulama ve grafiklerle raporlama."]
  },
  "cinemania": {
    "role": "Ekip Lideri",
    "summary": "Beş kişilik bir ekiple geliştirilen JavaScript ve TMDB projesi.",
    "contributions": ["Ekip geliştirme sürecinin koordinasyonu; TMDB ile film keşfi, sayfalama, film detay penceresi ve duyarlı arayüz.","Haftanın trendleri bölümü, arayüz ve performans iyileştirmelerine katkı."]
  }
},
  navigation: { work: "Projeler", about: "Profil", contact: "İletişim" },
  pages: {
    allProjects: "Tüm projeleri incele",
    viewProject: "Projeyi incele",
    readAbout: "Projeye katkılar",
    teamworkIndex: "EKİP İÇİNDE ÇALIŞMA",
    teamworkTitle: ["Birlikte üretmek", "Sorumluluk almak"],
    teamworkIntro:
      "Proje geliştirme deneyimi.",
  },
  toolkit: {
    frontend: "Ön Yüz",
    backend: "Arka Uç",
    tools: "Araçlar",
    responsiveDesign: "Duyarlı tasarım",
  },
  ui: {
    skipToContent: "İçeriğe atla",
    home: "Ana sayfa",
    menu: "Menü",
    close: "Kapat",
    mainNavigation: "Ana gezinme",
    footerNavigation: "Alt bilgi gezinmesi",
    selectLanguage: "Dil seçin",
    heroEyebrow: "Bir geliştiricinin bakış açısı",
    viewWork: "Seçili projeleri incele",
    getInTouch: "İletişime geç",
    heroFootnote: "Net tasarım. Tutarlı deneyim.",
    exploreBelow: "Keşfetmeye devam et",
    workIndex: "PROJELER",
    workTitle: ["Seçili", "projeler"],
    workNote: "Farklı projeler. Üreterek öğrenmeye duyulan ortak bağlılık.",
    coverSelectedWork: "YK / SEÇİLİ PROJELER",
    projectCover: "PROJE KAPAĞI",
    coverDescription: "{name} için tipografik proje kapağı",
    projectTechnologies: "{name} projesinde kullanılan teknolojiler",
    contribution: "Projeye katkılar",
    liveSite: "Siteyi ziyaret et",
    aboutIndex: "Profil bilgileri",
    aboutTitle: ["Farklı bir yol", "Aynı merak"],
    aboutCaption: "MÜHENDİSLİKTEN → YAZILIMA",
    storyLead:
      "Operasyonları koordine etmekten web’in parçalarını bir araya getirmeye.",
    nextChapter: "YENİ BİR SAYFA",
    toolkitIndex: "TEKNOLOJİLER",
    toolkitTitle: ["Teknik", "beceriler"],
    toolkitNote:
      "Proje geliştirme deneyimi.",
    contactIndex: "SIRADA NE VAR?",
    contactTitle: ["İletişim","ve iş birliği"],
    viewCv: "Özgeçmişi görüntüle",
    backToTop: "Başa dön",
    metaDescription:
      "Yasin Kara bir Full Stack Geliştirici. React, TypeScript ve Node.js ile özenle düşünülmüş web deneyimleri geliştiriyor. Seçili projelerini ve mühendislik geçmişini keşfedin.",
  },
};

export default tr;
