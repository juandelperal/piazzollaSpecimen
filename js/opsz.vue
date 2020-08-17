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

            <div class="text">
              <p>
                <span class="sc">For the purpose</span> of this article it is easiest to classify sizes of type in three groups —large, medium and small. The printer or designer called on to work in one of these size-groups chooses a face that shows up well in it.
              </p>

            </div>
          </div>
          <div class="is-col is-4 is-offset-1">
            <div class="controls">
              <div class="flex">
                <h4>Auto optical sizing</h4>

                <input type="checkbox"
                       class="switch"
                       v-model="withOpsz">
              </div>
              <div class="explanation">
                <p class="fig sc small">Variable fonts</p>
                <p class="small">
                  Piazzolla allows you to improve the quality of text legibility in small sizes. This works automatically in all modern browsers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="is-row"
             :class="{roto: !withOpsz}">
          <div class="is-col inspectable is-7">
            <p class="smaller">
              <em>Plantin</em>, for example, is very popular in small sizes up to 10-point; <em>Imprint</em> is used a great deal in 11-, 12- and 14-point; Fry's <em>Baskerville</em> is a favourite for large display. But there are no typefaces that excel in all three groups—hardly any, in two of them.
            </p>
            <p>Typographers accept the situation, and show their skill by calling for this or that type as the best design for the scale in which they are working. It is no hardship to them to leave unused the many available poor designs in any of the three groups. For the printer, and more especially the typefounder, on the other hand, it is wasteful to make and stock type-faces in unwanted sizes.</p>

          </div>
          <div class="is-col inspectable is-4 is-offset-1">
            <div class="tiny">
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
            withOpsz: 1,
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
  .flex {
    display: flex;
    justify-content: space-between;
  }

  .smaller {
    font-size: rem-calc(15px);
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 1.6rem;
  }

  .sideNote {
    // position: absolute;
    right: 0;
  }
  .explanation {
    // color: white;
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
    background: white;
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
      }
    }

    .title {
      border-bottom: 2px solid $beige4;
      border-top: 2px solid $beige4;
      padding: 1rem 0 0.8rem;
      margin-bottom: 2rem;
      h3 {
        font-size: 2em;
        font-weight: 200;
        margin: 0;

        em {
          font-weight: 700;
        }
      }
      p {
        margin-top: 1rem;
        // font-weight: 100;
        color: $dark2;
      }
    }
  }
}
</style>