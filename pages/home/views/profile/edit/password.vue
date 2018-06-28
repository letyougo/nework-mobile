<template>
    <div class="phone-check">


      <el-form>
        <el-form-item>
          <h3 class="title">修改密码</h3>
        </el-form-item>

        <el-form-item label="原始密码">
          <el-input  v-model="old">

          </el-input>
        </el-form-item>

        <el-form-item label="新密码">
          <el-input v-model="new1" type="password"></el-input>
        </el-form-item>

        <el-form-item label="确认密码">
          <el-input v-model="new2" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="save">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>

  import {updateUser} from '../../../../service/editData'
  export default {
    name: "email-check",
    data(){
      return {
        old:'',
        new1:'',
        new2:''
      }
    },
    methods:{
      async save(){
        if(this.new1 !== this.new2){
          return this.$message.error('请确认新密码')
        }
        let res = await updateUser({
          userId:localStorage.getItem('userId'),
          password:this.new1
        })

        if(res.data.code){
          this.$message.success('修改密码成功')
        }else {
          this.$message.error(res.data.desc)
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
