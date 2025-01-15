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
    // Components
    search: {
      placeholder: 'Sök produkter',
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
    // Components
    search: {
      placeholder: 'Search products',
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
