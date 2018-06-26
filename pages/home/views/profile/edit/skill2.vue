<template>
    <div class="edit-choose-skill">

      <div class="choose-skill-top">
        <h3>选择技能</h3>
        <service-list :list="list"></service-list>
        <!--<el-form>-->
          <!--<el-form-item label="请输入具体的工作类型">-->
            <!--<el-input></el-input>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
      </div>


      <skill-bottom @next="cb"></skill-bottom>
    </div>
</template>

<script>
  import serviceList from '../../../components/service-list.vue'
  import skillBottom from '../../../components/skill-bottom'
  import {getServiceList} from '../../../../service/skill/index'
  export default {
    name: "edit-choose-skill",
    props:['id'],
    data(){
      return {
        list:[

        ]
      }
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
          this.$emit('ok',ids)
        }else {
          this.$message.show('请选择服务类型')
        }



      },
      async fetch(){
        let districtId=localStorage.getItem('districtId')
        let res = await getServiceList({parentId:this.id})
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
    },
    components:{
      skillBottom,
      serviceList,
    }
  }
</script>

<style scoped>
  .choose-skill-top{
    padding: 0.3rem;
  }
  h3{
    margin: 20px 0;
    font-size: 30px;
  }
</style>
