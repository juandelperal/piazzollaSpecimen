<template>
  <section id="quote"
           data-scroll-section>
    <div class="margins relative">
      <p class="allSc inspectable">
        In my country the presidents change and no one say a word; bishops, cardinals, football players, whatever, <em>but not tango</em>. Tango should remain always as it is.
      </p>
      <h3 class="inspectable">
        En mi país cambian los presidentes y no dicen nada, cambian los obispos, los cardenales, los jugadores de fútbol, cualquier cosa, <em>pero el tango, no.</em> El tango hay que dejarlo así.
      </h3>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@import "../scss/mixins";
@import "../scss/variables";

h3 {
  font-weight: 200;
  letter-spacing: -0.005em;
}
p {
  position: absolute;
  letter-spacing: 0.28em;
  color: $beige;
  font-weight: 200;
}
@include desktop() {
  h3 {
    font-size: rem-calc(97px);
    line-height: rem-calc(97px * 1.25);
  }
  p {
    line-height: rem-calc(97px * 1.25);
    margin: rem-calc(97px * 0.71) 20%;
    font-size: rem-calc(28px);
  }
}
@include mobile() {
  h3 {
    font-size: rem-calc(97px * 0.75);
    line-height: rem-calc(97px * 0.95);
  }
  p {
    line-height: rem-calc(97px * 0.95);
    font-size: rem-calc(20px);
    margin: rem-calc(97px * 0.55)  25% 0 15%;
  }
}
</style>