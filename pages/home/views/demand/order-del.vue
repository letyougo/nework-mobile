<template>
  <div class="price-win">
    <p class="title">删除订单</p>
    <p class="title-tip">
      删除后将不可恢复此订单，是否删除？
    </p>

    <div class="bottom">
      <el-form>
        <el-form-item>
          <el-button>取消</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    name: "price-win"
  }
</script>

<style scoped>
  .price-win {
    padding: 0.3rem;

  }

  .title {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .title-tip{
    color: rgba(0,0,0,0.6);
  }
  .bottom{
    padding: 0 0.3rem;
  }
</style>
