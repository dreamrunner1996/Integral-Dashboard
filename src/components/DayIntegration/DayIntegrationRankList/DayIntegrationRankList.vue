<template>
  <div class="day-integration-rank-list-content">
    <div class="day-integration-rank-list-item">
      <div class="day-integration-rank-list-content-image">
        <img :src="logo" alt="#">
      </div>
      <div class="day-integration-rank-list-content-name-pm">
        <div class="name"> {{ name }} </div>
        <div class="rank"> NO.{{ rank }} </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "./DayIntegrationRankList.css"

  export default {
    name: "DayIntegrationRankList",
    props: {
      name: {
        default: "名字",
        type: String
      },
      logo: {
        default: "",
        type: String
      },
      rank: {
        default: 0,
        type: Number
      },
    },
    data: () => ({})
  }
</script>
