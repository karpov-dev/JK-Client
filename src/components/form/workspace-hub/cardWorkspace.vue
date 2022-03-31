<template>
  <ui-card class="workspace-card">
    {{workspace.title}}
  </ui-card>
</template>

<script>
  import UiCardForm from "../../ui/card/UiCardForm";
  import UiCardContent from "../../ui/card/UiCardContent";
  import UiCard from "../../ui/card/UiCard";
  export default {
    name: "cardWorkspace",
    components: {UiCard, UiCardContent, UiCardForm},
    props: {
      workspace: Object
    }
  }
</script>

<style scoped lang="scss">
  .workspace-card {
    padding: 10px;
    border: 1px solid gray;
    border-radius: var(--border-radius__medium);
    text-align: center;
  }

  .workspace-card:hover {
    background-color: #5aa1c2;
    border-color: #5aa1c2;
  }
</style>