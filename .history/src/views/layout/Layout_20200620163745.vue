<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <van-tabbar route>
        <van-tabbar-item replace to="" icon="home-o">商城</van-tabbar-item>
        <van-tabbar-item icon="wap-nav" replace to="classiFication">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" replace to="shoppingCart" badge="5">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" replace to="myself">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {},
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