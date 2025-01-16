<script setup>
import BasicButton from '../components/BasicButton.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const formContent = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const showSentMessage = ref(false);

const handleSubmit = () => {
  formContent.value = {
    [t('contact.name')]: name.value,
    [t('contact.email')]: email.value,
    [t('contact.subject')]: subject.value,
    [t('contact.message')]: message.value,
  };
  console.log(formContent.value);
  showSentMessage.value = true;
  clearForm();
};

const clearForm = () => {
  name.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
};
</script>

<template>
  <div id="contact-us">
    <div class="component-container">
      <h1>{{ !showSentMessage ? t('contact.header') : t('contact.sent') }}</h1>
      <div class="contact-form" v-if="!showSentMessage">
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="name">{{ t('contact.name') }}</label>
            <input
              type="text"
              id="name"
              v-model="name"
              autocomplete="name"
              required
            />
          </div>
          <div>
            <label for="email">{{ t('contact.email') }}</label>
            <input
              type="email"
              id="email"
              v-model="email"
              autocomplete="email"
              required
            />
          </div>
          <div>
            <label for="subject">{{ t('contact.subject') }}</label>
            <input type="text" id="subject" v-model="subject" />
          </div>
          <div>
            <label for="message">{{ t('contact.message') }}</label>
            <textarea
              id="message"
              v-model="message"
              rows="7"
              required
            ></textarea>
          </div>
          <div class="btn-div">
            <BasicButton
              :btnType="'button'"
              :btnText="t('contact.clear')"
              :btnFunction="clearForm"
            />
            <BasicButton
              :btnType="'submit'"
              :btnText="t('contact.send')"
              :btnClass="'cta-btn'"
              :btnFunction="handleSubmit"
            />
          </div>
        </form>
      </div>
      <div class="contact-messages">
        <div v-if="showSentMessage">
          <div class="sent-message">
            <div
              v-for="(content, key) in formContent"
              :key="key"
              class="message-item"
            >
              <span class="message-key">{{ key }}</span>
              <span class="message-value">{{ content }}</span>
            </div>
          </div>
          <div class="message">
            <p>{{ t('contact.thanks') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contact-us {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#contact-us h1 {
  text-align: center;
  margin-top: 2rem;
}
/* #contact-us {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 3rem);
} */

.contact-form {
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}
.contact-form form {
  width: 100%;
}

.contact-form label,
.contact-form input,
.contact-form textarea {
  display: block;
  width: 90%;
  margin: auto;
}

.contact-messages {
  /* height: 80vh; */
  /* height: 100%; */
  justify-content: flex-end;
}

.contact-messages > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
}

.contact-messages .message {
  text-align: center;
  margin: 0 auto;
}

.sent-message {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 2rem;
  text-align: left;
}

.message-item {
  display: grid;
  grid-template-columns: 11rem 1fr;
  margin-bottom: 0.5rem;
  gap: 2rem;
}

.message-key {
  font-weight: bold;
  text-transform: capitalize;
}

@media only screen and (max-width: 740px) {
  #contact-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
  }

  /* .contact-messages > div {
    gap: 5rem;
  } */
  .btn-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: max-content;
  }
  .message-item {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
    gap: 0.3rem;
  }
}
</style>
