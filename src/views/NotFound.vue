<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <div id="not-found" class="component-container">
    <h1>{{ t('notFound.header') }}</h1>
    <p class="large">{{ t('notFound.text') }}</p>
    <router-link to="/" class="back">{{ t('notFound.back') }}</router-link>

    <router-link to="/products" class="products">{{
      t('notFound.products')
    }}</router-link>
  </div>
</template>

<style scoped>
#not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}

.back,
.products {
  padding: 2rem 0;
}

</style>
