
import Vue from 'vue'
import VueExt from '@/plugins'
import IndexView from './index.vue'
import 'c-swipe/dist/swipe.css'
import { Swipe, SwipeItem } from 'c-swipe'
// import {SlotPopup} from 'f-ui'
Vue.config.productionTip = false

Vue.use(VueExt)
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
// Vue.use(SlotPopup);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(IndexView),
  mounted () {
    window._vue = this
  }
})
