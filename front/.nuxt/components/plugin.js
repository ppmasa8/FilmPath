import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Images: () => import('../../components/Images.vue' /* webpackChunkName: "components/images" */).then(c => wrapFunctional(c.default || c)),
  Movies: () => import('../../components/Movies.vue' /* webpackChunkName: "components/movies" */).then(c => wrapFunctional(c.default || c)),
  Spinner: () => import('../../components/Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
