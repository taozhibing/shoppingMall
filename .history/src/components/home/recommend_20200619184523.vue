<template>
  <div>
    <div class="container">
      <div class="title">商品推荐</div>
      <div class="goods">
      <van-swipe :loop="false" :width="125" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in recommend" :key="index">
      
      <van-swipe-item>
      <van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    recommend: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>