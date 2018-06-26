<template>
  <div class="skill5">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">简单的介绍下你自己</p>
      <el-form>
        <el-form-item label="简介">
          <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 6}" v-model="description"></el-input>
        </el-form-item>
      </el-form>

      <br/>
    </div>

    <skill-bottom @next="next"></skill-bottom>

  </div>
</template>
<script>

  import serviceList from '../../components/service-list.vue'
  import SkillBottom from '../../components/skill-bottom'
  import progress from '../../components/progress'

  import {updateUser} from '../../../service/editData'
  export default {
    name: 'skill',
    data(){
      return {
        description:''
      }
    },
    methods:{
      async next(){
        if(this.description){


          localStorage.setItem('description',this.description)
          let res = await updateUser({userId:localStorage.getItem('userId'),description:this.description})
          if(res.data.code == 200){
            this.$message.success('修改个人简介成功')
          }

          this.$router.push('/skill6')
        }else {
          this.$message.warning('请输入个人简介')
        }
      }
    },
    components: {
      serviceList,SkillBottom,progress
    }
  }

</script>
<style>



</style>
