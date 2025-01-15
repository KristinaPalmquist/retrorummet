import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

const app = createApp(App);
const pinia = createPinia();

app.use(router).use(pinia).use(i18n).mount('#app');
