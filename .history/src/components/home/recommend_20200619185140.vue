<template>
  <div>
    <div class="container">
      <div class="title">商品推荐</div>
      <div class="goods">
      <van-swipe :loop="false" :width="125" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in recommend" :key="index">
      <div class="box">
      <div class="box1">
      <div><img :src="item.image" alt=""></div>
      </div>
      <div>
      <div class="box2">{{item.goodsName}}</div>
      <div class="box3">
      <span>￥{{item.mallPrice}}</span>
      <span class="box3-price">￥{{item.price}}</span>
      </div>
      </div>
      </div>
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