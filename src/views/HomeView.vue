<script setup>
import CategoriesSmall from '@/components/CategoriesSmall.vue';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  searchQuery: String,
});

const emits = defineEmits(['productClicked']);

const { t } = useI18n();
const companyName = ref(t('companyName'));
const heroRef = ref(null);
const categoriesRef = ref(null);

onMounted(() => {
  const heroElement = heroRef.value;
  if (heroElement) {
    heroElement.style.position = 'absolute';
    heroElement.style.top = '0';
    heroElement.style.left = '0';
    heroElement.style.width = '100vw';
    heroElement.style.height = '100vh';
  }

  const categoriesElement = categoriesRef.value;
  if (categoriesElement) {
    const updateCategoriesWidth = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth > 600) {
        const offsetLeft = categoriesElement.offsetLeft;
        categoriesElement.style.width = `${viewportWidth - offsetLeft}px`;
      } else {
        categoriesElement.style.width = '100%';
      }
    };

    window.addEventListener('resize', updateCategoriesWidth);
    updateCategoriesWidth();

    return () => {
      window.removeEventListener('resize', updateCategoriesWidth);
    };

    // const categoriesElement = categoriesRef.value;
    // if (categoriesElement) {
    //   const updateCategoriesWidth = () => {
    //     const viewportWidth = window.innerWidth;
    //     if (viewportWidth > 600) {
    //       const offsetLeft = categoriesElement.getBoundingClientRect().left;
    //       categoriesElement.style.position = 'relative';
    //       categoriesElement.style.left = `-${offsetLeft}px`;
    //       categoriesElement.style.width = `${viewportWidth}px`;
    //     } else {
    //       categoriesElement.style.position = 'relative';
    //       categoriesElement.style.left = '0';
    //       categoriesElement.style.width = '100%';
    //     }
    //   };

    //   updateCategoriesWidth();
    //   window.addEventListener('resize', updateCategoriesWidth);

    //   return () => {
    //     window.removeEventListener('resize', updateCategoriesWidth);
    //   };
  }
});
</script>

<template>
  <div id="home-view">
    <div class="hero" ref="heroRef">
      <div class="fade-up"></div>
      <div class="hero-image"></div>

      <div class="fade-down"></div>
      <div class="glass-card">
        <div class="hero-text">
          <h1>{{ t('home.header', { companyName }) }}</h1>
          <p>
            {{ t('home.hero') }}
          </p>
        </div>
      </div>
    </div>
    <div class="component-container">
      <div class="intro-sections">
        <section class="introduction">
          <h2>About Us</h2>
          <p>
            At {{ companyName }}, we are passionate about sustainable living.
            Our curated collection of pre-loved furniture offers unique styles
            and timeless pieces that you won't find anywhere else.
          </p>
        </section>
        <section class="features">
          <h2>Our Features</h2>
          <ul>
            <li>
              <strong>Curated Selection:</strong> Each item is carefully
              selected to ensure quality and style.
            </li>
            <li>
              <strong>Sustainable Living:</strong> By choosing second-hand,
              you're making a positive impact on the environment.
            </li>
            <li>
              <strong>Exceptional Customer Service:</strong> Our team is here to
              help you find the perfect piece and answer any questions you may
              have.
            </li>
          </ul>
        </section>
      </div>
    </div>
    <section class="categories">
      <div class="categories-wrapper" ref="categoriesRef">
        <h2>Browse our categories</h2>
        <CategoriesSmall />
      </div>
    </section>
  </div>
  <div class="empty-space"></div>
</template>

<style scoped>
#home-view {
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-image {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/hero.jpg');
  background-size: cover;
  background-position: center;
  border: none;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--hero-overlay);
}

.fade-up {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 70%;
  height: 30%;
  pointer-events: none;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    var(--gradient-start),
    var(--gradient-end)
  );
  border: none;
}

.fade-down {
  position: absolute;
  left: 0;
  right: 0;
  top: 70%;
  height: 30%;
  pointer-events: none;
  z-index: 1;
  background: linear-gradient(
    to top,
    var(--gradient-start),
    var(--gradient-end)
  );
  border: none;
}

.glass-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  width: clamp(300px, 50%, 900px);
  text-align: center;
  z-index: 2;
}

.hero-text {
  color: white;
  z-index: 1;
}

.hero-text h1,
.hero-text p {
  color: white;
}

.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.intro-sections {
  margin-top: 100vh;
}

.features ul li {
  display: grid;
  grid-template-columns: 2fr 3fr;
}

.features {
  margin-top: 2rem;
}

.features ul {
  padding: 0;
}

.features li {
  list-style-type: none;
  margin-bottom: 1rem;
}

.categories {
  width: 100vw;
}

.categories-wrapper {
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
}

@media only screen and (max-width: 600px) {
  .glass-card {
    padding: 1rem;
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-text p {
    font-size: 1rem;
  }
  /* .categories {
  display: flex;
  align-items: center;
  justify-content: center;
} 
 .categories-wrapper {
    left: 1rem;
    max-width: calc(100vw - 2rem);
  } */
}
</style>
