<template>
  <div >
    <div class="app">

      <div class="home-title">
        <!--<p>Nework</p>-->
        <p>找到所有本地专业服务</p>
      </div>
      <br>

      <div class="home-search">
        <i class="icon iconfont">&#xe77b;</i><input placeholder="试试「 小程序开发 」" v-model="search"/><div class="action">搜索</div>
      </div>

      <div class="service">
        <service-list :list="list"  @change="change"></service-list>
      </div>


      <div class="service-item">


      </div>
      <br>
      <div class="service-item">
        <div class="service-item-content">
          <img src="/static/images/保洁.png">
          <p >保洁</p>
          <span>128 服务商在您附近</span>
        </div>

      </div>

      <div class="service-item">
        <div class="service-item-content">
          <img src="/static/images/宠物寄养.png">
          <p >宠物寄养</p>
          <span>128 服务商在您附近</span>
        </div>
      </div>
      <br>
      <p class="service-rec-title">如何发布需求</p>
      <div class="service-rec">

        <div class="service-rec-item">
          <img src="/static/imgs/home-faqs.png">
          <div>
            <p>回答需求问卷</p>
            <span>耗时1min左右，需要您简单选择几个问题，以便于服务人员清楚您的需要</span>
          </div>
        </div>

        <div class="service-rec-item">
          <img src="/static/imgs/home-price.png">
          <div>
            <p>服务人员报价</p>
            <span>服务人员将根据您的回答响应您的诉求，我们将推荐1位或者更多供您选择</span>
          </div>
        </div>

        <div class="service-rec-item">
          <img src="/static/imgs/home-onsite.png">
          <div>
            <p>线下享受服务</p>
            <span>服务人员将上门为您服务，您可为服务的感受和满意程度打分</span>
          </div>
        </div>
      </div>
    </div>

    <br><br><br>
    <div class="home-bottom">
      <div class="home-bottom-title">
        <div class="title-name">Nework</div>
        <div class="logo">
          <span>
            <i class="icon iconfont">&#xe77a;</i>
          </span>
          <span>
            <i class="icon iconfont">&#xe779;</i>
          </span>
          <span>
            <i class="icon iconfont">&#xe778;</i>
          </span>

        </div>
      </div>

      <div>
        <p class="home-bottom-title2">Nework</p>
        <p>电话  010-57026742</p>
        <p>邮箱  service@pmcaff.com</p>
        <p>官方网站 nework.pro</p>
      </div>
      <br><br>
      <div>
        <p class="home-bottom-title2">Nework</p>
        <p><a href="https://www.pmcaff.com">PMCAFF.com</a></p>
        <p><a href="http://www.waibaodashi.com">外包大师</a></p>
        <p><a href="http://atdesigner.pmcaff.com">@设计狮</a></p>
      </div>
      <p class="home-bt">© Nework 2018</p>
    </div>

  </div>
</template>

<script>

  import {getUserById} from '../../../service/editData'
  import serviceList from '../../components/service-list.vue'
  import Top from '../../components/top'
  import {getServiceList} from '../../../service/skill/index'
  export default {
    name: 'App',
    data(){
      return {


        list:[

        ],
        nickname:'',
        login:false,
        search:''

      }
    },
    components:{
      serviceList
    },

    methods:{

      change(i){
        this.list = this.list.map((item)=>{
          item.active = false
          return item
        })


        this.list[i].active = true
        let item = this.list[i]
        this.$router.push(`/demand?id=${item.serviceTypeId}&name=${item.serviceTypeName}`)
      },

      async fetch(){
        let districtId=localStorage.getItem('districtId')
        let res = await getServiceList({districtId,level:'f'})
        let list = res.data.data
        console.log(list,'list')
        list = list.map((item)=>{
          item.name = item.serviceTypeName
          item.url = ''
          item.empty = false
          item.active = false
          item.url = '/static/images/' + item.name + '-icon.png'
          return item
        })

        let yu = 3- list.length%3

        for(var i=0;i<yu;i++){
          list.push({empty:true})
        }
        this.list = list




      }
    },

    mounted(){
      this.fetch()
    }
  }
