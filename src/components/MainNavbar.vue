<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const emit = defineEmits(['update:isOpen']);
const isOpen = ref(false);
const windowHeight = ref(window.innerHeight);
const windowWidth = ref(window.innerWidth);
const routes = ref([
  { name: t('routes.home'), path: '/' },
  { name: t('routes.about'), path: '/about' },
  { name: t('routes.contact'), path: '/contact' },
  { name: t('routes.categories'), path: '/categories' },
  { name: t('routes.products'), path: '/products' },
]);

const updateRoutes = () => {
  routes.value = [
    { name: t('routes.home'), path: '/' },
    { name: t('routes.about'), path: '/about' },
    { name: t('routes.contact'), path: '/contact' },
    { name: t('routes.categories'), path: '/categories' },
    { name: t('routes.products'), path: '/products' },
  ];
};

watch(locale, updateRoutes);

const router = useRouter();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  emit('update:isOpen', isOpen.value);
};

const handleRouting = (event, path) => {
  event.preventDefault();
  isOpen.value = false;
  emit('update:isOpen', isOpen.value);
  router.push(path);
};

const updateWindowSize = () => {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
};

const navbarItemStyle = computed(() => {
  const containerSize = Math.min(windowHeight.value, windowWidth.value) * 0.9;
  const itemSize = containerSize / routes.value.length;
  const fontSize = itemSize * 0.6;
  let padding;
  if (windowWidth.value > 1000) {
    padding =
      (windowHeight.value * 0.9 - fontSize * routes.value.length) /
      (2 * routes.value.length);
  } else if (windowWidth.value > 600) {
    padding =
      (windowHeight.value * 0.8 - fontSize * routes.value.length) /
      (2 * routes.value.length);
  } else if (windowWidth.value > 450) {
    padding =
      (windowHeight.value * 0.7 - fontSize * routes.value.length) /
      (2 * routes.value.length);
  } else {
    padding =
      (windowHeight.value * 0.5 - fontSize * routes.value.length) /
      (2 * routes.value.length);
  }
  return {
    fontSize: `${fontSize}px`,
    padding: `${padding}px 0`,
  };
});

onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize);
});
</script>

<template>
  <div id="main-navbar">
    <Teleport to="body">
      <div v-if="isOpen" class="modal-overlay">
        <div class="fullscreen-menu">
          <nav>
            <ul>
              <li v-for="(route, index) in routes" :key="route.name">
                <a
                  href="#"
                  @click="handleRouting($event, route.path)"
                  :style="navbarItemStyle"
                >
                  <span class="navbar-numbers">0{{ index + 1 }}. </span>
                  <span class="navbar-item"> {{ route.name }}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Teleport>
    <button
      @click="toggleMenu"
      :class="['menu-button', { 'menu-button-open': isOpen }]"
    >
      <span class="line line1"></span>
      <span class="line line2"></span>
      <span class="line line3"></span>
    </button>
  </div>
</template>

<style scoped>
#main-navbar {
  padding: 0.5rem;
}

.menu-button {
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 1000;
  transition: all 0.3s linear;
}

.line {
  width: 2rem;
  height: 0.25rem;
  background-color: var(--text-color);
  border-radius: 10px;
  transition: transform 0.3s linear, opacity 0.3s linear;
}

.line1 {
  transform: rotate(0);
}

.line2 {
  opacity: 1;
  transform: translateX(0);
}

.line3 {
  transform: rotate(0);
}

.menu-button-open .line1 {
  transform: rotate(405deg) translate(8px, 7px);
}

.menu-button-open .line2 {
  opacity: 0;
}

.menu-button-open .line3 {
  transform: rotate(315deg) translate(8px, -7px);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--modal-background);
  z-index: 4;
}

.fullscreen-menu {
  position: fixed;
  top: 2vh;
  left: 5vw;
  right: 5vw;
  bottom: 2vh;
  width: 90vw;
  height: 96vh;
  background-color: var(--modal-overlay);
  color: var(--text-color);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}

.fullscreen-menu nav {
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fullscreen-menu nav ul {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.fullscreen-menu nav ul li {
  margin: 1rem 0;
}

nav ul li a {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0;
  text-decoration: none;
  color: var(--text-color);
  font-size: 3rem;
}

/* .navbar-numbers {

  font-weight: thin;
} */

nav ul li a:hover {
  background-color: transparent;
  font-weight: 400;
  font-style: normal;
  font-size: 5rem;
}

.fullscreen-menu nav ul li a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.fullscreen-menu nav ul li a:hover {
  color: var(--link-color);
}

@media only screen and (max-width: 600px) {
  #main-navbar {
    padding: 0;
  }

  .menu-button {
    transition: none;
  }

  .menu-button-open {
    transform: translate(4.4rem, 2.3rem);
  }

  .menu-button .line {
    width: 2rem;
    height: 0.25rem;
    background-color: var(--text-color);
    border-radius: 10px;
    transition: none;
    transition: transform 0.3s linear 0.1s, opacity 0.3s linear 0.1s;
  }

  .menu-button-open .line1 {
    transition: transform 0.3s linear;
  }

  .menu-button-open .line2 {
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  .menu-button-open .line3 {
    transition: transform 0.3s linear;
  }

  #main-navbar .navbar {
    height: 95%;
  }

  #main-navbar .navbar a,
  #main-navbar .navbar a span {
    margin: auto 0;
  }

  #main-navbar .navbar a {
    margin-left: -30%;
  }

  .navbar a:hover {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 400px) {
  .menu-button-open {
    transform: translate(3.6rem, 2.3rem);
  }
}
</style>
