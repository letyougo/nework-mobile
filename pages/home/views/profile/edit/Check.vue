<template>
    <div class="check">
      <h3>信任与认证</h3>
      <div class="idcard">
        <div class="logo">
          <i class="iconfont">&#xe785;</i>
        </div>
        <div class="title">身份证或护照</div>
        <div class="tip">实名验证帮助用户之间建立信任，让每个人更安心地使用我们的服务；
          请放心，其他顾客和服务商不会看到您的身份信息。</div>
        <div class="action">
          <el-button type="primary" @click="$emit('card')">认证</el-button>
        </div>


        <div class="is-check">
          <div>
            <el-checkbox size="huge" :checked="  !!item.idCardNegative && !!item.idCardPositive  "></el-checkbox>
          </div>
          <div v-if="!!item.idCardNegative && !!item.idCardPositive">
            已实名认证
          </div>
          <div v-else>未实名认证</div>
        </div>

      </div>

      <div class="phone">
        <div class="logo">
          <i class="iconfont">&#xe77c;</i>
        </div>
        <div class="title">手机号认证</div>
        <div class="tip">使用经过验证的手机号可以令沟通变得更容易；
          我们将通过短信给您发送代码，或透过电话通话向您告知该代码。</div>
        <div class="action">
          <el-button type="primary" @click="$emit('phone')"> 认证</el-button>
        </div>

        <div class="is-check">
          <div>
            <el-checkbox size="huge" :checked=" !!item.phoneNumber "></el-checkbox>
          </div>
          <div v-if="!!item.phoneNumber">
            认证手机号：{{item.phoneNumber}}
          </div>
          <div v-else>暂未进行手机号验证</div>
        </div>
      </div>

      <div class="email">
        <div class="logo">
          <i class="iconfont">&#xe784;</i>
        </div>
        <div class="title">邮箱认证</div>
        <div class="tip">使用经过验证的邮箱，它能够让我们与你更安全便捷的沟通。</div>
        <div class="action">
          <el-button type="primary" @click="$emit('email')"> 认证</el-button>
        </div>

        <div class="is-check">
          <div>
            <el-checkbox size="huge" :checked="  !!item.email "></el-checkbox>
          </div>
          <div v-if="!!item.email">
            认证邮箱：{{item.email}}
          </div>
          <div v-else>暂未进行手机号验证</div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "check",
    props:['item']
  }
</script>

<style scoped>

  .logo{
    margin-top: 30px;
  }
  .logo i{
    color: #008BF7;
    font-size: 0.8rem;

  }
  .title{
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
  }
  .tip{
    font-size:14px;
    line-height: 20px;
    margin-top: 10px;
    color: rgba(0,0,0,0.6);
  }
  .action{
    margin-top: 20px;

  }
  .idcard,.phone,.email{
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
  }

  .is-check{
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .is-check div:last-child{
    margin-left: 20px;
  }
</style>
