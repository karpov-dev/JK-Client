<template>
  <fieldset>
    <input id="light" type="radio" value="light">
    <label for="light"></label>
    <input id="auto" type="radio" value="auto" checked>
    <label for="auto"></label>
    <input name="dark" type="radio" value="dark">
  </fieldset>
</template>

<script>
  export default {
    name: "UiThemeSwither"
  }
</script>

<style scoped lang="scss">
  fieldset {
    display: block;
  }
</style>