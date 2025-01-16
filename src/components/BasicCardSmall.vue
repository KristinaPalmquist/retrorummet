<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});

const { title, imageSrc } = props;

const displayTitle = computed(() => {
  const titleWithSpaces = props.title.replace(/-/g, ' ');
  return titleWithSpaces.charAt(0).toUpperCase() + titleWithSpaces.slice(1);
});
</script>

<template>
  <div id="basic-card">
    <img :src="imageSrc" :alt="title" />
    <div class="card-content">
      <h2>{{ displayTitle }}</h2>
    </div>
  </div>
</template>

<style scoped>
#basic-card {
  width: 200px;
  border-radius: 1rem;
  break-inside: avoid;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#basic-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 1rem 1rem 0 0;
}

.card-content {
  padding-top: 0;
  padding-bottom: 1rem;
}

.card-content h2 {
  margin: 0;
  font-size: 1.5rem;
}


</style>
