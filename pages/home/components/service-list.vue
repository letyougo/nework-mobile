<template>
  <div class="service-list">

    <table border="1" cellspacing="0">
      <tr v-for=" i in list.length/3">
        <!--{{list[i].name}}-->
        <td v-if=" !list[(i-1)*3+0].empty " :class=" list[(i-1)*3+0].active?'active' :''  " @click="$emit('change',(i-1)*3+0)">
          <div v-if="list[(i-1)*3+0].url" >
            <img :src="list[(i-1)*3+0].url" width="50px" height="50px"/>
          </div>
          <p>{{list[(i-1)*3+0].name}}</p>
        </td>
        <td  v-if=" !list[(i-1)*3+1].empty "  :class=" list[(i-1)*3+1].active?'active' :''  " @click="$emit('change',(i-1)*3+1)">
          <div v-if="list[(i-1)*3+1].url" >
            <img :src="list[(i-1)*3+1].url" width="50px" height="50px"/>
          </div>

          <p>{{list[(i-1)*3+1].name}}</p>
        </td>
        <td  v-if=" !list[(i-1)*3+2].empty "  :class=" list[(i-1)*3+2].active?'active' :''  "  @click="$emit('change',(i-1)*3+2)">
          <div v-if="list[(i-1)*3+2].url">
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
  name: 'service-list',
  props:['list','active'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Math:Math
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  td{
    width: 2.3rem;
    padding: 12px 0;
    margin: 0;
  }
  td.active{
    outline:1px solid #33a2f9;
  }
  table,table tr th, table tr td { border:1px solid rgba(0,0,0,0.05); }
  table {  min-height: 25px; line-height: 25px; text-align: center; border-collapse: collapse;}

</style>
