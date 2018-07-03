<template>
    <div class="record">
      <el-progress percentage="50"></el-progress>
      <div class="record-title">
        深度保洁
      </div>
      <div class="record-title-tip">
        2018年5月20日 12:31
      </div>

      <div class="list">
        <div class="item">
          <div class="item-top">
            <div class="item-logo">苏</div>
            <div class="item-chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span >在线沟通</span>
            </div>
            <div class="item-money"> ¥ 320</div>
          </div>

          <p class="item-name">Jimmy Song</p>

          <div class="item-star">

            <div class="stars">
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
            </div>
            <div class="score">4.7</div>
            <div class="comment">(12条评价)</div>
          </div>

          <div class="item-trade">
            <div>
              <i class="icon iconfont">&#xe77f;</i>
              <span>被雇佣 128 次</span>
            </div>

            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>


          </div>

          <div class="action">
            <el-button type="primary">选择他</el-button>
          </div>

        </div>



        <div class="item">
          <div class="item-top">
            <div class="item-logo">苏</div>
            <div class="item-chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span >在线沟通</span>
            </div>
            <div class="item-money"> ¥ 320</div>
          </div>

          <p class="item-name">Jimmy Song</p>

          <div class="item-star">

            <div class="stars">
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
            </div>
            <div class="score">4.7</div>
            <div class="comment">(12条评价)</div>
          </div>

          <div class="item-trade">
            <div>
              <i class="icon iconfont">&#xe77f;</i>
              <span>被雇佣 128 次</span>
            </div>

            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>


          </div>

          <div class="action">
            <el-button type="primary">选择他</el-button>
          </div>

        </div>


        <div class="item">
          <div class="item-top">
            <div class="item-logo">苏</div>
            <div class="item-chat">
              <i class="icon iconfont">&#xe78b;</i>
              <span >在线沟通</span>
            </div>
            <div class="item-money"> ¥ 320</div>
          </div>

          <p class="item-name">Jimmy Song</p>

          <div class="item-star">

            <div class="stars">
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
              <i class="icon iconfont">&#xe786;</i>
            </div>
            <div class="score">4.7</div>
            <div class="comment">(12条评价)</div>
          </div>

          <div class="item-trade">
            <div>
              <i class="icon iconfont">&#xe77f;</i>
              <span>被雇佣 128 次</span>
            </div>

            <div>
              <i class="icon iconfont">&#xe780;;</i>
              <span>已加入3年2个月</span>
            </div>


          </div>

          <div class="action">
            <el-button type="primary">选择他</el-button>
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

<style scoped l>
  .record{
    padding: 0.3rem;
  }

  .record-title{
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 30px;
    color: #000000;

  }


  .record-title-tip{
    color: rgba(0,0,0,0.6);
    font-size: 16px;
    margin-bottom: 20px;
  }


  .list{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .item:first-child{
    margin-top: 0;
  }
  .item{
    width: 100%;
    margin-top: 20px;
    flex-wrap: wrap;
    border: 1px solid rgba(0,0,0,0.05);
    padding:30px;
  }
  .item-top{

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .item-logo{
    width: 50px;
    height: 50px;
    color: #ffffff;
    background: #0a6cd6;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
  }
  .item-chat i{
    color: #008BF7;
  }
  .item-chat span{
    margin-left: 10px;
    display: inline-block;
    color: #008BF7;
  }
  .item-money{
    color: #008BF7;
  }

  .item-name{
    margin-top: 20px;
    font-size: 20px;
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
  .score{
    margin-right: 20px;
  }
  .comment{
    color: rgba(0,0,0,0.6);
  }

  .item-trade{
    margin-top: 20px;
    color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: space-between;
  }
  .action{
    margin-top: 20px;
  }
</style>
