<template>
  <div class="skill9">
    <div class="skill-top">

      <p class="skill-desc">上传证件及本人照片</p>
      <br/>

      <el-row :gutter="10">
        <el-col :span="12">
          <upload
            :action=" 'http://nework-web.rdc.waibaodashi.com/qiniu/uploadUserFile?column=id_card_positive&userId='+userId "

          >
          </upload>
        </el-col>

        <el-col :span="12">
          <upload
            :action=" 'http://nework-web.rdc.waibaodashi.com/qiniu/uploadUserFile?column=id_card_negative&userId='+userId "

          ></upload>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <div class="skill-info">正面照片（个人信息）</div>
        </el-col>
        <el-col :span="12">
          <div class="skill-info">背面照片（国徽）</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
         <upload
           :action=" 'http://nework-web.rdc.waibaodashi.com/qiniu/uploadUserFile?column=photo&userId='+userId "
         >

         </upload>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="12">
          <div class="skill-info">本人照片</div>
        </el-col>
      </el-row>
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

    <div class="bottom">
      <skill-bottom @next="$router.push('/skill11')"></skill-bottom>
    </div>


  </div>
</template>
<script>

  import SkillBottom from '../../../components/skill-bottom'
  import upload from '../../../components/upload'
  export default {
    name: 'skill9',
    data(){
      return {
        active:'0',

        userId:localStorage.getItem('userId'),
      }
    },
    components: {
      SkillBottom,upload
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
    position: relative;
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
