import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6704d028 = () => interopDefault(import('../pages/Analytics.vue' /* webpackChunkName: "pages/Analytics" */))
const _9c5e9302 = () => interopDefault(import('../pages/Catalog.vue' /* webpackChunkName: "pages/Catalog" */))
const _2feddb86 = () => interopDefault(import('../pages/Create.vue' /* webpackChunkName: "pages/Create" */))
const _477ed0b5 = () => interopDefault(import('../pages/Delete.vue' /* webpackChunkName: "pages/Delete" */))
const _bee6bf4a = () => interopDefault(import('../pages/Detail.vue' /* webpackChunkName: "pages/Detail" */))
const _1a9973d8 = () => interopDefault(import('../pages/Edit.vue' /* webpackChunkName: "pages/Edit" */))
const _513dca48 = () => interopDefault(import('../pages/Feature.vue' /* webpackChunkName: "pages/Feature" */))
const _980f2b9c = () => interopDefault(import('../pages/Search.vue' /* webpackChunkName: "pages/Search" */))
const _7f040187 = () => interopDefault(import('../pages/Show.vue' /* webpackChunkName: "pages/Show" */))
const _0ae71e8a = () => interopDefault(import('../pages/Top.vue' /* webpackChunkName: "pages/Top" */))
const _2dfb1658 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Analytics",
    component: _6704d028,
    name: "Analytics"
  }, {
    path: "/Catalog",
    component: _9c5e9302,
    name: "Catalog"
  }, {
    path: "/Create",
    component: _2feddb86,
    name: "Create"
  }, {
    path: "/Delete",
    component: _477ed0b5,
    name: "Delete"
  }, {
    path: "/Detail",
    component: _bee6bf4a,
    name: "Detail"
  }, {
    path: "/Edit",
    component: _1a9973d8,
    name: "Edit"
  }, {
    path: "/Feature",
    component: _513dca48,
    name: "Feature"
  }, {
    path: "/Search",
    component: _980f2b9c,
    name: "Search"
  }, {
    path: "/Show",
    component: _7f040187,
    name: "Show"
  }, {
    path: "/Top",
    component: _0ae71e8a,
    name: "Top"
  }, {
    path: "/",
    component: _2dfb1658,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
