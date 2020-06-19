<template>
 <div>
<div id="app">
    <div class="dv">
      <div class="top">
        <div class="location">
          <div class="box">
            <van-icon name="location-o" />
            {{city}}
          </div>
        </div>
        <div class="ipt">
          <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
            <template #action>
              <div @click="onSearch">搜索</div>
            </template>
          </van-search>
        </div>
      </div>
      <div class="swipeltem"></div>
    </div>
  </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
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

<style scoped lang='scss'>

</style>