<template>

  <div class="App">
    <div class="home-top">
      <div class="top-left" @click="$router.push('/')">
        Nework&nbsp;
      </div>
      <p>北京</p>
      <div class="top-right">


        <span v-if="!login">
              <router-link to="/login">登录</router-link>
              <router-link to="/register">注册</router-link>
          </span>
        <span v-else>
              <router-link to="/skill1">我要工作</router-link>
              <img @click="$router.push('/profile')" :src=" avatar " width="30px" height="30px"/>
          </span>
      </div>
    </div>

    <div class="main">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import {getUserById} from '../service/editData'

  import Top from './components/top'
export default {
  name: 'App',
  data(){
    return {
      radio3:'上海',
      phone_region:'cn',
      login:false,
      avatar:''
    }
  },
  components:{Top},
  methods:{
    async init(){
      let userId = localStorage.getItem('userId')

      if(userId){
        let res = await getUserById({userId})
        this.nickname = res.data.data.nickname
        this.avatar = res.data.data.avatar
        this.login =true
      }else {

      }
    }
  },
  mounted(){
    this.init()
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
  position: relative;
}
.el-input-group__append, .el-input-group__prepend{
  /*padding: 0 50px;*/
}

.home-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  0.3rem;
}
.home-top p{
  text-align: center;
  line-height: 30px;
}
.top-left{
  vertical-align: middle;
  line-height: 30px;
  font-size: 20px;
  color: #092235;
}
.top-right{
  vertical-align: middle;
  line-height: 30px;
  color: #008BF7;
}
  .top-right img{
    vertical-align: middle;
    border-radius: 50%;
    margin-left: 10px;
  }
  .top-right a{
    vertical-align: middle;
  }
  .main{
    position: relative;
  }
</style>
