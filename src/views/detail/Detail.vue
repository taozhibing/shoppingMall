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
        <!-- <van-image-preview v-model="show" :images="images" @change="onChange" closeable: false>
          <template v-slot:index>第{{ index }}页</template>
        </van-image-preview>-->
      </div>
      <div class="name">{{obj.name}}</div>
      <div class="price">￥{{obj.orl_price}}</div>
      <div class="box">
        <div>运费：{{obj.__v}}</div>
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
          <div v-else @click="cancelCollect">
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
          <van-tabs title-active-color="red" v-model="active">
            <van-tab title="商品详情">
              <div v-html="obj.detail"></div>
            </van-tab>
            <van-tab title="商品评论">
              <div class="deta_pin" v-for="(item,index) in comment" :key="index">
                <div class="deta_h" v-if="item.anonymous === true">
                  <div class="deta_i">
                    <div class="deta_j">
                      <img :src="item.comment_avatar" alt />
                    </div>
                    <div class="deta_K">
                      <div class="deta_l">
                        <span>{{item.comment_nickname}}</span>
                        <span class="deta_m">{{item.comment_time}}</span>
                      </div>
                      <div>
                        <van-rate v-model="item.rate" readonly />
                      </div>
                      <div>{{item.content}}</div>
                    </div>
                  </div>
                </div>
                <div class="deta_h" v-else>
                  <div class="deta_i" v-for="(item1,index1) in item.user" :key="index1">
                    <div class="deta_j">
                      <img :src="item1.avatar" alt />
                    </div>
                    <div class="deta_K">
                      <div class="deta_l">
                        <span>{{item1.nickname}}</span>
                        <span class="deta_m">{{item.comment_time}}</span>
                      </div>
                      <div>
                        <van-rate v-model="item.rate" readonly />
                      </div>
                      <div>{{item.content}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </van-sticky>
      </div>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="setNumber" @click="toShoppingCart" />
        <van-goods-action-button type="warning" text="加入购物车" @click="addShoppingCart" />
        <van-goods-action-button type="danger" text="立即购买" @click="buy" />
        <van-action-sheet v-model="show1" round>
          <div class="content">
            <div class="flex-j-sb">
              <div class="d-flex">
                <img :src="obj.image" class="img" />
                <van-icon name="close" class="close" @click="close" />
                <div class="f-dir-jc">
                  <div class="buygoods">{{obj.name}}</div>
                  <div class="residue">剩余：{{obj.amount}}</div>
                  <div class="price">￥{{obj.present_price}}.00</div>
                </div>
              </div>
            </div>
            <div class="buycount">
              <div>购买数量：</div>
              <div class="Quota">
                <van-stepper
                  v-model="count"
                  theme="round"
                  button-size="22"
                  disable-input
                  class="stepper"
                />
              </div>
            </div>
            <van-button type="danger" size="large" class="van-btn" @click="goSettlement">立即购买</van-button>
          </div>
        </van-action-sheet>
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
      ids: "",
      obj: {},
      show: false,
      flag: false,
      index: 0,
      active: 0,
      current: "",
      images: [],
      count: 1,
      nickname: "",
      isCollect: "",
      id: "",
      container: null,
      indexs: 0,
      show1: false,
      flags: "0",
      comment : []
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
        .isCollection({ id: this.id })
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
      if (this.nickname !== "") {
        this.$api
          .collection(this.obj)
          .then(res => {
            // 弹框提示
            this.$toast.success(res.msg);
            this.$utils.collectGoods(this.obj);
            this.flag = true;
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
        .cancelCollection({ id: this.id })
        .then(res => {
          // 弹框提示
          this.$toast.success(res.msg);
          this.flag = false;
          this.getisCollection();
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 跳转到购物车
    toShoppingCart() {
      this.$router.push("shoppingCart");
    },
    // 加入购物车
    addShoppingCart() {
      if (this.nickname === "") {
        this.$dialog
          .confirm({
            message: "您还没有登录，是否要登录？"
          })
          .then(res => {
            this.$router.push("/login");
          })
          .catch(() => {});
      } else {
        this.$api
          .addShop({
            id: this.obj.id
          })
          .then(res => {
            this.$toast.success("加入购物车成功");
          })
          .catch(err => {});
      }
    },
    close() {
      this.show1 = false;
    },
    buy() {
      this.show1 = true;
    }, // 去结算
    goSettlement() {
      if(this.nickname !== '') {
        this.$router.push({
        path: "/settlement",
        query: {
          goodsOne: JSON.stringify(this.obj),
          count: this.count,
          flags: this.flags
        }
      });
      localStorage.setItem("goodsOne", JSON.stringify(this.obj));
      }else {
         this.$dialog
          .confirm({
            message: "您还没有登录，是否要登录？"
          })
          .then(res => {
            this.$router.push("/login");
          })
          .catch(() => {});
      }
    }
  },
  mounted() {
     if (localStorage.getItem("nickname")) {
      this.nickname = localStorage.getItem("nickname");
    }
    this.ids = this.$route.query.id;
    this.$api
      .oneGoods(this.ids)
      .then(res => {
        this.obj = res.goods.goodsOne;
        this.id = res.goods.goodsOne.id;
        this.comment = res.goods.comment
        this.images.push(this.obj.image);
        this.images.push(this.obj.image_path);
        this.getisCollection();
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    setNumber() {
      return this.$store.state.num;
    }
  }
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
.img {
  width: 25%;
  margin-right: 15px;
  border: 1px solid #eeeeee;
}
.close {
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 10px;
  right: 10px;
}
.buygoods {
  font-size: 15px;
  margin-bottom: 10px;
}
.flex-j-sb {
  padding: 0 15px;
  margin: 20px 0;
}
.more {
  font-size: 12px;
  color: #999;
}
.buycount {
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
  padding: 20px 20px 20px 10px;
  display: flex;
  justify-content: space-between;
}
.Quota {
  color: red;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.stepper {
  margin-left: 20px;
}
.van-btn {
  margin-top: 30px;
}
// 商品评论
.deta_f {
  margin-top: 30px;
  border-top: 1px solid #eeeeee;
  margin-bottom: 50px;
}
.deta_h {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
.deta_i {
  display: flex;
  justify-content: space-between;
  width: 94%;
}
.deta_j {
  height: 42px;
  width: 42px;
  border: 1px solid #eeeeee;
  border-radius: 50px;
  overflow: hidden;
}
.deta_j img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.deta_K {
  width: 84%;
  font-size: 14px;
}
.deta_K div {
  line-height: 26px;
}
.deta_l {
  display: flex;
  justify-content: space-between;
}
.deta_m {
  color: #666666;
}
.deta_pin {
  margin-bottom: 80px;
}
</style>