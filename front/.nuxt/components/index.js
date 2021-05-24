import { wrapFunctional } from './utils'

export { default as Movie } from '../../components/Movie.vue'
export { default as Spinner } from '../../components/Spinner.vue'

export const LazyMovie = import('../../components/Movie.vue' /* webpackChunkName: "components/movie" */).then(c => wrapFunctional(c.default || c))
export const LazySpinner = import('../../components/Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => wrapFunctional(c.default || c))
