<template>
  <div class="day-integration-list-content">
    <div class="day-integration-list-item">
      <div class="user-info">
        <img class="user-info-logo" :src="logo ? logo : userLogo" alt="#">
        <div class="user-info-name">{{ name ? name : '' }}</div>
      </div>
      <div class="user-integration">
        <div class="user-integration-new-rank">
          <div class="user-integration-new">带新人积分: {{ chargeCompleteCount ? chargeCompleteCount.toFixed(2) : 0 }}</div>
          <div class="user-integration-rank">NO.{{ rank }}</div>
        </div>
        <div class="user-integration-yes-card">
          <div class="title">{{ yesDay ? yesDay : '' }} <span style="color: darkorange">当天</span></div>
          <div class="card-item">
            <div v-if="!yesDataExist" style="color: #FFFFFF; font-size: 20px">没有数据</div>
            <div v-if="yesDataExist" class="plan">计划管控: {{ integralYesTask ? integralYesTask.toFixed(2) : 0 }}</div>
            <div v-if="yesDataExist" class="clean">现场管理: {{ integralYesSite ? integralYesSite.toFixed(2) : 0 }}</div>
          </div>
        </div>
        <div class="user-integration-before-yes-card">
          <div class="title">{{ lastDay ? lastDay : '' }} <span style="color: pink">昨天</span></div>
          <div class="card-item">
            <div v-if="!lastDataExist" style="color: #FFFFFF; font-size: 20px">没有数据</div>
            <div v-if="lastDataExist" class="plan">计划管控: {{ integralLastTask ? integralLastTask.toFixed(2) : 0 }}</div>
            <div v-if="lastDataExist" class="clean">现场管理: {{ integralLastSite ? integralLastSite.toFixed(2) : 0 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let userLogo = require("./../../../assets/header.png")
  import "./DayIntegrationList.css"

  export default {
    name: "DayIntegrationList",
    props: {
      yesDataExist: {
        default: false,
        type: Boolean
      },
      lastDataExist: {
        default: false,
        type: Boolean
      },
      name: {
        default: '',
        type: String
      },
      rank: {
        default: 0,
        type: Number
      },
      logo: {
        default: '',
        type: String
      },
      yesDay: {
        default: '',
        type: String
      },
      lastDay: {
        default: '',
        type: String
      },
      chargeCompleteCount: {
        default: 0,
        type: Number
      },
      integralYesTask: {
        default: 0,
        type: Number
      },
      integralLastTask: {
        default: 0,
        type: Number
      },
      integralYesSite: {
        default: 0,
        type: Number
      },
      integralLastSite: {
        default: 0,
        type: Number
      }
    },
    data: () => ({
      userLogo: userLogo
    })
  }
</script>

<style scoped>

</style>
