<template>
    <div class="upload">
      <input type="file" @change="change" :name="name"/>
      <p>
        <i class="iconfont">&#xe766;</i>
      </p>
      <img v-if="img" width="100%" height="100%" :src="img"/>
    </div>
</template>

<script>
  import request from 'axios'
  export default {
    name: "upload",
    props:['action','name'],
    data(){
      return {
        img:''
      }
    },
    methods:{
      async change(e){
        var formdata1=new FormData();
        let f = e.target.files[0]
        formdata1.append('file',f)
        // let config = {
        //   headers:{'Content-Type':'multipart/form-data'}
        // };  //添加请求头
        let res =await request.post(this.action,formdata1)
        this.img = res.data.data.path
        this.$emit('success',res.data.data.path)
      }
    }
  }
</script>

<style scoped>
  .upload{
    padding: 41px 0;
    margin: 0;
    position: relative;
    border:1px solid #d2d2d2
  }
  p{
    text-align: center;
  }
  p i{
    font-size: 20px;
    color: #33a2f9;
  }
  img{
    position: absolute;
    left:0 ;
    right: 0;
    top: 0;
    bottom: 0;
  }
  input[type=file]{
    width:3.45rem; ;
    height: 135px;
    position: absolute;
    left:0 ;
    right: 0;
    top: 0;
    bottom: 0;
    outline: none;
    opacity: 0;
  }
</style>
