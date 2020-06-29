<template>
  <div>
    <div>
      <van-nav-bar title="最近浏览" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-for="(item,index) in views" :key="index">
      <div v-if="item.goodsName">
        <van-card :price="item.price" :title="item.goodsName" :thumb="item.image" @click="goDetail(index)">
          <template #footer>
            <van-icon name="close" @click="del(index)" size="20"/>
          </template>
        </van-card>
      </div>
      <div v-else-if="item.name">
        <van-card :price="item.present_price" :title="item.name" :thumb="item.image" :origin-price="item.orl_price" @click="goDetail(index)">
          <template #footer>
            <van-icon name="close" @click="del(index)" size="20"/>
          </template>
        </van-card>
      </div>
      <div v-else>
        <van-card :thumb="item.image" @click="goDetail(index)">
          <template #footer>
            <van-icon name="close" @click="del(index)" size="20"/>
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

    },
     goDetail(index) {
      this.$router.push({
        path: "/detail",
        query: { id: this.views[index].cid }
      });
      this.$utils.goDetail(this.views[index])
    },
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
img {
  width: 30%;
  height: 50%;
}
</style>