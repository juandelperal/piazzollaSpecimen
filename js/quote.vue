<template>
  <section id="quote"
           data-scroll-section>
    <div class="margins relative">
      <p class="allSc inspectable">
        El tango hay que dejarlo así como es: antiguo, aburrido, igual, repetido.
        Ástor Piazzolla, fragmentos de una entrevista televisiva.
      </p>
      <h3 class="inspectable">
        En mi país cambian los presidentes y no dicen nada, cambian los obispos, los cardenales, los jugadores de fútbol, cualquier cosa, <em>pero el tango, no.</em>
      </h3>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@import "../scss/mixins";
@import "../scss/variables";

h3 {
  font-weight: 200;
  font-size: rem-calc(96px * 0.7);
  line-height: rem-calc(96px * 0.85);
}
p {
  position: absolute;
  top: rem-calc(96px * 0.7 * 0.7);
  letter-spacing: 0.15em;
  color: $beige;
  font-weight: 300;
  width: 60%;
}
@include desktop() {
  h3 {
    font-size: rem-calc(96px);
    line-height: rem-calc(96px * 1.12);
  }
  p {
    top: rem-calc(96px * 0.65);
    line-height: rem-calc(96px * 1.12);
    margin-left: 30%;
  }
}
@include mobile() {
  p {
    line-height: rem-calc(96px * 0.85);
    font-size: rem-calc(18px);
    margin-left: 15vw;
  }
}
</style>