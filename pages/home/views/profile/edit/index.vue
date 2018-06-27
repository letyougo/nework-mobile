<template>
    <div >

      <div class="item-list">
        <div @click="active=0" v-bind:class="{active:active==0}">资料</div>
        <div @click="active=1" v-bind:class="{active:active==1}" >照片</div>
        <div @click="active=2" v-bind:class="{active:active==2 || active=='2-1' || active=='2-2'}" >技能</div>
        <div @click="active=3" v-bind:class="{active:active==3 || active=='3-1' || active== '3-2' || active=='3-3'}" >认证</div>
        <div @click="active=4" v-bind:class="{active:active==4}" >余额</div>
        <div @click="active=5" v-bind:class="{active:active==5}">记录</div>
      </div>

      <div class="edit">
        <edit-base v-if="active == 0" :item="item"></edit-base>
        <edit-photo  v-if="active == 1" :item="item"></edit-photo>
        <edit-skill  v-if="active == 2" :list="skill"  @add=" active='2-1'  "  @remove="ok"></edit-skill>
        <skill1  v-if="active == '2-1'" :list="skill" @ok="ok1"></skill1>
        <skill2  v-if="active == '2-2'" :list="skill" :id="typeId" @ok="ok2"></skill2>


        <Check v-if="active == 3" :item="item"   @card=" active='3-3' "   @phone="active='3-1'" @email=" active='3-2' "  />
        <phone-check v-if="active == '3-1'"></phone-check>
        <email-check v-if="active == '3-2'"></email-check>
        <idcard-check v-if=" active=='3-3' "></idcard-check>
      </div>






    </div>
</template>

<script>
  import EditBase from './Base'
  import EditPhoto from './Photo'
  import EditSkill from './skill'
  import Skill1 from './skill1'
  import Skill2 from './skill2'
  import Check from './Check'
  import PhoneCheck from './phone-check'
  import EmailCheck from './email-check'
  import {getUserById} from '../../../../service/editData'
  import {getSkillList} from '../../../../service/skill'
  import {releaseSkill} from '../../../../service/skill'
  import Phone from "./Phone";
  import IdcardCheck from './idcard-check'
  export default {
    name: "edit",
    components:{
      Phone,
      EditPhoto,
      EditBase,
      EditSkill,
      Check,
      Skill1,
      Skill2,
      PhoneCheck,
      EmailCheck,
      IdcardCheck
    },
    data(){
      return {
        active:0,
        item:{
          nickname:''
        },
        skill:[],
        typeId:''
      }
    },
    methods:{

      ok1(id){
        this.typeId = id
        this.active = '2-2'
      },

      async ok(){
        this.fetchSkill()
      },

      async ok2(){
        let res = await releaseSkill({
          districtId:localStorage.getItem('districtId'),
          userId:localStorage.getItem('userId'),
          location:localStorage.getItem('location'),
          specAddr:localStorage.getItem('specAddr'),
          serviceTime:localStorage.getItem('serviceTime'),
          serviceIds:localStorage.getItem('serviceIds'),
        })
        if(res.data.code == 200){
          this.$message.success('发布技能成功')
          this.active = '2'
        }
      },

      async fetch(){

        let res = await getUserById({userId:localStorage.getItem('userId')})
        let item = res.data.data
        item.serviceTime = item.serviceTime.split(',')
        console.log(item,'item')
        this.item = item
      },

      async fetchSkill(){
        let res = await getSkillList({userId:localStorage.getItem('userId')})
        res = res.data.data.skill
        console.log(res,'res')
        let skill = []

        Object.keys(res).map(key=>{

          skill = skill.concat(res[key])
          return key
        })

        skill = skill.map(item=> {
          item.url = '/static/images/' + item.firstServiceTypeName + '-icon.png'
          return item
        } )

        // skill = skill.map(item=>{
        //   item.url =
        // })

        this.skill = skill


      }
    },
    mounted(){
      this.fetch()
      this.fetchSkill()
    }
  }
</script>

<style scoped>
  .edit{
    padding: 0.3rem;
  }
  h3{
    font-size: 30px;
    margin: 0;
    padding: 0;
  }

  .item-list{
    display: flex;
    justify-content: space-around;
    background: #F6F8F9;
    height: 70px;
  }
  .item-list>div{

    color: #092235 ;
    line-height: 70px;
    font-size: 20px;
  }
  .item-list>div.active{
    color: #008BF7;
  }

</style>
