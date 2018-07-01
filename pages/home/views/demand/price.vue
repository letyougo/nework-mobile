<template>
  <div class="price">
    <div class="price-top">
      <div class="logo">苏</div>
      <div>
        <p>Kent Kroeger</p>
        <div class="item-star">

          <div class="stars">
            <i class="icon iconfont">&#xe786;</i>
            <i class="icon iconfont">&#xe786;</i>
            <i class="icon iconfont">&#xe786;</i>
          </div>
          <div class="score">4.7</div>
          <div class="comment">(12条评价)</div>
        </div>
      </div>


    </div>
    <div class="title">Hi，我需要深度保洁服务，我的需求如下：</div>

    <div class="price-desc">
      <p>需要清洁的位置</p>
      <p>厨房过滤网</p>
      <p>厕所内部清洁</p>
    </div>


    <div class="price-desc">
      <p>需要清洁的时间</p>
      <p>2018 年 5 月 26 日（周六）</p>
      <p>2018 年 5 月 30 日（周三）</p>
    </div>


    <div class="price-desc">
      <p>需要清洁的地址</p>
      <p class="location">
        <span>北京市朝阳区阜通东大街18号天启大厦2308</span>
        <span style="color: #008BF7 "><i class="icon iconfont">&#xe78c;</i> 查看地图</span>
      </p>

    </div>

    <div class="price-desc">
      <p>特殊要求</p>
      <p>我的地毯有些年头了，上面有些油渍比较难清洗，
        麻烦多带一些强力清洗且不伤皮毛的洗衣液。地毯每周都要用吸尘器清扫一次，
        经常踩踏的地方需要更频繁的清扫。经常用吸尘器清扫可以防止砂粒聚积，从而延长地毯寿命，因为砂粒过多会磨断地毯纤维。每隔几星期，再多花些时间使用缝隙清扫工具对护壁板、暖气和其他不容易够到的地方进行清扫。
      </p>

    </div>

    <el-button  type="primary" class="action">立即报价</el-button>

  </div>
</template>

<script>
	export default {
		name: "price"
	}
</script>

<style scoped>
  .price{
    padding: 0.3rem;
  }

  .title{

    font-size: 30px;

    margin-top: 30px;
    color: #000000;

  }
  .price-top{
    display: flex;
  }
  .logo{
    width: 50px;
    height: 50px;
    color: #ffffff;
    background: #0a6cd6;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    margin-right: 20px;
  }
  .item-star{
    display: flex;
    margin-top: 10px;
    align-items: center;
  }
  .stars{
    color: #F79F00;
    font-size: 14px;
    margin-right: 20px;

  }
  .price-desc{
    padding: 30px 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .price-desc span{
    display: block;
  }
  .price-desc p{
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
    color: rgba(0,0,0,0.8);
  }
  .price-desc p:first-child{
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    font-weight: bold;
  }

  .location{
    display: flex;
    justify-content: space-between;
  }
  .location span:first-child{
    width: 4.8rem;
  }
  .action{
    float: right;
    width: 50%;
    margin: 20px 0;
  }
</style>
