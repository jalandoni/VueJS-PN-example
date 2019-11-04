import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import BtnExample from '../views/BtnExample.vue'
import IfExample from '../views/IfExample.vue'
import ForExample from '../views/BtnExample.vue'
import BtnWithMethodExample from '../views/IfExample.vue'
import ComponentExample from '../views/BtnExample.vue'
import RouterExample from '../views/RouterExample.vue'
import RequestExample from '../views/BtnExample.vue'
import TPPage from '../views/TPPage.vue'

import TestPage from '../views/test-view-router/TestPage.vue'
import ArticlePage from '../views/test-view-router/ArticlePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/btn-example',
    name: 'btnExample',
    component: BtnExample
  },
  {
    path: '/if-example',
    name: 'ifExample',
    component: IfExample
  },
  {
    path: '/for-example',
    name: 'forExample',
    component: ForExample
  },
  {
    path: '/btn-example-with-methods',
    name: 'btnWithMethodExample',
    component: BtnWithMethodExample
  },
  {
    path: '/component-example',
    name: 'componentExample',
    component: ComponentExample
  },
  {
    path: '/router-example',
    name: 'router',
    component: RouterExample
  },
  {
    path: '/request-example',
    name: 'requestExample',
    component: RequestExample
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '/articles/:paramsId',
    name: 'article',
    component: ArticlePage
  },
  {
    path: '/tp',
    name: 'TP',
    component: TPPage
  }
]

const router = new VueRouter({
  routes
})

export default router
