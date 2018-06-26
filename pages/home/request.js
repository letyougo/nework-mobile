import request from 'axios'
import qs from 'qs'
import { Form } from 'element-ui';

import vue from 'vue'
request.defaults.baseURL = 'http://nework-web.rdc.waibaodashi.com/'
request.interceptors.request.use(function (config) {
    if(/template/.test(config.url)){
      return config
    }

    if(/qiniu/.test(config.url)){
      return config
    }
    // if(config.method=='post'){
    //     let data = config.data
    //     let form = new FormData()
    //     for(var key in data){
    //         form.append(key,data[key])
    //     }
    //     config.data = form
    //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    //     return config;
    // }
    return config;
  }, function (error) {
    vue.$message.error(error)
});

request.defaults.withCredentials=true;
export default request
