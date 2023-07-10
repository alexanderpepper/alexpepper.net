import Vue from 'vue'
import Router from 'vue-router'
import Resume from './views/Resume'
import App from './views/App'
import Apps from './views/Apps'
import Privacy from './views/Privacy'

Vue.use(Router)

const routes = [
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

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
