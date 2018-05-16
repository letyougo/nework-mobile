<template>
  <div id="app">
    <div class="login-top">
      <div class="top-left">
        <span>北京</span>&nbsp;
        <a href="#">切换</a>
      </div>
      <p>nework</p>
      <div class="top-right">三</div>
    </div>
    <br>
    <p class="login-create">创建账号</p>
    <br>
    <el-form class="login-form">
      <el-form-item label="姓名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="手机号码">
        <el-input placeholder="Please input" v-model="phone_region" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="Select">
            <el-option label="+86" value="cn"></el-option>

          </el-select>
        </el-input>
      </el-form-item>

      <el-form-item label="验证码">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-button slot="append"  style="padding-right: 30px;padding-left: 10px">发送验证码</el-button>
        </el-input>
      </el-form-item>
      <p>
        点击“注册”或“继续”即表示我同意 Nework 的 <a href="#">服务条款</a> 和 <a href="#">隐私政策</a> 。
      </p>
      <br/>
      <el-form-item>
        <el-button type="primary" size="large">注册</el-button>
      </el-form-item>
      <p>已经有账号了,<a href="#">去登录</a></p>
      <!--<el-form-item>-->
        <!--<el-button type="primary" size="large" style="background: #2F9833;border: none ">微信登陆</el-button>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-button type="primary" size="large" style="background:#4C66A4 ;border: none ">facebook登陆</el-button>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
        <!--<el-button type="primary" size="large" style="background:#9CA6AE;border: none ">Google登陆</el-button>-->
      <!--</el-form-item>-->


    </el-form>





  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      radio3:'上海',
      phone_region:'cn'
    }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  padding: 0.15rem;
}
.el-input-group__append, .el-input-group__prepend{
  /*padding: 0 50px;*/
}
  .login-top{
    position: relative;
  }
  .top-left{
    position: absolute;
    left: 0;
    top: 0;
    vertical-align: middle;
    line-height: 30px;
  }
  .top-right{
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: middle;
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
</style>
