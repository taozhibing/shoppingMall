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
        <van-image-preview v-model="show" :images="images" @change="onChange" closeable: false>
          <template v-slot:index>第{{ index }}页</template>
        </van-image-preview>
      </div>
      <div class="name">{{obj.name}}</div>
      <div class="price">￥{{obj.orl_price}}</div>
      <div class="box">
       <div>运费：0</div>
       <div>剩余：{{obj.amount}}</div>
       <div class="box1">
         <!-- 2.1.1 如果没有登录 或者 检测到该商品没有被收藏  页面显示没有收藏的状态-->
          <div v-if="nickname === ''" @click="collectGoods">
            收藏
            <van-icon name="like-o" color="red" />
          </div>
          <!-- 2.1.1 如果没有登录 或者 检测到该商品没有被收藏  页面显示没有收藏的状态-->
          <div v-else-if="isCollect === 0" @click="collectGoods">
            收藏
            <van-icon name="like-o" color="red" />
          </div>
          <!-- 2.1.2 在登录状态下 并且已收藏 可以点击取消收藏 -->
          <div v-else @click="cancelCollect">
            取消收藏
            <van-icon name="like" color="red" />
          </div>
        </div>
       </div>
        <div class="tab">
          <div class="tab1"><div class="tab2"><div class="icn"><van-icon name="shop-o" size="22"/>有赞的店</div>
          <div class="tab3">官方</div>
          <div class="tab4"></div>
          <div class="tab5">进入店铺 <van-icon name="arrow" size="20" color="#999"/></div>
          </div>
          </div>
        </div>
        <div>
      <van-tabs title-active-color="red">
        <van-tab title="商品详情"></van-tab>
        <van-tab title="商品评论"></van-tab>
      </van-tabs>
    </div>
  </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
</div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload);
export default {
  name: "",
  props: {},
  data() {
    return {
      ids: "",
      obj: {}
    };
  },
  components: {},
  methods: {
    clickItems() {
      this.$router.push("/");
    }
  },
  mounted() {
    this.ids = this.$route.query.id;
    console.log(this.ids);
    this.$api
      .goods(this.ids)
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
.icon-zuojiantou-tianchong {
  font-size: 30px;
}
.details {
  color: rgb(236, 84, 84);
}
.details1 {
  width: 40px;
  height: 20px;
  background: rgb(243, 84, 84);
  color: white;
  font-size: 14px;
}
.action {
  position: fixed;
}
</style>
