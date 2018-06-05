<template>
  <div >
    <router-view></router-view>
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
