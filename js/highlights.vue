<template>
  <section id="highlights">
    <div class="margins">
      <div class="flex">
        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>
        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight is-2">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
          <template v-slot:back>
            <p>Lorem ipsum dolor, sit amet.</p>
          </template>
        </card>

        <!-- Card -->
        <card class="highlight">
          <p>Xx</p>
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
            isFlipped: false
        }
    },
}
</script>