import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import App from '@/components/App'
import Apps from '@/components/Apps'
import Privacy from '@/components/Privacy'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/a'
    },
    {
      path: '/r',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/a',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/a/:id',
      name: 'App',
      component: App,
      props: true
    },
    {
      path: '/p',
      name: 'Privacy',
      component: Privacy
    }
  ]
})
