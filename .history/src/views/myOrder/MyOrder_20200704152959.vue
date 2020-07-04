<template>
  <div>
    <div>
      <van-nav-bar title="我的订单" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="nickname !== ''">
      <div>
        <!-- 如果没有订单信息 显示暂无订单数据 -->
        <div class="coming-soon" v-if="orderlist.length < 1">暂无订单数据</div>
        <!-- 如果有订单信息 显示订单信息 -->
        <div v-else>
          <div v-for="item in orderlist" :key="item.id" class="order-item">
            <!-- 订单的头 -->
            <van-cell class="order-cell">
              <div class="box">
                <div class="numb">订单编号:{{item.order_id}}</div>
                <div class="deal-close">交易完成</div>
              </div>
            </van-cell>
            <!-- 订单商品信息 -->
            <div v-for="item1 in item.order_list" :key="item1.id">
              <van-card
                :num="item1.count"
                :price="item1.mallPrice"
                :title="item1.name"
                :thumb="item1.image_path"
              />
            </div>
            <!-- 订单创建时间等尾部信息 -->
            <div class="order-info">
              <div>创建时间:{{item.add_time}}</div>
              <div>收货地址:{{item.address}}</div>
              <div>共{{item.order_list.length}}件商品 合计:￥{{item.mallPrice}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="order"></div>
      <div class="msg">亲，你还没有登录哟~~</div>
      <div class="order-login" @click="tologin">
        <van-button round type="primary">去登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Completed",
  props: {},
  components: {},
  data() {
    return {
      nickname : '',
      // 订单列表
      orderlist: [],
      swipe: 5
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
    // 获取所有订单
    this.$api
      .getMyOrder()
      .then(res => {
        this.orderlist = res.list;
        // 将订单列表中的价格信息改为2位小数类型
        this.orderlist.map(item => {
          item.mallPrice = item.mallPrice.toFixed(2);
          item.order_list.map(item1 => {
            item1.mallPrice = item1.mallPrice.toFixed(2);
          });
        });
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
  border-bottom: 1px solid #eee;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.order {
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
.order-login {
  width: 80px;
  margin: 10px auto;
}
// 暂无订单 内容居中
.coming-soon {
  width: 80%;
  margin: 10px auto;
  text-align: center;
  color: grey;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.numb {
  font-size: 12px;
}
// 每一个订单
.order-item {
  width: 90%;
  background: #fafafa;
  margin: 10px auto;
  border-radius: 20px;
}
// 订单编号行
.order-cell {
  background: #f3f1f1;
  border-radius: 20px 20px 0 0;
  background: #fff;
}
// 订单创建时间等下方信息 向右对齐
.order-info {
  padding: 5px 10px 10px;
  text-align: right;
  font-size: 14px;
  color: rgb(70, 70, 70);
  line-height: 24px;
  border-top: 1px solid rgb(224, 223, 223);
}
// 交易完成 字体颜色突出
.deal-close {
  color: rgb(250, 144, 94);
}
</style>