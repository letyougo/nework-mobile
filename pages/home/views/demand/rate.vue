<template>
    <div class="complain">
      <div class="content">
        <p class="title">
          填写对 XXX 的评价
        </p>
        <div class="stars">
          <i class="icon iconfont">&#xe786;</i>
          <i class="icon iconfont">&#xe786;</i>
          <i class="icon iconfont">&#xe786;</i>
        </div>

        <el-form>
          <el-form-item label="评价内容">
            <el-input type="textarea" rows="8"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button>取消</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">确定</el-button>
          </el-form-item>
        </el-form>

      </div>


    </div>
</template>

<script>
	export default {
		name: "complain"
	}
</script>

<style scoped>
  .content{
    padding: 0.3rem;

  }

  .title{
    margin: 0 auto;
    font-size: 30px;
    color: #000000;
    margin-bottom: 17px;

  }
  .tip{
    color: rgba(0,0,0,0.6);
  }
  .stars i{
    font-size: 30px;
    color: #F79F00;
  }
</style>
