<template>
  <div class="weather-content">
    <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=tr&skin=pitaya" frameborder="0" width="325" height="220" allowtransparency="true"></iframe>
  </div>
</template>

<script>
  import "./weather.css"
  import Axios from "axios";

  export default {
    name: "Weather",
    data: () => ({
      weather: {}
    }),
    mounted() {
      console.log('update weather')
    },
    methods: {
      WeatherUpdate() {
        let _this = this
        Axios.get('https://www.tianqiapi.com/free/day?appid=83178962&appsecret=8ZRyw44A', {
          cityid: "101280801",
          city: "顺德"
        }).then(res => {
          Object.assign(_this.weather, {}, res.data)
          console.log(_this.weather)
        })
      }
    }
  }
</script>

<style scoped>

</style>
