<script setup>
import BasicCard from '@/components/BasicCard.vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
});

const { t } = useI18n();

const resolveImagePath = (name) => {
  let categoryName = name.replace(/ /g, '-').toLowerCase();
  let path = `../assets/img/${categoryName}/${props.category.imagename}.jpg`;
  return new URL(path, import.meta.url).href;
};

const resolveCategoryName = (name) => {
  return t(`categories.${name}`);
};
</script>

<template>
  <div id="category-card">
    <BasicCard
      :title="resolveCategoryName(category.name)"
      :imageSrc="resolveImagePath(category.name)"
    />
  </div>
</template>

<style scoped>
#category-card {
  width: 100%;
  border-radius: 1rem;
  break-inside: avoid;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* #category-card img {
  width: 100%;
  height: auto;
  border-radius: 1rem 1rem 0 0;
} */

#category-card:hover {
  transform: scale(1.05);
}
</style>
