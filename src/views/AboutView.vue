<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const companyName = ref(t('companyName'));
</script>

<template>
  <div id="about-view">
    <div class="component-container">
      <h1 class="header-about">{{ t('about.header') }}</h1>
      <section class="introduction">
        <!-- <div class="content-about"> -->
        <p class="content-about1">
          {{ t('about.introduction.text.welcome', { companyName }) }}
        </p>
        <div class="empty-about1"></div>
        <p class="content-about2">
          {{ t('about.introduction.text.online') }}
        </p>
        <div class="empty-about2"></div>
        <p class="content-about3">
          {{ t('about.introduction.text.how') }}
        </p>
        <div class="empty-about3"></div>
        <!-- </div> -->

        <div class="image image1"></div>
      </section>

      <section class="team">
        <h2 class="header-team">
          {{ t('about.content.header') }}
        </h2>
        <div class="empty-team1"></div>
        <p class="content-team">
          {{ t('about.content.text') }}
        </p>
        <div class="empty-team2"></div>
        <div class="image image2"></div>
      </section>
      <section class="values">
        <h2 class="header-values">{{ t('about.values.header') }}</h2>
        <div class="content-values">
          <div>
            <h2>{{ t('about.values.satisfaction.header') }}</h2>
            <p>{{ t('about.values.satisfaction.text') }}</p>
          </div>
          <div>
            <h2>{{ t('about.values.sustainability.header') }}</h2>
            <p>{{ t('about.values.sustainability.text') }}</p>
          </div>

          <div>
            <h2>{{ t('about.values.integrity.header') }}</h2>
            <p>
              {{ t('about.values.integrity.text') }}
            </p>
          </div>
          <div class="empty-values"></div>
        </div>

        <div class="image image3"></div>
      </section>
    </div>
  </div>
</template>

<style scoped>
#about-view {
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.header-about {
  margin-bottom: 2rem;
}

.introduction {
  padding: 0 0 5rem 0;
  position: relative;
}

.team,
.values {
  padding: 5rem 0;
  position: relative;
}

.image {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-radius: 2rem;
  /* overflow-x: hidden; */
}

.introduction {
  display: grid;
  grid-template-areas:
    'content-about1 content-about1'
    'image1 empty-about1' 'image1 content-about2'
    'image1 empty-about2'
    'image1 content-about3'
    'empty-about3 content-about3';
  gap: 2.5rem;
}

.introduction .image1 {
  grid-area: image1;
  background-image: url('../assets/img/chair/gote.jpg');
  width: 60vw;
  margin-left: -20vw;
}
.introduction .content-about1 {
  grid-area: content-about1;
}
.introduction .empty-about1 {
  grid-area: empty-about1;
  height: 10vh;
}
.introduction .content-about2 {
  grid-area: content-about2;
}
.introduction .empty-about2 {
  grid-area: empty-about2;
  height: 5vh;
}
.introduction .content-about3 {
  grid-area: content-about3;
}

.introduction .empty-about3 {
  height: 5vh;
}

.team {
  display: grid;
  grid-template-areas:
    'empty-team1 image2'
    'header-team image2'
    'content-team image2'
    'empty-team2 image2';
  gap: 2.5rem;
}

.team .header-team {
  grid-area: header-team;
}

.team .empty-team1 {
  grid-area: empty-team1;
  height: 15vh;
}

.team .content-team {
  grid-area: content-team;
}

.team .empty-team2 {
  grid-area: empty-team2;
  height: 5vh;
}

.team .image2 {
  grid-area: image2;
  background-image: url('../assets/img/decor/pexel.jpg');
  width: 70vw;
  margin-right: -20vw;
}

.values {
  display: grid;
  grid-template-areas:
    'image3 header-values'
    'image3 content-values'
    'image3 empty-values';
  gap: 2.5rem;
}

.values .header-values {
  grid-area: header-values;
}

.values .content-values {
  grid-area: content-values;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.values .empty-values {
  grid-area: empty-values;
  height: 10vh;
}

.values .image3 {
  grid-area: image3;
  background-image: url('../assets/img/storage/uno.jpg');
  width: 60vw;
  margin-left: -20vw;
}

@media (max-width: 768px) {
  /* .introduction {
    grid-template-areas:
      'content-about1'
      'image1'
      'content-about2'
      'content-about3';
  }

  .team {
    grid-template-areas:
      'header-team'
      'content-team'
      'image2';
  }

  .values {
    grid-template-areas:
      'header-values'
      'content-values'
      'image3';
  } */

  #about-view h1 {
    text-align: center;
    padding: 1.5rem 0 0 0;
  }
  /*
 .image1 {
 position: absolute; 
  margin-left: 0vw;
  left: 0%; 
  transform: translateX(-20%);
  } */

  /* .image2 {

  }

  .image3 {

  } */
}
</style>
