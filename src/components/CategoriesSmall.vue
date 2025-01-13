<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import CategoryCardSmall from '@/components/CategoryCardSmall.vue';

const router = useRouter();

const categories = ref([]);
const originalCategories = ref([]);
const categoriesRow = ref(null);
// const categoriesRow = ref(null);
// const isMobile = ref(false);

const fetchCategories = async () => {
  try {
    const module = await import('../assets/data/categories.json');
    originalCategories.value = module.default;
    categories.value = [...originalCategories.value];
  } catch (error) {
    console.error('Error loading categories: ', error);
  }
};

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
  await fetchCategories();
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

// const handleScroll = () => {
//   if (isMobile.value) return;

//   // i want there to be endless scrolling sideways if not on mobile device
//   const container = categoriesRow.value;
//   if (container) {
//     const maxScrollLeft = container.scrollWidth - container.clientWidth;
//     if (container.scrollLeft <= 0) {
//       container.scrollLeft = maxScrollLeft / 2 - container.clientWidth;
//     } else if (container.scrollLeft >= maxScrollLeft) {
//       container.scrollLeft = maxScrollLeft / 2 - container.clientWidth;
//     }
//   }
// };

// const checkScreenSize = () => {
//   isMobile.value = window.matchMedia('(max-width: 600px)').matches;
// };

// const checkIfMobile = () => {
//   isMobile.value = window.innerWidth <= 600;
// };

// onMounted(() => {
//   fetchCategories();
//   // checkIfMobile();
//   // window.addEventListener('resize', checkIfMobile);
//   checkScreenSize();
//   window.addEventListener('resize', checkScreenSize);

//   const container = categoriesRow.value;
//   if (container && !isMobile.value) {
//     container.scrollLeft = container.scrollWidth / 2 - container.clientWidth;
//     container.addEventListener('scroll', handleScroll);
//   }
// });

// watch(isMobile, (newValue) => {
//   if (newValue) {
//     // Loop through categories once on mobile
//     categories.value = categories.value.slice(0, categories.value.length);
//   } else {
//     // Loop through categories endlessly on larger screens
//     categories.value = [...categories.value, ...categories.value];
//   }
// });

// watch(categories, () => {
//   const container = categoriesRow.value;
//   if (container && !isMobile.value) {
//     container.scrollLeft = container.scrollWidth / 2 - container.clientWidth;
//   }
// });
</script>

<template>
  <div id="categories-small">
    <button class="scroll-button prev" @click="scrollPrev">‹</button>
    <div class="fade-left"></div>
    <div class="categories-row" ref="categoriesRow">
      <!-- <div class="fade-left"></div> -->
      <div class="categories-container">
        <CategoryCardSmall
          v-for="category in [...categories, ...categories]"
          :key="category.name + Math.random()"
          :category="category"
          @click="navigateToCategory(category.name)"
        />
      </div>
      <!-- <div class="fade-right"></div> -->
    </div>
    <div class="fade-right"></div>
    <button class="scroll-button next" @click="scrollNext">›</button>
  </div>
</template>

<style scoped>
#categories-small {
  /* height: max-content; */
  position: relative;
  /* width: 100vw; */
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 1rem 0;
}
.categories-row {
  position: relative;
  /* width: 100vw; */
  height: calc(213.99px * 1.05);
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
  /* background-color: rgba(0, 0, 0, 0.6); */
  color: var(--color-text);
  border: none;
  padding: 0.5rem 1rem;
  font-size: 7rem;
  font-weight: 200;
  /* cursor: pointer; */
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

/* .categories-container::before,
.categories-container::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 10vw;
  z-index: 1;
  pointer-events: none;
}

.categories-container::before {
  left: 0;
  background: linear-gradient(
    to right,
    var(--gradient-start),
    var(--gradient-end)
  );
}

.categories-container::after {
  right: 0;
  background: linear-gradient(
    to left,
    var(--gradient-start),
    var(--gradient-end)
  );
} */

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

/* @media only screen and (max-width: 600px) {
  .scroll-button,
  .fade-left,
  .fade-right {
    display: none;
  }

  .categories-row {
    height: max-content;
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    white-space: nowrap;
    flex: 1;
  }

  .categories-row {
    justify-content: center;
  }
  .categories-container {
    flex-direction: column;
    justify-content: center;
    height: max-content;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  .categories-container > * {
    max-height: max-content;
  }
} */
</style>
