<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <van-tabbar router v-model="$route.path" active-color="red" inactive-color="#000">
        <van-tabbar-item  to="/home" icon="wap-home-o">商城</van-tabbar-item>
        <van-tabbar-item icon="wap-nav"  to="classiFication">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart"  to="shoppingCart" :badge="setNumber">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" to="myself">我的</van-tabbar-item>
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
    return {
      active: 0,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    setNumber() {
      return this.$store.state.num;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>