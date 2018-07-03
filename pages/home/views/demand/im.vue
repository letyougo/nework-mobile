<template>
 <div class="im">
   <p class="title">Ron Heard</p>
   <div class="tip">
     <div class="phone">18612345678</div>
     <div class="demand"  @click="$router.push('/price')">查看需求</div>
     <div class="complain" @click="$router.push('/complain')">投诉</div>
   </div>

   <div class="list">
     <div class="item send">
       <div class="logo">苏</div>
       <div class="content">
         <div class="top">
           <div class="name">Alice</div>
           <div class="time">3分钟前</div>
         </div>
         <div class="text">
           深度保洁
           Hi，我常年从事木质地板清洁，在许多知名酒店服务过，经验丰富...
         </div>
       </div>
     </div>

     <div class="item receive">

       <div>
         <div class="time">2分钟前</div>
         <div class="text">您好，我这里有大约60平米的地板需要清洁，家具较多，卫生死角可能比较多。</div>
       </div>
     </div>

     <div class="item receive">

       <div>
         <div class="time">2分钟前</div>
         <div class="text">您好，我这里有大约60平米的地板需要清洁，家具较多，卫生死角可能比较多。</div>
       </div>
     </div>

     <div class="item receive">

       <div>
         <div class="time">2分钟前</div>
         <div class="text">您好，我这里有大约60平米的地板需要清洁，家具较多，卫生死角可能比较多。</div>
       </div>
     </div>
   </div>

   <div class="bottom">
     <input placeholder="说点什么把"/>
     <div>发送</div>
   </div>
 </div>
</template>

<script>
	export default {
		name: "img"
	}
</script>

<style scoped>
  .im{
    padding: 0.3rem;
  }
  .title{
    font-size: 30px;
    line-height: 40px;
    font-weight: bold;
  }
  .tip{
    font-size: 14px;

    display: flex;
    justify-content: space-between;
  }
  .phone{
    width: 5rem;
  }
  .demand,.complain{
    color: #008BF7;
  }

  .list{
    padding-bottom: 80px;


  }
  .item{
    margin-top: 20px;
  }
  .send{
    display: flex;
  }
  .logo{
    width: 40px;
    height: 40px;
    color: #ffffff;
    background: #0a6cd6;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    margin-right: 10px;

  }
  .content{

    width: 5rem;
  }
  .top{
    display: flex;
    justify-content: space-between;
  }
  .name{
    font-weight: bold;
  }
  .time{
    color: rgba(0,0,0,0.6);
  }
  .send .text{
    background: #EDF1F4;
  }
  .text{
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
  }

  .receive{
    display: flex;
    justify-content: flex-end;
  }
  .receive>div{

    width: 5rem;


  }
  .receive .time{
    text-align: right;
  }
  .receive .text{
    background: #008BF7;
    color: #ffffff;
  }

  .bottom{
    background: #ffffff;
    height: 80px;
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(0,0,0,0.05);
  }
  .bottom div{
    width: 2rem;
    text-align: center;
    background: #008BF7;
    line-height: 50px;
    color: #ffffff;
  }
  .bottom input{
    flex: 1;
    border: none;
    outline: none;
  }
</style>
