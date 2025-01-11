<script setup>
import BasicCard from './BasicCard.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
});

const product = props.product;
// const categoryName = props.categoryName;

const resolveImagePath = (path) => {
  console.log(path);
  console.log(new URL(path, import.meta.url).href)
  // console.log(categoryName)
  // console.log(name)
  // let path = `/src/assets/img/${categoryName.toLowerCase()}/${name.toLowerCase()}.jpg`;
  return new URL(path, import.meta.url).href;
};

const imagePaths = Array.isArray(product.images)
  ? product.images.map((imageName) => resolveImagePath(imageName))
  : [resolveImagePath(product.images)];
</script>

<template>
  <div id="product-card">
    <BasicCard
      :title="product.name"
      :imageSrc="imagePaths"
      :price="product.price"
    />
  </div>
</template>

<style scoped>
#product-card {
  width: 100%;
  border-radius: 1rem;
  break-inside: avoid;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#product-card img {
  width: 100%;
  height: auto;
  border-radius: 1rem 1rem 0 0;
}

#product-card:hover {
  transform: scale(1.05);
}
</style>
