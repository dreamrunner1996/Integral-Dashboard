<template>
  <marquee class="notify-content" direction="left">
    {{ notifyMessage }}
  </marquee>
</template>

<script>
  import "./notify.css"

  export default {
    name: "Notify",
    props: {
      notifyMessage: {
        default: "",
        type: String
      }
    },
    data: () => ({}),
    methods: {

    }
  }
</script>

<style scoped>

</style>
