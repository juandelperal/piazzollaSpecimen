<template>
  <div class="inspectorContainer"
       @click.self="store.inspector = false"
       v-show="store.inspector">
    <span id="inspectorCursor"
          ref="cursor"></span>
    <div id="inspectorDetails"
         ref="inspector">
      <h4><span class="sc">css</span> style</h4>
      <p v-for="(val, k) in store.inspector"
         :key="k">
        <span>{{k}}:</span>
        {{val}};
      </p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../scss/variables";

.inspectorContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
//   background-color: rgba(black, 0.1);
  #inspectorDetails {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    background: #fff;
    position: absolute;
    font-size: 0.7rem;
    line-height: 1.2;
    max-width: 250px;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);
  }
  #inspectorCursor {
    background: url("../images/cursor+.svg");
    width: 32px;
    height: 32px;
    display: block;
    position: absolute;
  }
}
p {
  margin: 0;
  line-height: 1.4;
  span {
    color: $beige;
    margin-right: 0.4em;
  }
}
h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
}
</style>