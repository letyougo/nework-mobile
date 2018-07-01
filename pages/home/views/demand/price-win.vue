<template>
  <div class="price-win">
    <p class="title">报价</p>
    <el-form>
      <el-form-item label="输入报价金额">
        <el-input placeholder="请输入">

        </el-input>
      </el-form-item>

      <el-form-item label="填写报价说明">
        <el-input type="textarea" rows="8" placeholder="请输入">

        </el-input>
      </el-form-item>
      <p>本次报价需消耗 5 张线索卡，提交报价后将自动扣除</p>
      <br/>
      <el-form-item>
        <el-button>取消</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
      </el-form-item>

    </el-form>


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

    font-weight: bold;
  }
  .bottom{
    padding: 0 0.3rem;
  }
</style>
