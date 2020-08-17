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
                text: "He was the only child of Vicente  “Nonino” Piazzolla and Asunta Manetti (both born in Mar del Plata, children of Italian parents that had immigrated to Mar del Plata at the end of the 19th century). Astor’s early years were difficult. He was born with clubfoot, a defect in his right leg. From the age of two, he had several surgeries at the Sanatorio Marítimo.",
            },
            {
                year: 1924,
                place: 'nyc',
                title: 'Relocation to New York',
                subhead: 'Astor Piazzolla moved with his family to New York',
                text: "The Piazzolla family first settled in *Port Reading*, New Jersey, in the home of a relative. Later, they settled in an apartment in Manhattan. Astor adapted very quickly to life in New York, acquiring that naturalness to speak English with a New York accent that would accompany him throughout his life. When Astor was seven or eight years old, his father gave him a bandoneon. \n At home he would listen to his father’s records of the tango orchestras of Carlos Gardel and Julio de Caro, and was exposed to jazz and classical music, including Bach, from an early age."
            },
            {
                year: 1934,
                place: 'nyc',
                title: 'Gardel',
                subhead: 'When Piazzolla met Carlos Gardel',
                text: "In 1934 he met Carlos Gardel, one of the most important figures in the history of tango, and played a cameo role as a paper boy in his movie *El día que me quieras.* Gardel invited the young bandoneon player to join him on his tour. Despite the Piazzolla’s enthusiasm, his father decided that he was not old enough to go along.",
            },
            {
                year: 1937,
                place: 'bue',
                title: 'Back to Argentina',
                subhead: 'First orchestras',
                text: "After his return to Argentina he stayed in a pension in Buenos Aires. Between 1939 and 1944 he was a member of Anibal Troilo’s orchestra as bandoneonist and arranger. Later  he participated in the Fiorentino Orchestra. During those years he married Odette María Wolff and they had two children.",
            },
            {
                year: 1954,
                place: 'par',
                title: 'Studies in Paris',
                subhead: 'Rediscovering tango',
                text: "He won a contest and with that money he traveled to Europe to study classical music in Paris. <br> There he trained with Nadia Boulanger. Piazzolla was tired of tango and tried to hide his tango past and his bandoneon compositions from Nadia Boulanger, thinking that his destiny lay in classical music. When presenting his work, Piazzolla performed some of his classically inspired compositions, but it was not until he performed *Triunfal*, one of his tangos that she congratulated him and encouraged him to continue his career in tango. <br>He studied classical composition, including counterpoint, which will play an important role in his later tango compositions."
            },
            {
                year: 1955,
                place: 'bue',
                title: 'Nuevo tango',
                subhead: 'In the Tango’s vanguard',
                text: "After his return to Argentina, Piazzolla formed the *Octeto de Buenos Aires.* His biographers indicate that he was willing to produce a national scandal and to break with all the musical traditions that governed Argentina at that time. <br> In his new compositions Astror used all the knowledge he had acquired years before with the renowned *Alberto Ginastera* in Buenos Aires, and the new ones with *Nadia Boulanger.* <br> There were certain criticisms on the part of the more traditional *tangueros* who accused Piazzolla of being “the killer of tango”",
            },

             {
                year: 1958 ,
                place: 'nyc',
                title: 'Back to New York',
                subhead: 'Tango and Jazz',
                text: "In 1958 he traveled to New York with his family. It was a very difficult period in his career since tango was not known in the United States. In that country, Piazzolla recorded two albums that were a mix between tango and jazz: *An Evening in Buenos Aires* and *Take Me Dancing! The Latin Rhythms of Astor Piazzolla  & his Quintet.*<br> In 1959 he received the news that his father had died in Argentina. He composed and dedicated his famous work *Adios Nonino* to him.",
            },

            {
                year: 1960 ,
                place: 'nyc',
                title: 'Years in Argentina',
                subhead: 'His musical consecration',
                text: "After his return from New York, Piazzolla began a new period in his musical career. During the 1960s and 1970s he formed various musical groups and composed numerous works that achieved worldwide fame. Around those years he recorded an album, together with *Edmundo Correa,* with lyrics by the famous writer *José Luis Borges.* He also worked with famous musicians, including *Amelita Baltar, Horacio Ferrer,* and *Héctor de Rosas.*",
            },

              {
                year: 1986 ,
                place: 'par',
                title: 'His last years',
                subhead: 'Years in Paris',
                text: "He was awarded for the soundtrack composed for the film *El Exilio de Gardel* directed by Pino Solanas. By then Piazzolla had moved to Paris. He himself said in an interview: <br>“Paris is my second homeland, because they understood what they did not understand me here in Argentina.” There he spent his last years of life ",
            },
             {
                year: 1992 ,
                place: 'bue',
                title: 'Death',
                subhead: 'The end of his life and his legacy',
                text: "In August 1990 Piazzolla suffered a cerebral thrombosis when he fell into the bathroom of a Parisian apartment hotel. He was admitted with a cerebral infarction from which he did not recover. Days later he was transferred to Buenos Aires, where he finally died two years later on July 4, 1992, at the age of 71. Throughout his career, Piazzolla became a world-renowned musician. One of his biographers stated: <br> “In Argentina, gradually, his new tango has gained acceptance, and his music has influenced a new generation of tango composers. For much of his life his music was not considered tango; today, the genre would not be complete without Piazzolla.”",
            },

            // https://en.wikipedia.org/wiki/Astor_Piazzolla#Biography


            // Piazzolla’s Orquesta Típica|Orquesta Típica (in English: Piazzolla’s Traditional Orchestra), a.k.a. the 1946 Orchestra, 1946–50.
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