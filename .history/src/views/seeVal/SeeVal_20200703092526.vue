<template>
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div class="val">
      <div class="container">
        <div class="val-top">
          <div class="rate">
            <van-rate v-model="obj.rate" readonly />
          </div>
          <div></div>
        </div>
      </div>
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
      obj: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
    //  // 加入购物车
    // addShoppingCart(index) {
    //   this.nickname = localStorage.getItem("nickname");
    //   if (this.nickname === "") {
    //     this.$dialog
    //       .confirm({
    //         message: "您还没有登录，是否要登录？"
    //       })
    //       .then(res => {
    //         this.$router.push("/login");
    //       })
    //       .catch(() => {});
    //   } else {
    //     this.$api
    //       .addShop({
    //         id: this.ratesId
    //       })
    //       .then(res => {
    //         this.$toast.success("加入购物车成功");
    //       })
    //       .catch(err => {});
    //   }
    // },
    // // 跳转详情页
    // goDetail(index) {
    //   this.$router.push({
    //     path: "/detail",
    //     query: { id: this.ratesId }
    //   });
    //   this.$utils.goDetail(this.recommend[index])
    // },
  },
  mounted() {
    if (localStorage.obj) {
      this.obj = JSON.parse(localStorage.getItem("obj"));
    } else {
      this.obj = this.$route.query.obj;
    }
    console.log(this.obj);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 100%;
  background: #ffff;
  border-bottom: 1px solid #eee;
}
.val {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.container {
  width: 90%;
  height: 90%;
}
</style>