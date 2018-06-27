import request from 'axios'
import Vue from 'vue'
import elementUI from 'element-ui'
Vue.use(elementUI)
request.defaults.baseURL = 'http://nework-web.rdc.waibaodashi.com'
let app = new Vue({
  el:"#app"
})
request.interceptors.request.use((req)=> {
  return req
},(error)=>{
  app.$message.error(error)
})


console.log(app.$message,'app.message')
request.interceptors.response.use((res)=> {
  console.log(res,'response')

  if(res.data.code !== 200){

    app.$message.error(res.data.msg)
  }
  return res
},(error)=>{
  console.log(Vue.message)
  app.$message.error(error)
})


export default request
