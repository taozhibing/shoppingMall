<template>
  <div>
    <div class="container">
      <div class="top">购物车</div>
      <!-- 如果未登录 页面内容提示前往登录 -->
      <div v-if="nickname === ''">
        <div class="shopcarts"></div>
        <div class="msg">亲，你还没有登录哟~~</div>
        <div class="shopcarts-login" @click="tologin">
          <van-button round type="primary">去登录</van-button>
        </div>
      </div>
      <!-- 如果已登录 但是 购物车没有商品 -->
      <div v-else-if="shopList.length <= 0">
        <div class="cart-item1">
          <van-icon name="shopping-cart" class="cart-item2" />
        </div>
        <div class="cart-item3">你的购物车还是空的</div>
        <div class="cart-item3" @click="buyShop">
          <div class="cart-item4">去购物</div>
        </div>
      </div>
      <div v-else class="content">
        <div class="chose">
          <div v-if="checkAll===false">
            <van-checkbox v-model="checkAll" @click="checkedAll">全选</van-checkbox>
          </div>
          <div v-else-if="checkAll===true">
            <van-checkbox v-model="checkAll" @click="checkedAll">取消全选</van-checkbox>
          </div>
          <div class="total">
            <div>
              合计：
              <span class="all">{{total | fixed}}</span>
            </div>
            <div class="confirm">请确认订单</div>
          </div>
        </div>
        <div class="van-btn">
          <van-button class="btn" @click="del" type="info">删除</van-button>
          <van-button @click="goSettlement" type="primary">去结算</van-button>
        </div>
        <div class="item">
          <div v-for="item in shopList" :key="item.id">
            <div class="detail">
              <div>
                <van-checkbox @click="check(item)" v-model="item.check" />
              </div>
              <img :src="item.image_path" alt class="img" />
              <div class="name">
                <div>{{item.name}}</div>
                <div class="flex-j-sb">
                  <div class="price">￥{{item.mallPrice}}</div>
                  <van-stepper
                    v-model="item.count"
                    @change="add(item)"
                    theme="round"
                    button-size="22"
                    disable-input
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {},
  components: {},
  data() {
    return {
      nickname: "",
      shopList: [],
      checkAll: false,
      idArr: [],
      ass: [],
      flags: "1"
    };
  },
  methods: {
    getData() {
      this.$api
        .getCard()
        .then(res => {
          this.shopList = res.shopList;
          let num = this.shopList.length;
          this.$store.commit("setNumber", num);
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 前往登录
    tologin() {
      this.$router.push("/login");
    },
    // 全选
    checkedAll() {
      this.shopList.map(item => {
        item.check = this.checkAll;
      });
    },
    //    是否全选
    check(item) {
      this.checkAll = this.shopList.every(item => {
        return item.check === true;
      });
    },
    //  修改数量
    add(item) {
      this.$api
        .editCart({
          count: item.count,
          id: item.cid,
          mallPrice: item.mallPrice
        })
        .then(res => {})
        .catch(err => {});
    },
    // 删除
    del() {
      this.ass = this.shopList.filter(item => {
        return item.check === true;
      });
      if (this.ass.length > 0) {
        this.$dialog
          .confirm({
            title: "提示",
            message: "您确定要删除吗？"
          })
          .then(() => {
            this.ass.map(item => {
              this.idArr.push(item.cid);
            });
            this.$api
              .deleteShop(this.idArr)
              .then(res => {
                this.$toast.success("删除成功");
                this.getData();
              })
              .catch(err => {});
          })
          .catch(() => {});
      } else {
        this.$toast({
          message: "你还没有选择要删除的内容",
          icon: "warning-o"
        });
      }
    },
    buyShop() {
      this.$router.push("/");
    },
    // 结算页面
    goSettlement() {
      this.shopList = this.shopList.filter(item => {
        return item.check === true;
      });
      this.$router.push({
        path: "/settlement",
        query: {
          shopList: JSON.stringify(this.shopList),
          total: this.total,
          flag: this.flag
        }
      });
      localStorage.setItem("shopList", JSON.stringify(this.shopList));
    }
  },
  mounted() {
    if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
    this.getData();
  },
  watch: {},
  computed: {
    // 总价
    total() {
      let sum = 0;
      this.shopList.map(item => {
        if (item.check) {
          sum += item.mallPrice * item.count;
        }
      });
      return sum;
    },
    setNumber() {
      return this.$store.state.num;
    }
  },
  filters: {
    fixed(total) {
      return "￥" + Number(total).toFixed(2);
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.shopcarts {
  width: 180px;
  height: 180px;
  margin: 30px auto;
  background: rgb(226, 217, 217) url("../../assets/baclogin.jpg") no-repeat
    center;
  border-radius: 50%;
  align-items: center;
  margin-top: 40px;
}
.msg {
  margin: 10px auto;
  text-align: center;
  width: 200px;
}
.shopcarts-login {
  width: 80px;
  margin: 10px auto;
}
.content {
  width: 100%;
  height: 100%;
  margin-top: 40px;
}
.chose {
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.total {
  width: 140px;
  font-size: 14px;
}
.all {
  color: red;
}
.confirm {
  margin-top: 5px;
}
.van-btn {
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
}
.btn {
  margin-right: 10px;
}
.item {
  margin-top: 10px;
}
.detail {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eeeeee;
}
.img {
  width: 25%;
  margin: 0 10px;
  border: 1px solid #eeeeee;
}
.name {
  font-size: 15px;
  width: 100%;
}
.flex-j-sb {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cart-item1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  color: red;
}
.cart-item2 {
  font-size: 100px;
  background: rgba(216, 208, 208, 0.2);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-item3 {
  font-size: 20px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(5, 84, 255);
}
.cart-item4 {
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px 20px;
  background: red;
  color: #000;
}
.price {
  color: red;
}
.item[data-v-5ac9b2a5] {
  margin-bottom: 60px;
}
</style>