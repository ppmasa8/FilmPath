export default ({ $axios }) => {
  // Request Logs
  $axios.onRequest((config) => {
    console.log(config)
  })
  // Response Logs
  $axios.onResponse((config) => {
    console.log(config)
  })
  // Error Logs
  $axios.onError((e) => {
    console.log(e.response)
  })
}
