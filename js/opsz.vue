<template>
  <section id="opsz"
           data-scroll-section>
    <div class="margins">

      <input type="checkbox"
             class="switch"
             id="s1"
             v-model="withOpsz">
      <label for="s1">With Optical sizing</label>

      <div class="sample inspectable"

           :class="{roto: !withOpsz}">
        <div class="is-row">
          <div class="is-col is-5">
            <h1>{{withOpsz ? 'With' : 'Without'}} auto optical sizing</h1>
          </div>
          <div class="is-col is-7">
            <div class="title">
              <h3>
                Dignissimos ducimus odit magnam
                <em>consequatur.</em>
              </h3>
              <p class="small">
                <span class="sc">Autor</span>
                <em>El título del libro</em>
              </p>
            </div>

            <div class="text">
              <p class="tiny">
                <strong>Coso</strong>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ea facilis nisi perferendis amet voluptates id odio, totam sint corrupti, placeat nihil harum sapiente sequi?
              </p>
              <p>
                <span class="roman">iv</span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ea facilis nisi perferendis amet voluptates id odio, totam sint corrupti, placeat nihil harum sapiente sequi aspernatur magnam culpa distinctio explicabo?
              </p>

              <div class="is-row is-mobile">
                <div class="is-col">
                  <p class="extremes big">
                    <strong>max</strong>Min
                  </p>
                  <p class="extremes"
                     style="font-size: 24px;">
                    <strong>max</strong>Min
                  </p>
                  <p class="extremes"
                     style="font-size: 10px;">
                    <strong>max</strong>Min
                  </p>
                </div>
                <div class="is-col">
                  <!--  -->
                  <p class="small">
                    <span class="sc">fig 1.</span>
                    <em>Weight extremes</em>
                    <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo eos eius dolores optio ipsum at veritatis. Inventore numquam ex earum, quia doloremque qui velit consequuntur. Saepe tempora molestias perspiciatis blanditiis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

export default {
    data() {
    return {
        withOpsz: true,
    };
    },

}
</script>


<style lang="scss" scoped>
@import "../scss/mixins";
@import "../scss/variables";
@import "../scss/mixins";
#opsz {
  .roto {
    font-optical-sizing: none;
    .text {
      font-variation-settings: "opsz" 30;
    }
    .title {
      h1,
      h3 {
        font-variation-settings: "opsz" 8;
      }
    }
  }

  .sample {
    .sc {
      margin-right: 1em;
      letter-spacing: 0.1em;
    }
    .text {
      position: relative;
      .tiny {
        width: 140px;
        font-size: rem-calc(10px);

        @include mobile() {
          float: left;
          margin: 0.8em 2em 1em 0;
        }
        @include desktop() {
          position: absolute;
          margin-top: 0.8em;
          margin-left: -170px;
        }
      }
    }
    h1,
    h3 {
      line-height: 1.1;
      margin: 0;
      font-weight: 800;
      font-size: 2em;
    }
    .title {
      h3 {
        font-weight: 100;
      }
      p {
        padding: 2em 0;
        margin-bottom: 3em;
        border-bottom: 1px solid #000;
      }
    }
    .extremes {
      font-weight: 100;
      font-size: 60px;
      margin-bottom: 0.3rem;
      // margin-bottom: 0;
      // line-height: 1.1;
      strong {
        font-weight: 900;
      }
    }
  }
}
</style>