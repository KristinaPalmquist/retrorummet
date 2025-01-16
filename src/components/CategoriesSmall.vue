<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import CategoryCardSmall from '@/components/CategoryCardSmall.vue';
import { useI18n } from 'vue-i18n';
import categoriesData from '@/assets/data/categories.json';

const { t } = useI18n();
const router = useRouter();
const categories = ref(categoriesData);

const originalCategories = ref([]);
const categoriesRow = ref(null);

// const fetchCategories = async () => {
//   try {
//     const module = await import('../assets/data/categories.json');
//     originalCategories.value = module.default;
//     categories.value = [...originalCategories.value];
//   } catch (error) {
//     console.error('Error loading categories: ', error);
//   }
// };

const navigateToCategory = (name) => {
  let categoryName = name.replace(/ /g, '-').toLowerCase();
  router.push({
    name: 'CategoryProducts',
    params: { categoryName },
  });
};

const refillCategories = () => {
  categories.value = [...categories.value, ...categories.value];
};

const handleScroll = () => {
  const scrollLeft = categoriesRow.value.scrollLeft;
  const scrollWidth = categoriesRow.value.scrollWidth;
  const clientWidth = categoriesRow.value.clientWidth;

  if (scrollLeft + clientWidth >= scrollWidth / 2) {
    refillCategories();
  }
};

onMounted(async () => {
  // await fetchCategories();
  await nextTick(); // Ensure the DOM is updated before adding the event listener
  if (categoriesRow.value) {
    categoriesRow.value.addEventListener('scroll', handleScroll);
  }
});

const scrollPrev = () => {
  if (categoriesRow.value) {
    categoriesRow.value.scrollBy({ left: -200, behavior: 'smooth' });
    handleScroll();
  }
};

const scrollNext = () => {
  if (categoriesRow.value) {
    categoriesRow.value.scrollBy({ left: 200, behavior: 'smooth' });
    handleScroll();
  }
};
</script>

<template>
  <div id="categories-small">
    <button class="scroll-button prev" @click="scrollPrev">‹</button>
    <div class="fade-left"></div>
    <div class="categories-row" ref="categoriesRow">
      <div class="categories-container">
        <CategoryCardSmall
          v-for="category in [...categories, ...categories]"
          :key="category.name + Math.random()"
          :category="category"
          @click="navigateToCategory(category.name)"
        />
      </div>
    </div>
    <div class="fade-right"></div>
    <button class="scroll-button next" @click="scrollNext">›</button>
  </div>
</template>

<style scoped>
#categories-small {
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 1rem 0;
}
.categories-row {
  position: relative;
  height: calc(238px * 1.05);
  display: flex;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  white-space: nowrap;
  flex: 1;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.categories-row::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.categories-container {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
}

.categories-container > * {
  flex: 0 0 auto;
  max-width: 200px;
}

.scroll-button {
  background-color: transparent;
  color: var(--color-text);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 7rem;
  font-weight: 200;
  z-index: 1;
}

.scroll-button.prev {
  position: absolute;
  left: 0;
  z-index: 2;
}

.scroll-button.next {
  position: absolute;
  right: 0;
  z-index: 2;
}

.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15vw;
  z-index: 1;
  pointer-events: none;
}

.fade-left {
  left: 0;
  background: linear-gradient(
    to right,
    var(--gradient-start),
    var(--gradient-end)
  );
}

.fade-right {
  right: 0;
  background: linear-gradient(
    to left,
    var(--gradient-start),
    var(--gradient-end)
  );
}
</style>
