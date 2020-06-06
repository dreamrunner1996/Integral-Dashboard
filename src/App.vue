<template>
  <div id="app">
    <div v-if="mobile">
      <HomeMobile />
    </div>
    <div v-else>
      <Home />
    </div>
  </div>
</template>

<script>
  import Home from "./views/Home"
  import HomeMobile from "./views/HomeMobile"

  import "./app.css"

  export default {
    name: 'App',
    components: { Home, HomeMobile },
    data: () => ({
      device: "",
      mobile: false
    }),
    watch: {
      device(newVal) {
        let _this = this
        switch (newVal) {
          case "iOS": {
            _this.mobile = true
            console.log("IOS")
            break
          }
          case "Android": {
            _this.mobile = true
            console.log("AND")
            break
          }
          case "PC": {
            _this.mobile = false
            console.log("PC")
            break
          }
          default: {
            _this.mobile = false
            console.log("unknown")
            break
          }
        }
      }
    },
    mounted() {
      let _this = this
      _this.DeviceJudgement()
      window.onresize = function() {
        setTimeout(() => {
          _this.DeviceJudgement()
        }, 100)
      }
    },
    methods: {
      DeviceJudgement() {
        let _this = this
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          _this.device = "iOS"
        } else if (/(Android)/i.test(navigator.userAgent)) {
          _this.device = "Android"
        } else {
          _this.device = "PC"
        }
      }
    }
  }
</script>
