<template>
  <transition-group name="slideBlurred" tag="div">
    <slot></slot>
  </transition-group>
</template>

<script>
  export default {
    name: "UiTransitionGroup",

    props: {

    }
  }
</script>

<style scoped lang="scss">

</style>