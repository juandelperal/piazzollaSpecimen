<template>
  <section
    data-scroll-section
    id="timeline"
  >
    <!-- each -->
    <div
      :key="k"
      @click="setActive"
      class="moment"
      v-for="(moment, k) in timeline"
    >
      <div class="margins">
        <div class="is-row inspectableX">
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
          place: "mdq",
          title: "Birth",
          subhead: "Piazzolla was born in Mar del Plata, Argentina",
          text:
            "He was the only child of Vicente “Nonino” Piazzolla and Asunta Manetti, both children of Italian parents that had immigrated to Mar del Plata at the end of the 19th century. Astor’s early years were difficult. He was born with clubfoot, a defect in his right leg. From the age of two, he had several surgeries.",
        },
        {
          year: 1924,
          place: "nyc",
          title: "Move to the US",
          subhead: "Astor Piazzolla moved with his family to New York",
          text:
            "The Piazzolla family first settled in Port Reading, New Jersey. Later, they moved to an apartment in Manhattan. Astor adjusted very quickly to the New York life style. When he was seven or eight years old, his father gave him a bandoneon. At home, he would listen to his father’s recordings of the tango orchestras of Carlos Gardel and Julio de Caro, and was exposed to jazz and classical music.",
        },
        {
          year: 1934,
          place: "nyc",
          title: "Gardel",
          subhead: "When Piazzolla met Carlos Gardel",
          text:
            "In 1934, he met Carlos Gardel, one of the most important figures in the history of tango, and played a cameo role as a paper boy in his movie *El día que me quieras.* Gardel invited the young bandoneon player to join him on his tour. Despite Piazzolla’s enthusiasm, his father decided that he was not old enough to go along.",
        },
        {
          year: 1937,
          place: "bue",
          title: "Argentina",
          subhead: "First orchestras",
          text:
            "After his return to Argentina, he stayed in Buenos Aires. Between 1939 and 1944, he was a member of Anibal Troilo’s orchestra both as bandoneonist and arranger. Later, he participated in the Fiorentino Orchestra. During those years, he married Odette María Wolff and they had two children.",
        },
        {
          year: 1954,
          place: "par",
          title: "Nadia Boulanger",
          subhead: "Rediscovering tango in Paris",
          text:
            "Piazzolla won a contest and with that money traveled to Europe to study classical music in Paris with Nadia Boulanger. He thought his future lay in classical music. When presenting his work to her, Piazzolla performed some of his classically inspired compositions, but it was not until he performed one of his tangos that she congratulated him and encouraged him to continue his career in that genre. He studied classical composition, including counterpoint, which would play a central role in his later tango works.",
        },
        {
          year: 1955,
          place: "bue",
          title: "Killer of tango",
          subhead: "In the tango’s vanguard",
          text:
            "His biographers indicate that, after his return to Argentina, he was willing to produce a national scandal and to break with the musical traditions of tango at that time. In his new compositions, Piazzolla used all the knowledge he had acquired years before with Ginastera and Boulanger. His work was received with harsh criticism from the more traditional *tangueros,* who accused Piazzolla of being the *killer of tango*.",
        },

        {
          year: 1958,
          place: "nyc",
          title: "Back in the US",
          subhead: "Tango and Jazz",
          text:
            "In 1958 Piazzolla traveled to New York with his family. It was a very difficult period in his career since tango was not known in the United States. In that country, Piazzolla recorded two albums mixing tango and latin-jazz elements. In 1959, during one of his tours, he received the news that his father had died in Argentina. He composed and dedicated his famous composition *Adios Nonino* to him.",
        },

        {
          year: 1960,
          place: "arg",
          title: "His consecration",
          subhead: "Back in Argentina",
          text:
            "After his return from New York, Piazzolla began a new period in his musical career. During the 60s and 70s, he formed several musical groups and composed numerous works that achieved worldwide fame. Around those years he recorded an album with *Edmundo Correa,* with lyrics by the famous writer *José Luis Borges.* He also worked with famous tango musicians including *Amelita Baltar, Horacio Ferrer,* and *Héctor de Rosas.*",
        },

        {
          year: 1986,
          place: "par",
          title: "Last years",
          subhead: "Years in Paris",
          text:
            "He was awarded for the soundtrack composed for the film *El Exilio de Gardel* directed by Pino Solanas. By then, Piazzolla had moved to Paris, where he spent his last years of life. As he said in an interview: *—Paris is my second homeland, because they understood what they did not understand about me here in Argentina.*",
        },
        {
          year: 1992,
          place: "bue",
          title: "Death",
          subhead: "Astor Piazzolla’s legacy",
          text:
            "In 1990 Piazzolla, suffered a cerebral bleed when he fell in the bathroom of a hotel in Paris. Days later, he was transferred to Buenos Aires, where he finally died on July 4, 1992, at the age of 71. One of his biographers stated: *“In Argentina, gradually, his new tango has gained acceptance, and his music has influenced a new generation of tango composers. For much of his life, his music was not considered tango; today, the genre would not be complete without Piazzolla.”*",
        },
      ],
    };
  },
  methods: {
    setActive(event) {
      let moments = document.querySelectorAll("#timeline .moment");
      let moment = event.target.closest(".moment");

      moments.forEach((e) => e.classList.remove("active"));
      moment.classList.add("active");

      // Scolling
      moment.scrollIntoView({
        behavior: "instant",
      });

      window.scrollTo({
        top: window.scrollY - 200,
        behavior: "smooth",
      });
    },
    autoActivate() {
      let elements, winHeight;

      function init() {
        elements = document.querySelectorAll(".moment");
        winHeight = window.innerHeight;
      }

      function activate() {
        let element, top, bottom, prev;
        winHeight = window.innerHeight;

        for (var i = 0; i < elements.length; i++) {
          element = elements[i];
          top = elements[i].getBoundingClientRect().top;
          bottom = elements[i].getBoundingClientRect().bottom;

          if (top > winHeight / 7) {
            prev = element.previousSibling;

            if (
              prev == null ||
              winHeight - prev.getBoundingClientRect().bottom > winHeight / 4
            ) {
              elements.forEach((e) => e.classList.remove("active"));
              element.classList.add("active");

              return;
            }
          }
        }
      }

      window.addEventListener("scroll", activate);
      window.addEventListener("resize", init);

      init();
      activate();
    },
  },
  mounted() {
    document.querySelectorAll("#timeline .moment")[0].classList.add("active");

    // this.autoActivate();
  },
};
</script>


<style lang="scss"
       scoped>
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
    font-size: 4.2rem;
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
      line-height: 1;
      font-weight: 200;
      color: rgba($beige, 0.5);
      margin-top: -0.4em;
      margin-bottom: 1rem;

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

      @include mobile() {
        margin: 7%;
      }
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
      }
    }
  }

  &.active {
    border-top-color: $green;

    .place {
      font-size: 1rem;
      transform: translateY(-0.3rem);

      @include desktop() {
        transform: translateY(0.82rem);
      }
    }

    .text {
      h3 {
        font-style: italic;
        font-weight: 120;
        font-size: 4.2em;
        margin-top: -0.43em;

        @include mobile() {
          font-size: 3em;
        }
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
}
</style>
