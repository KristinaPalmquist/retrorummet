<script setup>
import { ref, watch } from 'vue';
import { useDebounce } from '@vueuse/core';
import { useStore } from '@/store';
import { useI18n } from 'vue-i18n';


const store = useStore();
const localSearchQuery = ref(store.getSearchQuery);
const debouncedSearchQuery = useDebounce(localSearchQuery, 300);
const { t} = useI18n();

watch(debouncedSearchQuery, (newQuery) => {
  store.setSearchQuery(newQuery);
});

watch(
  () => store.getSearchQuery,
  (newQuery) => {
    localSearchQuery.value = newQuery;
  }
);
</script>

<template>
  <div id="search-bar">
    <input
      class="input-field"
      type="text"
      name="search"
      v-model="localSearchQuery"
      :placeholder= "t('search.placeholder')"
    />
  </div>
</template>

<style scoped>
#search-bar {
  background: transparent;
}

#search-bar .input-field {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: none;
  color: var(--color-text);
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
}


@media only screen and (max-width: 600px) {
  #search-bar .input-field {
    background: var(--color-background);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  }
}

</style>
