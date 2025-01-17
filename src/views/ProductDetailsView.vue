<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductContact from '../components/ProductContact.vue';
// import { useI18n } from 'vue-i18n';

// const {t} = useI18n();

const route = useRoute();
const { categoryName, productName } = route.params;

const product = ref(null);
const message = ref('');
const showMessage = ref(false);

const fetchProduct = async () => {
  try {
    const module = await import(`@/assets/data/${categoryName}.json`);
    const products = module.default;
    product.value = products.find(
      (p) => p.name.toLowerCase() === productName.toLowerCase()
    );
  } catch (error) {
    console.error('Error loading product:', error);
  }
};

const resolveImagePath = (product) => {
  let name = product.name.replace(/ /g, '-').toLowerCase();
  let category = product.category.toLowerCase();
  let path = `../assets/img/${category}/${name}.jpg`;
  return new URL(path, import.meta.url).href;
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

onMounted(() => {
  fetchProduct();
});
</script>

<template>
  <div v-if="product" id="product-details" class="component-container">
    <div class="product-image">
      <img
        :src="resolveImagePath(product)"
        :alt="product.name"
        class="outline"
      />
    </div>
    <div class="product-info">
      <div class="name">
        <h1>{{ product.name }}</h1>
      </div>
      <div class="description">
        <p>{{ product.description }}</p>
      </div>
      <div class="price">
        <p>{{ formatCurrency(product.price) }}</p>
      </div>

      <div class="specifications">
        <ul>
          <li v-for="(value, key) in product.specifications" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </div>

      <div class="contact" v-show="!showMessage">
        <ProductContact :product="product" />
      </div>

      <div class="message" v-show="showMessage">
        <p class="message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#product-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 7%;
}
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: max-content;
}
.product-image {
  width: 100%;
  max-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}
.product-image img {
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}

.product-info h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.product-info p {
  margin-bottom: 1rem;
}


.price {
  font-size: 1.5rem;
}

.specifications {
  margin-bottom: 1rem;
}

.specifications h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.specifications ul {
  list-style-type: none;
  padding: 0;
}

.specifications li {
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

@media only screen and (max-width: 768px) {
  .product-details {
    grid-template-columns: 1fr;
    grid-template-areas: '';
  }

  .product-image {
    margin-top: 2rem;
  }

  .product-info {
    display: grid;

    grid-template-areas:
      'name'
      'price'
      'btn'
      'msg'
      'spec'
      'avg'
      'desc'
      'rev';
  }

  .name {
    grid-area: name;
  }

  .description {
    grid-area: desc;
  }

  .price {
    grid-area: price;
    margin: 0;
  }

  .price p {
    text-align: center;
  }

  .specifications {
    grid-area: spec;
  }

  .contact {
    width: 100%;
  }

  .message {
    grid-area: msg;
    margin-bottom: 2rem;
  }

  .btn-div {
    grid-area: btn;
    margin-bottom: 2rem;
    gap: 2rem;
  }
}
</style>
