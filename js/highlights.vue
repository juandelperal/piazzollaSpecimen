<template>
  <section id="highlights">
    <div class="margins">
      <h3>Highlights</h3>

      <div class="flex">
        <!-- Card -->
        <card class="highlight">
          <p>ñ</p>
          <template v-slot:back>
            <p>
              <code>00F1</code>
              <em>eñe</em> (ntilde)
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight is-2 hidden-mobile">
          <p>
            H<span style="font-feature-settings: 'sinf';">2</span>O
          </p>
          <template v-slot:back>
            <p>
              <code>sinf</code>
              Scientific Inferiors
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>↕</p>
          <template v-slot:back>
            <p>
              <code>ss02</code>
              -> with Stylistic Set 2 (Dynamic arrows and triangles)
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>
            <em>fft</em>
          </p>
          <template v-slot:back>
            <p>
              <code>liga</code>
              Dynamic standard ligatures
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>@</p>
          <template v-slot:back>
            <p>
              <code>U+0040</code>
              at
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>₿</p>
          <template v-slot:back>
            <p>
              <code>U+20BF</code>
              Bitcoin symbol
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>₪</p>
          <template v-slot:back>
            <p>
              <code>U+20AA</code>
              Shekel symbol
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>ẫġ</p>
          <template v-slot:back>
            <p>
              Extended Latin character set
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>₹</p>
          <template v-slot:back>
            <p>
              <code>U+20B9</code>
              Indian rupee
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Ԯб</p>
          <template v-slot:back>
            <p>
              Extended Cyrillic support
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p style="font-feature-settings: 'frac';">3/8</p>
          <template v-slot:back>
            <p>
              <code>frac</code>
              Arbitrary fractions
            </p>
          </template>
        </card>

        <!--  -->

        <!-- Card -->
        <card class="highlight">
          <p lang="bg">
            <em>
              Дв
            </em>
          </p>
          <template v-slot:back>
            <p>
              Cyrillic localization for <em>Bulgarian, Serbian</em> and more
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>
            m<span style="font-feature-settings: 'sups';">2</span>
          </p>

          <template v-slot:back>
            <p>
              <code>sups</code>
              Superscript numbers and letters
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p style="font-feature-settings: inherit;">
            Ψπ
          </p>
          <template v-slot:back>
            <p>
              Greek <em>(+polytonic)</em> support
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>&</p>
          <template v-slot:back>
            <p>
              <code>U+0026</code>
              ampersand
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p style="font-feature-settings: 'ss01';">vi</p>
          <template v-slot:back>
            <p>
              <code>ss01</code>
              Roman numerals
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>₴</p>
          <template v-slot:back>
            <p>
              <code>U+20B4</code>
              Hryvnia symbol
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight is-2 hidden-mobile">
          <p class="medium">
            <span style="font-feature-settings: 'pnum' 0, 'onum' 0;">36</span>
            →
            <span style="font-feature-settings: 'pnum' 1, 'onum' 1;">36</span>
          </p>
          <template v-slot:back>
            <p>
              <em>Lining</em> and <em>oldstyle</em> numbers, both in <em>proportional</em> and <em>tabular</em> versions
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>ẞß</p>
          <template v-slot:back>
            <p>
              <code>U+1E9E</code>
              Capital sharp S or german <em>Eszett</em>
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p lang="nl">
            bíj
          </p>
          <template v-slot:back>
            <p>
              Language localizations for <em>Guaraní, Catalán, Dutch, Romanian</em> and more
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight is-3 hidden-mobile">
          <p class="medium">
            <span style="font-feature-settings: 'case' 0;">[o-n]</span>
            <span style="font-feature-settings: 'case' 1;">[O-N]</span>
          </p>
          <template v-slot:back>
            <p>
              <code>case</code>
              Case-Sensitive variations
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>√∂</p>
          <template v-slot:back>
            <p>Extensive math character set</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>▶</p>
          <template v-slot:back>
            <p>
              <code>U+25B6</code>
              Arrows, triangles and useful symbols
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>ῼΰ</p>
          <template v-slot:back>
            <p>
              Supports the polytonic Greek orthography
              <em class="hidden-mobile">Πολυτονικό σύστημα γραφής</em>
            </p>
          </template>
        </card>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins";

.flex {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.highlight {
  border: solid 1.5px $warmGray;
  height: rem-calc(160px);

  .medium {
    font-size: 0.85em;
    font-weight: 140;
    margin-top: 0.6rem;
  }

  @include mobile() {
    width: calc(100% / 3 - 3px);
  }

  @include desktop() {
    width: calc(100% / 7 - 3px);
    &.is-2 {
      width: calc(200% / 7 - 3px);
    }
    &.is-3 {
      width: calc(300% / 7 - 3px);
    }
  }
  code {
    padding: 0.1em 0.5em;
    border-radius: 0.4em;
    display: table;
    font-size: 0.85em;
    border: solid 1px $beige2;
    color: $warmGray;
  }
}
</style>


<script>
import card from './card'

export default {
    components: {card},
    data() {
        return {
            //
        }
    },
}
</script>