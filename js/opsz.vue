<template>
  <section id="opsz"
           data-scroll-section>
    <div class="margins">

      <div class="sample">
        <div class="is-row">

          <div class="is-col is-7 inspectable"
               :class="{roto: !withOpsz}">
            <div class="title">
              <h3>
                <em>Optical scale</em>
                in type founding
              </h3>
              <p class="small">
                <span class="sc">Harry Carter</span>
                from <em>Typography 4,</em> autumn of 1937
              </p>
            </div>

            <div class="textX">
              <p>
                <span class="sc">For the purpose</span> of this article it is easiest to classify sizes of type in three groups —large, medium and small. The printer or designer called on to work in one of these size-groups chooses a face that shows up well in it. <em>Plantin</em>, for example, is very popular in small sizes up to 10-point; Imprint is used a great deal in 11-, 12- and 14-point; Fry's <em>Baskerville</em> is a favourite for large display. But there are no typefaces that excel in all three groups—hardly any, in
                two of them.
              </p>
              <div class="is-row">
                <div class="is-col is-5 tiny">
                  <p class="sc">Point-size names</p>
                  <table>
                    <thead>
                      <tr>
                        <th class="left">Name</th>
                        <th class="right">Point size</th>
                        <th class="right">Milimeters</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="size in sizes"
                          :key="size.pt">
                        <td>{{ size.name }}</td>
                        <td class="right">{{ size.pt }}</td>
                        <td class="right">{{ size.mm }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="is-col is-7">
                  <p class="sideNote">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem pariatur necessitatibus. Numquam nostrum voluptatum eligendi corporis? Aspernatur consequatur ipsa fugit nemo explicabo modi sint! Dolores ea accusamus inventore vero.
                  </p>
                  <p class="smaller">
                    Typographers accept the situation, and show their skill by calling for this or that type as the best design for the scale in which they are working. It is no hardship to them to leave unused the many available poor designs in any of the three groups. For the printer, and more especially the typefounder, on the other hand, it is wasteful to make and stock type-faces in unwanted sizes.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div class="is-col is-5">
            <div class="controls">
              <h4>Auto optical sizing</h4>

              <label>off
                <input type="checkbox"
                       class="switch"
                       v-model="withOpsz">
                on
              </label>
              <p class="explanation small">
                The family has a Optical Size axis <code>(opsz)</code>, that works automatically in every modern browser.
              </p>
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
                    pt: '4.5pt',
                    name: 'Diamond',
                    mm: '1.588mm',
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
                    mm: '6.350mm',
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
  .smaller {
    // font-size: rem-calc(14px);
  }
  .sideNote {
    // position: absolute;
    right: 0;
  }
  .explanation {
    color: $beige;
    @include mobile() {
      padding-bottom: 3em;
      border-bottom: 1px solid $beige4;
    }
  }
  label {
    display: flex;
    // display: none;
    align-content: center;
    input {
      margin: 0.1rem 0.5rem;
    }
    color: $beige;
    font-style: italic;
    // font-weight: 200;
    margin: 0.5rem 0;
  }
  .roto {
    font-optical-sizing: none;
    .text {
      font-variation-settings: "opsz" 30;
    }
    h3 {
      font-variation-settings: "opsz" 10;
    }
  }
  .controls {
    display: none;
    background: $beige5;
    border-radius: 0.5rem;
    padding: 1rem;
  }

  .sample {
    .sc {
      margin-right: 1em;
      letter-spacing: 0.1em;
    }

    //   position: relative;
    .tiny {
      font-size: rem-calc(11px);
      // float: left;
      table {
        width: 100%;
      }
      th {
        font-weight: 400;
      }
      p {
        font-weight: 700;
        margin-left: 0.2rem;
      }
    }

    .title {
      h3 {
        font-size: 2em;
        font-weight: 200;
        margin: 0;

        em {
          font-weight: 700;
        }
      }
      p {
        padding: 1rem 0 2rem;
        margin-bottom: 3em;
        border-bottom: 1px solid $beige4;
        // font-weight: 100;
        color: $dark2;
      }
    }
  }
}
</style>