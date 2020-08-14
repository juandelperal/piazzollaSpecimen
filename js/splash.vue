<template>
  <section id="splash"
           data-scroll-section>
    <div class="margins">

      <div class="is-row">
        <div class="is-col is-8 splashTitle">
          <h1 class="inspectable">
            <span class="is-1">Piazzolla</span>
            <span class="is-2">type</span>
            <span class="is-3">system</span>
          </h1>
        </div>
        <div class="is-col is-4 technicalDetails">
          <p class="inspectable">
            <span class="sc">designed by</span>
            <span class="value">
              Juan Pablo del Peral
            </span>
          </p>
          <p class="inspectable">
            <span class="sc">for</span>
            <span class="value">
              Huerta Tipográfica
            </span>
          </p>
          <p class="inspectable">
            <span class="sc">released in</span>
            <span class="value">
              2020
            </span>
          </p>
          <p class="inspectable">
            <span class="sc">distributed by</span>
            <span class="value">
              Google Fonts
            </span>
          </p>

          <a href="https://huertatipografica.com/en/fonts/piazolla"
             target="_blank">
            Get the font →
          </a>

        </div>

        <div class="is-col is-11 is-offset-1">
          <h3 class="inspectable">
            Intended for optimizing the available space in press media and other publications, Piazzolla has a compact appearance which allows for small font sizes and tight leading while achieving <em>solid lines</em> and <em>robust paragraphs</em>.
          </h3>
        </div>
      </div>

      <div class="text">
        <div class="is-row">
          <p class="is-col is-7 relative is-offset-5 inspectable">
            <span class="dropCap">
              P
            </span>
            iazzolla has a distinctive voice that conveys a personal style, especially in display sizes. It also has great performance and readability in small point sizes and long texts, both for screen and printing.
          </p>
          <div class="is-col is-3 is-offset-1 inspectable">
            <p class="small is-small-col">
              1. Piazzolla has more than 2300 characters and supports 210+ languages accross all continents that use the Latin, Greek and Cyrillic scripts.
            </p>
          </div>
          <div class="is-col is-7 relative is-offset-1 inspectable">
            <p>
              <span class="roman">ii</span>
              It's a versatile family providing users with plenty of features and moods. It spans a wide range of weights and an extensive character set for extended latin, polytonic greek and expert cyrillic<sup>1</sup>. Piazzolla is a variable font with two axes, which allows for better control and precision in typesetting<sup>2</sup>.
            </p>
          </div>
        </div>

        <div class="is-row sideDetails">
          <div class="is-col is-small-col inspectable is-3 is-offset-1">
            <div class="is-small-col">
              <p class="huge">
                2<span>x</span>
              </p>
              <p class="small">
                <span class="allSc">
                  <strong>Fig 2</strong>
                  Variable fonts
                </span>
              </p>
              <p class="small">
                The family has <em>Weight</em> and <em>Optical Size</em> axes. With predefined styles and custom locations, Piazzolla will help you to build solid text and sharp headlines.
              </p>
            </div>
          </div>
          <div class="is-col inspectable is-7 relative is-offset-1">
            <p>
              <span class="roman">iii</span>
              It also supports advanced OpenType features such as small caps, dynamic ligatures and fractions, four set of figures, super and subscript characters, ordinals and language-specific variations for Catalan, Guaraní, Dutch, Turkish, Romanian, Serbian, Bulgarian, Bashkir, among others.
            </p>
            <p>
              The family has Weight and Optical Size axes. With predefined styles and custom locations, Piazzolla will help you to build solid text and sharp headlines.
            </p>
            <ul>
              <li v-for="(name, key) in features"
                  :key="key">
                <code>
                  {{ key }}
                </code>
                <em>{{ name }}</em>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../scss/mixins";
@import "../scss/variables";

#splash {
  background: url("../images/bg.svg") center top no-repeat;
  background-size: 1470px 650px;

  @include mobile() {
    background-size: 150vh auto;
  }
}
.splashTitle {
  h1 {
    font-weight: 200;
    line-height: 0.83;
    text-align: right;
    .is-1 {
      font-weight: 600;
    }

    @include desktop() {
      font-size: rem-calc(192px);

      .is-1 {
        margin-right: -0.3em;
      }
      .is-3 {
        margin-right: 0.3em;
      }
    }
    @include mobile() {
      font-size: calc(1vw * 23);
      .is-2 {
        margin-right: 0.34em;
      }
      .is-3 {
        margin-right: 0.34em * 2;
      }
    }
  }
}
.technicalDetails {
  @include desktop() {
    margin-top: 9.5rem;
  }
  p {
    display: flex;
    align-items: baseline;
    margin: 0;
    font-weight: 200;
    margin-bottom: 0.5rem;

    span.sc {
      color: $beige;
      letter-spacing: 0.1em;
      font-size: rem-calc(16px);
      margin-right: 1em;
    }
    .value {
      font-style: italic;
      border-bottom: solid 1px $green;
      flex-grow: 2;
      transition: all 0.2s;
    }
    &:hover {
      .value {
        font-weight: 500;
      }
    }
  }
  a {
    display: block;
    background: #fff;
    font-size: rem-calc(16px);
    font-weight: 700;
    margin-top: 2rem;
    padding-left: 0.3em;
    transition: all 0.3s;
    &:hover {
      padding-left: 1em;
    }
  }
}

h3 {
  font-size: rem-calc(48px * 0.75);
  font-weight: 200;
  line-height: 1.15;
  margin: 0 0 0.5em;
  color: $beige;
  margin-bottom: 3em;

  @include desktop() {
    font-size: rem-calc(48px);
  }
}
.credits {
  margin: 2em 0 6em;
  position: relative;
}
.roman {
  color: $beige;
  position: absolute;
  width: 2em;
  left: -3em;
  text-align: right;
}
.dropCap {
  color: $green;
  //   position: absolute;
  font-weight: 100;
  float: left;
  font-size: rem-calc(160px);
  line-height: 2.1rem;
  padding-right: 0.2rem;
  margin-bottom: 1rem;
  margin-left: -0.13em;
  //   text-shadow: -2px 2px 0 $warmGray, -3px 3px 0 $green;
}
.is-small-col {
  @include mobile() {
    margin: 1rem 2rem;
  }
}
.sideDetails {
  p {
    margin: 0;
  }
  .huge {
    line-height: 1;
    font-size: 9rem;
    color: $dark;
    font-weight: 900;
    letter-spacing: 0.05em;
    font-feature-settings: normal;
    margin-top: -0.25em;
    @include mobile() {
      margin-top: -0.5em;
    }
    span {
      font-size: 6rem;
      font-weight: 200;
    }
  }
  .allSc,
  .sc {
    color: $dark;
    letter-spacing: 0.1em;
  }
}

ul {
  //   display: none;
  padding-left: 0;
  li::before {
    content: "";
  }
}

code {
  background: rgba($green, 0.1);
  border-radius: 0.6em;
  margin-right: 0.6em;
  padding: 0.05em;
  font-size: 0.65em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba($dark, 0.5);
}

.preUl {
  margin-bottom: 0;
}
</style>

<script>
let features = require('./features')

export default {
    data() {
        return {
            features
        }
    },
}
</script>