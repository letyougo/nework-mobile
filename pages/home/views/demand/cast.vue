<template>
  <div class="cast">

    <p class="title">
      我需求的订单
    </p>
    <div class="list">
      <div class="item">
        <div class="item-top">
          <div>深度保洁</div>
          <div>2018年5月20日 12:31</div>
          <div>查看需求</div>
        </div>

        <div class="item-content">

          <div class="item-logo">
            <div class="logo">苏</div>
            <div class="chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span >在线沟通</span>
            </div>
          </div>

          <p class="item-name">Jimmy Song</p>

          <div class="item-star">

            <div class="stars">
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
            </div>
            <div class="score">4.7</div>
            <div class="comment">(12条评价)</div>
          </div>

          <div class="item-trade">
            <!--<div>-->
              <!--<i class="icon iconfont">&#xe77f;</i>-->
              <!--<span>被雇佣 128 次</span>-->
            <!--</div>-->

            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>
          </div>

          <div class="line"></div>

          <div class="item-money">
            ¥ 320
          </div>
          <div class="item-money-tip">
            我的报价金额
          </div>
          <div class="item-desc">
            Hi，我常年从事木质地板清洁，在许多知名酒店服务过，经验丰富。您家地板的情况我已查看，我能为您解决，期待为您服务！
          </div>

          <div class="line"></div>

          <div class="order-wait">
            <img class="order-wait" src="/static/demand/order-wait.png" width="50px" height="50px"/>
            <p class="order-wait-tip">
              5人已经报价
            </p>
            <p class="order-wait-tip">
              等待客户选择服务人员
            </p>
          </div>
        </div>
      </div>


      <div class="item">
        <div class="item-top">
          <div>深度保洁</div>
          <div>2018年5月20日 12:31</div>
          <div>查看需求</div>
        </div>

        <div class="item-content">

          <div class="item-logo">
            <div class="logo">苏</div>
            <div class="chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span >在线沟通</span>
            </div>
          </div>

          <p class="item-name">Jimmy Song</p>

          <div class="item-star">

            <div class="stars">
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
            </div>
            <div class="score">4.7</div>
            <div class="comment">(12条评价)</div>
          </div>

          <div class="item-trade">
            <!--<div>-->
            <!--<i class="icon iconfont">&#xe77f;</i>-->
            <!--<span>被雇佣 128 次</span>-->
            <!--</div>-->

            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>
          </div>

          <div class="line"></div>

          <div class="item-money">
            ¥ 320
          </div>
          <div class="item-money-tip">
            我的报价金额
          </div>
          <div class="item-desc">
            Hi，我常年从事木质地板清洁，在许多知名酒店服务过，经验丰富。您家地板的情况我已查看，我能为您解决，期待为您服务！
          </div>


          <div class="line"></div>

          <div class="order-choose">

            <p class="order-wait-tip">
              恭喜，您已被选中！
            </p>
            <el-button class="action" type="primary">收 款</el-button>
            <p class="order-wait-tip" style="color: #008BF7">
              取消订单
            </p>

          </div>
        </div>



      </div>



      <div class="item">
        <div class="item-top">
          <div>深度保洁</div>
          <div>2018年5月20日 12:31</div>
          <div>查看需求</div>
        </div>

        <div class="item-content">

          <div class="item-logo">
            <div class="logo">苏</div>
            <div class="chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span >在线沟通</span>
            </div>
          </div>

          <p class="item-name">Jimmy Song</p>

          <div class="item-star">

            <div class="stars">
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
            </div>
            <div class="score">4.7</div>
            <div class="comment">(12条评价)</div>
          </div>

          <div class="item-trade">
            <!--<div>-->
            <!--<i class="icon iconfont">&#xe77f;</i>-->
            <!--<span>被雇佣 128 次</span>-->
            <!--</div>-->

            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>
          </div>

          <div class="line"></div>

          <div class="item-money">
            ¥ 320
          </div>
          <div class="item-money-tip">
            我的报价金额
          </div>
          <div class="item-desc">
            Hi，我常年从事木质地板清洁，在许多知名酒店服务过，经验丰富。您家地板的情况我已查看，我能为您解决，期待为您服务！
          </div>


          <div class="line"></div>

          <div class="order-cancel">

            <img src="/static/demand/order-canceled.png" width="50px" height="50px" />
            <p class="order-wait-tip">订单已取消</p>
            <p class="order-wait-tip" style="color: #F70000" >
              删除订单
            </p>

          </div>
        </div>



      </div>

      <div class="load-more">加载更多</div>


    </div>
  </div>
</template>

<script>
  export default {
    name: "result"
  }
</script>

<style scoped>
  .cast{
    padding: 0.3rem;
  }

  .title{

    font-size: 30px;
    margin-bottom: 30px;
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
    padding:0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .item-top div:last-child{
    color: #008BF7;
  }

  .item-content{
    padding: 0.3rem;
  }

  .item-logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo{
    width: 50px;
    height: 50px;
    color: #ffffff;
    background: #0a6cd6;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
  }
  .chat i{
    color: #008BF7;
  }
  .item-chat span{
    margin-left: 10px;
    display: inline-block;
    color: #008BF7;
  }
  .item-name{
    margin-top: 20px;
    font-size: 20px;
  }
  .item-star{
    display: flex;
    margin-top: 10px;
    align-items: center;
  }
  .stars{
    color: #F79F00;
    font-size: 14px;
    margin-right: 20px;

  }
  .score{
    margin-right: 20px;
  }
  .comment{
    color: rgba(0,0,0,0.6);
  }

  .item-trade{
    margin-top: 20px;
    color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: space-between;
  }
  .line{
    margin: 30px auto;
    border-bottom:  1px solid rgba(0,0,0,0.05);
  }
  .action{
    margin-top: 20px;
  }
  .item-money{
    line-height: 30px;
    font-size: 20px;
  }
  .item-money-tip{
    line-height: 20px;
    font-size: 14px;
    color: rgba(0,0,0,0.6);
  }
  .item-desc{
    margin-top: 20px;
    font-size: 14px;
    color: rgba(0,0,0,0.8);
  }
  .order-wait img{
    margin: 30px auto 20px auto;
    display: block;
  }
  .order-wait-tip{
    font-size: 14px;
    line-height: 20px;
    color: rgba(0,0,0,0.8);
    text-align: center;
  }
  .order-choose .action{
    margin: 20px 0 20px 0;
  }
  .order-cancel img{
    display: block;
    margin: 0 auto 20px auto;
  }
  .load-more{
    color: #008BF7;
    margin-top: 20px;
    text-align: center;
    display: block;
    width: 100%;
  }
</style>
