<template>
  <div>
    <div>
      <van-nav-bar title="最近浏览" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-for="(item,index) in views" :key="index">
      <div v-if="item.name === ''">
        <van-card :price="item.price" :title="item.goodsName" :thumb="item.image" />
      </div>
      <div v-else>
        <van-card :price="item.price" :title="item.name" :thumb="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentBrowsing",
  props: {},
  components: {},
  data() {
    return {
      views: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.views = JSON.parse(localStorage.getItem("views"));
    console.log(this.views);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
  border-bottom: 1px solid #eee;
}
img {
  width: 30%;
  height: 50%;
}
</style>