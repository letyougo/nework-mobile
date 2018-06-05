<template>
    <div class="demo1">
      <table border="1" cellspacing="0">
        <tr v-for=" i in list.length/3">
          <!--{{list[i].name}}-->
          <td>
            <div>
              <img :src="list[(i-1)*3+0].url" width="50px" height="50px"/>
            </div>
            <p>{{list[(i-1)*3+0].name}}</p>
          </td>
          <td >
            <div>
              <img :src="list[(i-1)*3+1].url" width="50px" height="50px"/>
            </div>
            <p>{{list[(i-1)*3+1].name}}</p>
          </td>
          <td class="active">
            <div>
              <img :src="list[(i-1)*3+2].url" width="50px" height="50px"/>
            </div>
            <p>{{list[(i-1)*3+2].name}}</p>
          </td>
        </tr>


      </table>
    </div>
</template>

<script>
  export default {
    name: "demo1",
    data() {
      return {
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
    mounted() {

    }
  }
</script>

<style scoped>
    .demo1 {

    }
    td{
      width: 2.3rem;
      padding: 12px 0;
      margin: 0;
    }
    td.active{
      border-color: #33a2f9;
    }
    table,table tr th, table tr td { border:1px solid #d2d2d2; }
    table {  min-height: 25px; line-height: 25px; text-align: center; border-collapse: collapse;}


</style>
