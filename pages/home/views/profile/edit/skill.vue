<template>
    <div class="edit-skill">
      <h3>我的技能</h3>
      <p class="tip">我们将根据你当前的技能，匹配合适你的工作。</p>
      <div class="skill-list">


        <div class="skill-item" v-for=" item in list ">
          <img :src=" item.url "/>
          <p>{{item.firstServiceTypeName}}</p>
          <span>{{item.secondServiceTypeName}}</span>

          <div class="delete">
            <i class="iconfont icon-delete1" >&#xe783;</i>
          </div>

        </div>

      </div>

      <el-form>
        <el-form-item>
          <el-button type="primary" @click="$emit('add')">添加技能</el-button>
        </el-form-item>
      </el-form>

      <!--<service-list :list="list"></service-list>-->

    </div>
</template>

<script>
  import serviceList from '../../../components/service-list.vue'
  export default {
    data(){
      return {

      }
    },
    name: "edit-skill",
    props:['list'],
    components:{
      serviceList
    }
  }
</script>

<style scoped>
  h3{
    font-size: 30px;
    margin: 0;
  }

  .delete{
    position: ;
  }

  i{
    font-size: 20px;
    color: blue;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
  .tip{
    color: rgba(0,0,0,0.6);
    margin: 20px 0 10px 0;
  }
  .skill-list{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width:100% ;
    margin-bottom: 20px;
  }
  .skill-item{
    width: 3.2rem;
    border: 1px solid rgba(0,0,0,0.05);
    text-align: center;
    padding: 10px 0;
    margin-top: 25px;
    position: relative;
  }
  .skill-item:nth-child(1){
    margin-top: 0;
  }
  .skill-item:nth-child(2){
    margin-top: 0;
  }
  .skill-item span{
    color: rgba(0,0,0,0.6);
    margin-top: 10px;
    display: block;
  }

</style>

