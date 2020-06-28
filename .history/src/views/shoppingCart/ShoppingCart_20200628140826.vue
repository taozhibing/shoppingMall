<template>
  <div>
    <div>
      <div class="cart">购物车</div>
      <div v-if="shopList.length <= 0">
        <div class="cart-item1">
          <van-icon name="shopping-cart" class="cart-item2" />
        </div>
        <div class="cart-item3">你的购物车还是空的</div>
        <div class="cart-item3" @click="buyShop">
          <div class="cart-item4">去购物</div>
        </div>
      </div>
      <div v-else>
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
          <van-button class="btn" @click="del" color="#e6057f">删除</van-button>
          <van-button @click="Goto" color="#e6057f">去结算</van-button>
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
                  <div>￥{{item.mallPrice}}</div>
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
    <div class="zhanwei1"></div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {},
  components: {},
  data() {
    return {
      shopList: [],
      checkAll: false,
      arr: [],
      ass: []
    };
  },
  methods: {
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
              this.arr.push(item.cid);
            });
            this.$api
              .deleteShop(this.arr)
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
    
  },
  mounted() {
    this.$api
      .getCard()
      .then(res => {
        this.shopList = res.shopList;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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
}
</style>