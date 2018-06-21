<template>
  <div class="skill">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">您打算开始什么类型的工作？</p>
      <service-list :list="list" :active="active" @change="(i)=>active=i"></service-list>
      <br/>
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
  import {getServiceList} from '../../../service/skill/index'
  import serviceList from '../../components/service-list.vue'
  import SkillBottom from '../../components/skill-bottom'
  export default {
    name: 'skill',
    data(){
      return {
        active:5,
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
    methods:{
      async fetch(){
        let districtId=localStorage.getItem('districtId')
        let res = await getServiceList({districtId})
        console.log(res)
      }
    },
    components: {
      serviceList,
      SkillBottom
    },
    mounted(){
      this.fetch()
    }
  }

</script>
<style>



</style>
