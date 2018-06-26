<template>
  <div class="skill7">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">完成得不错，Ron Zhang</p>
      <br/>
      <div class="skill-tip">接下来，上传一些认证资料，完成后即可接单
        你也可以自行推广，我们将不收取任何费用
      </div>

      <div class="skill7-last">
        <div>
          <p :span="4"><i class="iconfont">&#xe777;&nbsp;</i></p>
          <p :span="20">个人资料和服务范围</p>
        </div>

        <div style="height: 20px"></div>


        <div>
          <p :span="4"><i class="iconfont">&#xe769;&nbsp;</i></p>
          <p >
            实名认证后方可参与投标
          </p>
        </div>
      </div>
    </div>

    <skill-bottom @next="$router.push('/skill8')"></skill-bottom>

  </div>
</template>
<script>

  import serviceList from '../../components/service-list.vue'
  import SkillBottom from '../../components/skill-bottom'

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
    margin-bottom: 40px;
  }

  .skill7-last div{
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .skill7-last p{
    font-size: 20px;
    color: #092235;
    letter-spacing: 0;
    line-height: 20px;
  }
  .skill7-last>div>p{

  }
  .skill7-last span{
    font-size: 14px;
    color: #092235;
    letter-spacing: 0;
    line-height: 20px;
    vertical-align: middle;
  }
  .skill7-last i{
    color: #007dde;
    vertical-align: middle;
    font-size: 30px;
  }
</style>
