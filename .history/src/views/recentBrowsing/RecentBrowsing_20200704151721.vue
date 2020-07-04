<template>
  <div>
    <div>
      <van-nav-bar title="最近浏览" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="nickname !== 'null'">
      <div v-if="views.length === 0">
        <div class="address-none">暂无浏览历史~~</div>
      </div>
      <div v-else>
        <div v-for="(item,index) in views" :key="index">
          <div v-if="item.goodsName">
            <div class="box">
              <div class="img">
                <img :src="item.image" alt @click="goDetail(item)" />
              </div>
              <div>
                <div class="title">{{item.goodsName}}</div>
                <div class="price">￥{{item.price}}</div>
                <div>
                  <div class="icon">
                    <van-icon name="close" @click="del(index)" size="20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="item.name">
            <div class="box">
              <div class="img">
                <img :src="item.image" alt @click="goDetail(item)" />
              </div>
              <div>
                <div class="title">{{item.name}}</div>
                <div class="price">￥{{item.present_price}}</div>
                <div>
                  <div class="icon">
                    <van-icon name="close" @click="del(index)" size="20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="box">
              <div class="img">
                <img :src="item.image" alt @click="goDetail(item)" />
              </div>
              <div>
                <div>
                  <div class="icon">
                    <van-icon name="close" @click="del(index)" size="20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="brows"></div>
      <div class="msg">亲，你还没有登录哟~~</div>
      <div class="brows-login" @click="tologin">
        <van-button round type="primary">去登录</van-button>
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
      views: [],
      nickname: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 前往登录
    tologin() {
      this.$router.push("/login");
    },
    del(index) {
      this.$dialog
        .confirm({
          title: "确认删除该条浏览记录"
        })
        .then(() => {
          this.views = JSON.parse(localStorage.getItem("views"));
          this.views.splice(index, 1);
          localStorage.setItem("views", JSON.stringify(this.views));
        })
        .catch(() => {});
    },
    // 跳转详情
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
    if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
    if(localStorage.getItem('views'))
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
.brows {
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
.brows-login {
  width: 80px;
  margin: 10px auto;
}
.img {
  width: 30%;
  height: 30%;
}
img {
  width: 100%;
  height: 100%;
}
.box {
  display: flex;
  margin: 10px;
  background: #fff;
}
.title {
  display: flex;
  align-items: center;
  width: 240px;
  height: 50px;
}
.price {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  color: red;
}
.icon {
  float: right;
}
.address-none {
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  color: rgb(202, 202, 202);
}
</style>