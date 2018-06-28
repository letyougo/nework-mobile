import request from 'axios'
import Vue from 'vue'
import elementUI from 'element-ui'
Vue.use(elementUI)
request.defaults.baseURL = 'http://nework-web.rdc.waibaodashi.com'

request.interceptors.request.use((req)=> {
  return req
},(error)=>{
  app.$message.error(error)
})


console.log(app.$message,'app.message')
request.interceptors.response.use((res)=> {
  return res
},(error)=>{
  console.log(error,'dsdsds')
  app.$message.error(error)
})


export default request
