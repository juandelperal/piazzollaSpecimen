<template>
  <div id="toolbar">
    <div class="margins">
      <nav>
        <span class="logo sc">
          <span class="black"></span> Piazzolla <span class="hidden-mobile">Type System</span>
        </span>
        <a href="https://huertatipografica.com/en/fonts/piazzolla"
           target="_blank">
          Download
        </a>

        <a class="hidden-mobile"
           href="https://fonts.google.com/specimen/Piazzolla"
           target="_blank">
          Use in Google Fonts
        </a>

        <a href="https://github.com/huertatipografica/piazzolla"
           target="_blank">
          Contribute
        </a>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/variables";
@import "../scss/mixins";

#toolbar {
  background: $dark;
  color: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9;
  font-size: 0.8em;
  //   border-bottom: solid 2px $warmGray;
  font-weight: 200;
}

nav {
  display: flex;
  margin: 0;
  line-height: 2.2em;
  .logo {
    margin-right: 0.8em;
  }
  a {
    // border-bottom: solid 1px #fff;
    color: $beige;
    display: block;
    // &.hidden-mobile {
    //   display: none;
    // }
    padding: 0 0.8em 0.2em;
    //   font-weight: 200;
    transition: all 0.3s;
    &:hover {
      background: $green;
      color: $dark;
    }
    // background: $green;
  }
}
</style>