</script>

<style lang="less">
  .app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    padding: 0.3rem;
  }

  .home-search{
    display: flex;
    justify-content: space-between;
    border: 1px solid #008BF7;
    height: 50px;
    align-items: center;

    box-shadow: 0 5px 20px 0 rgba(9,34,53,0.10);
    border-radius: 4px;
    font-size: 14px;
    input {
      flex: 1;
      height:40px;
      &:focus{
        outline: none;
        border: none;
      }
    }
    i {
      display: block;
      width: 50px;
      font-size: 20px;
      text-align: center;
      color: rgba(0, 0, 0, 0.6)
    }

    div{
      height: 40px;
      background: #008BF7;
      border-radius: 2px;
      width: 80px;
      margin-right: 10px;
      text-align: center;
      line-height: 40px;
      color: #ffffff;
    }
  }

  .home-title p{
    font-size: 30px;
    color: #091017;
    line-height: 40px;
  }
  .service{
    margin: 30px 0;
  }

  .service-item{
    margin-bottom: 10px;
  }
  .service-item img{
    height: 168px;
    display: block;
    width: 100%;
    border-radius: 4px;
  }
  .service-item p{
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    margin-top: 12px;
  }

  .service-item span{
    font-size: 14px;
    color: rgba(0,0,0,0.6);
  }
  .service-rec-title{
    font-size: 24px;
    color: #092235;
    line-height: 50px;
  }
  .service-rec-item{
    height: 220px;
    margin-bottom: 10px;
    position: relative;
  }
  .service-rec-item:nth-child(1){

    background: linear-gradient(-135deg, #F1E8E3 0%, #DFCDC3 100%);
    border-radius: 4px; ;
  }
  .service-rec-item:nth-child(2){

    background:  linear-gradient(-135deg, #D6E5E8 0%, #BACDD1 100%);
    border-radius: 4px; ;
  }
  .service-rec-item:nth-child(3){

    background:  linear-gradient(-135deg, #F4EDD4 0%, #EEDEAB 100%);
    border-radius: 4px; ;
  }

  .service-rec-item img{
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    text-align: right;
    width:120px;
    height: 120px;

  }
  .service-rec-item div{
    position: absolute;
    padding: 110px 20px 20px 30px;
  }
  .service-rec-item p {
    color: #092235;
    font-size: 20px;
    line-height: 30px;
  }
  .service-rec-item span{
    color: rgba(0,0,0,0.6);
    line-height: 20px;
    font-size: 14px;
  }
  .home-bottom{
    background: #F6F8F9;
    padding: 40px 0.3rem 0 0.3rem;
  }
  .home-bottom .home-bottom-title{
    padding-bottom: 40px;


    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home-bottom-title .title-name{
    font-size: 40px;
  }
  .home-bottom-title .logo span{

    margin-right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    font-size: 20px;
    color: #ffffff;
  }

  .home-bottom-title .logo span:nth-child(1){
      background: rgb(15, 176, 71);
    }
  .home-bottom-title .logo span:nth-child(2){
    background: #219FEF;
  }
  .home-bottom-title .logo span:nth-child(3){
    background: #292929 ;
  }

  .home-bottom p{

    font-size: 14px;
    line-height: 30px;
    color: rgba(0,0,0,0.6) ;
  }
  .home-bottom p a{
    text-decoration: none;
    color: rgba(0,0,0,0.6) ;
  }
  .home-bottom .home-bottom-title2{
    color: rgba(0,0,0,0.8);
  }
  .home-bottom .home-bt{
    color: #9CA6AE;
    border-top: 1px solid rgba(0,0,0,0.05);
    text-align: center;
    line-height: 80px;
    height: 80px;
  }
</style>
