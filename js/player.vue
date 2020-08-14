<template>
  <section id="player"
           data-scroll-section>
    <div class="margins">
      <h3>This is Astor Piazzolla</h3>
      <div v-for="(song, k)  in songs"
           :key="k">
        <p>
          <a :href="'https://open.spotify.com/track/' + song.url"
             target="_blank">
            <span class="number">0{{ k + 1 }}</span>
            <span class="title sc">{{ song.title }}</span>
            <em>{{ song.instruments }}</em>
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins";

// // display: none;
// background: #fff;
// font-weight: 100;
// color: $dark3;
section {
  background: #fff;
  font-weight: 100;
  padding: 3rem 0 4rem;
}

h3 {
  font-size: rem-calc(48px);
  font-weight: 400;
  margin-bottom: 1em;
}
p {
  font-size: rem-calc(24px);
  margin-bottom: 0.4em;
  a {
    display: flex;

    &.current,
    &:hover {
      color: $dark;
      .title {
        font-weight: 600;
        // margin-left: 2em;
        // border-bottom-color: $green;
      }
      .number {
        font-weight: 500;
      }
      .number,
      em {
        color: $green;
      }
    }
    .number {
      transition: all 0.3s;
      font-feature-settings: "numr" 1;
      color: $dark4;
    }
    .title {
      transition: all 0.3s;
      letter-spacing: 0.15em;
      margin-left: 0.6em;
      border-bottom: 1px solid transparent;
      @include desktop() {
        white-space: nowrap;
        margin-left: 1.2em;
      }
    }
    em {
      transition: all 0.3s;
      margin-left: 1em;
      flex-shrink: 1;
      color: $dark4;
    }
  }
}
</style>


<script>


export default {
    data() {
        return {
            songs: [
                {
                    title: 'Milonga del Ángel',
                    instruments: 'Tango: Zero Hour',
                    url: '1Gas3HGCmNODYQiMU13LqL'
                },
                {
                    title: 'Invierno Porteño',
                    instruments: 'Eight seasons',
                    url: '6aOmn0aORYzoWbY8uc0FNY'
                },
                {
                    title: 'Adiós Nonino',
                    instruments: 'Central Park Concert',
                    url: '2hWStTJAvzV8KPCaMqqy65'
                },
                {
                    title: 'Fuga y misterio',
                    instruments: 'María de Buenos Aires',
                    url: '5OOR7iX9b4dlT5EdrESY6v'
                },
                {
                    title: '3 min. con la realidad',
                    instruments: 'Live from the Lugano Festival 2008',
                    url: '7s5mtR6RKz7ySeWljDkTAI'
                },
            ],
            currentSong: false,
        }
    },
}
</script>