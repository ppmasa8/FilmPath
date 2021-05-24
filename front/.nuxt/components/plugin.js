import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Movie: () => import('../../components/Movie.vue' /* webpackChunkName: "components/movie" */).then(c => wrapFunctional(c.default || c)),
  Spinner: () => import('../../components/Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
