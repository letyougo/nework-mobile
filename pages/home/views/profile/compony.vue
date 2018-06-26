<template>
  <div class="profile-compony">

    <!--<p class="profile-compony-logo">&#xe779;</p>-->
    <p class="profile-compony-name">Twitter</p>
    <p class="profile-compony-tip">区块编号：28749</p>
    <div class="profile-compony-desc">
      谷歌是一家位于美国的跨国科技企业,谷歌是一家位于美国的跨国科技企业谷歌是一家位于美国的跨国科技企业谷歌是一家位于美国的跨国科技企业谷歌是一家位于美国的跨国科技企业
      谷歌是一家位于美国的跨国科技企业谷歌是一家位于美国的跨国科技企业谷歌是一家位于美国的跨国科技企业谷歌是一家位于美国的跨国科技企业

    </div>
  </div>
</template>

<script>
  export default {
    name: "profile-compony"
  }
</script>

<style scoped>
  .profile-compony{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    padding: 0.3rem;
  }
  .profile-compony-logo{
    width: 2rem;
    height: 2rem;
    color: #ff6600;

  }
  .profile-compony{

  }
  .profile-compony-name{
    font-size: 20px;
    line-height: 30px;
    margin-top: 20px;
  }
  .profile-compony-tip{
    font-size: 14px;
    color: rgba(0,0,0,0.4);
  }

  .profile-compony-desc{
    font-size: 14px;
    color: rgba(0,0,0,0.6);
    margin-top: 20px;

    padding: 0;
  }
</style>
