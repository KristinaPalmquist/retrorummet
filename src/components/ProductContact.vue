<script setup>
import { ref } from 'vue';

import BasicButton from '@/components/BasicButton.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
  const contactMessage = {
    product: props.product,
    name: name.value,
    email: email.value,
    message: message.value,
  };
  // email contactMessage?
  console.log('Form submitted:', contactMessage);

  // Reset form fields
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<template>
  <div id="product-contact">
    <form @submit.prevent="handleSubmit">
      <!-- <form @submit.prevent="handleSubmit" class="outline"> -->
      <div class="form-background">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            autocomplete="name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            autocomplete="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <!-- <button type="submit">Submit</button> -->
        <div class="btn-div">
          <BasicButton
            :btnFunction="handleSubmit"
            :btnText="'Submit'"
            :btnClass="'cta-btn'"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
#product-contact {
  width: clamp(300px, 100%, 600px);
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: transparent;
}

.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
}

</style>
