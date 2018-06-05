<template>
  <div class="skill">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="70"></el-progress>
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
      </el-form>
    </div>

    <skill-bottom></skill-bottom>



  </div>
</template>
<script>
  import SkillBottom from '../../components/skill-bottom'
  import progress from '../../components/progress'
  export default {
      name:'skill',
    components:{
        SkillBottom
    }
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
