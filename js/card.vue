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

.scene {
  min-width: 100px;
  min-height: 100px;
  perspective: 600px;
  position: relative;

  .flippingCard {
    width: 100%;
    height: 100%;
    transition: transform 0.4s;
    cursor: pointer;
    transform-style: preserve-3d;
    user-select: none;
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
    padding: 0.5rem;
  }

  .front {
    background: #fff;
    text-align: center;
    font-weight: 100;
    font-size: 4rem;
    transition: all 0.2s;

    &:hover {
      font-weight: 300;
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
    font-size: 0.8em;
    color: $green;
  }
}
</style>


<script>
export default {
    methods: {
        flip(event) {
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