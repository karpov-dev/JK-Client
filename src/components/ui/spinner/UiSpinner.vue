<template>
  <div v-if="isShow" class="spinner">
    <ui-spinner-bear></ui-spinner-bear>
  </div>
</template>

<script>
  //TODO: Add new spinners
  import UiSpinnerVial from "./UiSpinnerVial";
  import UiSpinnerBear from "./UiSpinnerBear";

  export default {
    name: "UiSpinner",
    components: {UiSpinnerBear, UiSpinnerVial},
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .spinner, .spinner:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: var(--border-radius__medium);
  }

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .spinner:after {
    content: "";
    background-color: black;
    opacity: .5;
  }
</style>