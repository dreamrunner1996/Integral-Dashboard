import Vue from 'vue'
import App from './App.vue'

// import Vant from 'vant'
// import Ant from 'ant-design-vue'
//
// import "ant-design-vue/dist/antd.css"
// import "vant/lib/index.css"

// Vue.use(Vant)
// Vue.use(Ant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
