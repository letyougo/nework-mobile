<template>
  <div class="edit-photo">
    <h3>选择照片</h3>
    <div class="photo-tip">
      清晰的工作或生活照片，会成为你和顾客互相认识的重要途径。请确保使用清晰的照片，并确认其中不包含你不希望其他人看到的个人敏感信息。
    </div>

    <div class="photo-img">
      <img :src="item.avatar" width="100%" height="100%"/>
    </div>

    <div class="edit-photo-action">
      <el-form>
        <el-form-item>
          <el-upload
            class="upload-demo"
            :action=" 'http://nework-web.rdc.waibaodashi.com/qiniu/uploadUserFile?column=avatar&userId='+item.userId "
            :on-success="success"

            list-type="picture">
            <el-button  type="primary">点击上传</el-button>

          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button @click="save">保存</el-button>
        </el-form-item>
      </el-form>

    </div>



  </div>

</template>

<script>

  import {updateUser} from '../../../../service/editData'

  export default {
    name: "edit-photo",
    props:['item'],
    methods:{
      success(res){

        this.item.avatar = res.data.path
      },
      async save(){

        let r = await updateUser({userId:localStorage.getItem('userId'),avatar:this.item.avatar})
        if(r.data.code == 200){
          this.$message.success('修改个人头像成功')
        }
      }
    }
  }
</script>

<style scoped>

  h3{
    font-size: 30px;
    margin: 20px 0;
  }
  .photo-tip{
    color: rgba(0,0,0,0.6);
    line-height: 20px;
  }
  .edit-photo-action{
    margin-top: 20px;
  }
  .photo-img{
    width: 2rem;
    height: 2rem;
    /*background: red;*/
    margin-top: 20px;
  }

  .input-file{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;

    border: 1px solid #dcdfe6;

    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 17px 20px;
    font-size: 14px;
    border-radius: 2px;
    color: #fff;
    background-color: #008BF7;
    border-color: #008BF7;
  }


</style>
