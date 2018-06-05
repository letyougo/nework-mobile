<template>
  <div class="skill2">
    <p class="skill-title">nework</p>
    <p class="skill-desc">你打算在什么地方开始工作</p>
    <service-list :list="list" :active="active" @change="(i)=>active=i"></service-list>
    <br/>
    <el-form>
      <el-form-item label="请输入具体的工作类型">
        <el-input></el-input>
      </el-form-item>
    </el-form>


    <el-row>
      <el-col :span="12">返回</el-col>
      <el-col :span="12">
        <el-button type="primary">下一步</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>

  import serviceList from '../../components/service-list.vue'

  export default {
    name: 'skill',
    data(){
      return {
        active:'0',
        list:[
          {name:'家政',url:'/static/imgs/jiazheng.png'},
          {name:'美容美甲',url:'/static/imgs/meijia.png'},
          {name:'健康',url:'/static/imgs/jianshen.png'},

          {name:'摄影摄像',url:'/static/imgs/sheying.png'},
          {name:'上门维修',url:'/static/imgs/weixiu.png'},
          {name:'教育培训',url:'/static/imgs/peixun.png'},

          {name:'数码维修',url:'/static/imgs/shumaweixiu.png'},
          {name:'宠物',url:'/static/imgs/chongwu.png'},
          {name:'活动',url:'/static/imgs/huodong.png'},

          {name:'运动健身',url:'/static/imgs/yundong.png'},
          {name:'婚礼策划',url:'/static/imgs/hunli.png'},
          {name:'其它',url:'/static/imgs/qita.png'},
        ]
      }
    },
    components: {
      serviceList
    }
  }

</script>
<style>
  .skill2 {
    padding: 0.3rem;
  }


</style>
