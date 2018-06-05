<template>
  <div class="skill8">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">您希望使用哪种身份证件进行认证？</p>

      <br/>
      <el-form>
        <el-form-item label="签发国家/地区">
          <el-input></el-input>
        </el-form-item>
      </el-form>

      <table border="1" cellspacing="0">
        <tr >

          <td>
            <div >
              <img src="" width="50px" height="50px"/>
            </div>
            <p>护照</p>
          </td>
          <td >
            <div >
              <img src="" width="50px" height="50px"/>
            </div>
            <p>身份证</p>
          </td>

        </tr>


      </table>
      <br/>
      <p class="skill-tip">你的身份信息不会透露给顾客和其他服务商</p>

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
  }

  td{
    width: 3.45rem;
    padding: 12px 0;
    margin: 0;
  }
  td.active{
    border-color: #33a2f9;
  }
  table,table tr th, table tr td { border:1px solid #d2d2d2; }
  table {  min-height: 25px; line-height: 25px; text-align: center; border-collapse: collapse;}
</style>
