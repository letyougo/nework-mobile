<template>
  <div>
    <h3>基本资料</h3>
    <el-form label-position="top">
      <el-form-item label="姓名">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="手机号">
        <p>+86 *** **** 0000</p>
        <div>
          只有在你和另一名Nework用户确认订单时，此资料才会被分享
        </div>
      </el-form-item>

      <el-form-item label="邮箱">
        <p>ron_heard@gmail.com</p>
        <div>
          我们不会向其他用户透露您的个人邮箱地址
        </div>
      </el-form-item>

      <el-form-item label="国家或地区">
        <el-select style="width: 100%">
          <el-option>
            中国
          </el-option>
          <el-option>
            美国
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item label="省份州">
        <el-select style="width: 100%">
          <el-option>
            北京
          </el-option>
          <el-option>
            湖北
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item label="城市">
        <el-select style="width: 100%">
          <el-option>
            北京
          </el-option>
          <el-option>
            武汉
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item label="小区或街道名">
        <el-input></el-input>

      </el-form-item>


      <el-form-item label="具体地址">
        <el-input></el-input>

      </el-form-item>

      <el-form-item label="营业时间">
        <el-checkbox>工作日周一到周五</el-checkbox>
        <el-checkbox>周六</el-checkbox>
        <el-checkbox>周日</el-checkbox>
      </el-form-item>

      <el-form-item label="简介">
        <el-input type="textarea" rows="8"></el-input>
      </el-form-item>

      <el-form-item>
        <p class="edit-tip">
          Nework是建立在大家互相信任的基础上，进行运转，向大家介绍下自己吧。
          告诉他们你会是一个怎么样的顾客或者服务商，你经常喜欢做哪些事情？作为服务商你的服务特色又是怎么样的？
        </p>
      </el-form-item>

      <el-form-item>
        <el-button>保存</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    name: "base"
  }
</script>

<style scoped>
  .edit-tip{
    color: rgba(0,0,0,0.6);
    line-height: 25px;
  }
  h3{
    font-size: 30px;
    margin: 20px 0;
  }
</style>
