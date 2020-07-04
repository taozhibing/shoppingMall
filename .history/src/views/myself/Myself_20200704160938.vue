<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="top">会员中心</div>
        <div v-if="nickname">
          <div class="box">
            <div class="img">
              <img :src="userInfo.avatar" alt />
              <div class="icn" @click="profile">
                <van-icon name="setting-o" size="20" />
              </div>
            </div>
            <div class="text">欢迎您 ： {{userInfo.nickname}}</div>
            <div class="text" @click="logout">退出登录</div>
          </div>
        </div>
        <div v-else>
          <div class="box">
            <div class="img">
              <van-image round class="mine-imgs" />
              <div class="icn" @click="profile">
                <van-icon name="setting-o" size="20" />
              </div>
            </div>
            <div class="text">欢迎!!</div>
            <div class="text" @click="login">登录/注册</div>
          </div>
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
          <div @click="goEstimate">评价</div>
        </div>
        <div>
          <div class="tab">
            <van-icon name="points" size="30" />
          </div>
          <div @click="completed">已完成</div>
        </div>
      </div>
      <div class="foot">
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
          <div @click="collectionList">
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
          <div @click="allAddress">
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
          <div @click="allRecent">
            <van-icon name="arrow" size="20" />
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
      nickname: ""
    };
  },
  methods: {
    // 评价
    goEstimate() {
      this.$router.push("/estimate");
    },
    //已完成
    completed() {
      this.$router.push("/completed");
    },
    // 全部订单
    allOrder() {
      this.$router.push("/myOrder");
    },
    // 我的收藏
    collectionList() {
      this.$router.push("/myCollection");
    },
    // 地址管理
    allAddress() {
      this.$router.push("/addressList");
    },
    // 最近浏览
    allRecent() {
      this.$router.push("/recentBrowsing");
    },
    // 个人资料
    profile() {
      this.$router.push("/profile");
    },
    // 退出登录
    logout() {
      this.$dialog
        .confirm({
          title: "退出登录？"
        })
        .then(() => {
          this.$api
            .loginOut({})
            .then(res => {
              console.log(res);
              localStorage.removeItem("nickname");
              localStorage.removeItem("value");
              localStorage.removeItem("views");
              localStorage.removeItem("collect");
              localStorage.removeItem('category')
              // this.$store.state.amountgoods = 0;
              this.$toast.success("退出成功");
              this.$router.push("/");
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {});
    },
    // 跳转登录页
    login() {
      this.$router.push("/login");
    }
  },
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
.mine-imgs {
  width: 100px;
  height: 100px;
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
.foot-box {
  width: 98%;
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
.icn {
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  right: 10px;
}
</style>