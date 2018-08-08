import Vue from 'vue'
import Router from 'vue-router'

// 导入对应的vuex文件
import store from './../store/store'

// 导入相应的子组件
import Hello from './../components/Hello'
import Lisc from './../components/Lisc'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    { name: '/', path: '/', component: Hello },
      { name: 'lisc', path: '/lisc', component: Lisc }
  ]
})

export default router