<template>
  <div class="price-win">
    <p class="title">购买线索卡</p>

    <div class="bg">
      <p class="bg-left">剩余 7 张</p>
    </div>

    <el-form>
      <el-form-item label="购买数量">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="价格">
        ¥ 20.00
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即支付</el-button>
      </el-form-item>
    </el-form>

    <p class="item-title">什么是 Nework 线索卡？</p>
    <div class="item">
      <div class="item-index">1</div>
      <div class="item-content">
        Nework线索卡用于服务方获取订单线索，针对不同类目所需要的线索卡张数不同；线索卡套餐购买后将自动存入服务方的线索卡账户；
      </div>
    </div>

    <div class="item">
      <div class="item-index">2</div>
      <div class="item-content">
        服务方获得订单并报价后自动扣除相应的线索卡张数，若系统判定为虚假甲方/订单，将全部返还服务方支付的线索卡；
      </div>
    </div>

    <div class="item">
      <div class="item-index">3</div>
      <div class="item-content">
        线索卡不可退货，随市场价格波动，将永远致力于帮助服务方更低成本的获得订单。
      </div>
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
  .bg{
    width: 6.9rem;
    height: 4rem;
    background: url("/static/demand/cluecard.png") no-repeat center;
    background-size: 100%;
    padding: 20px;
  }
  .bg-left{
    color: #ffffff;
    text-align: right;
    margin-top: 140px;
  }

  .item{
    display: flex;
    justify-content: start;
    align-items: start;
    margin-top: 20px;
  }
  .item-title{
    font-size: 20px;
    font-weight: bold;
  }
  .item-index{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #092235 ;
    text-align: center;
    line-height: 30px;
    color: #ffffff;
    margin-right: 10px;
  }
  .item-content{
    flex: 1;
    color: rgba(0,0,0,0.8);
  }
</style>
