<template>
  <div>
    <div>
      <van-nav-bar title="最近浏览" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-for="(item,index) in views" :key="index">
      <div v-if="item.goodsName">
        <div class="box">
          <div class="img">
            <img :src="item.image" alt />
          </div>
          <div>
            <div>{{item.name}}</div>
            <div>￥{{item.price}}</div>
          </div>
        </div>
      </div>
      <div v-else-if="item.name">
        <van-card
          :price="item.present_price"
          :title="item.name"
          :thumb="item.image"
          :origin-price="item.orl_price"
          @click="goDetail(item)"
        >
          <template #footer>
            <van-icon name="close" @click="del(index)" size="20" />
          </template>
        </van-card>
      </div>
      <div v-else>
        <van-card :thumb="item.image" @click="goDetail(item)">
          <template #footer>
            <van-icon name="close" @click="del(index)" size="20" />
          </template>
        </van-card>
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
  height: 50%;
}
img {
  width: 30%;
  height: 50%;
}
.box {
  display: flex;
}
</style>