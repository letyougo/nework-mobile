<template>
  <div class="edit-photo">
    <h3>选择照片</h3>
    <div class="photo-tip">
      清晰的工作或生活照片，会成为你和顾客互相认识的重要途径。请确保使用清晰的照片，并确认其中不包含你不希望其他人看到的个人敏感信息。
    </div>

    <div class="photo-img"></div>

    <div class="edit-photo-action">
      <el-form>
        <el-form-item>
          <el-button type="primary">选择照片</el-button>
        </el-form-item>
        <el-form-item>
          <el-button>保存</el-button>
        </el-form-item>
      </el-form>

    </div>



  </div>

</template>

<script>
  export default {
    name: "edit-photo"
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
    background: red;
    margin-top: 20px;
  }
</style>
