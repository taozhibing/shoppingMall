<template>
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <div class="myrate-header">
        <div>
          <img :src="userpic" class="user-img" />
          <van-rate v-model="this.myrates.rate" readonly />
        </div>
        <div class="comment_time">{{myrates.comment_time}}</div>
      </div>
      <div class="myrate-header">评价内容：{{myrates.content}}</div>
      <div class="myrate-body">
        <div @click="gotos(goods.id)">
          <img :src="goods.image_path" class="myrate-img" />
        </div>
        <div class="myrate-font">
          {{goods.name}}
          <van-icon name="cart-circle-o" color="red" @click="onAddCartClicked" size="30px" />
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
      ratesId: "",
      myrates: {},
      userpic: "",
      goods: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 查询单条评论
    getEvaluateOne() {
      this.$api
        .evaluateOne({ id: this.ratesId })
        .then(res => {
          this.myrates = res.evaluateOne;
          console.log(this.myrates);
          this.userpic = this.myrates.user[0].avatar;
          this.goods = this.myrates.goods[0];
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 加入购物车
    onAddCartClicked() {
      if (localStorage.getItem("nickname")) {
        this.$api
          .addShop(this.myrates.goods[0].id)
          .then(res => {
            this.$toast.success(res.msg);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$toast.fail("您好，请先登录");
      }
    },
    // 点击搜索出来的商品 前往商品详情页
    goDetail(item) {
      if (item.goodsId) {
        this.$router.push({
          path: "/detail",
          query: { id: item.goodsId }
        });
      } else {
        this.$router.push({
          path: "/detail",
          query: { id: item.id }
        });
      }
      this.$utils.goDetail(item);
    }
  },
  mounted() {
    if (localStorage.ratesId) {
      this.ratesId = JSON.parse(localStorage.getItem("ratesId"));
    } else {
      this.ratesId = this.$route.query.ratesId;
    }
    this.getEvaluateOne();
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