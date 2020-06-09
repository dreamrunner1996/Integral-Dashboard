<template>
  <div class="first-card-content">
    <div class="first-item-head">
      <div class="first-item-head-img">
        <img v-if="imgUrl" :src="imgUrl" alt="#" />
        <img v-else src="./../assets/userInfo.png" alt="#" />
      </div>
      <div class="first-item-head-context">
        <div class="first-item-head-context-img">
          <img src="./../assets/jb1.png" alt="#" />
        </div>
        <span class="first-item-head-context-name">{{ name ? name : 'robot1' }}</span>
      </div>
    </div>
    <div class="first-item-body">
      <div class="first-item-body-ps">
        PS: 数据显示时间为当前月份时间
      </div>
      <div class="first-item-body-card-list">
        <div class="first-item-body-card1">
          <div class="first-item-body-card1-item">{{ yesterdayIntegration }}</div>
          <div class="first-item-body-card1-title">
            <div class="first-item-body-card1-title-img">
              <img src="./../assets/jf.png" alt="card-jf" />
            </div>
            <span>昨日积分</span>
          </div>
        </div>
        <div class="first-item-body-card2">
          <div class="first-item-body-card2-item">{{ highestIntegration }}</div>
          <div class="first-item-body-card2-title">
            <div class="first-item-body-card2-title-img">
              <img src="./../assets/rzg.png" alt="card-rzg" />
            </div>
            <span>最高积分</span>
          </div>
        </div>
        <div class="first-item-body-card3">
          <div class="first-item-body-card3-item">{{ getMVP }}</div>
          <div class="first-item-body-card3-title">
            <div class="first-item-body-card3-title-img">
              <img src="./../assets/first.png" alt="card-first" />
            </div>
            <span>获MVP数</span>
          </div>
        </div>
        <div class="first-item-body-card4">
          <div class="first-item-body-card4-item">{{ allIntegration }}</div>
          <div class="first-item-body-card4-title">
            <div class="first-item-body-card4-title-img">
              <img src="./../assets/month.png" alt="card-month" />
            </div>
            <span>总积分</span>
          </div>
        </div>
      </div>
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
