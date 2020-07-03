<template>
  <div>
    <div class="cart">
      <div class="top">
        <van-nav-bar title="评价中心" fixed:true left-arrow @click-left="onClickLeft" />
      </div>
      <div class="val">
        <div class="container">
          <div class="val-top">
            <div class="rate">
              <van-rate v-model="obj.rate" readonly />
            </div>
            <div>{{obj.comment_time}}</div>
          </div>
          <div>评价内容 :</div>
          <div class="val-content">{{obj.content}}</div>
          <div class="val-foot">
            <div class="val-foot" v-for="(item,index) in goods" :key="index">
              <div class="img">
                <img :src="item.image" alt />
              </div>
              <div class="name">{{item.name}}</div>
              <van-icon name="cart-circle-o" color="red" size="30px" />
            </div>
          </div>
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
      obj: {},
      goods: []
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
    this.goods = this.obj.goods;
    console.log(this.goods);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.cart {
  width: 100%;
  height: 100%;
  background: #fff;
} 
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
.val-top {
  display: flex;
  justify-content: space-between;
}
.val-content {
  width: 100%;
  height: 100px;
  border: 1px solid #999;
  color: #999;
}
.val-foot {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

img {
  width: 60px;
  height: 60px;
}
.name {
  font-size: 14px;
}
</style>