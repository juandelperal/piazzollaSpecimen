<template>
  <div class="scene">
    <div class="flippingCard"
         @click="flip">
      <div class="face front">
        <div class="flex">
          <slot></slot>
        </div>
      </div>
      <div class="face back">
        <div class="flex">
          <slot name="back"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins";

.scene {
  min-width: 80px;
  min-height: 80px;
  perspective: 600px;
  position: relative;

  .flippingCard {
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
    cursor: pointer;
    transform-style: preserve-3d;
    // user-select: none;
  }

  .flippingCard.isFlipped {
    transform: rotateY(180deg);
  }

  .face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .flex {
    display: flex;
    align-items: center;
    padding: 0.8rem;
  }

  .front {
    background: #fff;
    text-align: center;
    font-weight: 100;
    transition: all 0.2s;
    overflow: hidden;
    font-size: 3.7rem;
    line-height: 1.3;

    &:hover {
      background: $green;
      //   transform: rotateY(20deg);
    }
    p {
      width: 100%;
    }
  }

  .back {
    background: $dark2;
    transform: rotateY(180deg);
    font-size: 0.7em;
    color: $green;
  }
}
</style>


<script>
export default {
    methods: {
        flip(event) {
            console.log(this.$slots)
            console.log(this.$scopedSlots)
            let e = event.target.closest(".flippingCard")

            if (!e.classList.contains('isFlipped')) {
                e.classList.add('isFlipped')
                setTimeout(() => {
                    e.classList.remove('isFlipped')
                }, 3000)
            }

        }
    },

}
</script>