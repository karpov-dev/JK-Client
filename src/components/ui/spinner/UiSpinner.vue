<template>
  <transition name="fade">
    <div v-if="isShow" class="spinner">
      <component v-bind:is="getSpinnerComponentName"></component>
    </div>
  </transition>
</template>

<script>
  import UiSpinnerVial from "./UiSpinnerVial";
  import UiSpinnerBear from "./UiSpinnerBear";
  import UiSpinnerCircleDoted from "./UiSpinnerCircleDoted";
  import UiSpinnerUpdating from "./UiSpinnerUpdating";

  const VARIANTS = {
    vial: 'vial',
    bear: 'bear',
    updating: 'updating',
    circleDoted: 'circle-doted'
  }

  export default {
    name: "UiSpinner",
    components: {UiSpinnerBear, UiSpinnerVial, UiSpinnerCircleDoted, UiSpinnerUpdating},
    props: {
      variant: {
        type: String,
        default: VARIANTS.circleDoted,
        validator(value) { return Object.values(VARIANTS).indexOf(value) !== -1; }
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getSpinnerComponentName() {
        return 'ui-spinner-' + this.variant;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "src/scss/design/animations";

  .spinner, .spinner:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: var(--border-radius__medium);
    z-index: 100;
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