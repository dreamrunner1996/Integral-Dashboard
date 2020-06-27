<template>
  <div class="day-integration-rank-list-back-content">
    <div class="day-integration-rank-list-back-item">
      <div class="day-integration-rank-list-back-content-image">
        <img :src="headImage" alt="#">
      </div>
      <div class="day-integration-rank-list-back-content-name-pm">
        <div class="name"> {{ name }} </div>
        <div class="rank"> NO.{{ rank }} </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "./DayIntegrationRankListBack.css"

  export default {
    name: "DayIntegrationRankListBack",
    props: {
      headImage: {
        default: "http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&f=JPEG?w=1280&h=853",
        type: String
      },
      name: {
        default: "名字",
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
