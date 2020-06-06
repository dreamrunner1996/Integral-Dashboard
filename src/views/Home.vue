<template>
  <div class="home-content">
    <div class="top-card">
      <div class="logo">
        <img src="./../assets/robot.png" alt="#">
      </div>
      <div class="notify-card">
        <img src="./../assets/notify.png" alt="#">
        <div class="notify-content">
          <Notify :notifyMessage="notifyMessage" />
        </div>
      </div>
      <div class="time-card">
        <Time @hourChange="HourChange" />
      </div>
    </div>
    <div class="body-card">
      <div class="body-card-left"></div>
      <div class="body-card-center"></div>
      <div class="body-card-right"></div>
    </div>
  </div>
</template>

<script>
  import Time from "./../components/Time"
  import Notify from "../components/Notify"

  import "./home.css"

  export default {
    name: "Home",
    components: { Time, Notify },
    data: () => ({
      fleshWeather: true,
      weather: {},
      notifyMessage: "这是一条通知信息"
    }),
    mounted() {
    },
    methods: {
      HourChange() {
        let _this = this
        _this.fleshWeather = false
        _this.$nextTick( () => {
          _this.fleshWeather = true
        } )
      }
    }
  }
</script>
