<template>
 <div>
    <div>
      <div class="floor">
        <div class="f-font">3F</div>
        <div class="f-font2">营养奶品</div>
      </div>
      <div v-for="(item,index) in floor3" :key="index">
        <div :class="[{'left':(index==0)},{'right':(index>0)}]" class="div">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
    </div>
</template>

<script>
 export default {
   name: '',
   props: {
      floor3:{
        type:Array,
        default:() => {}
      }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped>
.floor{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-font {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.f-font2 {
  color: red;
  font-size: 14px;
}
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
}
img {
  width: 100%;
}
.div {
 display: flex;
}
</style>