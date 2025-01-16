<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: [String, Array],
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
});

const { title, imageSrc, price } = props;

const currentImageIndex = ref(0);
const images = ref(Array.isArray(imageSrc) ? imageSrc : [imageSrc]);


watch(
  () => imageSrc,
  (newVal) => {
    images.value = Array.isArray(newVal) ? newVal : [newVal];
    currentImageIndex.value = 0;
  }
);

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
</script>

<template>
  <div id="basic-card">
    <img :src="images[currentImageIndex]" :alt="title" />
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p v-if="price">{{ formatCurrency(price) }}</p>
    </div>
  </div>
</template>

<style scoped>
#basic-card {
  width: 100%;
  border-radius: 1rem;
  break-inside: avoid;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: var(--card-color);
}

#basic-card img {
  width: 100%;
  height: auto;
  border-radius: 1rem 1rem 0 0;
}

h2 {

  margin: 0;

  font-size: 1.5rem;
}

p {
  margin: 0;
}

.card-content {
  padding-bottom: 1.2rem;
}
</style>
