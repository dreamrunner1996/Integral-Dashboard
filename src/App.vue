<template>
  <div id="app">
    <div v-if="device === 'PC'">
      <Home />
    </div>
    <div v-else>
      <HomeMobile />
    </div>
  </div>
</template>

<script>
  import Home from "./views/Home";
  import HomeMobile from "./views/HomeMobile";

  import "./app.css";

  export default {
    name: 'App',
    components: { Home, HomeMobile },
    data: () => ({
      system: {
        win: false,
        mac: false,
        xll: false,
        iPad: false
      },
      device: ""
    }),
    mounted() {
      let p = navigator.platform;
      this.system.win = p.indexOf("Win") === 0;
      this.system.mac = p.indexOf("Mac") === 0;
      this.system.x11 = (p === "X11") || (p.indexOf("Linux") === 0);
      this.system.ipad = navigator.userAgent.match(/iPad/i) !== null;
      if (this.system.win || this.system.mac || this.system.xll || this.system.ipad) {
        this.device = "PC"
      } else {
        this.device = "mobile"
      }
    }
  }
</script>
