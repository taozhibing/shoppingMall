<template>
  <div>
    <div class="container">
      <div class="submit">
        <div class="icon">
          <van-icon name="arrow-left" color="white" @click="back" />
        </div>
      </div>
      <div class="pic">
        <img :src="obj.image" alt width="100%" @click="img" />
        <van-image-preview v-model="show" :images="images" @change="onChange">
          <template v-slot:index>第{{ index }}页</template>
        </van-image-preview>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {},
  components: {},
  data() {
    return {
      id: "",
      obj: {},
      show: false,
      index: 1,
      images: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.index = index;
    },
    img() {
      this.show = true;
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    this.$api
      .oneGoods(this.id)
      .then(res => {
        this.obj = res.goods.goodsOne;
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
  height: 100%;
}
.submit {
  width: 100%;
  height: 50px;
}
.icon {
  width: 30px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 15px;
  background: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
}
.pic {
  width: 100%;
  height: 300px;
  background: pink;
}
</style>