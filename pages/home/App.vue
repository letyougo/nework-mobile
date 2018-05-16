<template>
  <div >
    <div class="app">
      <div class="home-top">
        <div class="top-left">
          nework&nbsp;
        </div>
        <p>北京</p>
        <div class="top-right">
          <a href="#">登录</a>
          <a href="#">注册</a>
        </div>
      </div>

      <br><br>
      <div class="home-title">
        <p>Nework</p>
        <p>找到所有本地专业服务</p>
      </div>
      <br>
      <el-input></el-input>

      <ul class="service-list">
        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>
        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>
        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>

        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>
        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>
        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>

        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>
        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>
        <li class="service-item">
          <div>logo</div>
          <p>hello</p>
        </li>
      </ul>

      <div class="service-rec">
        <p class="service-rec-title">家政</p>
        <div class="service-rec-item">
          <img src="">
          <p>美容美甲</p>
          <span>来做美容美甲吧</span>
        </div>
      </div>
      <br>
      <div class="service-rec">
        <p class="service-rec-title">家政</p>
        <div class="service-rec-item">
          <img src="">
          <p>美容美甲</p>
          <span>来做美容美甲吧</span>
        </div>
      </div>
      <br>
      <div class="service-rec">
        <p class="service-rec-title">如何发布需求</p>
        <div class="service-rec-item">
          <img src="">
        </div>
        <br>
        <div class="service-rec-item">
          <img src="">
        </div>
        <br>
        <div class="service-rec-item">
          <img src="">
        </div>
      </div>
    </div>

    <br><br><br>
    <div class="home-bottom">
      <p class="home-bottom-title">Nework</p>
      <div>
        <p class="home-bottom-title2">Nework</p>
        <p>电话:xxxxx</p>
        <p>电话:xxxxx</p>
        <p>电话:xxxxx</p>
      </div>
      <br><br>
      <div>
        <p>Nework</p>
        <p>电话:xxxxx</p>
        <p>电话:xxxxx</p>
        <p>电话:xxxxx</p>
      </div>
    </div>
    <p class="home-bt">© Nework 2018</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      radio3:'上海',
      phone_region:'cn'
    }
  }
}
</script>

<style>
.app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  padding: 0.3rem;
}
.el-input-group__append, .el-input-group__prepend{
  /*padding: 0 50px;*/
}
  .home-top{
    position: relative;
  }
  .home-top p{
    text-align: center;
    line-height: 30px;
  }
  .top-left{
    position: absolute;
    left: 0;
    top: 0;
    vertical-align: middle;
    line-height: 30px;
    font-size: 20px;
    color: #092235;
  }
  .top-right{
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: middle;
    line-height: 30px;
    color: #008BF7;
  }

  .home-title p{
    font-size: 30px;
    color: #091017;
    line-height: 40px;
  }

  .service-list{
    width: 6.9rem;
  }
  .service-item{
    width: 2.3rem;
    height: 120px;
    float: left;
    text-align: center;
  }
  .service-item div{
    padding-top: 40px;
    padding-bottom: 10px;
  }
.service-item p{
  font-size: 14px;
  color: #092235 ;
}

  .service-rec-title{
    font-size: 24px;
    color: #092235;
    line-height: 50px;
  }
  .service-rec-item img{
    display: block;
    width: 100%;
    height: 3.36rem;
    background: red;
  }
  .service-rec-item p {
    color: #092235;
    font-size: 20px;
    line-height: 30px;
  }
.service-rec-item span{
    color: #9CA6AE;
    line-height: 20px;
  font-size: 14px;
}
  .home-bottom{
    background: #F6F8F9;
    padding: 40px 0.3rem  29.4px 0.3rem;
  }
  .home-bottom-title{
    padding-bottom: 40px;
    color: #092235 ;
    font-size: 20px;
  }
  .home-bottom p{
    color: #092235 ;
    font-size: 14px;
    line-height: 30px;
  }
  .home-bottom-title2{
    color: #9CA6AE;
  }
  .home-bt{
    color: #9CA6AE;
    text-align: center;
    line-height: 50px;
  }
</style>
