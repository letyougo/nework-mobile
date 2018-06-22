<template>
  <div class="skill">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="10"></el-progress>
      <p class="skill-desc">你打算在什么地方开始工作</p>
      <el-form label-position="top">
        <el-form-item label="国家地区">
          <el-select v-model="n" @change="fetchProvince">
            <el-option v-for="item in country" :label="item.chinese" :value="item.districtId"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="省份/州">
          <el-select v-model="p" @change="fetchCity">
            <el-option v-for="item in province" :label="item.chinese" :value="item.districtId"></el-option>
          </el-select>
        </el-form-item>



        <el-form-item label="城市">
          <el-select v-model="c" >
            <el-option v-for="item in city" :label="item.chinese" :value="item.districtId"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="小区及街道名">
          <el-input v-model="location"></el-input>
        </el-form-item>

        <el-form-item label="详细地址（选填）">
          <el-input v-model="specAddr"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="bottom">
      <skill-bottom @next='cb'></skill-bottom>
    </div>




  </div>
</template>
<script>
  import SkillBottom from '../../components/skill-bottom'
  import progress from '../../components/progress'
  import request from '../../request'


  import {getDistByParam} from '../../../service/homepage/index'


  export default {
      name:'skill',
    data(){
        return{
          country:[],
          province:[],
          city:[],
          n:'',
          p:'',
          c:'',
          location:'',
          specAddr:''
        }
    },
    components:{
        SkillBottom
    },
    methods:{
      cb(){
        localStorage.setItem('location',this.location)
        localStorage.setItem('specAddr',this.specAddr)
        if(this.c){
          localStorage.setItem('districtId',this.c)
        }else {
          localStorage.setItem('districtId',this.p)
        }
        this.$router.push('/skill2')
      },
      async fetch(parentId){
        let res = await getDistByParam({parentId})
        return res
      },
      async fetchCountry(){
        let res = await this.fetch(0)
        this.country = res.data.data
      },
      async fetchProvince(){
        let res = await this.fetch(this.n)
        this.province = res.data.data
      },
      async fetchCity(){
        let res = await this.fetch(this.p)
        this.city = res.data.data
      }
    },
    mounted(){
      this.fetchCountry(0)
    }
  }
</script>
<style>
  .skill{

    position: relative;
  }
  .skill-title{
    font-size: 30px;
  }
  .skill-desc{
    font-size: 30px;
    margin-top: 30px;
  }
</style>
