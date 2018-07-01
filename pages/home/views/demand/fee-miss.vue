<template>
  <div class="price-win">
    <p class="title">线索卡余额不足</p>
    <p class="title-tip">
      本次报价需消耗 5 张线索卡，您的线索卡余量剩余 3 张。
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
