
import Vue from 'vue'
import VueExt from '@/plugins'
import IndexView from './index.vue'
// import {SlotPopup} from 'f-ui'
Vue.config.productionTip = false

Vue.use(VueExt)
// Vue.use(SlotPopup);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(IndexView),
  mounted () {
    window._vue = this
  }
})
