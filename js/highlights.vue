<template>
  <section id="highlights">
    <div class="margins">
      <div class="flex">
        <!-- Card -->
        <card class="highlight">
          <p>ñ</p>
          <template v-slot:back>
            <p>
              ñ <code>ntilde</code>
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight is-2 hidden-mobile">
          <p>
            H<span style="font-feature-settings: 'sinf';">2</span>O
          </p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>↕</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>₪</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>@</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>



        <!-- Card -->
        <card class="highlight">
          <p>₿</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>₹</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>a</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Ԯб</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p style="font-feature-settings: 'frac';">3/8</p>
          <template v-slot:back>
            <p>
              Arbitrary fractions
            </p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p>
            <em>fft</em>
          </p>
          <template v-slot:back>
            <p>Dynamic ligatures.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>ῼΰ</p>
          <template v-slot:back>
            <p>
              Supports the polytonic greek orthography
              <em>Πολυτονικό σύστημα γραφής</em>
            </p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p lang="bg">
            <em>
              Дв
            </em>
          </p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>&</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p style="font-feature-settings: inherit;">
            εξ
          </p>
          <template v-slot:back>
            <p>
              Polytonic greek support
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
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>


        <!-- Card -->
        <card class="highlight">
          <p>֏</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p style="font-feature-settings: 'ss01';">vi</p>
          <template v-slot:back>
            <p>Roman numerals</p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p>ẞß</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight is-3 hidden-mobile">
          <p class="medium">
            <span style="font-feature-settings: 'case' 0;">[o-x]</span>
            →
            <span style="font-feature-settings: 'case' 1;">[O-X]</span>
          </p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>∂</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p lang="nl">
            bíj
          </p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>®</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>
            m<span style="font-feature-settings: 'sups';">2</span>
          </p>

          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
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
    width: calc(100% / 4 - 3px);
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