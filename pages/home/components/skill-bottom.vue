<template>
  <div class="skill-bottom">
    <el-row>
      <el-col :span="12">
        <p>
          <i class="iconfont">&#xe774;&nbsp;</i>返回
        </p>
        </el-col>
      <el-col :span="12">
        <el-button type="primary">下一步</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "skill-bottom",
    data() {
      return {}
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .skill-bottom{
    padding: 0.3rem;
    background: #FFFFFF;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.05);
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .skill-bottom i{
    color: #008BF7;
  }
  .skill-bottom p{
    line-height: 50px;
    height: 50px;

  }
</style>
