<template>
  <div class="input">
    <input>
    <button>Search</button>
  </div>
</template>

<script>
  export default {
    name: "UiInputPassword"
  }
</script>

<style scoped lang="scss">
  input {
    border: 0;
    outline: 0;
  }

  .input {
    border: 1px solid black;
    width: fit-content;
  }

  .input:focus {
    border-color: red;
  }
</style>