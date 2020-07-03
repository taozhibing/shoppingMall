<template>
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SeeVal",
  props: {},
  components: {},
  data() {
    return {
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
     // 加入购物车
    addShoppingCart(index) {
      this.nickname = localStorage.getItem("nickname");
      if (this.nickname === "") {
        this.$dialog
          .confirm({
            message: "您还没有登录，是否要登录？"
          })
          .then(res => {
            this.$router.push("/login");
          })
          .catch(() => {});
      } else {
        this.$api
          .addShop({
            id: this.ratesId
          })
          .then(res => {
            this.$toast.success("加入购物车成功");
          })
          .catch(err => {});
      }
    },
    // 跳转详情页
    goDetail(index) {
      this.$router.push({
        path: "/detail",
        query: { id: this.ratesId }
      });
      this.$utils.goDetail(this.recommend[index])
    },
  },
  mounted() {
    if (localStorage.ratesId) {
      this.ratesId = JSON.parse(localStorage.getItem("ratesId"));
    } else {
      this.ratesId = this.$route.query.ratesId;
    }
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 40px;
  background: #ffff;
  border-bottom: 1px solid #eee;
}
</style>