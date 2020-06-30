<template>
  <div class="month-integration-list-content">
    <div class="month-integration-list-item">
      <div class="user-info">
        <img class="user-info-logo" :src="logo" alt="#">
        <div class="user-info-name">{{ name }}</div>
      </div>
      <div class="user-integration">
        <div class="user-integration-per-rank">
          <div class="user-integration-per">当选负责人次: {{ chargeCompleteCount }}</div>
          <div class="user-integration-rank">NO.{{ rank }}</div>
        </div>
        <div class="user-integration-plan-card">
          <div class="title">计划管控</div>
          <div class="card-item">
            <div class="all">总积分: {{ integralTaskSum ? integralTaskSum.toFixed(2) : 0 }}</div>
            <div class="average">平均积分: {{ integralTaskAvg ? integralTaskAvg.toFixed(2) : 0 }}</div>
          </div>
        </div>
        <div class="user-integration-clean-card">
          <div class="title">现场管理</div>
          <div class="card-item">
            <div class="all">总积分: {{ integralSiteSum ? integralSiteSum.toFixed(2) : 0 }}</div>
            <div class="average">平均积分: {{ integralSiteAvg ? integralSiteAvg.toFixed(2) : 0 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "./MonthIntegrationList.css"

  export default {
    name: "MonthIntegrationList",
    props: {
      name: { default: '', type: String },
      logo: { default: '', type: String },
      chargeCompleteCount: { default: 0, type: Number },
      rank: { default: 0, type: Number },
      integralTaskAvg: { default: 0, type: Number },
      integralTaskSum: { default: 0, type: Number },
      integralSiteAvg: { default: 0, type: Number },
      integralSiteSum: { default: 0, type: Number }
    },
    data: () => ({})
  }
</script>
