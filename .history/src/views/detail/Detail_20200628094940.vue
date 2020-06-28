<template>
  <div>
    <div class="container">
      <div class="submit">
        <div class="icon">
          <van-icon name="arrow-left" color="white" @click="back" />
        </div>
      </div>
      <div class="pic">
        <van-swipe :autoplay="3000" class="swipe-img" :stop-propagation="false">
        <van-swipe-item v-for="(item,index) in images" :key="item.id">
          <img :src="item" class="detail-imgs" @click="show = true" />
          <div class="custom-indicator" slot="indicator">{{ index + 1 }}/{{images.length}}</div>
        </van-swipe-item>
      </van-swipe>
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
          <!-- 未登陆  点击收藏-->
          <div v-if="nickname === '' && flag === false" @click="collectGoods">
            收藏
            <van-icon name="like-o" color="red" />
          </div>
          <!--  未收藏  点击收藏-->
          <div v-else-if="isCollect === 0 && flag === false" @click="collectGoods">
            收藏
            <van-icon name="like-o" color="red" />
          </div>
          <!--  已登录且已收藏 点击取消收藏 -->
          <div v-else @click="cancelCollect" >
            取消收藏
            <van-icon name="like" color="red" />
          </div>
        </div>
      </div>
      <div class="tab">
        <div class="tab1">
          <div class="tab2">
            <div class="icn">
              <van-icon name="shop-o" size="22" />有赞的店
            </div>
            <div class="tab3">官方</div>
            <div class="tab4"></div>
            <div class="tab5">
              进入店铺
              <van-icon name="arrow" size="20" color="#999" />
            </div>
          </div>
        </div>
      </div>
      <div>
      <van-sticky :container="container">
        <van-tabs title-active-color="red">
          <van-tab title="商品详情"></van-tab>
          <van-tab title="商品评论"></van-tab>
        </van-tabs>
      </van-sticky>
         <div>
            <div v-if="indexs===0">
              <!--  商品详情 -->
              <div v-html="obj.detail"></div>
              <div class="null"></div>
            </div>
            <div v-else>
              <!-- 商品评价 -->
            </div>
          </div>
      </div>
    </div>
    <div>
     <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addShoppingCart"/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <!-- v-model 是否显示sku
    sku 商品sku数据
    goods 商品信息
    goods-id 商品 id
    hide-stock 是否显示商品剩余库存
    hide-quota-text 是否显示限购提示
    quota	限购数，0 表示不限购
    show-add-cart-btn 是否显示加入购物车按钮-->
    <van-sku
      v-model="showbuy"
      :sku="sku"
      :startSaleNum="startSaleNum"
      :goods="goods"
      :goods-id="ids"
      :quota="quota"
      :initial-sku="initialSku"
      :hide-stock="sku.hide_stock"
      :custom-stepper-config="customStepperConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
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
      ids: "",
      obj: {},
      show: false,
      flag:false,
      index: 0,
      current: "",
      images: [],
      value: 1,
      nickname: "",
      isCollect: "",
      id: "",
      container: null,
      indexs : 0,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [],
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {},
      customStepperConfig: {},
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
    },
    // 查看商品是否已收藏
    getisCollection() {
      this.$api
        .isCollection({id:this.obj._id})
        .then(res => {
          // 将收藏与否的结果 赋值给 收藏与否标识
          this.isCollect = res.isCollection;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 收藏商品
    collectGoods() {
      if (this.nickname !== '') {
        this.$api
          .collection(this.obj)
          .then(res => {
            // 弹框提示
            this.$toast.success(res.msg);
            this.flag = true
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.$dialog
          .confirm({
            title: "未检测到登录记录，前往登录"
          })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(() => {});
      }
    },
    // 取消收藏
    cancelCollect() {
      this.$api
        .cancelCollection({id:this.obj._id})
        .then(res => {
          // 弹框提示
          this.$toast.success(res.msg);
          this.flag = false
        })
        .catch(err => {
          console.log(err);
        });
    },
    addShoppingCart() {

    }
  },
  mounted() {
   this.getisCollection();
    this.nickname = localStorage.getItem("nickname");
    this.ids = this.$route.query.id;
    this.$api
      .oneGoods(this.ids)
      .then(res => {
        this.obj = res.goods.goodsOne;
        this.images.push(this.obj.image);
        this.images.push(this.obj.image_path);
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
  background: #fff;
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
  height: 100%;
}
.swipe-img {
  width: 100%;
  height: 375px;
}
.detail-imgs {
  width: 100%;
  height: 375px;
}
.price {
  color: rgb(238, 61, 61);
  font-size: 14px;
  width: 300px;
  height: 100%;
  margin-left: 10px;
}
.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #999;
  font-size: 12px;
}
.box1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.name {
  width: 300px;
  height: 100%;
  margin-left: 10px;
}
.tab {
  display: flex;
}
.tab1 {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab2 {
  display: flex;
  align-items: center;
  width: 95%;
  height: 90%;
}
.icn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab3 {
  margin-left: 10px;
  background: red;
  color: #fff;
}
.tab4 {
  width: 140px;
}
.tab5 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>