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
        <div class="text">
          <p>
            <span v-for="i in 2">
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
@import "../scss/mixins";

#marquee {
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
      animation-duration: 35s;
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
      transform: translateX(-50%);
    }
  }
}
</style>