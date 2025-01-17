<script setup>
import ProductCard from '../components/ProductCard.vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const route = useRoute();
const router = useRouter();
const { categoryName } = route.params;

const products = ref([]);

const fetchProducts = async () => {
  try {
    const module = await import(`../assets/data/${categoryName}.json`);
    products.value = module.default;
  } catch (error) {
    console.error('Error loading products: ', error);
  }
};

const navigateToProduct = (name) => {
  let productName = name.replace(/ /g, '-').toLowerCase();
  router.push({
    name: 'ProductDetails',
    params: { categoryName, productName },
  });
};

onMounted(() => {
  fetchProducts();
});

const resolveCategoryName = (name) => {
  return t(`categories.${name}`);
};
</script>

<template>
  <div id="category-products" class="component-container">
    <h1>{{ resolveCategoryName(categoryName) }}</h1>
    <div class="product-list">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-item"
        @click="navigateToProduct(product.name)"
      >
        <ProductCard :product="product" :categoryName="categoryName" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  padding-top: 2rem;
  column-gap: 1rem;
  column-count: 4;
}

.product-item {
  width: 100%;
  padding-bottom: 15px;
  transition: transform 0.3s ease;
}

.product-item:hover {
  transform: scale(1.05);
}

.product-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-item h2 {
  margin-top: 0.5rem;
  font-size: 1.2rem;
}

.product-item p {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #888;
}

@media only screen and (min-width: 1200px) {
  .product-list {
    column-count: 5;
    column-gap: 15px;
  }
}

@media only screen and (max-width: 1000px) {
  .product-list {
    column-count: 3;
    column-gap: 15px;
  }
}

@media only screen and (max-width: 700px) {
  .product-list {
    column-count: 2;
    column-gap: 15px;
  }
}

@media only screen and (max-width: 500px) {
  .product-list {
    column-count: 1;
    column-gap: 15px;
  }
}
</style>
