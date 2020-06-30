<template>
  <div class="month-integration-rank-list-back-content">
    <div class="user-info-logo">
      <img :src="logo ? logo : userLogo" alt="#">
    </div>
    <div class="user-info-name-rank">
      <div class="user-info-name">{{ name }}</div>
      <div class="user-info-rank">NO.{{ rank }}</div>
    </div>
  </div>
</template>

<script>
  let userLogo = require("./../../../assets/header.png")
  import "./MonthIntegrationRankListBack.css"

  export default {
    name: "MonthIntegrationRankListBack",
    props: {
      logo: {
        default: '',
        type: String
      },
      name: {
        default: '',
        type: String
      },
      rank: {
        default: 0,
        type: Number
      }
    },
    data: () => ({
      userLogo: userLogo
    })
  }
</script>
