<template>
  <footer>
    <div class="margins">
      <div class="is-row">
        <div class="is-col">
          <h4>Piazzolla</h4>
          <p>
            Designed with love by Juan Pablo del Peral for
            <nobr>
              <a href="https://huertatipografica.com/"
                 target="_blank">
                 Huerta Tipográfica
              </a>
            </nobr> with the valuable help of Panagiotis Haratzopoulos, Krassen Krestev, the Google Fonts team and <a target="_blank"
               href="https://github.com/huertatipografica/piazzolla/blob/master/CONTRIBUTORS.txt">more people</a>.
          </p>
        </div>
        <div class="is-col">
          <h4>Piazzolla's web-specimen </h4>
          <p>
            Designed and coded by <a target="_blank" href="https://luciadomenech.com/">Lucía Domenech</a> and Juan Pablo del Peral. Content editing by Eliana Fucili and Esteban Aguilera.
          </p>
        </div>
        <div class="is-col">
        </div>
        <div class="is-col">
          <h4>&nbsp;</h4>
          <ul>

            <li>
              <a href="https://huertatipografica.com/en/fonts/piazolla"
                 target="_blank">
                Download
              </a>
            </li>

            <li>
              <a href="https://fonts.google.com/specimen/Piazzolla"
                 target="_blank">
                Use in Google Fonts
              </a>
            </li>

            <li>
              <a href="https://github.com/huertatipografica/piazzolla"
                 target="_blank">
                Contribute
              </a>
            </li>

            <li>
              <a href="https://huertatipografica.com/"
                 target="_blank">
                Huerta Tipográfica
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins";
footer {
  // color: $beige2;
  // background: #fff;
  // border-top: 1px solid $beige4;

  background: $dark;
  color: $beige;

  //   background: rgba($beige, 0.1);
  //   color: $dark4;

  // background: $green;
  // color: $dark4;

  padding: 3em 0;
  font-weight: 100;
  font-size: rem-calc(15px);
  margin-top: 4rem;

  p {
    a {
      color: #fff;
    }
  }

  h4 {
    margin-bottom: 1em;
    color: #fff;
    font-weight: 400;
    font-variant: small-caps;
    letter-spacing: 0.1em;
  }

  ul li {
    :hover::before {
      margin-left: -0.8em;
    }
    a {
      transition: all 0.3s;
      padding: 0.3em;
      display: inline-block;
      &:hover {
        //   background: $green;
        color: $green;
        font-weight: 600;
      }
    }
  }
  @include mobile() {
    text-align: center;
    p {
      margin-bottom: 2rem;
    }
    ul li {
      border-bottom: 1px solid $beige4;
    }
  }
}
</style>