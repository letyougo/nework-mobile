<template>
  <div class="skill6">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">上传一张您的头像照片或者 Logo 图案</p>
      <el-form>

        <el-form-item>
          <div class="skill6-img"></div>
        </el-form-item>

        <el-form-item >
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :auto-upload="false"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button  type="primary">选择文件</el-button>

          </el-upload>
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
  .skill6-img{
    width: 2rem;
    height: 2rem;
    background: #dddddd;
  }


</style>
