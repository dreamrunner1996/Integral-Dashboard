<template>
  <div class="home-content">
    <div class="top-card">
      <div class="logo">
        <img src="./../assets/robot.png" alt="#">
      </div>
      <div class="notify-card">
        <img src="./../assets/notify.png" alt="#">
        <div class="notify-content">
          <span v-if="!notifyMessage">{{ dashboardName }}</span>
          <Notify :notifyMessage="notifyMessage" />
        </div>
      </div>
      <div class="time-card">
        <Time @hourChange="HourChange" />
      </div>
    </div>
    <div class="body-card">
      <div class="body-card-left">
        <div class="body-card-left-header">
          <div class="body-card-left-header-text">
            昨日积分排名
          </div>
          <div class="body-card-left-header-img">
            <img src="./../assets/jx.png" alt="#">
          </div>
        </div>
        <div class="body-card-left-body">
          <div class="body-card-left-body-scroll" :style="integrateCardList.id.length > 6 ? styleList.bodyCardLeftBodyScroll : styleList.bodyCardLeftBodyUnScroll">
            <IntegrateCard v-for="(index, item) in integrateCardList.id"
                           :key="'integration' + index"
                           :imgUrl="integrateCardList.imgUrl[item]"
                           :name="integrateCardList.name[item]"
                           :integration="integrateCardList.integration[item]"
                           :rank="integrateCardList.rank[item]" />
          </div>
        </div>
      </div>
      <div class="body-card-center">
        <button @click="test">test</button>
      </div>
      <div class="body-card-right">

      </div>
    </div>
  </div>
</template>

<script>
  import Time from "./../components/Time"
  import Notify from "../components/Notify"
  import IntegrateCard from "../components/IntegrateCard"

  import "./home.css"

  const bodyCardLeftBodyUnScroll = {

  }

  const bodyCardLeftBodyScroll = {
    marginTop: 0,
    animation: "bodyCardLeftBodyScroll 10s linear infinite"
  }

  export default {
    name: "Home",
    components: { Time, Notify, IntegrateCard },
    data: () => ({
      // 全局出现的 style 动态样式
      styleList: {
        bodyCardLeftBodyUnScroll,
        bodyCardLeftBodyScroll
      },
      // 没有通知时显示标题名
      dashboardName: "利事丰员工积分看板",
      // 通知信息
      notifyMessage: "",
      // 左边积分排行信息列表
      integrateCardList: {
        id: [0, 1, 2, 3, 4, 5],
        imgUrl: [
          require("./../assets/wx1.jpg"),
          require("./../assets/robot.png"),
          require("./../assets/robot.png"),
          require("./../assets/robot.png"),
          require("./../assets/robot.png"),
          require("./../assets/robot.png")
        ],
        name: [
          "robot1", "robot2", "robot3", "robot4", "robot5", "robot6"
        ],
        integration: [
          99, 97, 95, 92, 88, 82
        ],
        rank: [1, 2, 3, 4, 5, 6]
      },
      // 中间积分列表
      integrateFirstList: {
        id: 0,
        imgUrl: require("./../assets/wx1.jpg"),
        name: "robot1",
        integration: 99
      },
      // 右边异常列表
      unusualList: {}
    }),
    mounted() {
      let _this = this
      // 更新排名第一 --- 中间部分
      _this.FirstUpdate()
    },
    methods: {
      // 测试
      test() {
        let _this = this
        _this.integrateCardList.id.push(_this.integrateCardList.id.length+1)
        _this.integrateCardList.imgUrl.push("");
        _this.integrateCardList.name.push("robot?");
        _this.integrateCardList.integration.push(77);
        _this.integrateCardList.rank.push(8);
        console.log(120 * (_this.integrateCardList.id.length - 6) - 160)
        if (_this.integrateCardList.id.length > 6) {
          document.styleSheets[0].deleteRule(0)
          document.styleSheets[0].insertRule(`@keyframes bodyCardLeftBodyScroll
            {
              0% {
                margin-top: 0;
              }
              25% {
                  margin-top: calc(${-20 - 120 * (_this.integrateCardList.id.length - 7)}px);
              }
              50% {
                  margin-top: calc(${-20 - 120 * (_this.integrateCardList.id.length - 7)}px);
              }
              75% {
                  margin-top: 0;
              }
            }`,0)
        }

      },
      HourChange() {},
      // 排行榜第一更新
      FirstUpdate() {}
    }
  }
</script>
