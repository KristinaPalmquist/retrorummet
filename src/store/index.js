import { defineStore } from 'pinia';
// import { useI18n } from 'vue-i18n';

export const useStore = defineStore('main', {
  state: () => ({
    cart: [],
    searchQuery: '',
    language: 'sv',
  }),
  getters: {
    getSearchQuery: (state) => state.searchQuery,
  },
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
    },
    resetSearchQuery() {
      this.searchQuery = '';
    },
    setLanguage(language,locale) {
      this.language = language;
      // const { locale } = useI18n();
      locale.value = language;
    },
  },
});
