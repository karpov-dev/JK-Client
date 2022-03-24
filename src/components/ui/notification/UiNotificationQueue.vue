<template>
  <ui-notification title="Success" description="Success login" variant="success"></ui-notification>
  <ui-notification title="Success" description="Success login" variant="success"></ui-notification>
  <ui-notification title="Success" description="Success login" variant="success"></ui-notification>
</template>

<script>
  import UiNotification from "./UiNotification";
  export default {
    name: "UiNotificationQueue",
    components: {UiNotification}
  }
</script>

<style scoped lang="scss">

</style>