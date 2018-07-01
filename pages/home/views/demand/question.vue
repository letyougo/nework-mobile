<template>
  <div class="question">


    <div class="content">

      <el-form>
        <el-progress :percentage="20"></el-progress>
        <br/>
        <div v-for="(p,index) in pages">
          <div v-for=" com in p">
            <p v-if="com.templateItemType === 'text' ">{{com.content}}</p>
            <el-form-item v-if="  com.templateItemType === 'select' ">
              <el-checkbox-group>
                <el-checkbox v-for="name in com.content">{{name}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item v-if="  com.templateItemType === 'input' ">
              <el-input type="textarea" rows="5"></el-input>
            </el-form-item>

            <el-form-item v-if="  com.templateItemType === 'location' ">
              <el-input></el-input>
            </el-form-item>

            <el-form-item v-if="  com.templateItemType === 'time' ">
              <el-input type="date"></el-input>
            </el-form-item>


          </div>
        </div>

      </el-form>

    </div>


    <el-button type="primary">确定</el-button>
  </div>
</template>

<script>

  import {getTemplate} from '../../../service/demand'

  export default {
    name: "question",
    data() {
      return {
        pages: [
          {}
        ],
        active: 0
      }
    },
    methods: {
      async fetch() {

        let res = await getTemplate({serviceId: this.$route.query.id})
        this.pages = res.data.data.pages
      },
      save() {

      }
    },
    mounted() {
      console.log(this.$route, this.$router)
      this.fetch()
    }
  }
</script>

<style scoped>
  .content {
    padding: 0.3rem;
  }

  .content p {
    font-size: 30px;
    margin-bottom: 20px;

  }

  .title {
    font-size: 40px;
    color: #000000;
    font-weight: bold;
    margin: 20px 0;
  }

  .el-checkbox {
    display: block;
    margin-left: 0;
  }
</style>
