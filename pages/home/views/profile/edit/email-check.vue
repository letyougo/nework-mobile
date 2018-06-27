<template>
    <div class="phone-check">


      <el-form>
        <el-form-item>
          <h3 class="title">邮箱验证</h3>
        </el-form-item>

        <el-form-item label="邮箱地址">
          <el-input>
            <el-button slot="append">输入验证码</el-button>
          </el-input>
        </el-form-item>

        <el-form-item label="验证码">
          <el-input></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: "phone-check"
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
