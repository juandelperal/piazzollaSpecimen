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
                text: "He was the only child of Vicente “Nonino” Piazzolla and Asunta Manetti (both children of Italian parents that had immigrated to Mar del Plata at the end of the 19th century). Astor’s early years were difficult. He was born with clubfoot, a defect in his right leg. From the age of two, he had several surgeries at the Sanatorio Marítimo.",
            },
            {
                year: 1924,
                place: 'nyc',
                title: 'Relocation to New York',
                subhead: 'Astor Piazzolla moved with his family to New York',
                text: "The Piazzolla family first settled in *Port Reading*, New Jersey, in the house of a relative. Later, they settled in an apartment in Manhattan. Astor adapted very quickly to the New York lifestyle, acquiring the fluency for speaking English with a New York accent. When Astor was seven or eight years old, his father gave him a bandoneon. \n At home he would listen to his father’s records of the tango orchestras of Carlos Gardel and Julio de Caro, and was exposed to jazz and classical music, including Bach, from an early age."
            },
            {
                year: 1934,
                place: 'nyc',
                title: 'Gardel',
                subhead: 'When Piazzolla met Carlos Gardel',
                text: "In 1934 he met Carlos Gardel, one of the most important figures in the history of Tango, and played a cameo role as a paper boy in his movie *El día que me quieras.* Gardel invited the young bandoneon player to join him on his tour. Despite the Piazzolla’s enthusiasm, his father decided that he was not old enough to go along.",
            },
            {
                year: 1937,
                place: 'bue',
                title: 'Back to Argentina',
                subhead: 'First orchestras',
                text: "After his return to Argentina he stayed in a pension in Buenos Aires. Between 1939 and 1944 he was a member of Anibal Troilo’s orchestra both as bandoneonist and arranger. Later he participated in the Fiorentino Orchestra. During those years he married Odette María Wolff and they had two children.",
            },
            {
                year: 1954,
                place: 'par',
                title: 'Studies in Paris',
                subhead: 'Rediscovering tango',
                text: "Piazzolla won a contest and with that money he traveled to Europe to study classical music in Paris where he trained with Nadia Boulanger.<br> Piazzolla was tired of tango and tried to hide his tango past and his bandoneon compositions to Nadia Boulanger, thinking that his destiny lay in classical music. When presenting his work, Piazzolla performed some of his classical compositions, but it was not until he performed *Triunfal*, one of his tangos, that she congratulated and encouraged him to continue his career in tango. <br>He studied classical composition, including counterpoint, which would play an important role in his later tango compositions."
            },
            {
                year: 1955,
                place: 'bue',
                title: 'Nuevo tango',
                subhead: 'In the Tango’s vanguard',
                text: "After his return to Argentina, Piazzolla formed the *Octeto de Buenos Aires.* His biographers indicate that he was willing to produce a national scandal and to break with the musical traditions of Tango that governed Argentina at that time. <br> In his new compositions Astor used all the knowledge he had acquired years before with the renowned *Alberto Ginastera* in Buenos Aires, and with *Nadia Boulanger* in France. <br> There were hard criticisms on the part of the more traditional *tangueros* who accused Piazzolla of being “the killer of tango”",
            },

             {
                year: 1958 ,
                place: 'nyc',
                title: 'Back to New York',
                subhead: 'Tango and Jazz',
                text: "In 1958 Piazzolla traveled to New York with his family. It was a very difficult period in his career since tango was not known in the United States. In that country, Piazzolla recorded two fusion albums that were a mix between tango and other styles: *An Evening in Buenos Aires* and *Take Me Dancing! The Latin Rhythms of Astor Piazzolla  & his Quintet.*<br> In 1959, during one of his tours, he received the news that his father had died in Argentina. He composed and dedicated his famous composition *Adios Nonino* to him.",
            },

            {
                year: 1960 ,
                place: 'nyc',
                title: 'Years in Argentina',
                subhead: 'His musical consecration',
                text: "After his return from New York, Piazzolla began a new period in his musical career. During the 1960s and 1970s he formed various musical groups and composed numerous works that achieved worldwide fame. Around those years he recorded an album, together with *Edmundo Correa,* with lyrics by the famous writer *José Luis Borges.* He also worked with other famous tango musicians, including *Amelita Baltar, Horacio Ferrer,* and *Héctor de Rosas.*",
            },

              {
                year: 1986 ,
                place: 'par',
                title: 'His last years',
                subhead: 'Years in Paris',
                text: "He was awarded for the soundtrack composed for the film *El Exilio de Gardel* directed by Pino Solanas. By then Piazzolla had moved to Paris. He himself said in an interview: <br>“Paris is my second homeland, because they understood what they did not understand about me here in Argentina.” There he spent his last years of life ",
            },
             {
                year: 1992 ,
                place: 'bue',
                title: 'Death',
                subhead: 'Astor Piazzolla’s legacy',
                text: "In August 1990 Piazzolla suffered a cerebral thrombosis when he fell into the bathroom of a Parisian apartment hotel. He was diagnosed with a cerebral infarction from which he did not recover. Days later he was transferred to Buenos Aires, where he finally died two years later on July 4, 1992, at the age of 71. Throughout his career, Piazzolla became a world-renowned musician. One of his biographers stated: <br> “In Argentina, gradually, his new tango has gained acceptance, and his music has influenced a new generation of tango composers. For much of his life his music was not considered tango; today, the genre would not be complete without Piazzolla.”",
            },
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