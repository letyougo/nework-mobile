<template>
  <ul class="service-list">
    <li

      :class=" i == active ? 'service-item active':'service-item' " v-for="(item,i) in list">
      <!--<div  @click="$emit('change',i)">-->
        <!--<img :src="item.url" width="50px" height="50px"/>-->
      <!--</div>-->
      <p>{{item.name}}}</p>
    </li>

  </ul>
</template>

<script>
export default {
  name: 'service-list',
  props:['list','active'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',

    }
  },
  methods:{


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .service-list{
    width: 6.9rem;

  }
  .service-list:after{
    content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    font-size: 0;
    height: 0;
  }
  .service-item{
    width: 2.3rem;
  
    float: left;
    text-align: center;
    border: 1px solid #d2d2d2;
    padding-top: 32px;
  }
  .service-item.active{
    outline: 1px solid #33a2f9;
    border: none;
  }
  .service-item:nth-child(1){
    border-right: 0;
    border-bottom: 0;
  }
  .service-item:nth-child(2){
    border-bottom: 0;
  }
  .service-item:nth-child(3){
    border-left: 0;
    border-bottom: 0;
  }
  .service-item:nth-child(5){
    border-right: 0;
    border-left: 0;
  }
  .service-item:nth-child(7){
    border-right: 0;
    border-bottom: 0;
    border-top: none;
  }
  .service-item:nth-child(8){
    border-bottom: 0;
    border-top: 0;
    border-right: none;
  }
  .service-item:nth-child(9){
    border-bottom: 0;
    border-top: none;
  }
  .service-item:nth-child(11){
    border-right: 0;
    border-left: 0;

  }

  .service-item div{
    padding: 0;

  }
  .service-item p{
    font-size: 16px;
    color: #092235 ;
  }

</style>
