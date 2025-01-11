import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    cart: [],
    searchQuery: '',
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
  },
});
