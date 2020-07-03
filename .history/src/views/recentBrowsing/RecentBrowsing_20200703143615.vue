<template>
  <div>
    <div>
      <van-nav-bar title="最近浏览" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="nickname !== ''">
      <div v-if="views.length < 1">
        <div>暂无浏览历史~~</div>
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
          title: "确认删除该条浏览记录"
        })
        .then(() => {
          this.views = JSON.parse(localStorage.getItem("views"));
          this.views.splice(index, 1);
          localStorage.setItem("views", JSON.stringify(this.views));
        })
        .catch(() => {});
    },
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
    this.views = JSON.parse(localStorage.getItem("views"));
    console.log(this.views);
    if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
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
</style>