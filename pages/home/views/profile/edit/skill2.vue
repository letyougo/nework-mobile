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
