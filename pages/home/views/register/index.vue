<template>
  <div class="register">

    <el-form class="login-form">
      <el-form-item label="姓名">
        <el-input v-model='nickName'></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model='pwd'></el-input>
      </el-form-item>

      <el-form-item label="手机号码">
        <el-input  v-model="phoneNumber" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="Select">
            <el-option label="+86" value="cn"></el-option>

          </el-select>
        </el-input>
      </el-form-item>

      <el-form-item label="验证码">
        <el-input placeholder="请输入内容" v-model="code" class="input-with-select">
          <el-button slot="append" >发送验证码</el-button>
        </el-input>
      </el-form-item>
      <p>
        点击“注册”或“继续”即表示我同意 Nework 的 <a href="#">服务条款</a> 和 <a href="#">隐私政策</a> 。
      </p>
      <br/>
      <el-form-item>
        <el-button type="primary" size="large">注册</el-button>
      </el-form-item>
      <p>已经有账号了,<a href="#" @click="$router.push('/login')">去登录</a></p>



    </el-form>
  </div>
</template>

<script>
  let sendcode = '/login/signUp/sendCode'
  let register = '/login/signUp'
  export default {
    name: "register",
    data() {
      return {
        pwd: '',
        phoneNumber: '',
        nickName: '',
        code: ''
      }
    },
    methods: {
      async sendcode() {
        let res = await request.post(sendcode, {
          phoneNumber: this.phoneNumber
        })
      },
      async post() {
        let res = await request.post(register, {
          phoneNumber: this.phoneNumber,
          pwd: this.pwd,
          code: this.code
        })

        if (res.data.code == 200) {
          this.$router.push('/')
        } else {
          this.$message({
            showClose: true,
            message: res.data.desc,
            type: 'error'
          });
        }
      }
    }
  }
</script>

<style scoped>
  .register {
    padding: 0.15rem;
  }


  .login-top p {
    text-align: center;
    line-height: 30px;
    color: #091017;
    font-size: 20px;
    vertical-align: middle;
  }

  .login-create {
    font-size: 30px;
    text-align: left;
  }

  .login-form p {
    font-size: 14px;
    color: #151515;
  }
</style>
