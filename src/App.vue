<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

const router = useRouter();
const store = useStore();
const mainElement = ref(null);
const headerHeight = ref(0);
const isMobile = ref(false);
const isOpen = ref(false);

const updateMainPadding = (height) => {
  headerHeight.value = height;
  if (isOpen.value) {
    mainElement.value.style.paddingTop = '0';
  } else
  if (mainElement.value && !isOpen.value) {
    mainElement.value.style.paddingTop = `${headerHeight.value}px`;
  } 
};

onMounted(() => {
  mainElement.value = document.querySelector('main');
  if (isOpen.value) {
    mainElement.value.style.paddingTop = '0';
  } else
  if (mainElement.value && !isOpen.value) {
    mainElement.value.style.paddingTop = `${headerHeight.value}px`;
  } 
  isMobile.value = window.matchMedia('(max-width: 768px)').matches;
});

watchEffect(() => {
  if (store.getSearchQuery !== '') {
    router.push({
      name: 'Products',
      query: { search: store.getSearchQuery },
    });
  }
  if (isOpen.value) {
    mainElement.value.style.paddingTop = '0';
  } else
  if (mainElement.value && !isOpen.value) {
    mainElement.value.style.paddingTop = `${headerHeight.value}px`;
  } 
});
</script>

<template>
  <MainHeader
    @header-height="updateMainPadding"
    @update:searchQuery="store.setSearchQuery($event)"
    @update:isOpen="isOpen = $event"
  />
  <main>
    <router-view
      :search-query="store.searchQuery"
      @productClicked="store.resetSearchQuery()"
    ></router-view>
  </main>
  <MainFooter />
</template>

<style scoped>
main {
  min-height: 50vh;
}
</style>
