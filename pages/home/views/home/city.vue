<template>
  <div class="city">
    <el-form label-position="top">
      <el-form-item label="国家地区">
        <el-select v-model="n" @change="fetchProvince">
          <el-option v-for="item in country" :label="item.chinese" :value="item.districtId"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item >
        <el-select v-model="p" @change="fetchCity">
          <el-option v-for="item in province" :label="item.chinese" :value="item.districtId"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item >
        <el-select v-model="c">
          <el-option v-for="item in city" :label="item.chinese" :value="item.districtId"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="直接搜索">
        <el-select
          v-model="search"

          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="searchCity"
        >
          <el-option
            v-for="item in searchList"
            :key="item.districtId"
            :label="item.chinese"
            :value="item.districtId">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="热门城市">
        <div  class="hot-list">
          <div v-for="item in hot" v-bind:class="{ 'hot-item':true,'active':c==item.districtId }"  @click="setCity(item)">{{item.chinese}}</div>

        </div>
      </el-form-item>

      <el-form-item label="按照字母搜索">
        <div class="letters">
          <div  v-for="(item,key) in letter">
            <div class="letter" v-if="item.length">{{key}}</div>
          </div>
        </div>
      </el-form-item>

      <div v-for="(item,key) in letter">
        <div v-if="item.length" class="letter-list">
          <p class="letter-title">{{key}}</p>
          <div class="letter-box">
            <div v-for="it in item"  v-bind:class="{ 'letter-item':true,'active':c==it.districtId }" @click="setCity(it)">{{it.chinese}}</div>
          </div>
        </div>

      </div>

      <br/><br/>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  import {getDistByParam, getHotCity,getCityByLetter} from '../../../service/homepage/index'

  export default {
    name: "city",
    data() {
      return {
        country: [],
        province: [],
        city: [],
        n: '',
        p: '',
        c: '',
        item: {},
        hot:[],
        letter:[],
        search:'',
        searchList:[],

        name:''
      }
    },
    methods: {
      async fetch(parentId) {
        let res = await getDistByParam({parentId})
        return res
      },
      async fetchCountry() {
        let res = await this.fetch(0)
        this.country = res.data.data
      },
      async fetchProvince() {
        let res = await this.fetch(this.n)
        this.province = res.data.data
      },
      async fetchCity() {
        let res = await this.fetch(this.p)
        this.city = res.data.data
      },


      async fetchHotCity() {
        let res = await getHotCity()
        this.hot = res.data.data
      },

      async searchCity(chinese,cb){
        let res = await getDistByParam({chinese})
        this.searchList = res.data.data
      },

      async fetchLetterCity(){
        let letter = await getCityByLetter({countryId:1})
        this.letter = letter.data.data
      },

      setCity(item){
        this.c = item.districtId
        this.name = item.chinese
      },

      save(){
        localStorage.setItem('cityName',this.name)
        localStorage.setItem('cityId',this.c)
        this.$router.push('/?city='+this.name)
      }
    },
    mounted() {
      this.fetchCountry()
      this.fetchHotCity()
      this.fetchLetterCity()
    }
  }
</script>

<style scoped lang="less">
  .city {
    padding: 0 0.3rem;
  }
  .hot-list{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .hot-item{
      color: rgba(0,0,0,0.6) ;
      width: 88px;
      height: 50px;
      background: #F6F8F9;
      border-radius: 2px;
      text-align: center;
      line-height: 50px;
      margin-right: 10px;
      margin-bottom: 10px;


    }
    .hot-item.active{
      background: #008bf7;
      color: #ffffff;
    }

  }

  .letters{
    display: flex;
    flex-wrap: wrap;
    color:  #008bf7;;

    .letter{
      font-size: 20px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }

  .letter-list{

    .letter-title{
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background:#008BF7  ;
      color: #FFFFFF;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    .letter-box{
      display: flex;
      flex-wrap: wrap;

      .letter-item{
        color: rgba(0,0,0,0.6) ;
        width: 88px;
        height: 50px;
        background: #F6F8F9;
        border-radius: 2px;
        text-align: center;
        line-height: 50px;
        margin-right: 10px;
        margin-bottom: 10px;
      }
      .letter-item.active{
        background: #008bf7;
        color: #ffffff;
      }
    }
  }
</style>
