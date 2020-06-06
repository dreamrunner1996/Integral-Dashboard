<template>
  <div class="first-card-content">
    <div class="first-item-head">
      123124
    </div>
    <div class="first-item-body">
      41242412
    </div>
  </div>
</template>

<script>
  import "./first-card.css"

  export default {
    name: "FirstCard",
    props: {
      imgUrl: {
        default: "",
        type: String
      },
      name: {
        default: "",
        type: String
      },
      yesterdayIntegration: {
        default: 0,
        type: Number
      },
      highestIntegration: {
        default: 0,
        type: Number
      },
      getMVP: {
        default: 0,
        type: Number
      },
      allIntegration: {
        default: 0,
        type: Number
      }
    }
  }
</script>

<style scoped>

</style>
