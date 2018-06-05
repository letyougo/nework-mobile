<template>
  <div class="skill3">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">让我们进一步缩小范围</p>
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

  import serviceList from '../../components/service-list.vue'
  import SkillBottom from '../../components/skill-bottom'
  import progress from '../../components/progress'
  export default {
    name: 'skill',
    data(){
      return {
        active:'0',
        list:[
          {name:'家政'},
          {name:'美容美甲'},
          {name:'健康'},

          {name:'摄影摄像'},
          {name:'上门维修'},
          {name:'教育培训'},

          {name:'数码维修'},
          {name:'宠物'},
          {name:'活动'},

          {name:'运动健身'},
          {name:'婚礼策划'},
          {name:'其它'},
        ]
      }
    },
    components: {
      serviceList,SkillBottom,progress
    }
  }

</script>
<style>
  .skill2 {
    padding: 0.3rem;
  }


</style>
