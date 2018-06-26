<template>
  <div class="skill3">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">让我们进一步缩小范围</p>
      <br/>
      <service-list :list="list"  @change="change"></service-list>
      <br/>
      <!--<el-form>-->
        <!--<el-form-item label="请输入具体的工作类型">-->
          <!--<el-input></el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
    </div>


    <div class="bottom">
      <skill-bottom @next="cb"></skill-bottom>
    </div>



  </div>
</template>
<script>

  import serviceList from '../../components/service-list.vue'
  import SkillBottom from '../../components/skill-bottom'
  import progress from '../../components/progress'
  import {getServiceList} from '../../../service/skill/index'
  export default {
    name: 'skill',
    data(){
      return {

        list:[

        ]
      }
    },
    components: {
      serviceList,SkillBottom,progress
    },

    methods:{
      change(i){
        this.list[i].active = !this.list[i].active

      },
      cb(){
        let ids = this.list
          .filter(item=>item.active)
          .map(item=>item.serviceTypeId)
          .join(',')



        if(ids){
          localStorage.setItem('serviceIds',ids)
          this.$router.push('/skill4')
        }else {
          this.$message.show('请选择服务类型')
        }



      },
      async fetch(){
        let districtId=localStorage.getItem('districtId')
        let res = await getServiceList({parentId:this.$route.query.serviceTypeId})
        let list = res.data.data
        console.log(list,'list')
        list = list.map((item)=>{
          item.name = item.serviceTypeName
          item.url = ''
          item.empty = false
          item.active = false

          return item
        })

        let yu = 3- list.length%3
        console.log(yu,'yu')
        for(var i=0;i<yu;i++){
          list.push({empty:true})
        }
        this.list = list



        console.log(list,'list')
        // this.list = list

      }
    },
    mounted(){
      this.fetch()
    }
  }

</script>
<style>
  .skill2 {
    padding: 0.3rem;
  }


</style>
