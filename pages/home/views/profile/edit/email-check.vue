<template>
    <div class="phone-check">


      <el-form>
        <el-form-item>
          <h3 class="title">邮箱验证</h3>
        </el-form-item>

        <el-form-item label="邮箱地址">
          <el-input  v-model="email">
            <el-button slot="append" @click="send">发送验证码</el-button>
          </el-input>
        </el-form-item>

        <el-form-item label="验证码">
          <el-input v-model="code"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="save">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {sendEmailCode,verifyEmailCode} from '../../../../service/auth'
  import {updateUser} from '../../../../service/editData'
  export default {
    name: "email-check",
    data(){
      return {
        email:'',
        code:''
      }
    },
    methods:{
      async send(){
        let res = sendEmailCode({email:this.email})
        if(res.data.code == 200){
          this.$message.success('发送验证码成功')
        }

      },
      async save(){
        let res = await verifyEmailCode({email:this.email,code:this.code})
        if(res.data.code == 200){
          this.$message.success('验证成功')

          res = await updateUser({
            userId:localStorage.getItem('userId'),
            email:this.email
          })
          if(res.data.code == 200){
            this.$message.success('邮箱绑定成功')
            this.$emit('ok')
          }
        }


      }
    }
  }
</script>

<style scoped>
  .phone-check{
    padding:0;
  }
  .title{
    font-size: 40px;
    color: #000000;
    font-weight: bold;
    margin: 20px 0;
  }
</style>
