import { createI18n } from 'vue-i18n';

const messages = {
  sv: {
    companyName: 'RetroRummet',
    home: {
      header: 'Välkommen till {companyName}! ',
      hero: 'Upptäck en skattkammare av vintage- och second-hand-möbler. Vi är glada att ha dig här.',
    },
  },
  en: {
    companyName: 'RetroRoom',
    home: {
      header: 'Welcome to {companyName}!',
      hero: 'Discover a treasure trove of vintage and second-hand furniture. We are delighted to have you here.',
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
