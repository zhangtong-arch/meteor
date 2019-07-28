import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import userManage from '@/pages/user/userManage'
import powerManage from '@/pages/power/powerManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/usermanage'
    },
    {
      path: '/index/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/index/usermanage',
          name: '用户管理',
          component: userManage,
          ico: 'el-icon-menu'
        },
        {
          path: '/index/powermanage',
          name: '权限管理',
          component: powerManage,
          ico: 'el-icon-setting'
        }
      ]
    },
  ]
})
