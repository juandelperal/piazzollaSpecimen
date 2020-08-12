<template>
  <section id="matrix">
    <div class="margins">
      <p>
        Homenaje a Astor Piazzolla
      </p>
      <img src="images/piazzollaMatrix.svg"
           alt="Piazzolla">

    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "../scss/variables";

section {
  background: $dark;
  padding: 0;
  position: relative;

  p {
    position: absolute;
    color: #fff;
  }
}

img {
  max-width: 100%;
}
</style>