<template>
  <div>
    <div class="top">
      <van-nav-bar title="订单结算" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="this.defaultAdd === null" class="defaultAdd_null">
      <div>您还没有设置默认收货地址，</div>
      <div>
        请设置
        <span class="default" @click="setDefa">默收货地址</span>
      </div>
      <div class="caitiao">
        <img src="../../assets/caitiao.jpg" width="100%" />
      </div>
    </div>
    <div v-else class="addre">
      <div class="flex-j-sb">
        <van-icon name="location-o" class="location" />
        <div class="all">
          <div class="flex-j-sb">
            <span>收货人：{{defaultAdd.name}}</span>
            <span>{{defaultAdd.tel}}</span>
          </div>
          <div class="address">收货地址：{{defaultAdd.address}}</div>
          <div class="Inconvenience">(收货不便时，可选择免费待收货服务)</div>
        </div>
        <van-icon name="arrow" class="location" />
      </div>
      <div class="caitiao">
        <img src="../../assets/caitiao.jpg" width="100%" />
      </div>
      <div v-if="flag===1">
        <div v-for="(item,index) in shopList" :key="index" class="d-flex">
          <img :src="item.image_path" class="img" />
          <div class="item">
            <div class="name">{{item.name}}</div>
            <div class="flex-j-sb">
              <div class="price">￥{{item.present_price}}</div>
              <div class="count">X{{item.count}}</div>
            </div>
          </div>
        </div>
        <div>
          <van-submit-bar :price="this.total*100" button-text="提交订单" @submit="onSubmit" />
        </div>
      </div>
      <div v-if="flags===0" class="d-flex">
        <img :src="this.goodsOne.image_path" class="img" />
        <div class="item">
          <div class="name">{{this.goodsOne.name}}</div>
          <div class="flex-j-sb">
            <div class="price">￥{{this.goodsOne.present_price}}</div>
            <div class="count">X{{this.counts}}</div>
          </div>
        </div>
        <div>
          <van-submit-bar :price="totals*100" button-text="提交订单" @submit="onSubmit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settlement",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 40px;
  background: #ffff;
  border-bottom: 1px solid #eee;
}
</style>