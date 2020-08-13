<template>
  <section id="opsz"
           data-scroll-section>
    <div class="margins">

      <div class="sample"
           :class="{roto: !withOpsz}">
        <div class="is-row">
          <div class="is-col is-5">
            <h1>Auto optical sizing</h1>
            <div class="flex">
              <label>off
              <input type="checkbox"
                     class="switch"
                     id="s1"
                     v-model="withOpsz">
              on
              </label>
            </div>
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
            sizes: [
                {
                    pt: '5pt',
                    name: 'Diamond',
                    mm: '1.5875mm',
                },
                {
                    pt: '5pt',
                    name: 'Pearl',
                    mm: '≈1.764mm',
                },
                {
                    pt: '6pt',
                    name: 'Nonpareil',
                    mm: '≈2.117mm',
                },
                {
                    pt: '7pt',
                    name: 'Minion',
                    mm: '≈2.469mm',
                },
                {
                    pt: '8pt',
                    name: 'Brevier',
                    mm: '≈2.822mm',
                },
                {
                    pt: '9pt',
                    name: 'Bourgeois',
                    mm: '3.175mm',
                },
                {
                    pt: '10pt',
                    name: 'Long Primer',
                    mm: '≈3.528mm',
                },
                {
                    pt: '11pt',
                    name: 'Small Pica',
                    mm: '≈3.881mm',
                },
                {
                    pt: '12pt',
                    name: 'Pica',
                    mm: '≈4.233mm',
                },
                {
                    pt: '14pt',
                    name: 'English',
                    mm: '≈4.939mm',
                },
                {
                    pt: '18pt',
                    name: 'Great Primer',
                    mm: '6.35mm',
                },
            ]
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

    h1,
    h3 {
      font-variation-settings: "opsz" 8;
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
      font-weight: 300;
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