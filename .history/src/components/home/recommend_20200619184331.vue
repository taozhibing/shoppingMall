<template>
  <div>
    <div class="container">
      <div class="title">商品推荐</div>
      <div class="goods">
      <van-swipe :loop="false" :width="125" :show-indicators="false">
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