<template>
  <section
    data-scroll-section
    id="marquee"
  >
    <div class="overflowable">
      <div class="margins relative">
        <div class="controlSlider">
          <h4 class="sliderTitle">Variable weight</h4>
          <p class="extremes">
            <span class="a left w100">a</span>
            <span class="a right w900">a</span>
            <span
              class="a mobile"
              ref="mobile"
            >a</span>
          </p>

          <div class="flex">
            <label>100</label>
            <input
              max="900"
              min="100"
              type="range"
              v-model="weight"
            />
            <label>900</label>
          </div>
          <p
            class="actual"
            ref="actual"
          >{{ weight }}</p>
        </div>
      </div>
    </div>

    <div
      class="marquee"
      v-for="line in lines"
    >
      <div class="content">
        <div class="text">
          <p>
            <span v-for="i in 2">
              <span v-for="item in line">
                <span
                  :style="`font-weight: ${ weight } ;`"
                  class="number"
                >{{item.number}}</span>
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
            number: "11/mar",
            unit: "",
            legend: "Birthday",
          },

          {
            number: "71",
            unit: "years",
            legend: "lifetime",
          },
          {
            number: "50",
            unit: "",
            legend: "Studio Albums",
          },
        ],
        [
          {
            number: "11",
            unit: "years",
            legend: "Composed his first tango",
          },
          {
            number: "1977",
            unit: "",
            legend: "Libertango album released",
          },
        ],
        [
          {
            number: "750",
            unit: "+",
            legend: "works",
          },
          {
            number: "40",
            unit: "",
            legend: "Film scores",
          },
          {
            number: "1959",
            unit: "",
            legend: "Adios Nonino",
          },
        ],
      ],
    };
  },
  methods: {
    interpolate(x1, y1, x3, y3, x2) {
      return ((x2 - x1) * (y3 - y1)) / (x3 - x1) + y1;
    },
  },
  mounted() {
    this.weight = 200;
  },
  watch: {
    weight: function (val) {
      this.$refs.mobile.style.fontWeight = val;
      this.$refs.mobile.style.left =
        this.interpolate(100, 0, 900, 100, val) + "%";
      //   this.$refs.actual.style.marginLeft = this.$refs.mobile.style.left;
    },
  },
};
</script>


<style lang="scss"
       scoped>
@import "../scss/variables";
@import "../scss/mixins";

#marquee {
  .overflowable {
    overflow: hidden;
    position: absolute;
    height: 14em;
    width: 100vw;
    .controlSlider {
      position: absolute;
      z-index: 1;
      margin-top: 1.5em;
      width: 11em;
      font-variant-numeric: lining-nums tabular-nums;
      background: rgba(#fff, 1);
      right: -100em;
      padding: 1em 102em 1em 1.5em;
      h4 {
        margin-bottom: 0;
      }
      .flex {
        display: flex;
        font-size: 0.7em;
        color: $beige3;
        align-items: center;
        input {
          margin: 0.5em;
          text-align: center;
        }
      }
      .actual {
        text-align: center;
        color: $beige3;
        font-size: 0.7em;
        margin: 0;
      }
      p.extremes {
        display: flex;
        justify-content: space-between;
        position: relative;
        margin: 0;
        margin-right: 0.55em;
        // margin-top: -0.05em;
        height: 0.75em;
        font-size: 7.5em;
        line-height: 0.38em;
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
  }

  .overflowable {
    margin-top: 8em;
  }

  @include mobile() {
    font-size: calc(1vw * 3);
  }

  .marquee {
    font-variant-numeric: oldstyle-nums tabular-nums;
    font-weight: 100;
    font-size: 8em;
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
      animation-duration: 38s;
      animation-name: marqueAnimation;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      float: left;
    }

    .paused .text {
      animation-play-state: paused;
    }

    &:nth-child(even) {
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
      transform: translateX(-50%);
    }
  }
}
</style>