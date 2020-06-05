<template>
  <div class="time-content">
    {{ time.date }} <br />
    {{ time.hour }} - {{ time.minute }} - {{ time.seconds }}
  </div>
</template>

<script>
  import "./time.css"

  export default {
    name: "Time",
    data: () => ({
      time: {
        date: 2000,
        week: "",
        hour: 0,
        minute: 0,
        seconds: 0
      }
    }),
    computed: {
      nowHour() {
        return this.time.hour
      }
    },
    watch: {
      nowHour(newVal) {
        this.$emit('hourChange', newVal)
      }
    },
    methods: {
      TimeUpdate() {
        let _this = this
        let date = new Date()
        _this.time.date = date.getFullYear().toString()
        if (date.getMonth() < 10) {
          _this.time.date += " - 0" + (date.getMonth() + 1).toString()
        } else {
          _this.time.date += " - " + (date.getMonth() + 1).toString()
        }
        if (date.getDate() < 10) {
          _this.time.date += " - 0" + (date.getDate()).toString()
        } else {
          _this.time.date += " - " + (date.getDate()).toString()
        }
        switch (date.getDay()) {
          case 0: {
            _this.time.week = "周日"
            break
          }
          case 1: {
            _this.time.week = "周一"
            break
          }
          case 2: {
            _this.time.week = "周二"
            break
          }
          case 3: {
            _this.time.week = "周三"
            break
          }
          case 4: {
            _this.time.week = "周四"
            break
          }
          case 5: {
            _this.time.week = "周五"
            break
          }
          case 6: {
            _this.time.week = "周六"
            break
          }
          default: { break }
        }
        if (date.getHours() < 10) {
          _this.time.hour = "0" + date.getHours().toString()
        } else {
          _this.time.hour = date.getHours().toString()
        }
        if (date.getMinutes() < 10) {
          _this.time.minute = "0" + date.getMinutes().toString()
        } else {
          _this.time.minute = date.getMinutes().toString()
        }
        if (date.getSeconds() < 10) {
          _this.time.seconds = "0" + date.getSeconds().toString()
        } else {
          _this.time.seconds = date.getSeconds().toString()
        }
      }
    },
    mounted() {
      let _this = this
      setInterval(() => {
        _this.TimeUpdate()
      }, 500)
    }
  }
</script>
