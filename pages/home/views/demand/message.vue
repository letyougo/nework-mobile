<template>
  <div class="message">
    <p class="title">消息中心</p>

    <div class="tab">
      <div class="unread active">未读消息（2）</div>
      <div class="all">全部消息</div>
      <div class="clear">全部忽略</div>
    </div>

    <div class="list">
      <div class="item">
        <div class="item-top">
          <div class="top-name">订单通知</div>
          <div class="top-time">2018-03-12 12:09</div>
        </div>

        <div class="item-content">
          <div class="item-text ">
            XXX 已选择您为ta「深度保洁」的服务人员，快去服务吧～
          </div>
          <div class="action">查看</div>
        </div>
      </div>

      <div class="item">
        <div class="item-top">
          <div class="top-name">订单通知</div>
          <div class="top-time">2018-03-12 12:09</div>
        </div>

        <div class="item-content">
          <div class="item-text">
            XXX 已选择您为ta「深度保洁」的服务人员，快去服务吧～
          </div>
          <div class="action">查看</div>
        </div>
      </div>

      <div class="item">
        <div class="item-top">
          <div class="top-name">订单通知</div>
          <div class="top-time">2018-03-12 12:09</div>
        </div>

        <div class="item-content">
          <div class="item-text">
            XXX 已选择您为ta「深度保洁」的服务人员，快去服务吧～
          </div>
          <div class="action">查看</div>
        </div>
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
  .message {
    padding: 0.3rem;

  }

  .title {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .tab{
    display: flex;
    justify-content: start;
    border-top: 1px solid rgba(0,0,0,0.05);

    height: 60px;
  }
  .tab div{
    height: 60px;
    padding: 20px 0;
  }
  .tab .active{
    border-bottom:2px solid #008BF7;
  }

  .unread,.all{
    width: 2rem;

  }
  .unread{
    margin-right: 20px;
  }

  .clear{
    flex: 1;
    text-align: right;
  }


  .title-tip{
    color: rgba(0,0,0,0.6);
  }
  .bottom{
    padding: 0 0.3rem;
  }
  .item{
    padding: 20px 0;
    border-top: 1px solid rgba(0,0,0,0.05);
  }
  .item-top{
    display: flex;
    justify-content: space-between;
  }
  .top-name{
    font-weight: bold;
  }
  .top-time{
    color: rgba(0,0,0,0.6);
  }
  .item-content{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 20px;
    color: rgba(0,0,0,0.8);
    margin-top: 10px;
  }
  .item-text{
    width: 4rem;
  }
  .action{
    color: #008BF7;
  }
  .item:last-child{
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
</style>
