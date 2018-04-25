import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import iView from 'iview'
import 'element-ui/lib/theme-default/index.css'
//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

//router是路由的管理者，循环routes，先展示login模块
//登录成功后，进入系统，其实就是切换其他模块展示
//导航和头部是一直展示的，点击导航中的按钮，router会去找routes中定义该按钮对应的模块并进行展示
//栏目的展开是Home.vue中单独操作的，跟路由没关系

//用 vue-route 的 beforeEach 实现导航守卫（路由跳转前验证登录）
router.beforeEach((to, from, next) => {
  //NProgress.start();
  //如果要跳到登录页面，就把当前session中的用户删除，
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  //用户不存在，且想去的路由不是登录模块，强制跳到登录，否则就正常跳到用户想去的模块
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')//这里的app是index.html中id为app的标签

