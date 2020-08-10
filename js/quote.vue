<template>
  <section id="quote"
           data-scroll-section>
    <div class="margins">
      <div class="relative">
        <div class="is-row">
          <div class="is-col is-5 is-offset-7">
            <p class="allSc inspectable"
               >
              El tango hay que dejarlo así como es: antiguo, aburrido, igual, repetido.
              <br>
              Ástor Piazzolla, fragmentos de una entrevista televisiva.
            </p>
          </div>
        </div>
        <h3 class="inspectable"
            >
          En mi país cambian los presidentes y no dicen nada, cambian los obispos, los cardenales, los jugadores de fútbol, cualquier cosa, <em>pero el tango, no.</em>
        </h3>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>
@import "../scss/mixins";
@import "../scss/variables";

// display: none;
h3 {
  font-weight: 200;
  font-size: rem-calc(96px * 0.7);
  line-height: rem-calc(96px * 0.7);
}
p {
  position: absolute;
  top: rem-calc(96px * 0.7 * 0.62);
  line-height: rem-calc(96px * 0.7);
  font-size: rem-calc(18px);
  letter-spacing: 0.15em;
  color: $beige;
  font-weight: 300;
}
@include desktop() {
  h3 {
    font-size: rem-calc(96px);
    line-height: rem-calc(96px);
  }
  p {
    top: rem-calc(96px * 0.62);
    line-height: rem-calc(96px);
  }
}
@include mobile() {
  p {
    width: 60%;
    margin-left: 20%;
  }
}
</style>