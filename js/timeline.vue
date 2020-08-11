<template>
  <section id="timeline"
           data-scroll-section>
    <!-- each -->
    <div class="moment"
         v-for="(moment, k) in timeline"
         @click="setActive"
         :key="k">
      <div class="margins">
        <div class="is-row">
          <div class="is-col is-3">
            <h2 class="year">{{ moment.year }}</h2>
          </div>
          <div class="is-col is-2">
            <p class="place">{{ moment.place }}</p>
          </div>
          <div class="is-col is-7">
            <div class="text">
              <h3>{{ moment.title }}</h3>
              <div class="card">
                <h4>{{ moment.subhead }}</h4>
                <vue-showdown :markdown="moment.text" />
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

    timeline: [
            {
                year: 1921,
                place: 'mdq',
                title: 'Birth',
                subhead: 'Piazzolla was born in Mar del Plata, Argentina',
                text: 'He was the only child of Italian immigrant parents, Vicente "Nonino" Piazzolla and Assunta Manetti. His paternal grandfather, a sailor and fisherman named Pantaleo (later Pantaleón) Piazzolla, had immigrated to Mar del Plata from Trani, a seaport in the southeastern Italian region of Apulia, at the end of the 19th century. His mother was the daughter of two Italian immigrants from Lucca in the central region of Tuscany.',
            },
            {
                year: 1925,
                place: 'nyc',
                title: 'Relocation to New York',
                subhead: 'Astor Piazzolla moved with his family to Greenwich Village',
                text: "In those days it was a violent neighbourhood inhabited by a volatile mixture of gangsters and hard-working immigrants. His parents worked long hours and Piazzolla soon learned to take care of himself on the streets despite having a limp.",
            },
            {
                year: 1929,
                place: 'nyc',
                title: 'First bandoneon',
                subhead: 'Early approach to music',
                text: "At home he would listen to his father's records of the tango orchestras of Carlos Gardel and Julio de Caro, and was exposed to jazz and classical music, including Bach, from an early age. He began to play the bandoneon after his father spotted one in a New York pawn shop in 1929.",
            },
            {
                year: 1934,
                place: 'nyc',
                title: 'Gardel',
                subhead: 'When Piazzolla met Carlos Gardel',
                text: "In 1934 he met Carlos Gardel, one of the most important figures in the history of tango, and played a cameo role as a paper boy in his movie El día que me quieras. Gardel invited the young bandoneon player to join him on his tour. Despite the Piazzolla's enthusiasm, his father decided that he was not old enough to go along.",
            },
            {
                year: 1936,
                place: 'mdq',
                title: 'Back to Argentina',
                subhead: 'First orchestras',
                text: "He began to play in a variety of tango orchestras and around this time he discovered the music of Elvino Vardaro’s sextet on the radio. Vardaro's novel interpretation of tango made a great impression on Piazzolla and years later he would become Piazzolla's violinist in his *Orquesta de Cuerdas* (String Orchestra) and his First Quintet.",
            },
            {
                year: 1938,
                place: 'bue',
                title: 'Troilo',
                subhead: 'Troilo, Ginastera and ',
                text: "Still 17 years old, Piazzolla joined the orchestra of the bandoneonist Aníbal Troilo, which would become one of the greatest tango orchestras of that time. Piazzolla also became Troilo's arranger and would occasionally play the piano for him. By 1941 he was earning a good wage, enough to pay for music lessons with *Alberto Ginastera,* an eminent Argentine composer of classical music.",
            },
            {
                year: 1954,
                place: 'par',
                title: 'Studies in Paris',
                subhead: 'Studies with Nadia Boulanger',
                text: "Piazzolla was tired of tango and tried to hide his tanguero past and his bandoneon compositions from *Nadia Boulanger,* thinking that his destiny lay in classical music. Introducing his work, Piazzolla played her a number of his classically inspired compositions, but it was not until he played his tango *Triunfal* that she congratulated him and encouraged him to pursue his career in tango. <br> He studied classical composition, including counterpoint, which was to play an important role in his later tango compositions. ",
            },
            {
                year: 1955,
                place: 'bue',
                title: 'Nuevo tango',
                subhead: 'In the Tango\'s vanguard',
                text: "Piazzolla was tired of tango and tried to hide his tanguero past and his bandoneon compositions from *Nadia Boulanger,* thinking that his destiny lay in classical music. Introducing his work, Piazzolla played her a number of his classically inspired compositions, but it was not until he played his tango *Triunfal* that she congratulated him and encouraged him to pursue his career in tango. <br> He studied classical composition, including counterpoint, which was to play an important role in his later tango compositions. ",
            },
            // https://en.wikipedia.org/wiki/Astor_Piazzolla#Biography


            // Piazzolla's Orquesta Típica|Orquesta Típica (in English: Piazzolla's Traditional Orchestra), a.k.a. the 1946 Orchestra, 1946–50.
            // Orquesta de Cuerdas (in English: String Orchestra), 1955–58.
            // Octeto Buenos Aires (in English: Buenos Aires Octet) 1955–58.
            // Jazz Tango Quintet, 1959.
            // Quinteto (in English: Quintet), a.k.a. the first Quintet, 1960–70.
            // Nuevo Octeto (in English: New Octet), 1963.
            // Conjunto 9 (in English: Ensemble 9), a.k.a. Noneto, 1971–72 & 1983.
            // Conjunto Electronico (in English: Electronic Ensemble), a.k.a. Electronic Octet, 1975.
            // Quinteto Tango Nuevo (in English: New Tango Quintet), a.k.a. the second Quintet, 1979–91.
            // Sexteto Nuevo Tango (in English: New Tango Sextet), 1989–91.
        ],
        };
    },
    methods: {
        setActive(event) {
            let moments = document.querySelectorAll('#timeline .moment')
            let moment = event.target.closest(".moment")

            moments.forEach(e => e.classList.remove('active') )
            moment.classList.add('active')
        }
    },
    mounted() {
        document.querySelectorAll('#timeline .moment')[0].classList.add('active')
    }
}
</script>


