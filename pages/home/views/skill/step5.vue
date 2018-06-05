<template>
  <div class="skill5">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">简单的介绍下你自己</p>
      <el-form>
        <el-form-item label="简介">
          <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 6}"></el-input>
        </el-form-item>
      </el-form>

      <br/>
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
          {name:'周一到周五',url:'/static/imgs/shijian.png'},
          {name:'周六',url:'/static/imgs/shijian.png'},
          {name:'周日',url:'/static/imgs/shijian.png'},
        ]
      }
    },
    components: {
      serviceList,SkillBottom,progress
    }
  }

</script>
<style>



</style>
