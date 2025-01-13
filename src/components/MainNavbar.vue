<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const emit = defineEmits(['update:isOpen']);
const router = useRouter();
const isOpen = ref(false);
const windowHeight = ref(window.innerHeight);
const windowWidth = ref(window.innerWidth);

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Categories', path: '/categories' },
  { name: 'Products', path: '/products' },
];

const handleRouting = (event, path) => {
  event.preventDefault();
  router.push(path);
  isOpen.value = false;
  emit('update:isOpen', isOpen.value);
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  emit('update:isOpen', isOpen.value);
};

const updateWindowSize = () => {
  windowHeight.value = window.innerHeight;
  windowWidth.value = window.innerWidth;
};

// const updateWindowHeight = () => {
//   windowHeight.value = window.innerHeight;
// };

const navbarItemStyle = computed(() => {
  console.log('window height: ', windowHeight.value);
  if (windowWidth.value > 600) {
    const backgroundHeight = windowHeight.value - 30;
    console.log('background height: ', backgroundHeight);
    const itemHeight = backgroundHeight / routes.length;
    console.log('item height: ', itemHeight);
    // const fontSize = Math.min(itemHeight * 0.5, 50);
    const padding = Math.min(itemHeight * 0.5, 2);
    console.log('padding: ', padding);
    const fontSize = 90 / routes.length - padding * 2;
    console.log('font size: ', fontSize);
    return {
      fontSize: `${fontSize}vh`,
      padding: `${padding}rem`,
    };
  } else if (windowWidth.value > 380) {
    return {
      fontSize: '2rem',
      padding: '0.5rem',
    };
  } else {
    return {
      fontSize: '1.5rem',
      padding: '0.5rem',
    };
  }
});

const navbarNumbersStyle = computed(() => {
  if (windowWidth.value > 600) {
    const itemHeight = windowHeight.value / routes.length;
    // const fontSize = Math.min(itemHeight * 0.3, 32);
    const padding = Math.min(itemHeight * 0.05, 4);
    const fontSize = 90 / routes.length - padding * 2;
    return {
      fontSize: `${fontSize}vh`,
      padding: `${padding}px`,
    };
  } else {
    return {
      fontSize: '2rem',
      // padding: '0.7rem',
    };
  }
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
                <a href="#" @click="handleRouting($event, route.path)">
                  <span class="navbar-numbers" :style="navbarNumbersStyle"
                    >0{{ index + 1 }}.
                  </span>
                  <span class="navbar-item" :style="navbarItemStyle">{{
                    route.name
                  }}</span>
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
  position: relative;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-button {
  position: relative;
  top: 0rem;
  right: 0rem;
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
  width: 100vw;
  height: 100vh;
  background-color: var(--modal-background);

  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreen-menu {
  position: fixed;
  top: 1rem;
  left: 2rem;
  bottom: 2rem;
  right: 2rem;
  width: calc(100vw - 4rem);
  height: calc(100vh - 3rem);
  /* background-color: var(--accent-4-background-color); */
  /* background-color: var(--footer-background-color); */
  background-color: var(--modal-overlay);
  color: var(--text-color);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.fullscreen-menu nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  /* width: max-content; */
  /* width: calc(min-content + 20vw); */
  text-align: left;
}

.fullscreen-menu nav ul li {
  margin: 1rem 0;
}

nav ul li a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  text-decoration: none;
  color: var(--text-color);
  font-size: 3rem;
}

nav ul li a .navbar-numbers {
  font-size: 2.5rem;
}

nav ul li a:hover {
  background-color: transparent;
  /* font-family: 'Monoton', sans-serif; */
  /* font-style: italic; */
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

/* .navbar-item:hover {
  font-style: italic;

} */

@media only screen and (max-width: 1024px) {
  .navbar-background {
    left: -3rem;
  }
}

@media only screen and (max-width: 600px) {
  #main-navbar {
    padding: 0;
  }

  .navbar-background {
    width: 90vw;
    left: 1.5rem;
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

  /* .navbar-numbers {
    font-size: 1.5rem;
  } */

  .navbar a:hover {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 400px) {
  /* .menu-button {
    transition: none;
  } */

  .menu-button-open {
    transform: translate(3.6rem, 2.3rem);
  }
  /* 
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
  } */
}
</style>
