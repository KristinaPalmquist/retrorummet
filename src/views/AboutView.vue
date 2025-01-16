<script setup></script>

<template>
  <div id="about-view">
    <div class="component-container">
      <h1 class="header-about">About Us</h1>
      <section class="introduction">
        <!-- <div class="content-about"> -->
        <p class="content-about1">
          Welcome to RetroRummet, your go-to destination for preowned furniture
          and decorations. Our mission is to promote sustainable living by
          offering a curated selection of unique and timeless pieces.
        </p>
        <div class="empty-about1"></div>
        <p class="content-about2">
          Over the years, we have expanded our collection and services, reaching
          eco-conscious customers worldwide. We operate exclusively online, with
          no physical showroom, ensuring that our operations are as eco-friendly
          as possible.
        </p>
        <div class="empty-about2"></div>
        <p class="content-about3">
          Here's how our site works: Browse through our collection and find an
          item that you like. Each item page has a form that you can use to
          contact us with any questions or comments. This form helps us know
          which item your question or comment is linked to, ensuring a smooth
          and efficient communication process.
        </p>
        <div class="empty-about3"></div>
        <!-- </div> -->

        <div class="image image1"></div>
      </section>

      <section class="team">
        <h2 class="header-team">Our Team</h2>
        <div class="empty-team1"></div>
        <p class="content-team">
          Our team is composed of dedicated professionals who are passionate
          about sustainable living. From our customer service representatives to
          our product curators, everyone plays a crucial role in our mission to
          make home decor more sustainable.
        </p>
        <div class="empty-team2"></div>
        <div class="image image2"></div>
      </section>
      <section class="values">
        <h2 class="header-values">Our Values</h2>
        <div class="content-values">
          <div>
            <h2>Customer Satisfaction</h2>
            We prioritize our customers' needs and strive to exceed their
            expectations with every purchase.
          </div>
          <div>
            <h2>Sustainability</h2>
            We are committed to reducing waste by promoting the reuse and
            recycling of furniture and decorations.
          </div>

          <div>
            <h2>Integrity</h2>
            We conduct our business with honesty and transparency, building
            trust with our customers and partners.
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
  }

  #about-view h1 {
    text-align: center;
  } */

  /* .image1 {
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
