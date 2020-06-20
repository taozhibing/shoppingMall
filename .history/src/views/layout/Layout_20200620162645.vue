<template>
  <div>
    <div>
    <router-view><router-view>
    <div class="foot">
    <van-tabbar route>
  <van-tabbar-item replace to="/home" icon="home-o">
    标签
  </van-tabbar-item>
  <van-tabbar-item replace to="/search" icon="search">
    标签
  </van-tabbar-item>
</van-tabbar>
    </div>
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