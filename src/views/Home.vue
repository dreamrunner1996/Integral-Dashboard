<template>
  <div class="home-content">
    <div class="home-left-page">

    </div>
    <div class="home-right-page">
      <div class="top-card">
        <img src="./../assets/robot.png" alt="#">
        <Time @hourChange="HourChange" />
      </div>
      <Weather v-if="fleshWeather" />
    </div>
  </div>
</template>

<script>
  import Time from "./../components/Time"
  import Weather from "./../components/Weather"

  import "./home.css";

  export default {
    name: "Home",
    components: { Time, Weather },
    data: () => ({
      fleshWeather: true,
      weather: {}
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
