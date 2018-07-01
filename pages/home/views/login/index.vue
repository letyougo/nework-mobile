<template>
  <div id="app">

    <br>
    <p class="login-create">登录</p>
    <br>
    <el-form class="login-form">
      <el-form-item label="姓名">
        <el-input v-model="phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="pwd" type="password"></el-input>
      </el-form-item>
      <p class="login-other">
        <span>还没有账号? <a @click="$router.push('/register')">去注册</a></span>
       <a @click="$router.push('/forget')">忘记密码</a>
      </p>
      <br/>
      <el-form-item>
        <el-button type="primary" size="large" @click="login">登录</el-button>
      </el-form-item>
      <p class="login-sso">您也可以选择第三方账号登录</p>
      <el-form-item>
        <el-button type="primary" size="large" style="background: #2F9833;border: none ">微信登陆</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" style="background:#4C66A4 ;border: none ">facebook登陆</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="large" style="background:#9CA6AE;border: none ">Google登陆</el-button>
      </el-form-item>


    </el-form>





  </div>
</template>

<script>

import request from '../../request.js'

let url = '/login/signIn'
export default {
  name: 'App',
  data(){
    return {
      radio3:'上海',
      phone_region:'cn',
      phoneNumber:'',
      pwd:'',
    }
  },
  methods:{
    async login(){
      let res = await request.post(url,{
        phoneNumber:this.phoneNumber,
        pwd:this.pwd,
      })
      if(res.data.code == 200){
        localStorage.setItem('userId',res.data.data.userId)

        this.$router.push('/')
      }else{
        this.$message({
          showClose: true,
          message: res.data.desc,
          type: 'error'
        });
      }

      //
    }
  },
  mounted(){


  }
}
</script>

<style>
#app {

  padding: 0.15rem;
}
.el-input-group__append, .el-input-group__prepend{
  /*padding: 0 50px;*/
}
  .login-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-right{

    line-height: 30px;
    color: #008BF7;
  }
  .login-top p {
    text-align: center;
    line-height: 30px;
    color: #091017;
    font-size: 20px;
    vertical-align: middle;
  }
  .login-create{
    font-size: 30px;
    text-align: left;
  }
  .login-form p{
    font-size: 14px;
    color:#151515 ;
  }
  .login-other{
    display: flex;
    justify-content: space-between;
  }
  .login-form.login-sso{
    color: #000000;
    font-size: 20px;
    margin: 30px 0 20px 0;
    font-weight: bold;
  }
</style>
