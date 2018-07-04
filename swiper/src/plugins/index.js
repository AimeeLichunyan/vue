import Lazyload from 'vue-lazyload'

import Directives from './directives'
import Filters from './filters'
import Services from './services'
import Utils from './utils'
import Widgets from './widgets'

export default {
  install: (Vue, options) => {
    // 图片懒加载
    Vue.use(Lazyload);

    // 全局过滤器
    Vue.use(Filters);

    // 全局指令
    Vue.use(Directives);

    // 帮助类
    Vue.use(Utils);

    // 后端服务请求
    Vue.use(Services);

    // 插件
    Vue.use(Widgets);
  }
}
