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
            <img src="./../assets/jx.png" alt="#" />
          </div>
        </div>
        <div class="body-card-left-body">
          <div class="body-card-left-body-scroll" :style="integrateCardList.id.length > 6 ? styleList.bodyCardLeftBodyScroll : {}">
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
        <FirstCard :img-url="integrateFirstList.imgUrl"
                   :name="integrateFirstList.name"
                   :yesterday-integration="integrateFirstList.yesterdayIntegration"
                   :highest-integration="integrateFirstList.highestIntegration"
                   :get-m-v-p="integrateFirstList.getMVP"
                   :all-integration="integrateFirstList.allIntegration" />
      </div>
      <div class="body-card-right">
        <div class="body-card-right-header">
          <div class="body-card-right-header-text">
            异常
          </div>
          <div class="body-card-right-header-img">
            <img src="./../assets/yc.png" alt="#" />
          </div>
        </div>
        <div class="body-card-left-body">
          <div class="body-card-right-body-scroll">
            <UnusualCard v-for="(index, item) in unusualList.id"
                         :key="'unusual' + index"
                         :project-name="unusualList.projectName[item]"
                         :team-name="unusualList.teamName[item]"
                         :team-member="unusualList.teamMember[item]"
                         :account="unusualList.account[item]" />
          </div>
        </div>
      </div>
<!--      <button @click="test">test</button>-->
    </div>
  </div>
</template>

<script>
  import Time from "./../components/Time"
  import Notify from "../components/Notify"
  import IntegrateCard from "../components/IntegrateCard"
  import FirstCard from "../components/FirstCard"
  import UnusualCard from "../components/UnusualCard"

  import "./home.css"

  const bodyCardLeftBodyScroll = {
    marginTop: 0,
    animation: "bodyCardLeftBodyScroll 20s linear infinite"
  }

  export default {
    name: "Home",
    components: { Time, Notify, IntegrateCard, FirstCard, UnusualCard },
    data: () => ({
      // 全局出现的 style 动态样式
      styleList: {
        bodyCardLeftBodyScroll
      },
      // 没有通知时显示标题名
      dashboardName: "积分看板",
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
        name: ["robot1", "robot2", "robot3", "robot4", "robot5", "robot6"],
        integration: [99, 97, 95, 92, 88, 82],
        rank: [1, 2, 3, 4, 5, 6]
      },
      // 中间积分列表
      integrateFirstList: {
        id: 0,
        imgUrl: require("./../assets/xin.jpg"),
        name: "xin",
        yesterdayIntegration: 99,
        highestIntegration: 100,
        getMVP: 5,
        allIntegration: 2899
      },
      // 右边异常列表
      unusualList: {
        id: [0, 1],
        projectName: ["煲栖 v2.0", "煲栖 v2.1"],
        teamName: ["雕霖之家", "栖雕之家"],
        teamMember: {
          0: ["煲栖", "栖霖", "霖煲", "栖霖"],
          1: ["栖霖", "栖霖", "煲栖", "霖煲"]
        },
        account: [
          "由于名字太过有型, 被甲方欣赏, 因此延迟1个月再进行工作",
          "由于有雕, 所以任性, 以你你食栖啦你"
        ]
      }
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
