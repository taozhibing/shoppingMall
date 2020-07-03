<template>
  <div class="flbox">
    <div class="floor">
      <div class="f-font2">热销商品</div>
    </div>
    <div v-for="(item,index) in hotGoods" :key="index">
      <div :class="[{'left':(index==0)},{'right':(index>0)}]" class="div">
        <div class="img-box">
          <div>
            <img :src="item.image" alt @click="goDetail(index)" />
          </div>
          <div class="imgfont">{{item.name}}</div>
          <div class="img-style">
            <div>¥{{item.price}}</div>
            <div class="img-font">¥{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    hotGoods: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      id: ""
    };
  },
  methods: {
    goDetail(index) {
      this.$router.push({
        path: "/detail",
        query: { id: this.hotGoods[index].goodsId }
      });
      this.$utils.goDetail(this.hotGoods[index])
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.fff {
  margin-bottom: 30px;
}
.floor {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-font2 {
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
}
.ff-box {
  width: 100%;
  background: white;
}
.left {
  float: left;
  width: 50%;
  background: white;
}
.right {
  float: right;
  background: white;
  width: 50%;
}
img {
  width: 80%;
}
.div {
  display: flex;
}
.img-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.imgfont {
  width: 180px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.img-font {
  color: red;
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.img-style {
  display: flex;
  align-items: center;
}
</style>