<template>
  <div class="skill">
    <div class="skill-top">
      <p class="skill-title">nework</p>
      <el-progress :percentage="20"></el-progress>
      <p class="skill-desc">您打算开始什么类型的工作？</p>
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
  import {getServiceList} from '../../../service/skill/index'
  import serviceList from '../../components/service-list.vue'
  import SkillBottom from '../../components/skill-bottom'
  export default {
    name: 'skill',
    data(){
      return {
        list:[
          // {name:'家政',url:'/static/imgs/jiazheng.png'},
          // {name:'美容美甲',url:'/static/imgs/meijia.png'},
          // {name:'健康',url:'/static/imgs/jianshen.png'},
        //
        //   {name:'摄影摄像',url:'/static/imgs/sheying.png'},
        //   {name:'上门维修',url:'/static/imgs/weixiu.png'},
        //   {name:'教育培训',url:'/static/imgs/peixun.png'},
        //
        //   {name:'数码维修',url:'/static/imgs/shumaweixiu.png'},
        //   {name:'宠物',url:'/static/imgs/chongwu.png'},
        //   {name:'活动',url:'/static/imgs/huodong.png'},
        //
        //   {name:'运动健身',url:'/static/imgs/yundong.png'},
        //   {name:'婚礼策划',url:'/static/imgs/hunli.png'},
        //   {name:'其它',url:'/static/imgs/qita.png'},
        //
        ],

      }
    },
    methods:{
      cb(){
        let item = this.list.find((item)=>{
          return item.active
        })
        if(item){
          this.$router.push('/skill3?serviceTypeId='+item.serviceTypeId)
        }else {
          this.$message.warning('请选择类型')
        }
      },
      change(i){
        this.list = this.list.map((item)=>{
          item.active = false
          return item
        })
        this.list[i].active = true
      },
      async fetch(){
        let districtId=localStorage.getItem('districtId')
        let res = await getServiceList({districtId,level:'f'})
        let list = res.data.data
        console.log(list,'list')
        list = list.map((item)=>{
          item.name = item.serviceTypeName
          item.url = ''
          item.empty = false
          item.active = false
          item.url = '/static/images/' + item.name + '-icon.png'
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
    components: {
      serviceList,
      SkillBottom
    },
    mounted(){
      this.fetch()
    }
  }

</script>
<style>
  .bottom{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
  }


</style>
