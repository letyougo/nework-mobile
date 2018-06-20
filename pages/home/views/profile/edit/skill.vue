<template>
    <div class="edit-skill">
      <h3>我的技能</h3>
      <div class="skill-list">
        <div class="skill-item">
          <img src="/static/imgs/shijian.png"/>
          <p>室内保洁</p>
          <span>技能1</span>
        </div>

        <div class="skill-item">
          <img src="/static/imgs/shijian.png"/>
          <p>室内保洁</p>
          <span>技能1</span>
        </div>

        <div class="skill-item">
          <img src="/static/imgs/shijian.png"/>
          <p>室内保洁</p>
          <span>技能1</span>
        </div>

      </div>

      <el-form>
        <el-form-item>
          <el-button type="primary">添加技能</el-button>
        </el-form-item>
      </el-form>

      <service-list :list="list"></service-list>

    </div>
</template>

<script>
  import serviceList from '../../../components/service-list.vue'
  export default {
    data(){
      return {
        list:[
          {name:'家政',url:'/static/imgs/jiazheng.png'},
          {name:'美容美甲',url:'/static/imgs/meijia.png'},
          {name:'健康',url:'/static/imgs/jianshen.png'},

          {name:'摄影摄像',url:'/static/imgs/sheying.png'},
          {name:'上门维修',url:'/static/imgs/weixiu.png'},
          {name:'教育培训',url:'/static/imgs/peixun.png'},

          {name:'数码维修',url:'/static/imgs/shumaweixiu.png'},
          {name:'宠物',url:'/static/imgs/chongwu.png'},
          {name:'活动',url:'/static/imgs/huodong.png'},

          {name:'运动健身',url:'/static/imgs/yundong.png'},
          {name:'婚礼策划',url:'/static/imgs/hunli.png'},
          {name:'其它',url:'/static/imgs/qita.png'},
        ]
      }
    },
    name: "edit-skill",
    components:{
      serviceList
    }
  }
</script>

<style scoped>
  h3{
    font-size: 30px;
    margin: 0;
  }
  .skill-list{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width:100% ;
    margin-bottom: 20px;
  }
  .skill-item{
    width: 3.2rem;
    border: 1px solid rgba(0,0,0,0.05);
    text-align: center;
    padding: 10px 0;
    margin-top: 25px;
  }
  .skill-item span{
    color: rgba(0,0,0,0.6);
    margin-top: 10px;
    display: block;
  }

</style>

