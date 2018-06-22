<template>
  <div class="skill4">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">设置营业时间</p>
      <service-list :list="list"  @change="change"></service-list>
      <br/>
    </div>

    <skill-bottom @next="next"></skill-bottom>

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
          {name:'周一到周五',url:'/static/imgs/shijian.png',active:false,value:'w'},
          {name:'周六',url:'/static/imgs/shijian.png',active:false,value:'sat'},
          {name:'周日',url:'/static/imgs/shijian.png',active:false,value:'sun'},
        ]
      }
    },
    components: {
      serviceList,SkillBottom,progress
    },
    methods:{
      change(i){
        this.list[i].active = !this.list[i].active
      },
      next(){
        let days = this.list
          .filter(item=>item.active)
          .map(item=>item.value)
          .join(',')


        if(days){
          localStorage.setItem('serviceTime',days)
          this.$router.push('/skill5?')
        }else {
          this.$message.warning('请选择时间')
        }
      }
    }
  }

</script>
<style>



</style>
