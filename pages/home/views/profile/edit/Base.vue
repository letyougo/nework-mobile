<template>
  <div>
    <h3>基本资料</h3>
    <el-form label-position="top">
      <el-form-item label="姓名">
        <el-input v-model="item.nickname"></el-input>
      </el-form-item>

      <el-form-item label="手机号">
        <p>+86 {{item.phoneNumber}}</p>
        <div>
          只有在你和另一名Nework用户确认订单时，此资料才会被分享
        </div>
      </el-form-item>

      <el-form-item label="邮箱">
        <p>{{item.email}}</p>
        <div>
          我们不会向其他用户透露您的个人邮箱地址
        </div>
      </el-form-item>


      <el-form-item label="国家地区">
        <el-select v-model="n" @change="fetchProvince">
          <el-option v-for="item in country" :label="item.chinese" :value="item.districtId"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="省份/州">
        <el-select v-model="p" @change="fetchCity">
          <el-option v-for="item in province" :label="item.chinese" :value="item.districtId"></el-option>
        </el-select>
      </el-form-item>



      <el-form-item :label=" '城市: '+item.city ">
        <el-select v-model="c" @change="changeCity">
          <el-option v-for="item in city" :label="item.chinese" :value="item.districtId"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item label="小区或街道名">
        <el-input v-model="item.location"></el-input>

      </el-form-item>


      <el-form-item label="具体地址">
        <el-input v-model="item.specAddr"></el-input>

      </el-form-item>

      <el-form-item label="营业时间" >
        <el-checkbox-group v-model="item.serviceTime">
          <el-checkbox label="w">工作日周一到周五</el-checkbox>
          <el-checkbox label="sat">周六</el-checkbox>
          <el-checkbox label="sun">周天</el-checkbox>
        </el-checkbox-group>

      </el-form-item>

      <el-form-item label="简介">
        <el-input type="textarea" rows="8" v-model="item.description"></el-input>
      </el-form-item>

      <el-form-item>
        <p class="edit-tip">
          Nework是建立在大家互相信任的基础上，进行运转，向大家介绍下自己吧。
          告诉他们你会是一个怎么样的顾客或者服务商，你经常喜欢做哪些事情？作为服务商你的服务特色又是怎么样的？
        </p>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>

  import {getDistByParam} from '../../../../service/homepage/index'

  import {updateUser} from '../../../../service/editData'
  export default {
    name: "base",
    props:['item'],
    data(){
      return {
        country:[],
        province:[],
        city:[],
        n:'',
        p:'',
        c:'',
      }
    },



    methods:{
      async fetch(parentId){
        let res = await getDistByParam({parentId})
        return res
      },
      async fetchCountry(){
        let res = await this.fetch(0)
        this.country = res.data.data
      },
      async fetchProvince(){
        let res = await this.fetch(this.n)
        this.province = res.data.data
      },
      async fetchCity(){
        let res = await this.fetch(this.p)
        this.city = res.data.data
      },

      async changeCity(a){
        console.log(a)
        console.log(this.item )
      },

      async save(){
        let district
        if(this.c){
          district = this.c
        }else {
          district = this.province
        }

        let res = await updateUser({
          userId:this.item.userId,
          description:this.item.description,
          specAddr:this.item.specAddr,
          location:this.item.location,
          district:district,
          nickname:this.item.nickname,
          serviceTime:this.item.serviceTime.join(',')
        })
        if(res.data.code == 200){
          this.$message.success('修改资料成功')
        }
      }
    },
    mounted(){
      this.fetchCountry()
    }
  }
</script>

<style scoped>
  .edit-tip{
    color: rgba(0,0,0,0.6);
    line-height: 25px;
  }
  h3{
    font-size: 30px;
    margin: 20px 0;
  }
</style>
