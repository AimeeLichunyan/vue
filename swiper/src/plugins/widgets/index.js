import Dialog from './dialog'
import Toast from './toast'

export default {
  install: (Vue) => {
    Object.defineProperty(Vue.prototype, '$dialog', {value: Dialog});
    Object.defineProperty(Vue.prototype, '$toast', {value: Toast});
  }
}
