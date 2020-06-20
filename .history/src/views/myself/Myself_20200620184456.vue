<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="top">会员中心</div>
        <div class="box">
          <div class="img">
            <img :src="userInfo.avatar" alt />
          </div>
          <div class="text">欢迎您 ： {{userInfo.nickname}}</div>
          <div class="text">退出登录</div>
        </div>
      </div>
      <div class="tabbars">
        <div>
          <div class="tab">
            <van-icon name="pending-payment" size="30" />
          </div>
          <div>待付款</div>
        </div>
        <div>
          <div class="tab">
            <van-icon name="tosend" size="30" />
          </div>
          <div>待发货</div>
        </div>
        <div>
          <div class="tab">
            <van-icon name="logistics" size="30" />
          </div>
          <div>待收货</div>
        </div>
        <div>
          <div class="tab">
            <van-icon name="orders-o" size="30" />
          </div>
          <div>评价</div>
        </div>
        <div>
          <div class="tab">
            <van-icon name="points" size="30" />
          </div>
          <div>已完成</div>
        </div>
      </div>
      <div class="foot">
        <div class="footer">
          <div class="foot-box">
            <div class="foot-box1">
              <div>
                <van-icon name="records" size="25" />
              </div>
              <div>全部订单</div>
            </div>
            <div @click="allOrder">
              <van-icon name="arrow" size="20" />
            </div>
          </div>
          <div class="foot-box">
            <div class="foot-box1">
              <div>
                <van-icon name="points" size="25" />
              </div>
              <div>收藏商品</div>
            </div>
            <div @click="allOrder">
              <van-icon name="arrow" size="20" />
            </div>
          </div>
          <div class="foot-box">
            <div class="foot-box1">
              <div>
                <van-icon name="gold-coin-o" size="25" />
              </div>
              <div>地址管理</div>
            </div>
            <div @click="allOrder">
              <van-icon name="arrow" size="20" />
            </div>
          </div>
          <div class="foot-box">
            <div class="foot-box1">
              <div>
                <van-icon name="gift-o" size="25" />
              </div>
              <div>最近浏览</div>
            </div>
            <div @click="allOrder">
              <van-icon name="arrow" size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Myself",
  props: {},
  components: {},
  data() {
    return {
      userInfo: {},
      active: 0
    };
  },
  methods: {},
  mounted() {
    this.$api
      .queryUser({})
      .then(res => {
        this.userInfo = res.userInfo;
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
.container {
  width: 100%;
}
.content {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.top {
  height: 40px;
  line-height: 40px;
}
.box {
  width: 100%;
  height: 200px;
  background: rgb(253, 4, 133);
}
.img {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.text {
  color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
}
.tabbars {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tab {
  display: flex;
  justify-content: center;
}
.foot {
  width: 100%;
  height: 100%;
}
.footer {
  width: 95%;
  height: 80%;
}
.foot-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(230, 229, 229);
  border-top: 1px solid rgb(230, 229, 229);
  margin-top: 10px !important;
}
.foot-box1 {
  display: flex;
  align-items: center;
}
</style>