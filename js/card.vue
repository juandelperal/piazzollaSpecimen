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
    font-weight: 200;
    font-size: 4rem;
    transition: all 0.2s;

    &:hover {
      transform: rotateY(20deg);
    }
    p {
      width: 100%;
    }
  }

  .back {
    background: $green;
    transform: rotateY(180deg);
    font-size: 0.8em;
  }
}
</style>


<script>
export default {
    methods: {
        flip(event) {
            let element = event.target.closest(".flippingCard")
            element.classList.toggle('isFlipped')

            setTimeout(() => {
                element.classList.remove('isFlipped')
            }, 3500)
        }
    },

}
</script>