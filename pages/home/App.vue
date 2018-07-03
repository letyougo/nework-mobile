<template>

  <div class="App">
    <div class="home-top">
      <div class="top-left"  @click="panel=!panel">
        Nework <i class="icon iconfont" v-if="!panel">&#xe769;</i><i class="icon iconfont" v-else>&#xe776;</i>
      </div>

      <p @click="$router.push('/city')">{{city}}</p>
      <div class="top-right">


        <span v-if="!login">
              <router-link to="/login">登录</router-link>
              <router-link to="/register">注册</router-link>
          </span>
        <span v-else>

              <img @click="$router.push('/profile')" :src=" avatar " width="30px" height="30px"/>
          </span>
      </div>
    </div>


    <div class="main" @click="panel=false">
      <router-view></router-view>
    </div>

    <div class="home-tab" v-show="panel">
      <ul class="home-tab-list">
        <li @click="route('/')">首页</li>
        <li @click="route('/question')">我要工作</li>
        <li @click="route('/record')">我的订单</li>
        <li @click="route('/message')">消息中心</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getUserById} from '../service/editData'

  import Top from './components/top'

  export default {
    name: 'App',
    data() {
      return {
        city:localStorage.getItem('cityName'),
        login: false,
        avatar: '',
        panel:false
      }
    },
    components: {Top},
    methods: {
      route(p){
        this.$router.push(p)
        this.panel = false
      },
      async init() {

        let userId = localStorage.getItem('userId')


        let {city} = this.$route.query
        if(city){
          this.city = city
        }

        if (userId) {
          let res = await getUserById({userId})
          this.nickname = res.data.data.nickname
          this.avatar = res.data.data.avatar
          this.login = true
        } else {

        }
      }
    },
    mounted() {
      this.init()
    },
    watch: {
      $route() {
        this.init()

      }
    }
  }
</script>

<style lang="less">
  .app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    padding: 0.3rem;
    position: relative;
  }

  .el-input-group__append, .el-input-group__prepend {
    /*padding: 0 50px;*/
  }

  .home-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem;

    .home-top p {
      text-align: center;
      line-height: 30px;
    }
    .top-left {
      vertical-align: middle;
      line-height: 30px;
      font-size: 20px;
      color: #092235;
      position: relative;

      i{
        color: rgba(0,0,0,0.6);
        font-size: 12px;
      }

    }
    .top-right {
      vertical-align: middle;
      line-height: 30px;
      color: #008BF7;
    }
    .top-right img {
      vertical-align: middle;
      border-radius: 50%;
      margin-left: 10px;
    }
    .top-right a {
      vertical-align: middle;
    }
  }

  .home-tab{
    width: 3rem;
    height: 200px;
    position: absolute;
    left: 0;
    top: 60px;
    background: #FFFFFF;
    border-radius: 4px;

    ul{
      border: 1px solid rgba(0,0,0,0.05);
      border-bottom: none;
      li{
        font-size: 14px;
        text-indent: 10px;
        background: #FFFFFF;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        height: 50px;
        line-height: 50px;
      }
    }
  }

  .main {
    position: relative;
  }
</style>
