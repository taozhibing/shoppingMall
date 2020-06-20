<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" >
      <van-swipe-item v-for="(item,index) in obj" :key="index"><img :src='item.image' alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    obj:{
      type : Array,
      default : () => {}
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
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>