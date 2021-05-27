import { wrapFunctional } from './utils'

export { default as Images } from '../../components/Images.vue'
export { default as Movies } from '../../components/Movies.vue'
export { default as Spinner } from '../../components/Spinner.vue'

export const LazyImages = import('../../components/Images.vue' /* webpackChunkName: "components/images" */).then(c => wrapFunctional(c.default || c))
export const LazyMovies = import('../../components/Movies.vue' /* webpackChunkName: "components/movies" */).then(c => wrapFunctional(c.default || c))
export const LazySpinner = import('../../components/Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => wrapFunctional(c.default || c))
