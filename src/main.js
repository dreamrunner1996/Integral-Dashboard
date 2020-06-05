import Vue from 'vue'
import App from './App.vue'

// 使用组件库  ---  ant, Vant
// js组件已加入 babel.config.js  ---  按需加入
import "ant-design-vue/dist/antd.css"
import "vant/lib/index.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
