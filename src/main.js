// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

//  Vue.prototype 为注册全局方法（其他任何组件都可以使用）
Vue.prototype.$http = axios;
// 来关闭生产模式下给出的提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'    // 就是App.vue ; template就是选择vue实例要加载哪个模板，App.vue是主程序，其他所有的.vue都是放在App.vue中，所以要加载App.vue就完全可以把其他的东西加载出来
})
