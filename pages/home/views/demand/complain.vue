<template>
    <div class="rate">
      <div class="content">
        <p class="title">
          投诉
        </p>
        <p class="tip">
          发送您要投诉的用户联系方式及投诉内容到邮箱：
        </p>
        <p class="tip">wangqi@pmcaff.com</p>
      </div>

      <div class="bottom">
        <el-button type="primary">知道了</el-button>
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
    margin-bottom: 30px;

  }
  .tip{
    color: rgba(0,0,0,0.6);
  }
</style>
