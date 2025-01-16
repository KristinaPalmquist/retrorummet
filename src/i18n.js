import { createI18n } from 'vue-i18n';

const messages = {
  sv: {
    companyName: 'RetroRummet',
    phone: '0123 456 789',
    // Routes
    routes: {
      home: 'Hem',
      about: 'Om oss',
      contact: 'Kontakt',
      categories: 'Kategorier',
      products: 'Produkter',
    },
    // Views
    home: {
      header: 'Välkommen till {companyName}',
      hero: {
        text1: 'Upptäck en skattkammare av vintage- och second-hand-möbler.',
        text2: 'Vi är glada att ha dig här!',
      },
      introduction: {
        header: 'Om oss',
        text: 'På {companyName} brinner vi för en hållbart livsstil. Vår kurerade samling av vintage möbler erbjuder unika stilar och tidlösa pjäser som du inte hittar någon annanstans.',
      },
      features: {
        header: 'Våra Funktioner',
        items: [
          {
            title: 'Kuraterat Urval',
            text: 'Varje artikel är noggrant utvald för att säkerställa kvalitet och stil.',
          },
          {
            title: 'Hållbart Liv',
            text: 'Genom att välja second-hand gör du en positiv inverkan på miljön.',
          },
          {
            title: 'Unika Stilar',
            text: 'Vår kollektion innehåller ett brett utbud av stilar för att passa alla smaker. Oavsett om du föredrar mid-century modern, industriell eller bohemisk stil, har vi något för alla.',
          },
        ],
      },
      categories: {
        header: 'Välj bland våra kategorier',
      },
    },
    about: {
      header: 'Om oss',
      introduction: {
        text: {
          welcome:
            'Välkommen till {companyName}, din bästa plats för att hitta  unika och tidlösa möbler för ett hem med själ. Vi främjar hållbarhet genom att ge möbler nytt liv. och erbjuder dig möbler med historia.',
          online:
            'Under åren har vi utökat vårt sortiment och våra tjänster, vilket har nått miljömedvetna kunder över hela världen. Vi bedriver vår verksamhet uteslutande online, utan fysisk butik, vilket säkerställer att vår verksamhet är så miljövänlig som möjligt.',
          how: 'Så här fungerar vår webbplats: Titta igenom vårt sortiment och hitta en produkt som du gillar. På varje produktsida finns ett formulär som du kan använda för att kontakta oss med frågor eller kommentarer. Detta formulär hjälper oss att koppla din fråga eller kommentar till rätt produkt, vilket säkerställer en smidig och effektiv kommunikationsprocess.',
        },
      },
      content: {
        header: 'Vårt team',
        text: 'Vårt team består av engagerade personer som arbetar tillsammans för att göra heminredning mer hållbar. Alla spelar en viktig roll, från att hjälpa kunder till att hitta de bästa produkterna.',
      },
      values: {
        header: 'Våra värderingar',
        satisfaction: {
          header: 'Kundnöjdhet',
          text: 'Vi prioriterar våra kunders behov och strävar efter att överträffa deras förväntningar vid varje köp.',
        },
        sustainability: {
          header: 'Hållbarhet',
          text: 'Vi är engagerade i att minska avfall genom att främja återanvändning och återvinning av möbler och dekorationer.',
        },
        integrity: {
          header: 'Integritet',
          text: 'Vi bedriver vår verksamhet med ärlighet och transparens, och bygger förtroende med våra kunder och partners.',
        },
      },
    },
    categoriesView: {
      header: 'Kategorier',
    },
    footer: {
      bottom: '© {currentYear} {companyName}. Alla rättigheter förbehållna.',
      about: {
        header: 'Om oss',
        text: 'Vi är ett företag dedikerat till att tillhandahålla de bästa produkterna och tjänsterna till våra kunder.',
      },
      links: {
        header: 'Snabblänkar',
      },
      contact: {
        header: 'Kontakta oss',
        text1: 'E-post',
        text2: 'Telefon',
      },
      social: {
        header: 'Följ oss',
      },
    },
    notFound: {
      header: 'Sidan hittades inte!',
      text: 'Tyvärr, sidan du letar efter finns inte. Om du har klickat på en länk kan sidan ha tagits bort sedan länken skapades.',
      back: 'Gå tillbaka till startsidan',
      products: 'Se alla produkter',
    },
    // Components
    search: {
      placeholder: 'Sök produkter',
    },
    // Data
    categories: {
      chair: 'Stolar',
      table: 'Bord',
      storage: 'Förvaring',
      light: 'Belysning',
      decor: 'Dekoration',
    },
  },
  en: {
    // Facts
    companyName: 'RetroRoom',
    phone: '+46 123 456 789',
    // Routes
    routes: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      categories: 'Categories',
      products: 'Products',
    },
    // Views
    home: {
      header: 'Welcome to {companyName}',
      hero: {
        text1:
          'Discover a treasure trove of vintage and second-hand furniture.',
        text2: 'We are delighted to have you here!',
      },
      introduction: {
        header: 'About us',
        text: "At {companyName }, we are passionate about sustainable living.Our curated collection of pre-loved furniture offers unique styles and timeless pieces that you won't find anywhere else.",
      },
      features: {
        header: 'Our Features',
        items: [
          {
            title: 'Curated Selection',
            text: 'Each item is carefully selected to ensure quality and style.',
          },
          {
            title: 'Sustainable Living',
            text: "By choosing second-hand, you're making a positive impact on the environment.",
          },
          {
            title: 'Unique Styles',
            text: 'Our collection features a wide range of styles to suit every taste. Whether you prefer mid-century modern, industrial, or bohemian, we have something for everyone.',
          },
        ],
      },
      categories: {
        header: 'Browse our categories',
      },
    },
    about: {
      header: 'About us',
      introduction: {
        text: {
          welcome:
            'Welcome to {companyName}, your go-to destination for preowned furniture and decorations. Our mission is to promote sustainable living by offering a curated selection of unique and timeless pieces.',
          online:
            'Over the years, we have expanded our collection and services, reaching eco-conscious customers worldwide. We operate exclusively online, with no physical showroom, ensuring that our operations are as eco-friendly as possible.',
          how: "Here's how our site works: Browse through our collection and find an item that you like. Each item page has a form that you can use to contact us with any questions or comments. This form helps us know which item your question or comment is linked to, ensuring a smooth and efficient communication process.",
        },
      },
      content: {
        header: 'Our team',
        text: 'Our team is composed of dedicated professionals who are passionate about sustainable living. From our customer service representatives to our product curators, everyone plays a crucial role in our mission to make home decor more sustainable.',
      },
      values: {
        header: 'Our values',
        satisfaction: {
          header: 'Customer Satisfaction',
          text: "We prioritize our customers' needs and strive to exceed their expectations with every purchase.",
        },
        sustainability: {
          header: 'Sustainability',
          text: 'We are committed to reducing waste by promoting the reuse and recycling of furniture and decorations.',
        },
        integrity: {
          header: 'Integrity',
          text: 'We conduct our business with honesty and transparency, building trust with our customers and partners.',
        },
      },
    },
    categoriesView: {
      header: 'Shop by Category',
    },
    footer: {
      about: {
        header: 'About us',
        text: 'We are a company dedicated to providing the best products and services to our customers.',
      },
      links: {
        header: 'Quick Links',
      },
      contact: {
        header: 'Contact us',
        text1: 'Email',
        text2: 'Phone',
      },
      social: {
        header: 'Follow us',
      },
      bottom: '© {currentYear} {companyName}. All rights reserved.',
    },
    notFound: {
      header: 'Page not found!',
      text: 'Sorry, the page you are looking for does not exist. If you clicked on a link, the page may have been removed since the link was created.',
      back: 'Go back to the start page',
      products: 'See all products',
    },
    // Components
    search: {
      placeholder: 'Search products',
    },

    // Data
    categories: {
      chair: 'Chairs',
      table: 'Tables',
      storage: 'Storage',
      light: 'Lighting',
      decor: 'Decoration',
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'sv',
  fallbackLocale: 'en',
  messages,
});
export default i18n;
