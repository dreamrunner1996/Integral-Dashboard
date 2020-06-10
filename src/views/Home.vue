<template>
  <div class="home-content">
    <div class="top-card">
      <div class="logo">
        <img src="./../assets/logo.png" alt="#" />
      </div>
      <div class="notify-card">
        <img v-if="notifyMessage.length > 0" src="./../assets/notify.png" alt="#" />
        <div class="notify-content">
          <span v-if="!notifyMessage.length > 0">{{ dashboardName }}</span>
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
        <div class="body-card-left-body" v-if="integrateCardList.length">
          <div class="body-card-left-body-scroll" :style="integrateCardList.length > 6 ? styleList.bodyCardLeftBodyScroll : {}">
            <IntegrateCard v-for="(index, item) in integrateCardList"
                           :key="'integral' + item"
                           :imgUrl="index['avatarName'] ? dataApi.url+':'+dataApi.port+dataApi.file+index['avatarName'] : ''"
                           :name="index['name']"
                           :integration="index['integralByDay']"
                           :sort="index['sort']" />
          </div>
        </div>
      </div>
      <div class="body-card-center">
        <FirstCard :img-url="displayFirstList['avatarName'] ? dataApi.url+':'+dataApi.port+dataApi.file+displayFirstList['avatarName'] : ''"
                   :name="displayFirstList['name']"
                   :yesterday-integration="displayFirstList['integralByDay']"
                   :highest-integration="displayFirstList['integralHistoryTop']"
                   :get-m-v-p="displayFirstList['mvpCount']"
                   :all-integration="displayFirstList['integralAll']" />
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
        <div class="body-card-right-body" v-if="unusualList.length">
          <div class="body-card-right-body-scroll" :style="unusualList.length > 4 ? styleList.bodyCardRightBodyScroll : {}">
            <UnusualCard v-for="(index, item) in unusualList"
                         :key="'unusual' + item"
                         :project-name="index['projectName']"
                         :team-name="index['taskName']"
                         :team-member="index['taskMember']"
                         :account="index['exceptionMessage']"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from "axios"
  import Api from "./../api/global"

  import Time from "./../components/Time"
  import Notify from "../components/Notify"
  import IntegrateCard from "../components/IntegrateCard"
  import FirstCard from "../components/FirstCard"
  import UnusualCard from "../components/UnusualCard"

  import "./home.css"

  let displayFirst = null
  let showDisplayCount = 0
  let cssRuleListLength = 0

  const bodyCardLeftBodyScroll = {
    marginTop: 0,
    animation: "bodyCardLeftBodyScroll 20s linear infinite"
  }
  const bodyCardRightBodyScroll = {
    marginTop: 0,
    animation: "bodyCardRightBodyScroll 20s linear infinite"
  }

  export default {
    name: "Home",
    components: { Time, Notify, IntegrateCard, FirstCard, UnusualCard },
    data: () => ({
      dataApi: Api,
      // 全局出现的 style 动态样式
      styleList: {
        bodyCardLeftBodyScroll, bodyCardRightBodyScroll
      },
      // 没有通知时显示标题名
      dashboardName: "积分看板",
      // 通知信息
      notifyMessage: [],
      // 左边积分排行信息列表
      integrateCardList: [],
      // 中间积分列表
      integrateFirstList: [],
      displayFirstList: [],
      // 右边异常列表
      unusualList: []
    }),
    mounted() {
      let _this = this
      cssRuleListLength = document.styleSheets[0].cssRules.length
      // 获取数据
      _this.GetData()
    },
    methods: {
      // 获取数据
      GetData() {
        let _this = this
        _this.integrateFirstList = []
        // 获取数据
        Axios.get(_this.dataApi.url+":"+_this.dataApi.port+_this.dataApi.path, { params: _this.dataApi.condition }). then(res => {
          if(!res.data["allIntegralList"].length) return
          _this.notifyMessage = res.data["notifyList"]
          _this.integrateCardList = res.data["allIntegralList"]
          for(let i = 0; i < res.data["allIntegralList"].length; i++) {
            if(res.data["allIntegralList"][i]["sort"] === 0) { _this.integrateFirstList.push(res.data["allIntegralList"][i]) }
          }
          _this.unusualList = res.data["errorTaskList"]
          // 判断是否有多个第一
          _this.CheckFirstNum()
          // 判断是否需要动画效果
          _this.AnimationCard()
        })
      },
      // 判断是否有多个第一
      CheckFirstNum() {
        if(displayFirst) {
          clearInterval(displayFirst)
          displayFirst = null
        }
        let _this = this
        _this.displayFirstList = _this.integrateFirstList[0]
        if(_this.integrateFirstList.length > 1) {
          displayFirst = setInterval(() => {
            if(showDisplayCount > (_this.integrateFirstList.length - 1)) {
              showDisplayCount = 0
            }
            _this.displayFirstList = _this.integrateFirstList[showDisplayCount]
            showDisplayCount += 1
          }, 5000)
        } else {
          _this.displayFirstList = _this.integrateFirstList[0]
        }
      },
      // 动画效果
      AnimationCard() {
        let _this = this
        console.log(document.styleSheets[0].cssRules[cssRuleListLength])
        if (_this.integrateCardList.length > 6) {
          if(document.styleSheets[0].cssRules[cssRuleListLength-1]) {
            document.styleSheets[0].deleteRule(cssRuleListLength-1)
          }
          document.styleSheets[0].insertRule(`@keyframes bodyCardLeftBodyScroll {
            0% { margin-top: 0 }
            25% { margin-top: calc(${-20 - 120 * (_this.integrateCardList.length - 7)}px) }
            50% { margin-top: calc(${-20 - 120 * (_this.integrateCardList.length - 7)}px) }
            75% { margin-top: 0 } }`,cssRuleListLength-1)
        }
        if(_this.unusualList.length > 4) {
          if(document.styleSheets[0].cssRules[cssRuleListLength]) {
            document.styleSheets[0].deleteRule(cssRuleListLength)
          }
          document.styleSheets[0].insertRule(`@keyframes bodyCardRightBodyScroll {
            0% { margin-top: 0 }
            25% { margin-top: calc(${-80 - 180 * (_this.unusualList.length - 5)}px) }
            50% { margin-top: calc(${-80 - 180 * (_this.unusualList.length - 5)}px) }
            75% { margin-top: 0 } }`,cssRuleListLength)
        }
      },
      HourChange() {
        let _this = this
        _this.GetData()
      },
    }
  }
</script>
