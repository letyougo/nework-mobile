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

      <div class="near-list">
        <div class="near-item">
          <div class="item-head">
            <div class="logo"></div>
            <div>立即预约</div>
          </div>
          <p>Ron Heard</p>

        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {getNearbySKill} from '../../../service/requirement'

  export default {
    name: "home",

    methods: {
      fetch(){
        getNearbySKill({serviceId:this.$route.query.id,userId:localStorage.getItem('userId')})
      }
    },
    mounted(){
      this.fetch()
    }
  }
</script>

<style scoped>
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
</style>
