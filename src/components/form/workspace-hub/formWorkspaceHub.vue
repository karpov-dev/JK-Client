<template>
  <card-workspace v-for="workspace in localWorkspaces" :key="workspace.id" :workspace="workspace"/>
</template>

<script>
  import CardWorkspace from "./cardWorkspace";

  export default {
    name: "formWorkspaceHub",

    components: {CardWorkspace},

    props: {
      workspaces: Array
    },

    data() { return {
      localWorkspaces: [
        {id: 1, title: "Forex"},
        {id: 2, title: "Service wise"},
        {id: 3, title: "MD SQ"}
      ]
    }}
  }
</script>

<style scoped>

</style>