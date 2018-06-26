<template>
  <div class="skill9">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>

      <p class="skill-desc">你已提交实名认证</p>
      <br/>
      <p class="skill-tip">
        <i class="iconfont">&#xe785;</i>
        你的身份信息不会透露给顾客和其他服务商
      </p>
      <p class="skill-tip">
        <i class="iconfont">&#xe77e;</i>
        你的身份信息不会透露给顾客和其他服务商
      </p>
    </div>

    <skill-bottom></skill-bottom>

  </div>
</template>
<script>

  import serviceList from '../../components/service-list.vue'
  import SkillBottom from '../../components/skill-bottom'

  export default {
    name: 'skill9',
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
      serviceList,SkillBottom
    }
  }

</script>
<style scoped>

  .skill-tip{
    font-size: 14px;
    color: #092235;
    letter-spacing: 0;
    line-height: 20px;
  }

  td{
    width: 3.45rem;
    padding: 41px 0;
    margin: 0;
  }
  td.active{
    border-color: #33a2f9;
  }
  td p i{
    font-size: 20px;
    color: #33a2f9;
  }
  .skill-info{
    color: rgba(0,0,0,0.6);
    text-align: center;
    line-height: 30px;
  }
  .skill-tip{
    line-height: 30px;
    color: rgba(0,0,0,0.6);
  }
  table,table tr th, table tr td { border:1px solid #d2d2d2; }
  table {  min-height: 25px; line-height: 25px; text-align: center; border-collapse: collapse;}
</style>
