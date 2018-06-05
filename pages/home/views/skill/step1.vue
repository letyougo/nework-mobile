<template>
  <div class="skill">
    <p class="skill-title">nework</p>
    <p class="skill-desc">你打算在什么地方开始工作</p>
    <el-form>
      <el-form-item label="国家地区">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="省份/州">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="国家地区">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="城市">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="小区及街道名">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="详细地址（选填）">
        <el-input></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="12" offset="12">
          <el-button type="primary">下一步</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
  export default {
      name:'skill'
  }
</script>
<style>
  .skill{
    padding: 0.3rem;
  }
  .skill-title{
    font-size: 30px;
  }
  .skill-desc{
    font-size: 30px;
    margin-top: 30px;
  }
</style>
