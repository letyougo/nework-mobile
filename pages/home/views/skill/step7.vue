<template>
  <div class="skill7">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">完成得不错，Ron Zhang</p>
      <div class="skill-tip">接下来，上传一些认证资料，完成后即可接单
        你也可以自行推广，我们将不收取任何费用
      </div>

      <div class="skill7-last">
        <el-row>
          <el-col :span="4"><i class="iconfont">&#xe777;&nbsp;</i></el-col>
          <el-col :span="20">个人资料和服务范围</el-col>
        </el-row>

        <div style="height: 20px"></div>

        <el-row>
          <el-col :span="4"><i class="iconfont">&#xe769;&nbsp;</i></el-col>
          <el-col :span="20">
            <p>上传认证信息</p>
            <span>上传认证信息，实名认证后方可参与投标</span>
          </el-col>
        </el-row>
      </div>
    </div>

    <skill-bottom></skill-bottom>

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
  .skill7-last p{
    font-size: 20px;
    color: #092235;
    letter-spacing: 0;
    line-height: 20px;
  }
  .skill7-last span{
    font-size: 14px;
    color: #092235;
    letter-spacing: 0;
    line-height: 20px;
  }
  .skill7-last i{
    color: #007dde;

  }
</style>
