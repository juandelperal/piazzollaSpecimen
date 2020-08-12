<template>
  <section id="matrix">
    <div class="margins">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam rerum repellendus sint deserunt id doloremque voluptas iure exercitationem, ducimus quod earum numquam temporibus illum obcaecati rem hic quaerat ad ab?
      </p>
      <img src="images/piazzollaMatrix.svg"
           alt="Piazzolla">

    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "../scss/variables";

section {
  font-weight: 100;
  background: $dark;
  padding: 0;
  position: relative;
//   font-size: 1.2rem;

  p {
    position: absolute;
    margin-top: 2rem;
    color: #fff;
    color: $green;
    max-width: 25ch;
  }
}
</style>