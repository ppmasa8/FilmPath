import { wrapFunctional } from './utils'

export { default as Movies } from '../../components/Movies.vue'
export { default as Spinner } from '../../components/Spinner.vue'

export const LazyMovies = import('../../components/Movies.vue' /* webpackChunkName: "components/movies" */).then(c => wrapFunctional(c.default || c))
export const LazySpinner = import('../../components/Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => wrapFunctional(c.default || c))
