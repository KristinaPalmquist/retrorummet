<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const currentYear = new Date().getFullYear();

const { t } = useI18n();
const companyName = ref(t('companyName'));
</script>

<template>
  <footer id="main-footer">
    <div class="footer-content">
      <div class="footer-section about">
        <h2>{{ t('footer.about.header') }}</h2>
        <p>
          {{ t('footer.about.text') }}
        </p>
      </div>
      <div class="footer-section links">
        <h2>{{ t('footer.links.header') }}</h2>
        <ul>
          <li>
            <a href="/">{{ t('routes.home') }}</a>
          </li>
          <li>
            <a href="/about">{{ t('routes.about') }}</a>
          </li>
          <li>
            <a href="/products">{{ t('routes.products') }}</a>
          </li>
          <li>
            <a href="/categories">{{ t('routes.categories') }}</a>
          </li>
          <li>
            <a href="/contact">{{ t('routes.contact') }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-section contact">
        <h2>{{ t('footer.contact.header') }}</h2>
        <p>
          <span class="email"> {{ t('footer.contact.text1') }}</span>
          info@example.com
        </p>
        <p>
          <span class="phone"> {{ t('footer.contact.text2') }}</span>
          {{ t('phone') }}
        </p>
      </div>
      <div class="footer-section social">
        <h2>{{ t('footer.social.header') }}</h2>
        <ul>
          <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
          <li><a href="https://x.com" target="_blank">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>{{ t('footer.bottom', { currentYear, companyName }) }}</p>
    </div>
  </footer>
</template>

<style scoped>
#main-footer {
  background-color: var(--footer-background-color);
  width: 100vw;
  padding: 2rem;
  /* z-index: 10; */
  display: flex;
  flex-direction: column;
}
.footer-content {
  width: clamp(300px, 80vw, 1200px);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 1rem;
}

.footer-section {
  flex: 1;
  margin-bottom: 2rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li,
.footer-section p,
.footer-bottom p {
  margin-bottom: 0.5rem;
}

/* .about p {
  font-size: 1.1rem;;
} */

.social,
.links {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.email,
.phone {
  font-weight: bold;
}

.footer-bottom {
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid var(--color-text);
  width: 100%;
}

@media only screen and (max-width: 900px) {
  #main-footer .footer-content {
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
