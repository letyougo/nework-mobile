<template>
    <el-progress :percentage="percentage"></el-progress>
</template>

<script>
  export default {
    name: "progress",
    progress:['percentage'],

  }
</script>

<style >
  .el-progress__text{
    display: none;
  }
  .el-progress-bar{
    padding-right: 0;
    margin-right: 0;
  }
</style>
