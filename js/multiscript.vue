<template>
  <section id="multiscript">
    <div class="margins">
      <h1>Multiscript</h1>
      <div class="is-row">
        <!-- Scr -->
        <div class="is-col">
          <p class="top sc">Greek</p>
          <h3>
            Αρμονία <em>(μουσική)</em>
          </h3>
          <p>
            Ο όρος <span class="sc">Αρμονία</span> σήμαινε στην αρχαία Ελλάδα γενικά την αρμογή, τη σύνδεση, το ταίριασμα των μερών ενός δομημένου συνόλου (π.χ. των λίθων ενός οικοδομήματος, των ουράνιων σωμάτων στο σύμπαν) και ταυτόχρονα αξιολογούσε θετικά τη συμμετρία, την ευρυθμία, τις σωστές αναλογίες, την τέλεια εφαρμογή των δομικών στοιχείων. Αποτέλεσμα της αρμονίας σύμφωνα με τις αισθητικές λήψεις από αρχαιοτάτων χρόνων ήταν το ωραίο. Στη μουσική χρησιμοποιήθηκε η λέξη ευρύτατα και με διαφορετικές σημασίες.
          </p>
          <p class="credits">
            With the valuable help of Panagiotis Haratzopoulos and Sol Matas.
          </p>
        </div>

        <!-- Scr -->
        <div class="is-col">
          <p class="top sc">Latin</p>
          <h3>
            Harmony <em>(music)</em>
          </h3>
          <p>
            In music, <span class="sc">harmony</span> is the process by which the composition of individual sounds, or superpositions of sounds, is analysed by hearing. Usually, this means simultaneously occurring frequencies, pitches (tones, notes), or chords. The study of harmony involves chords and their construction and chord progressions and the principles of connection that govern them. Harmony is often said to refer to the <em>vertical</em> aspect of music, as distinguished from melodic line, or the <em>horizontal</em> aspect.
          </p>
        </div>

        <!-- Scr -->
        <div class="is-col">
          <p class="top sc">Cyrillic</p>
          <h3>
            Гармония <em>(музыка)</em>
          </h3>
          <p>
            <span class="sc">Гармо́ния</span> (др.-греч. <em>ἁρμονία</em> — связь, порядок; строй, лад; слаженность, соразмерность, стройность) — комплекс понятий теории музыки. В научной перспективе это представление приводит к композиционно-техническому понятию гармонии как объединения звуков в созвучия и их закономерного последования. Гармония как научная и учебно-практическая дисциплина изучает звуковысотную организацию музыки — как <em>многоголосной</em>, так и <em>одноголосной</em>.
          </p>
          <p class="credits">
            Made with the valuable help of Krassen Krestev
          </p>
        </div>

      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins";
#multiscript {
  font-size: 0.8em;
  background: #fff;

  .top {
    letter-spacing: 0.15em;
    font-weight: 200;
    color: $beige;
    margin-bottom: 0.3em;
    margin-top: 1.5rem;
    font-size: 0.8em;
    //   color: $green;
  }

  h3 {
    border-top: 1px solid $beige3;
    padding: 0.3em 0;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.6em;
    em {
      font-weight: 100;
      color: $beige;
    }
  }
  .credits {
    color: $beige;
    @include desktop() {
      border-top: 1px solid $beige3;
    }
    padding: 1em 0;
    margin-top: 2rem;
    margin-left: 20%;
    margin-bottom: 0;

    font-size: 0.8em;
    font-style: italic;
    font-weight: 200;
  }
}
</style>