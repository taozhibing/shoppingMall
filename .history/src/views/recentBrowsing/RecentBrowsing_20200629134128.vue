<template>
  <div>
    <div>
      <van-nav-bar title="最近浏览" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
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
</template>

<script>
export default {
  name: "RecentBrowsing",
  props: {},
  components: {},
  data() {
    return {
      views: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    del(index) {
      this.$dialog
        .confirm({
          title: "确认删除该条浏览历史"
        })
        .then(() => {
          this.$store.state.browsing.splice(index, 1);
        })
        .catch(() => {});
    },
    goDetail(item) {
      this.$router.push({
        path: "/detail",
        query: { id: item.goodsId }
      });
      this.$utils.goDetail(item);
    }
  },
  mounted() {
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
  width: 232px;
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
</style>