<template>
  <div >
    <div class="app">

      <div class="home-title">
        <!--<p>Nework</p>-->
        <p>找到所有本地专业服务</p>
      </div>
      <br>
      <el-input></el-input>

      <div class="service">
        <service-list :list="list"  @change="change"></service-list>
      </div>


      <div class="service-item">

        <div class="service-item-content">
          <img src="/static/imgs/zhongdiangong.png">
          <p >美容美甲</p>
          <span>来做美容美甲吧</span>
        </div>
      </div>
      <br>
      <div class="service-item">
        <div class="service-item-content">
          <img src="/static/imgs/zhongdiangong.png">
          <p >美容美甲</p>
          <span>来做美容美甲吧</span>
        </div>
      </div>

      <div class="service-item">
        <div class="service-item-content">
          <img src="/static/imgs/zhongdiangong.png">
          <p >美容美甲</p>
          <span>来做美容美甲吧</span>
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
            <p>回答需求问卷</p>
            <span>耗时1min左右，需要您简单选择几个问题，以便于服务人员清楚您的需要</span>
          </div>
        </div>

        <div class="service-rec-item">
          <img src="/static/imgs/home-onsite.png">
          <div>
            <p>回答需求问卷</p>
            <span>耗时1min左右，需要您简单选择几个问题，以便于服务人员清楚您的需要</span>
          </div>
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
        login:false

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

<style>
  .app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    padding: 0.3rem;
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
