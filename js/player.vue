<template>
  <section
    data-scroll-section
    id="player"
  >
    <div class="margins">
      <h3>This is Astor Piazzolla</h3>
      <div
        :key="k"
        v-for="(song, k)  in songs"
      >
        <p>
          <a
            :href="'https://open.spotify.com/track/' + song.url"
            target="_blank"
          >
            <span class="play">▶</span>
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
  * {
    transition: all 0.3s;
  }
}
p {
  font-size: rem-calc(24px);
  margin-bottom: 0.4em;
  a {
    display: flex;

    &:hover {
      color: $dark;
      .title {
        font-weight: 400;
      }
      .number {
        opacity: 0;
      }
      .number,
      em {
        color: $green;
      }
      .play {
        opacity: 1;
      }
    }
    .play {
      position: absolute;
      color: $green;
      opacity: 0;
    }
    .number {
      font-feature-settings: "numr" 1;
      color: $dark4;
    }
    .title {
      letter-spacing: 0.15em;
      margin-left: 0.6em;
      border-bottom: 1px solid transparent;
      @include desktop() {
        white-space: nowrap;
        margin-left: 1.2em;
      }
    }
    em {
      margin-left: 1em;
      //   flex-shrink: 1;
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
          title: "Milonga del Ángel",
          instruments: "Tango: Zero Hour",
          url: "1Gas3HGCmNODYQiMU13LqL",
        },
        {
          title: "Invierno Porteño",
          instruments: "Eight seasons",
          url: "6aOmn0aORYzoWbY8uc0FNY",
        },
        {
          title: "Adiós Nonino",
          instruments: "Central Park Concert",
          url: "2hWStTJAvzV8KPCaMqqy65",
        },
        {
          title: "Fuga y misterio",
          instruments: "María de Buenos Aires",
          url: "5OOR7iX9b4dlT5EdrESY6v",
        },
        {
          title: "3 min. con la realidad",
          instruments: "Live from the Lugano Festival 2008",
          url: "7s5mtR6RKz7ySeWljDkTAI",
        },
      ],
      currentSong: false,
    };
  },
};
</script>