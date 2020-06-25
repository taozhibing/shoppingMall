<template>
  <div class="dv">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in obj" :key="index">
        <img :src="item.image" alt='' @click="goDetail(index)"/>
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
    return {
      isLoading: false,
      id : ''
    };
  },
  methods: {
    goDetail(index) {
      this.$router.push({path:'/detail',query:{id:this.recommend[index].goodsId}})
    }
  },
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
}
img {
  width: 100%;
  height: 100%;
}
</style>