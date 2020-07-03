<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
      <van-tabbar v-model="active" active-color="red" inactive-color="#000">
        <van-tabbar-item replace to="/home" icon="wap-home-o">商城</van-tabbar-item>
        <van-tabbar-item icon="wap-nav" replace to="classiFication">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart" replace to="shoppingCart" :badge="setNumber">购物车</van-tabbar-item>
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
    return {
      active: 0
    };
  },
  methods: {},
  mounted() {},
  watch: {
    "$route.path": {
      handler(val) {
        // console.log(val)
        if (val === "/home") {
          this.active = 0;
        }
        if (val === "/classiFication") {
          this.active = 1;
        }
        if (val === "/shoppingCart") {
          this.active = 2;
        }
        if (val === "/myself") {
          this.active = 3;
        }
      },
      immediate: true
    },
    
  },
  computed: {
    setNumber() {
      return this.$store.state.num;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>