<template>
    <div class="edit">
      <el-tabs v-model="activeName2" type="card">
        <el-tab-pane label="基本资料" name="first">
          <edit-base></edit-base>
        </el-tab-pane>
        <el-tab-pane label="照片" name="second">
          <edit-photo></edit-photo>
        </el-tab-pane>
        <el-tab-pane label="技能" name="third">
          <edit-skill></edit-skill>
        </el-tab-pane>
        <el-tab-pane label="认证" name="fourth">
          <Check/>
        </el-tab-pane>
        <el-tab-pane label="账号余额" name="fourth"></el-tab-pane>
        <el-tab-pane label="交易记录" name="fourth"></el-tab-pane>
      </el-tabs>

    </div>
</template>

<script>
  import EditBase from './base'
  import EditPhoto from './photo'
  import EditSkill from './skill'
  import Check from './check'
  export default {
    name: "edit",
    components:{
      EditPhoto,
      EditBase,
      EditSkill,
      Check
    }
  }
</script>

<style scoped>
  .edit{
    padding: 0.3rem;
  }
  h3{
    font-size: 30px;
    margin: 0;
    padding: 0;
  }

</style>
