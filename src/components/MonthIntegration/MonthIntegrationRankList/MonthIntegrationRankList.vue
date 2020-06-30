<template>
  <div class="month-integration-rank-list-content">
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
  import "./MonthIntegrationRankList.css"

  export default {
    name: "MonthIntegrationRankList",
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
