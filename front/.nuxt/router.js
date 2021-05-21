import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c6432fe8 = () => interopDefault(import('../pages/analytics.vue' /* webpackChunkName: "pages/analytics" */))
const _4e670e9f = () => interopDefault(import('../pages/catalog.vue' /* webpackChunkName: "pages/catalog" */))
const _2feddb86 = () => interopDefault(import('../pages/Create.vue' /* webpackChunkName: "pages/Create" */))
const _5ea616d6 = () => interopDefault(import('../pages/delete.vue' /* webpackChunkName: "pages/delete" */))
const _224e3c18 = () => interopDefault(import('../pages/edit.vue' /* webpackChunkName: "pages/edit" */))
const _542fec97 = () => interopDefault(import('../pages/Header.vue' /* webpackChunkName: "pages/Header" */))
const _3d268e12 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _d1584e4a = () => interopDefault(import('../pages/top.vue' /* webpackChunkName: "pages/top" */))
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
    path: "/analytics",
    component: _c6432fe8,
    name: "analytics"
  }, {
    path: "/catalog",
    component: _4e670e9f,
    name: "catalog"
  }, {
    path: "/Create",
    component: _2feddb86,
    name: "Create"
  }, {
    path: "/delete",
    component: _5ea616d6,
    name: "delete"
  }, {
    path: "/edit",
    component: _224e3c18,
    name: "edit"
  }, {
    path: "/Header",
    component: _542fec97,
    name: "Header"
  }, {
    path: "/search",
    component: _3d268e12,
    name: "search"
  }, {
    path: "/top",
    component: _d1584e4a,
    name: "top"
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
