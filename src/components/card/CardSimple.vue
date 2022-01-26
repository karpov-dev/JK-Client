<template>
  <base-card>
    <template v-slot:header>
      <div class="card-simple__header">
        <div class="card-simple__header-title">
          <slot name="card-title">
            <div v-html="title"></div>
          </slot>
        </div>

        <div class="card-simple__header-description">
          <slot name="card-description">
            <div v-html="description"></div>
          </slot>
        </div>
      </div>
    </template>

    <slot></slot>

    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </base-card>
</template>

<script>
  import BaseCard from "../base/BaseCard";

  export default {
    name: "CardSimple",
    components: {BaseCard},
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
  .card-simple__header {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: var(--margin__large-xx);
  }

  .card-simple__header-title {
    text-align: center;
    font-family: var(--font-famaly__viga);
    font-size: var(--font-size__large-x);
    padding-bottom: var(--margin__small-xxx);
  }

  .card-simple__header-description {
    text-align: center;
    font-size: var(--font-size__large);
  }
</style>