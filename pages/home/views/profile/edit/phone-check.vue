<template>
    <div class="email-check">


      <el-form>
        <el-form-item>
          <h3 class="title">手机号验证</h3>
        </el-form-item>

        <el-form-item label="手机号码">
          <el-input v-model="phone">
            <el-button slot="append" @click="send">发送验证码</el-button>
          </el-input>
        </el-form-item>

        <el-form-item label="短验证码">
          <el-input v-model="code"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="save">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import {sendPhoneCode,verifyPhoneCode} from '../../../../service/auth'
  import {updateUser} from '../../../../service/editData'
  export default {
    name: "phone-check",
    data(){
      return {
        phone:'',
        code:''
      }
    },
    methods:{
      async send(){
        let res = await sendPhoneCode({phoneNumber:this.phone})
        if(res.data.code == 200){
          this.$message.success('发送验证码成功')
        }else {
          this.$message.error(res.data.desc)
        }


      },
      async save(){
        let res = await verifyPhoneCode({phoneNumber:this.phone,code:this.code})
        if(res.data.code == 200){
          this.$message.success('验证成功')

          res = await updateUser({
            userId:localStorage.getItem('userId'),
            phoneNumber:this.phone
          })
          if(res.data.code == 200){
            this.$message.success('邮箱绑定成功')
            this.$emit('ok')
          }else {
            this.$message.error(res.data.desc)
          }
        }else {
          this.$message.error(res.data.desc)
        }

        this.$emit('ok')


      }
    }
  }
</script>

<style scoped>

  .title{
    font-size: 40px;
    color: #000000;
    font-weight: bold;
    margin: 20px 0;
  }
</style>
