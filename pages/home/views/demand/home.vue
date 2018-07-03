<template>
  <div class="demand-home">

    <div class="demand-bg">
      <div class="demand-action">
        <p>仅需一分钟
          即可为您匹配专业的
          {{$route.query.name}} 服务人员</p>
        <el-button type="primary" style="width: 160px" @click="$router.push('/question?id=22')">开始</el-button>
      </div>
    </div>


    <div class="demand-content">
      <p class="demand-content-title">如何开始解决您的问题</p>

      <div class="demand-help">
        <div class="demand-help-index">1</div>
        <div>
          <p>回答需求问卷</p>
          <div>
            耗时1min左右，需要您简单选择几个问题，以便于服务人员清楚您的需要
          </div>
        </div>
      </div>
      <div class="demand-help">
        <div class="demand-help-index">1</div>
        <div>
          <p>服务人员报价</p>
          <div>
            服务人员将根据您的回答响应您的诉求，我们将推荐1位或者更多供您选择
          </div>
        </div>
      </div>
      <div class="demand-help">
        <div class="demand-help-index">1</div>
        <div>
          <p>线下享受服务</p>
          <div>
            服务人员将上门为您服务，您可为服务的感受和满意程度打分
          </div>
        </div>
      </div>

      <p class="demand-near">
        您附近有 10 位{{$route.query.name}}的服务人员
      </p>
      <p class="demand-near-tip">
        他们离您的当前位置较近，可迅速到达服务地点，响应您的诉求...
      </p>


      <div class="list">
        <div class="item">
          <div class="item-top">
            <div class="item-logo">苏</div>
            <div class="item-chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span>立即预约</span>
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
            <div>
              <i class="icon iconfont">&#xe77f;</i>
              <span>被雇佣 128 次</span>
            </div>
            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="comment">
            <p>秋水饮马<span>的评论</span></p>
            <div>3天前</div>
          </div>
          <div class="content">
            我们认同这座城市所赋予的精神及社会价值,公平、活力、创造、包容。虽然可能在不同…
          </div>
          <div class="action">查看更多</div>
        </div>


        <div class="item">
          <div class="item-top">
            <div class="item-logo">苏</div>
            <div class="item-chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span>立即预约</span>
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
            <div>
              <i class="icon iconfont">&#xe77f;</i>
              <span>被雇佣 128 次</span>
            </div>
            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="comment">
            <p>秋水饮马<span>的评论</span></p>
            <div>3天前</div>
          </div>
          <div class="content">
            我们认同这座城市所赋予的精神及社会价值,公平、活力、创造、包容。虽然可能在不同…
          </div>
          <div class="action">查看更多</div>
        </div>


        <div class="item">
          <div class="item-top">
            <div class="item-logo">苏</div>
            <div class="item-chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span>立即预约</span>
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
            <div>
              <i class="icon iconfont">&#xe77f;</i>
              <span>被雇佣 128 次</span>
            </div>
            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="no-comment">
            <i class="icon iconfont">&#xe78a;</i>暂无评论
          </div>
        </div>
      </div>

      <div class="load-more">
        <i class="icon iconfont">&#xe789;</i>加载更多
      </div>
    </div>


  </div>
</template>

<script>
  import {getNearbySKill} from '../../../service/requirement'

  export default {
    name: "home",

    methods: {
      fetch() {
        getNearbySKill({serviceId: this.$route.query.id, userId: localStorage.getItem('userId')})
      }
    },
    mounted() {
      this.fetch()
    },

  }
</script>

<style scoped >
  .demand-home {

    width: 100%;
  }

  .demand-bg {
    background: url("/static/demand/bg-img-clean.png");
    height: 210px;
    background-size: 100%;
  }

  .demand-action {
    width: 315px;
    padding: 15px;

    font-weight: bold;
    background: rgba(255, 255, 255, 0.8);
  }

  .demand-action p {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .demand-content {
    padding: 0.3rem;
  }

  .demand-content-title {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }

  .demand-help {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 14px;
  }

  .demand-help p {
    color: rgba(0, 0, 0, 0.8);
  }

  .demand-help div {
    color: rgba(0, 0, 0, 0.6);
  }

  .demand-help-index {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    line-height: 40px;
    text-align: center;
    display: block;
    background: url("/static/demand/item-bg.png") no-repeat center;
    background-size: 40px 40px;
    color: #ffffff;
  }

  .demand-help div:last-child {
    flex: 1;
  }

  .demand-near {
    font-size: 30px;
    font-weight: bold;
    margin-top: 50px;
  }

  .demand-near-tip {
    margin-top: 10px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
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
    padding:30px;
  }
  .item-top{

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item-logo{
    width: 50px;
    height: 50px;
    color: #ffffff;
    background: #0a6cd6;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
  }
  .item-chat i{
    color: #008BF7;
  }
  .item-chat span{
    margin-left: 10px;
    display: inline-block;
    color: #008BF7;
  }
  .item-money{
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
  .action{
    margin-top: 10px;

    color: #008BF7;
    text-decoration: underline;
  }

  .line{
    margin: 30px 0;
    border-top: 1px solid rgba(0,0,0,0.05);
  }
  .comment{
    display: flex;
    justify-content: space-between;
  }
  .comment p{
    color: #000000;
  }
  .comment p span{
    font-size: 12px;
    margin-left: 10px;
    color: rgba(0,0,0,0.6);
  }
  .comment div{
    font-size: 12px;
    color: rgba(0,0,0,0.6);
  }
  .content{
    margin-top: 10px;
  }

  .no-comment{
    text-align: center;
    color: rgba(0,0,0,0.6);
    padding: 20px 0;
  }
  .no-comment i{
    margin-right: 10px;
  }

  .load-more{
    margin-top: 30px;
    color: #008BF7;
    text-align: center;
  }
  .load-more i{
    margin-right: 10px;

  }

</style>
