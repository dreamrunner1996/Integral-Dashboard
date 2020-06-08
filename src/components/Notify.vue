<template>
  <marquee class="notify-content" direction="left">
    <span class="notify-text" v-for="(index, item) in notifyMessage" :key="'notify'+item">
        {{ item }}：{{ index }}
        <span style="margin-left: 150px" v-if="notifyMessage.length !== item"></span>
    </span>
  </marquee>
</template>

<script>
  import "./notify.css"

  export default {
    name: "Notify",
    props: {
      notifyMessage: {
        default: () => ([]),
        type: Array
      }
    },
    data: () => ({}),
    methods: {

    }
  }
</script>

<style scoped>

</style>
