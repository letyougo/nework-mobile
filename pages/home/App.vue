<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      radio3:'上海',
      phone_region:'cn'
    }
  }
}
</script>

<style>
.app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  padding: 0.3rem;
}
.el-input-group__append, .el-input-group__prepend{
  /*padding: 0 50px;*/
}


</style>
