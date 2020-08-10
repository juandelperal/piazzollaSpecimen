<template>
  <section id="marquee"
           data-scroll-section>

    <div class="overflowable">
      <div class="margins relative">
        <div class="controlSlider">
          <p class="sliderTitle">
            Variable weight
          </p>
          <p class="extremes">
            <span class="a left w100">
              a
            </span>
            <span class="a right w900">
              a
            </span>
            <span class="a mobile"
                  ref="mobile">
              a
            </span>
            <span class="actual"
                  ref="actual">{{ weight }}</span>
          </p>

          <div class="flex">
            <label>100</label>
            <input type="range"
                   min="100"
                   max="900"
                   v-model="weight" />
            <label>900</label>
          </div>

        </div>
      </div>
    </div>

    <div class="marquee"
         v-for="line in lines">
      <div class="content">
        <div class="text"
             style="animation-duration: 200s;">
          <p>
            <span v-for="i in 7">
              <span v-for="item in line">
                <span class="number"
                      :style="`font-weight: ${ weight } ;`">{{item.number}}</span>
                <span class="unit">{{item.unit}}</span>
                <span class="legend">{{item.legend}}</span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
        weight: 100,
        lines: [
          [
            {
              number: "123",
              unit: "h",
              legend: "de música compuesta"
            },
            {
              number: "234",
              unit: "",
              legend: "obras"
            },
            {
              number: "8",
              unit: "",
              legend: "discos"
            }
          ],
          [
            {
              number: "123",
              unit: "h",
              legend: "de música compuesta"
            },
            {
              number: "234",
              unit: "",
              legend: "obras"
            },
            {
              number: "8",
              unit: "años",
              legend: "discos"
            }
          ],
          [
            {
              number: "123",
              unit: "h",
              legend: "de invitados compuesta"
            },
            {
              number: "13.234",
              unit: "km",
              legend: "obras"
            },
            {
              number: "8",
              unit: "",
              legend: "discos"
            }
          ]
        ]

    };
  },
  methods: {
    interpolate(x1, y1, x3, y3, x2) {
        return ((x2 - x1) * (y3 - y1) / (x3 - x1)) + y1
    }
  },
  mounted() {
    this.weight = 200
  },
  watch: {
      weight: function (val) {
        this.$refs.mobile.style.fontWeight = val
        this.$refs.mobile.style.left = this.interpolate(100, 0, 900, 100, val) + '%'
        this.$refs.actual.style.left = this.$refs.mobile.style.left
      },
  },

};
</script>


<style lang="scss" scoped>
@import "../scss/variables";

.overflowable {
  overflow: hidden;
  position: absolute;
  height: 100vh;
  width: 100vw;
}
.controlSlider {
  position: absolute;
  z-index: 1;
  margin-top: 9.5rem;
  width: 12rem;
  font-variant-numeric: lining-nums tabular-nums;
  background: rgba(#fff, 1);
  right: -100rem;
  padding: 2rem 102rem 2rem 2rem;
  //   * {
  //     outline: solid #000 1px;
  //   }
  .sliderTitle {
    position: absolute;
    font-size: 0.7rem;
    top: -1.2rem;
    left: 0;
    font-variant-caps: all-small-caps;
    letter-spacing: 0.1em;
    color: $beige4;
  }
  .flex {
    display: flex;
    font-size: 0.7rem;
    color: $beige4;
    align-items: center;
    input {
      margin: 0.5em;
      text-align: center;
    }
  }
  .actual {
    position: absolute;
    color: $beige4;
    font-size: 0.7rem;
    text-align: center;
    width: 3.6rem;
    margin-top: -1.9rem;
  }
  p.extremes {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 0;
    margin-right: 0.55em;
    margin-top: -0.05em;
    height: 0.8em;
    font-size: 8rem;
    line-height: 0.5em;
  }
  .a {
    color: $warmGray;
    position: absolute;
    text-align: center;
    &.right {
      left: 100%;
    }
    &.left {
      left: 0%;
    }
  }
  .mobile {
    color: #000;
  }
}
.marquee {
  font-variant-numeric: oldstyle-nums tabular-nums;
  font-weight: 100;
  font-size: 8rem;
  color: $dark2;
  p {
    margin: 0;
    line-height: 1.1;
  }
  .number {
    // transition: all 0.1s;
    color: $dark;
  }
  .unit {
    color: #fff;
  }
  .legend {
    font-size: 0.125em;
    font-weight: 400;
    color: $beige;
    vertical-align: 3.3em;
    letter-spacing: 0.1em;
    font-variant: all-small-caps;
    margin-right: 4em;
  }
}
.marquee {
  overflow: hidden;
  .content {
    width: 100000px;
  }
  .text {
    animation-name: marqueAnimation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    float: left;
  }
  .paused .text {
    animation-play-state: paused;
  }
  &:nth-child(odd) {
    .text {
      animation-direction: reverse;
    }
  }
}
@keyframes marqueAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>