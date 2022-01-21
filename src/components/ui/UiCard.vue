<template>
  <div class="card">
    <div v-if="title || description" class="card__header">
      <slot name="header">
        <slot name="title">
          <div v-if="title" class="card__title" v-html="title"></div>
        </slot>

        <slot name="description">
          <div v-if="description" class="card__description" v-html="description"></div>
        </slot>
      </slot>
    </div>

    <main>
      <slot></slot>
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "UiCard",
    props: {
      title: {
        type: String,
        default: null
      },

      description: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped lang="scss">

  .card {
    border-radius: 10px;
    padding: 12px;
    margin: 5px;
    box-shadow: 2px 2px 5px gray;
    background: $color-card__background;
    display: inline-block;
    width: inherit;
    height: inherit;
  }

  .card__header {
    padding-bottom: 8px;
  }

  .card__title {
    font-size: $font-size_large_xx;
    font-weight: bolder;
    text-align: center;
  }

  .card__description {
    font-size: $font-size_large_x;
    text-align: center;
  }

</style>