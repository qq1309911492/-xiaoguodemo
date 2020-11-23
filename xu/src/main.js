// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入css文件
import './assets/css/reset.css'

//引入js文件
import  './assets/js/remScale'

//矢量图
import  './assets/icon/iconfont.css'

Vue.config.productionTip = false

//组件
import b from './components/back/index'
for(let i in b){
  Vue.component(i,b[i])
}
//修饰符
import a from './components/xsf/index'
for(let i in a){
  Vue.filter(i,a[i])
}

//vant
import vantUi from 'vant'
Vue.use(vantUi)

import 'vant/lib/index.css'

Vue.prototype.$url='http://localhost:3000'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
 
})
