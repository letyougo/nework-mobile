<template>
    <div class="record">
      <el-progress percentage="50"></el-progress>
      <p class="record-title">
        我需求的订单
      </p>
      <div class="list">
        <div class="item">
          <div class="item-top">
            <span class="item-name">深度保洁</span>
            <span class="item-time">2018年5月20日 12:31</span>
          </div>

          <div class="item-content">
            <p>服务人员估算服务费用中，请耐心等待...</p>
            <div class="item-action">修改需求</div>
          </div>
        </div>

        <div class="item">
          <div class="item-top">
            <span class="item-name">深度保洁</span>
            <span class="item-time">2018年5月20日 12:31</span>
          </div>

          <div class="item-content">
            <div class="item-user">
              <div>苏</div>
              <div>苏</div>
              <div>苏</div>
              <div>苏</div>
            </div>

            <p>服务人员估算服务费用中，请耐心等待...</p>
            <div class="item-action">修改需求</div>
          </div>
        </div>





      </div>
    </div>
</template>

<script>
	export default {
		name: "result"
	}
</script>

<style scoped>
  .record{
    padding: 0.3rem;
  }

  .record-title{
    margin: 30px auto;
    font-size: 30px;
    color: #000000;

  }


  .list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .item:first-child{
    margin-top: 0;
  }
  .item{
    width: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    border: 1px solid rgba(0,0,0,0.05);

  }
  .item-top{
    height: 60px;
    line-height: 60px;
    background: #f4f4f4;
    padding-left: 30px;

  }
  .item-content{
    padding: 30px;
  }

  .item-action{
    margin-top: 10px;
    text-align: right;
    color: #008BF7;
    cursor: pointer;
  }

  .item-user{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .item-user div{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    background: #0a6cd6;
    color: #ffffff;
  }

  .item-top span:last-child{
    color: rgba(0,0,0,0.6);
  }

</style>