<style lang="scss" scoped>
@import "../scss/mixins";
@import "../scss/variables";

.moment {
  cursor: pointer;
  border-top: solid 1px #fff;
  padding-bottom: 0;
  margin-bottom: -1rem;
  * {
    transition: all 0.4s;
  }

  .year {
    font-feature-settings: "tnum" 1, "onum" 1;
    font-weight: 100;
    text-align: center;
    font-size: 4rem;
    color: rgba($beige, 0.5);
    line-height: 1;
    margin-top: -0.37em;
    margin-bottom: 0.6rem;
  }
  .place {
    font-variant: all-small-caps;
    letter-spacing: 0.1em;
    font-size: 0.75rem;
    color: $dark4;
    text-align: center;
    line-height: 5rem;
    margin-bottom: 0;
    margin-top: -1em;

    @include desktop() {
      margin-top: -3.2em;
    }
  }
  .text {
    h3 {
      font-size: 2em;
      line-height: 1.1;
      font-weight: 200;
      color: rgba($beige, 0.5);
      margin-top: -0.5em;
      @include mobile() {
        text-align: center;
      }
    }
    .card {
      transform: translateX(-2em);
      opacity: 0;
      position: relative;
      overflow-y: hidden;
      height: 0;
      padding: 2em;
    }
  }

  &.active {
    border-top-color: $green;
    .place {
      font-size: 1rem;
      @include desktop() {
        transform: translateY(0.82rem);
      }
    }
    .text {
      h3 {
        font-size: 3em;
      }
    }
    .card {
      transform: translateX(0);
      opacity: 1;
      height: auto;
      background-color: #fff;
      margin-bottom: 4rem;
    }
  }
  &:hover,
  &.active {
    .year {
      color: $dark;
      font-weight: 900;
    }
    .place {
      color: $dark;
      font-weight: 400;
    }
    .text {
      h3 {
        color: $dark;
        font-weight: 300;
      }
    }
  }
}
</style>