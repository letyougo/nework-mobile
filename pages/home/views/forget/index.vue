<template>
  <div id="app">

    <p class="login-create">忘记密码</p>
    <br>
    <el-form class="login-form">
       <el-form-item label="手机号">
        <el-input v-model="phoneNumber">

        </el-input>
      </el-form-item>
      <el-form-item label="输入验证码">
        <el-input v-model="code">
          <el-button slot="append" @click="sendcode">获取验证码</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="pwd"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="large" @click="save">确定</el-button>
      </el-form-item>

    </el-form>





  </div>
</template>

<script>

import request from '../../request.js'



let sendcode ='/login/forgot/sendCode'
let forget ='login/forgot'

export default {
  name: 'App',
  data(){
    return {
      radio3:'上海',
      phone_region:'cn',
      phoneNumber:'',
      pwd:'',
      code:''
    }
  },
  methods:{


    async sendcode(){
      let res = await request.post(sendcode,{
        phoneNumber:this.phoneNumber
      })


    },
    async save(){
      let res = await request.post(forget,{
        phoneNumber:this.phoneNumber,
        pwd:this.pwd,
        code:this.code
      })

        if(res.data.code == 200){
        this.$router.push('/login')
      }else{
        this.$message({
          showClose: true,
          message: res.data.desc,
          type: 'error'
        });
      }
    }
  },
  mounted(){


  }
}
</script>

<style>
#app {

  padding: 0.15rem;
}  .login-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .top-right{

    line-height: 30px;
    color: #008BF7;
  }

</style>
