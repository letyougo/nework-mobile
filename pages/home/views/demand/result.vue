<template>
    <div class="result">
      <el-progress percentage="50"></el-progress>
      <p class="result-title">
        已为您匹配10位深度清洁服务人员
        请耐心等待报价...
      </p>
      <div class="list">
        <div class="item">
          <div>
            <img src=""/>
            <p>苏</p>
          </div>
        </div>

        <div class="item">
          <div>
            <img src=""/>
            <p>苏</p>
          </div>
        </div>
        <div class="item">
          <div>
            <img src=""/>
            <p>苏</p>
          </div>
        </div>

        <div class="item">
          <div>
            <img src=""/>
            <p>苏</p>
          </div>
        </div>


      </div>
    </div>
</template>

<script>
	export default {
		name: "result"
	}
</script>

<style scoped>
  .result{
    padding: 0.3rem;
  }

  .result-title{
    margin: 30px auto;
    font-size: 30px;
    color: #000000;

  }


  .list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .item{
    width: 3.3rem;

    flex-wrap: wrap;
    padding: 8px 0;
  }
  .item div{
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 4px;
    height: 150px;

  }
  .item div img{

    width: 50px;
    height: 50px;
    background: red;
    margin: 30px auto 10px auto;
    display: block;
  }
  .item div p{
    text-align: center;
    font-size: 16px;
  }
</style>
