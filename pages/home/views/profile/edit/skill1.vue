<template>
    <div class="edit-choose-skill">

      <div class="choose-skill-top">
        <h3>选择技能</h3>
        <service-list :list="list"></service-list>
        <el-form>
          <el-form-item label="请输入具体的工作类型">
            <el-input></el-input>
          </el-form-item>
        </el-form>
      </div>

      <skill-bottom></skill-bottom>
    </div>
</template>

<script>
  import serviceList from '../../../components/service-list.vue'
  import skillBottom from '../../../components/skill-bottom'
  export default {
    name: "edit-choose-skill",
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
    components:{
      skillBottom,
      serviceList,
    }
  }
</script>

<style scoped>
  .choose-skill-top{
    padding: 0.3rem;
  }
  h3{
    margin: 20px 0;
    font-size: 30px;
  }
</style>
