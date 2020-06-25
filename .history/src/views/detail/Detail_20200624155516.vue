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
          <div class="tab1"><div class="tab2"><van-icon name="shop-o" />有赞的店</div></div>
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
export default {
  name: "Detail",
  props: {},
  components: {},
  data() {
    return {
      ids: "",
      obj: {},
      show: false,
      index: 0,
      images: [],
      closeable: true,
      value : 1,
      nickname:'',
      isCollect:'',
      id :'',
      goods:''
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
        .isCollection(this.obj._id)
        .then(res => {
          // 将收藏与否的结果 赋值给 收藏与否标识
          this.isCollect = res.isCollection;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 收藏商品
    collectGoods() {
      if (this.nickname !== "") {
        this.$api
          .collection( goods )
          .then(res => {
            // 弹框提示
            this.$toast.success(res.msg);
            // 重新查看商品是否被收藏
            this.getisCollection();
            console.log(goods);
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
        .cancelCollection(this.obj._id)
        .then(res => {
          // 弹框提示
          this.$toast.success(res.msg);
          // 重新查看商品是否被收藏
          this.getisCollection();
        })
        .catch(err => {
          console.log(err);
        });
    },

  },
  mounted() {
    this.nickname = localStorage.getItem('nickname')
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
  width: 90%;
  height: 90%;
}
</style>