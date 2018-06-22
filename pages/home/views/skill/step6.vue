<template>
  <div class="skill6">
    <div class="skill-top">
      <p class="skill-title">nework</p>

      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">上传一张您的头像照片或者 Logo 图案</p>
      <br/>
      <el-form>

        <el-form-item>
          <div class="skill6-img">
            <div class="mask"></div>
            <img :src="img" ref="img" class="img" v-if="img"></img>

          </div>
        </el-form-item>

        <el-form-item >
          <el-upload
            class="upload-demo"
            :action=" 'http://nework-web.rdc.waibaodashi.com/qiniu/uploadUserFile?column=avatar&userId='+userId "
            :on-preview="handlePreview"
            :on-remove="handleRemove"

            :before-remove="beforeRemove"
            :on-success="success"
            name="file"
            :on-exceed="handleExceed"
            list-type="picture"
            :file-list="fileList">
            <el-button  type="primary">选择文件</el-button>

          </el-upload>
        </el-form-item>
      </el-form>

      <br/>
    </div>

    <skill-bottom @next="$router.push('/skill7')"></skill-bottom>

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
        ],
        userId:localStorage.getItem('userId'),
        img:''
      }
    },
    methods:{
      success(res,file,list){
        this.img = res.data.path
      }
    },
    components: {
      serviceList,SkillBottom,progress
    }
  }

</script>
<style>
  .skill6-img{
    width: 2rem;
    height: 2rem;
    background: #dddddd;
    position: relative;
  }

  .mask{
    width: 2rem;
    height: 2rem;
    background: url("/static/images/headshot-mask.png");
    background-size: 100%;
  }
  .img{
    width: 2rem;
    height: 2rem;
    background-size: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

</style>
