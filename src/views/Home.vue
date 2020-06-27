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
<!--        <Time @hourChange="HourChange" />-->
        <Time />
      </div>
    </div>
    <div class="body-card">
      <div class="body-card-left">
        <div class="body-card-left-item-one">
          <div class="body-card-left-header">
            <div class="body-card-left-header-text">
              日积分人员表 <span style="color: lightgreen">{{'(' + dayIntegrationList['yesDay'] + ')'}}</span>
            </div>
            <div class="body-card-left-header-img">
              <img src="./../assets/jx.png" alt="none" />
            </div>
          </div>
          <div class="body-card-left-body" v-if="dayIntegrationList['data'].length">
            <div :style="styleList.dayIntegralListScroll">
              <DayIntegrationList v-for="(item, index) in dayIntegrationList['data']"
                                  :key="'dayIntegralItem' + index"
                                  :yes-data-exist="dayIntegrationYesExist"
                                  :last-data-exist="dayIntegrationLastExist"
                                  :name="item['user']"
                                  :logo="item['logo']"
                                  :rank="item['yesRank']"
                                  :yesDay="dayIntegrationList['yesDay']"
                                  :lastDay="dayIntegrationList['lastDay']"
                                  :integralYesTask="item['yesIntegralTask']"
                                  :integralYesSite="item['yesIntegralSite']"
                                  :integralLastTask="item['lastIntegralTask']"
                                  :integralLastSite="item['lastIntegralSite']"
                                  :chargeCompleteCount="0"
              />
            </div>
          </div>
        </div>
        <div class="body-card-left-item-two">
          <div class="body-card-left-item-two-card1">
            <div class="card-header">
              <div style="font-size: 22px; color: white">日积分排行榜</div>
              <div style="width: 30px; height: 30px">
                <img style="width: 30px; height: 30px" src="./../assets/jx.png" alt="#" />
              </div>
            </div>
            <div class="card-body">
              <div class="card-body-item1">
                <div class="card-body-item1-header">{{dayIntegrationList['yesDay']}}</div>
                <div class="card-body-item1-body">
                  <div :style="styleList.dayIntegralListRankScroll" v-if="dayIntegrationYesExist">
                    <DayIntegrationRankList v-for="(item, index) in dayIntegrationYesList"
                                            :key="'dayYesRank' + index"
                                            :name="item['user']"
                                            :logo="item['logo']"
                                            :rank="item['yesRank']"
                    />
                  </div>
                  <div style="height: 100%; color: #FFFFFF; font-size: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center" v-else>
                    没有导入数据
                  </div>
                </div>
              </div>
              <div class="card-body-item2">
                <div class="card-body-item2-header">{{dayIntegrationList['lastDay']}}</div>
                <div class="card-body-item2-body">
                  <div :style="styleList.dayLastIntegralListRankScroll" v-if="dayIntegrationLastExist">
                    <DayIntegrationRankList v-for="(item, index) in dayIntegrationLastList"
                                            :key="'dayLastRank' + index"
                                            :name="item['user']"
                                            :logo="item['logo']"
                                            :rank="item['lastRank']"
                    />
                  </div>
                  <div v-else style="height: 100%; color: #FFFFFF; font-size: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center">
                    没有导入数据
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="body-card-left-item-two-card2">
            <div class="card-header">
              <div style="font-size: 22px; color: white">日积分排行榜(倒)</div>
              <div style="width: 30px; height: 30px">
                <img style="width: 30px; height: 30px" src="./../assets/jx.png" alt="#" />
              </div>
            </div>
            <div class="card-body">
              <div class="card-body-item1">
                <div class="card-body-item1-header">{{dayIntegrationList['yesDay']}}</div>
                <div class="card-body-item1-body">
                  <div :style="styleList.dayIntegralListRankBackScroll" v-if="dayIntegrationYesExist">
                    <DayIntegrationRankListBack v-for="(item, index) in dayIntegrationYesListBack"
                                                :key="'dayYesRankBack' + index"
                                                :name="item['user']"
                                                :logo="item['logo']"
                                                :rank="item['yesRank']"
                    />
                  </div>
                  <div v-else style="height: 100%; color: #FFFFFF; font-size: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center">
                    没有导入数据
                  </div>
                </div>
              </div>
              <div class="card-body-item2">
                <div class="card-body-item2-header">{{dayIntegrationList['lastDay']}}</div>
                <div class="card-body-item2-body">
                  <div :style="styleList.dayLastIntegralListRankBackScroll" v-if="dayIntegrationLastExist">
                    <DayIntegrationRankListBack  v-for="(item, index) in dayIntegrationLastListBack"
                                                 :key="'dayLastRankBack' + index"
                                                 :name="item['user']"
                                                 :logo="item['logo']"
                                                 :rank="item['lastRank']"
                    />
                  </div>
                  <div v-else style="height: 100%; color: #FFFFFF; font-size: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center">
                    没有导入数据
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="body-card-right">
        <div class="body-card-right-item-one">
          <div class="body-card-right-header">
            <div class="body-card-right-header-text">
              月积分人员表 <span style="color: #90EE90">&lt;{{monthIntegrationList['month'] ? monthIntegrationList['month'] : '无'}}&gt;</span>
            </div>
            <div class="body-card-right-header-img">
              <img src="./../assets/jx.png" alt="#" />
            </div>
          </div>
          <div class="body-card-right-body">
            <div :style="styleList.monthIntegralListScroll" v-if="monthIntegrationListExist">
              <MonthIntegrationList v-for="(item, index) in monthIntegrationList['data']"
                                    :key="'monthRankItem' + index"
                                    :name="item['user']"
                                    :logo="item['logo']"
                                    :rank="item['rank']"
                                    :charge-complete-count="10"
                                    :integral-task-sum="item['integralTaskSum']"
                                    :integral-task-avg="item['integralTaskAvg']"
                                    :integral-site-sum="item['integralSiteSum']"
                                    :integral-site-avg="item['integralSiteAvg']"
              />
            </div>
            <div v-else style="height: 100%; color: rgb(255, 255, 255); font-size: 30px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              没有数据
            </div>
          </div>
        </div>
        <div class="body-card-right-item-two">
          <div class="body-card-right-item-two-card1">
            <div class="card-header">
              <div style="font-size: 22px; color: white">
                月积分排行榜 <span style="color: #FFFFFF">&lt;{{monthIntegrationList['month'] ? monthIntegrationList['month'] : '无'}}&gt;</span>
              </div>
              <div style="width: 30px; height: 30px">
                <img style="width: 30px; height: 30px" src="./../assets/jx.png" alt="#" />
              </div>
            </div>
            <div style="width: 451px; overflow: hidden; height: 350px" v-if="monthIntegrationListExist">
              <div class="card-body" :style="styleList.monthIntegralListRankScroll">
                <MonthIntegrationRankList v-for="(item, index) in monthIntegrationRankList"
                                          :key="'monthRank' + index"
                                          :name="item['user']"
                                          :logo="item['logo']"
                                          :rank="item['rank']"
                />
              </div>
            </div>
            <div v-else style="background-color: rgba(0,0,0,.2); height: calc(100% - 40px); width: 450px; color: rgb(255, 255, 255); font-size: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              没有数据
            </div>
          </div>
          <div class="body-card-right-item-two-card2">
            <div class="card-header">
              <div style="font-size: 22px; color: white">
                月积分排行榜(倒) <span style="color: #FFFFFF">&lt;{{monthIntegrationList['month'] ? monthIntegrationList['month'] : '无'}}&gt;</span>
              </div>
              <div style="width: 30px; height: 30px">
                <img style="width: 30px; height: 30px" src="./../assets/jx.png" alt="#" />
              </div>
            </div>
            <div style="width: 451px; overflow: hidden; height: 350px" v-if="monthIntegrationListExist">
              <div class="card-body" :style="styleList.monthIntegralListRankBackScroll">
                <MonthIntegrationRankListBack v-for="(item, index) in monthIntegrationRankBackList"
                                              :key="'monthRankBack' + index"
                                              :name="item['user']"
                                              :logo="item['logo']"
                                              :rank="item['rank']"
                />
              </div>
            </div>
            <div v-else style="background-color: rgba(0,0,0,.2); height: calc(100% - 40px); width: 450px; color: rgb(255, 255, 255); font-size: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              没有数据
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-card">
      <div class="title">异常信息</div>
      <div class="content">
        <ExtraList />
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from "axios"
  import Api from "./../api/global"

  import Time from "./../components/Time"
  import Notify from "../components/Notify"
  import ExtraList from "../components/ExtraList"
  import DayIntegrationList from "../components/DayIntegration/DayIntegrationList/DayIntegrationList"
  import DayIntegrationRankList from "../components/DayIntegration/DayIntegrationRankList/DayIntegrationRankList"
  import DayIntegrationRankListBack from "../components/DayIntegration/DayIntegrationRankListBack/DayIntegrationRankListBack"
  import MonthIntegrationList from "../components/MonthIntegration/MonthIntegrationList/MonthIntegrationList"
  import MonthIntegrationRankList from "../components/MonthIntegration/MonthIntegrationRankList/MonthIntegrationRankList"
  import MonthIntegrationRankListBack from "../components/MonthIntegration/MonthIntegrationRankListBack/MonthIntegrationRankListBack"

  import "./home.css"

  let dayIntegralListScroll = {
    marginTop: 0,
    animation: "dayIntegralListScroll 120s linear infinite"
  }
  let dayIntegralListRankScroll = {
    marginTop: 0,
    animation: "dayIntegralListRankScroll 40s linear infinite"
  }
  let dayIntegralListRankBackScroll = {
    marginTop: 0,
    animation: "dayIntegralListRankBackScroll 40s linear infinite"
  }
  let dayLastIntegralListRankScroll = {
    marginTop: 0,
    animation: "dayLastIntegralListRankScroll 40s linear infinite"
  }
  let dayLastIntegralListRankBackScroll = {
    marginTop: 0,
    animation: "dayLastIntegralListRankBackScroll 40s linear infinite"
  }
  let monthIntegralListScroll = {
    marginTop: 0,
    animation: "monthIntegralListScroll 120s linear infinite"
  }
  let monthIntegralListRankScroll = {
    marginTop: 0,
    animation: "monthIntegralListRankScroll 20s linear infinite"
  }
  let monthIntegralListRankBackScroll = {
    marginTop: 0,
    animation: "monthIntegralListRankBackScroll 20s linear infinite"
  }

  export default {
    name: "Home",
    components: {
      Time,
      Notify,
      ExtraList,
      DayIntegrationList,
      DayIntegrationRankList,
      DayIntegrationRankListBack,
      MonthIntegrationList,
      MonthIntegrationRankList,
      MonthIntegrationRankListBack
    },
    data: () => ({
      dataApi: Api,
      // 全局出现的 style 动态样式
      styleList: {
        dayIntegralListScroll,
        dayIntegralListRankScroll,
        dayIntegralListRankBackScroll,
        dayLastIntegralListRankScroll,
        dayLastIntegralListRankBackScroll,
        monthIntegralListScroll,
        monthIntegralListRankScroll,
        monthIntegralListRankBackScroll
      },
      // 没有通知时显示标题名
      dashboardName: "积分看板",
      // 通知信息
      notifyMessage: [],
      // 原数据
      getAllData: {},
      // 日积分人员表
      dayIntegrationList: { data: [] },
      // 日积分人员表 - 当日
      dayIntegrationYesList: [],
      dayIntegrationYesListBack: [],
      dayIntegrationYesExist: false,
      // 日积分人员表 - 昨日
      dayIntegrationLastList: [],
      dayIntegrationLastListBack: [],
      dayIntegrationLastExist: false,
      // 月积分排行信息列表
      monthIntegrationList: { data: [] },
      monthIntegrationListExist: false,
      // 月积分排行榜
      monthIntegrationRankList: [],
      // 月积分排行榜(倒)
      monthIntegrationRankBackList: []
    }),
    mounted() {
      let _this = this
      // 获取数据 - 并进行数据处理
      _this.GetData()
    },
    methods: {
      GetData() {
        let _this = this
        let dataList = []
        _this.dayIntegrationList = {}
        _this.dayIntegrationList.data = []
        Axios.get(_this.dataApi.url+":"+_this.dataApi.port+_this.dataApi.path, { params: _this.dataApi.condition }). then(res => {
          dataList = JSON.parse(JSON.stringify(res.data))
          _this.getAllData = dataList
          /** 昨日数据处理 */
          // 如果存在数据
          if(dataList['integralByDay'][1]['integralList'].length) {
            _this.dayIntegrationYesExist = true
            // 处理并存放数据
            dataList['integralByDay'][1]['integralList'].forEach(res => {
              _this.dayIntegrationList.data.push({
                user: res['user']['nickName'],
                logo: res['user']['avatarName'],
                yesSort: res['sort'] === null ? 999 : res['sort'],
                lastSort: 999,
                yesIntegralTask: res['integralTask'] === null ? 0 : res['integralTask'],
                lastIntegralTask: res['integralTask'] === null ? 0 : res['integralTask'],
                yesIntegralSite: res['integralSite'] === null ? 0 : res['integralSite'],
                astIntegralSite: res['integralSite'] === null ? 0 : res['integralSite']
              })
            })
            // 整理排名规则
            _this.dayIntegrationList.data.forEach((res, index) => {
              if(index === 0) { _this.dayIntegrationList.data[index]['yesRank'] = res['yesSort'] + 1 }
              else {
                res['yesSort'] !== _this.dayIntegrationList.data[index-1]['yesSort'] ? _this.dayIntegrationList.data[index]['yesRank'] = index + 1 : _this.dayIntegrationList.data[index]['yesRank'] = _this.dayIntegrationList.data[index - 1]['yesRank']
              }
            })
            console.log(_this.dayIntegrationList.data)
          }
          else {
            _this.dayIntegrationYesExist = false
          }
          /** 前日数据处理 */
          // 如果存在数据
          if(dataList['integralByDay'][0]['integralList'].length) {
            _this.dayIntegrationLastExist = true
            // 处理并存放数据 --- 先判断是否存在昨日数据
            if(_this.dayIntegrationYesExist) {
              // 如果存在昨日数据, 将昨日数据进行遍历, 并将对应user的前日数据补进去
              _this.dayIntegrationList.data.forEach(res => {
                dataList['integralByDay'][0]['integralList'].forEach(res2 => {
                  if( res['user'] === res2['user']['nickName'] ) {
                    res['lastIntegralSite'] = (res2['integralSite'] === null ? 0 : res2['integralSite'])
                    res['lastIntegralTask'] = (res2['integralTask'] === null ? 0 : res2['integralTask'])
                    res['lastSort'] = (res2['sort'] === null ? 999 : res2['sort'])
                    return true
                  }
                })
              })
            }
            else {
              // 如果不存在昨日数据, 则将前日数据进行push, 昨日数据进行置零
              dataList['integralByDay'][0]['integralList'].forEach(res => {
                _this.dayIntegrationList.data.push({
                  user: res['user']['nickName'],
                  logo: res['user']['avatarName'],
                  yesSort: 999,
                  lastSort: res['sort'] === null ? 999 : res['sort'],
                  yesIntegralTask: 0,
                  lastIntegralTask: res['integralTask'] === null ? 0 : res['integralTask'],
                  yesIntegralSite: 0,
                  lastIntegralSite: res['integralSite'] === null ? 0 : res['integralSite']
                })
              })
            }
            // 整理排名规则
            _this.dayIntegrationList.data.forEach((res, index) => {
              if(index === 0) { _this.dayIntegrationList.data[index]['lastRank'] = res['lastSort'] + 1 }
              else {
                res['lastSort'] !== _this.dayIntegrationList.data[index-1]['lastSort'] ? _this.dayIntegrationList.data[index]['lastRank'] = index + 1 : _this.dayIntegrationList.data[index]['lastRank'] = _this.dayIntegrationList.data[index - 1]['lastRank']
              }
            })
          }
          else {
            _this.dayIntegrationLastExist = false
          }
          _this.DayRankList()
          // 获取时间
          _this.$set(_this.dayIntegrationList, 'yesDay', dataList['integralByDay'][1]['day'])
          _this.$set(_this.dayIntegrationList, 'lastDay', dataList['integralByDay'][0]['day'])

          /** 月数据处理 */
          // 如果存在数据 (若本月为空, 获取上月数据  ---  即获取有的数据)
          if(dataList['integralByMonth'][dataList['integralByMonth'].length - 1]['integralList'].length) {
            _this.monthIntegrationListExist = true
            // 处理并存放数据
            dataList['integralByMonth'][dataList['integralByMonth'].length - 1]['integralList'].forEach(res => {
              _this.monthIntegrationList.data.push({
                user: res['user']['nickName'],
                logo: res['user']['avatarName'],
                sort: res['sort'] === null ? 999 : res['sort'],
                integralTaskSum: res['integralTaskSum'] === null ? 0 : res['integralTaskSum'],
                integralSiteSum: res['integralSiteSum'] === null ? 0 : res['integralSiteSum'],
                integralTaskAvg: res['integralTaskAvg'] === null ? 0 : res['integralTaskAvg'],
                integralSiteAvg: res['integralSiteAvg'] === null ? 0 : res['integralSiteAvg']
              })
            })
            // 整理排名规则
            _this.monthIntegrationList.data.forEach((res, index) => {
              if(index === 0) { _this.monthIntegrationList.data[index]['rank'] = res['sort'] + 1 }
              else {
                res['sort'] !== _this.monthIntegrationList.data[index-1]['sort'] ? _this.monthIntegrationList.data[index]['rank'] = index + 1 : _this.monthIntegrationList.data[index]['rank'] = _this.monthIntegrationList.data[index - 1]['rank']
              }
            })
            console.log(_this.monthIntegrationList.data)
          }
          else {
            _this.monthIntegrationListExist = false
          }
          _this.MonthRankList()
          _this.$set(_this.monthIntegrationList, 'month', dataList['integralByMonth'][dataList['integralByMonth'].length - 1]['month'])
          // 载入动画
          _this.Animation()
        })
      },
      // 日积分排行榜列表处理
      DayRankList() {
        let _this = this
        // 判断是否存在数据, 如果不存在则不处理
        _this.dayIntegrationYesList = []
        _this.dayIntegrationYesListBack = []
        _this.dayIntegrationLastList = []
        _this.dayIntegrationLastListBack = []
        // 昨日数据
        if(this.dayIntegrationYesExist) {
          let middleData = JSON.parse(JSON.stringify(this.dayIntegrationList.data))
          /** 日积分 - 昨日规则 */
          middleData.forEach((res, index) => {
            // 将前10怼进去
            if(index < 10) { _this.dayIntegrationYesList.push(res) }
            else if (_this.dayIntegrationYesList[9]['yesSort'] === res['yesSort']) { _this.dayIntegrationYesList.push(res) }
            else { return false }
          })
          middleData.reverse().forEach((res, index) => {
            // 将前10怼进去
            if(index < 10) { _this.dayIntegrationYesListBack.push(res) }
            else if (_this.dayIntegrationYesListBack[9]['yesSort'] === res['yesSort']) { _this.dayIntegrationYesListBack.push(res) }
            else { return false }
          })
        }
        console.log(_this.dayIntegrationYesList)
        console.log(_this.dayIntegrationYesListBack)

        // 前日
        if(this.dayIntegrationLastExist) {
          let middleData = JSON.parse(JSON.stringify(this.dayIntegrationList.data))
          middleData.forEach((res, index) => {
            // 将前10怼进去
            if(index < 10) { _this.dayIntegrationLastList.push(res) }
            else if (_this.dayIntegrationLastList[9]['lastSort'] === res['lastSort']) { _this.dayIntegrationLastList.push(res) }
            else { return false }
          })
          middleData.reverse().forEach((res, index) => {
            // 将前10怼进去
            if(index < 10) { _this.dayIntegrationLastListBack.push(res) }
            else if (_this.dayIntegrationLastListBack[9]['lastSort'] === res['lastSort']) { _this.dayIntegrationLastListBack.push(res) }
            else { return false }
          })
        }
      },
      // 月积分排行榜列表处理
      MonthRankList() {
        let _this = this
        // 如果数据存在
        if(_this.monthIntegrationListExist) {
          let middleData = JSON.parse(JSON.stringify(_this.monthIntegrationList['data']))
          middleData.forEach((res, index) => {
            // 将前10怼进去
            if(index < 10) { _this.monthIntegrationRankList.push(res) }
            else if(_this.monthIntegrationRankList[9]['sort'] === res['sort']) { _this.monthIntegrationRankList.push(res) }
            else { return false }
          })
          middleData.reverse().forEach((res, index) => {
            // 将前10怼进去
            if(index < 10) { _this.monthIntegrationRankBackList.push(res) }
            else if(_this.monthIntegrationRankBackList[9]['sort'] === res['sort']) { _this.monthIntegrationRankBackList.push(res) }
            else { return false }
          })
        }
      },
      // 动画效果
      Animation() {
        let _this = this
        if(_this.dayIntegrationList['data'].length > 4) {
          document.styleSheets[0].insertRule(`@keyframes dayIntegralListScroll {
            10% { margin-top: 0 }
            50% { margin-top: calc(${-160 * (_this.dayIntegrationList['data'].length - 4) + 80}px) }
            70% { margin-top: calc(${-160 * (_this.dayIntegrationList['data'].length - 4) + 80}px) }
            100% { margin-top: 0 }
          }`)
        }
        if(_this.dayIntegrationYesList.length > 4) {
          document.styleSheets[0].insertRule(`@keyframes dayIntegralListRankScroll {
            10% { margin-top: 0 }
            50% { margin-top: calc(${-70 * (_this.dayIntegrationYesList.length - 4) + 20}px) }
            70% { margin-top: calc(${-70 * (_this.dayIntegrationYesList.length - 4) + 20}px) }
            100% { margin-top: 0 }
          }`)
        }
        if(_this.dayIntegrationLastList.length > 4) {
          document.styleSheets[0].insertRule(`@keyframes dayLastIntegralListRankScroll {
            10% { margin-top: 0 }
            50% { margin-top: calc(${-70 * (_this.dayIntegrationLastList.length - 4) + 20}px) }
            70% { margin-top: calc(${-70 * (_this.dayIntegrationLastList.length - 4) + 20}px) }
            100% { margin-top: 0 }
          }`)
        }
        if(_this.dayIntegrationYesListBack.length > 4) {
          document.styleSheets[0].insertRule(`@keyframes dayIntegralListRankBackScroll {
            10% { margin-top: 0 }
            50% { margin-top: calc(${-70 * (_this.dayIntegrationYesListBack.length - 4) + 20}px) }
            70% { margin-top: calc(${-70 * (_this.dayIntegrationYesListBack.length - 4) + 20}px) }
            100% { margin-top: 0 }
          }`)
        }
        if(_this.dayIntegrationLastListBack.length > 4) {
          document.styleSheets[0].insertRule(`@keyframes dayLastIntegralListRankBackScroll {
            10% { margin-top: 0 }
            50% { margin-top: calc(${-70 * (_this.dayIntegrationLastListBack.length - 4) + 20}px) }
            70% { margin-top: calc(${-70 * (_this.dayIntegrationLastListBack.length - 4) + 20}px) }
            100% { margin-top: 0 }
          }`)
        }
        if(_this.monthIntegrationList['data'].length > 4) {
          document.styleSheets[0].insertRule(`@keyframes monthIntegralListScroll {
            10% { margin-top: 0 }
            50% { margin-top: calc(${-160 * (_this.monthIntegrationList['data'].length - 4) + 80}px) }
            70% { margin-top: calc(${-160 * (_this.monthIntegrationList['data'].length - 4) + 80}px) }
            100% { margin-top: 0 }
          }`)
        }
        if(_this.monthIntegrationRankList.length > 10) {
          console.log(_this.monthIntegrationRankList.length)
          console.log((_this.monthIntegrationRankList.length / 2).toFixed(0)*1)
          document.styleSheets[0].insertRule(`@keyframes monthIntegralListRankScroll {
            10% { margin-top: 0 }
            50% { margin-top: calc(${-70 * (((_this.monthIntegrationRankList.length - 10) / 2).toFixed(0)*1) + 2}px) }
            70% { margin-top: calc(${-70 * (((_this.monthIntegrationRankList.length - 10) / 2).toFixed(0)*1) + 2}px) }
            100% { margin-top: 0 }
          }`)
        }
        if(_this.monthIntegrationRankBackList.length > 10) {
          console.log(_this.monthIntegrationRankBackList.length)
          console.log((_this.monthIntegrationRankBackList.length / 2).toFixed(0)*1)
          document.styleSheets[0].insertRule(`@keyframes monthIntegralListRankBackScroll {
            10% { margin-top: 0 }
            50% { margin-top: calc(${-70 * (((_this.monthIntegrationRankBackList.length - 10) / 2).toFixed(0)*1) + 2}px) }
            70% { margin-top: calc(${-70 * (((_this.monthIntegrationRankBackList.length - 10) / 2).toFixed(0)*1) + 2}px) }
            100% { margin-top: 0 }
          }`)
        }
      }
    }
  }
</script>
