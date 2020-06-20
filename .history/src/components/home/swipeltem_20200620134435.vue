<template>
  <div class="dv">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in obj" :key="index">
        <img :src="item.image" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    obj: {
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
.dv {
  margin-top: 30px !important;
}
.my-swipe {
  width: 100%;
  margin-top: 80px;
}
img {
  width: 100%;
  height:100%;
}
</style>