<template>
  <section
    data-scroll-section
    id="quote"
  >
    <div class="margins relative">
      <p class="allSc inspectable">
        In my country, presidents change and no one says a word; bishops, cardinals, football players –you name it.
        <em>But not tango</em>, tango must always remain the same.
      </p>
      <h3 class="inspectable">
        En mi país cambian los presidentes y no dicen nada, cambian los obispos, los cardenales, los jugadores de fútbol, cualquier cosa,
        <em>pero el tango, no.</em> El tango hay que dejarlo así.
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
    line-height: rem-calc(97px * 0.76);
    font-size: rem-calc(97px * 0.5);
    letter-spacing: 0;
  }
  p {
    line-height: rem-calc(97px * 0.76);
    font-size: rem-calc(20px);
    margin: rem-calc(97px * 0.415) 13% 0;
  }
}
</style>