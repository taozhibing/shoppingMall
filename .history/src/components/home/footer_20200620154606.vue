<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.footer {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
}
</style>