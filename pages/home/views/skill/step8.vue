<template>
  <div class="skill8">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">您希望使用哪种身份证件进行认证？</p>

      <br/>
      <el-form label-position="top">
        <el-form-item label="国家地区">
          <el-select v-model="n" @change="fetchProvince">
            <el-option v-for="item in country" :label="item.chinese" :value="item.districtId"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <table border="1" cellspacing="0">
        <tr >

          <td @click=" active='port' " v-bind:class="{ active:active=='port' }">
            <div >
              <img src="/static/imgs/identity-passport.png" width="50px" height="50px"/>
            </div>
            <p>护照</p>
          </td>
          <td  @click=" active='idcard' " v-bind:class="{ active:active=='idcard' }">
            <div >
              <img src="/static/imgs/identity-idcard.png" width="50px" height="50px"/>
            </div>
            <p>身份证</p>
          </td>

        </tr>
      </table>
      <br/>
      <p class="skill-tip">你的身份信息不会透露给顾客和其他服务商</p>

    </div>

    <skill-bottom @next="next"></skill-bottom>

  </div>
</template>
<script>

  import serviceList from '../../components/service-list.vue'
  import SkillBottom from '../../components/skill-bottom'
  import upload from '../../components/upload'
  import {getDistByParam} from '../../../service/homepage/index'
  export default {
    name: 'skill',
    data(){
      return {
        country:[],
        n:'',
        active:''
      }
    },
    methods:{
      async fetch(parentId){
        let res = await getDistByParam({parentId})
        return res
      },
      async fetchCountry(){
        let res = await this.fetch(0)
        this.country = res.data.data
      },
      next(){
        if(this.active ==''){
          this.$message.warning('请选择认证证件类型')
        }

        if(this.active == 'idcard'){
          this.$router.push('/skill9')
        }else {
          this.$router.push('/skill10')
        }
      }
    },
    components: {
      serviceList,SkillBottom,upload
    },
    mounted(){
      this.fetchCountry()
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
    outline:1px solid #33a2f9;
  }
  table,table tr th, table tr td { border:1px solid #d2d2d2; }
  table {  min-height: 25px; line-height: 25px; text-align: center; border-collapse: collapse;}
</style>
