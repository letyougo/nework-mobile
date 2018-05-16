<template>
  <div id="app">
    <el-form>
      <el-form-item label="姓名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="手机好吗">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-button slot="append"  style="padding-right: 30px;padding-left: 10px">发送验证码</el-button>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="large">登陆</el-button>
      </el-form-item>
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
export default {
  name: 'App',
  data(){
    return {
      radio3:'上海'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0.15rem;
}
.el-input-group__append, .el-input-group__prepend{
  /*padding: 0 50px;*/
}
</style>
