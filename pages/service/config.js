import request from 'axios'
import Vue from 'vue'
import elementUI from 'element-ui'
Vue.use(elementUI)
request.defaults.baseURL = 'http://nework-web.rdc.waibaodashi.com'

request.interceptors.request.use((req)=> {
  return req
},(error)=>{

})


request.interceptors.response.use((res)=> {
  return res
},(error)=>{
  console.log(error,'dsdsds')

})


export default request
