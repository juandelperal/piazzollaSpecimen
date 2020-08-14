<template>
  <section id="matrix">
    <div class="margins">
      <p class="inspectable">
        This project was named <span class="sc">Piazzolla</span> as a tribute to <em>Astor Piazzolla</em>, an Argentine musician, composer and the central figure of the style called <em>Nuevo Tango</em>.
      </p>
      <img src="images/piazzollaMatrix.svg"
           alt="Piazzolla">

    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins";

section {
  font-weight: 100;
  background: $dark;
  padding: 0;
  position: relative;
  font-size: 0.8rem;

  p {
    color: $beige;

    .sc {
      color: $green;
      font-weight: 600;
    }
  }
  @include mobile() {
    .margins {
      display: flex;
      min-height: 10rem;
    }
    p {
      font-size: 0.7rem;
      width: 40%;
      margin: 1rem 0 1.5rem;
    }
    img {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      max-width: 75%;
    }
  }

  @include desktop() {
    p {
      position: absolute;
      margin-top: 2rem;
      max-width: 24ch;
    }
    img {
      //   ‰rgin-bottom: 10%;
    }
  }
}
</style>