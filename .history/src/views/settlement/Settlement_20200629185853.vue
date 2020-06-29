<template>
  <div>
    <div class="top">
      <van-nav-bar title="订单结算" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-if="this.defaultAdd === null" class="defaultAdd_null">
      <div>您还没有设置默认收货地址，</div>
      <div>
        请设置
        <span class="default" @click="setDefa">默认收货地址</span>
      </div>
      <div class="caitiao">
        <img src="../../assets/caitiao.jpg" width="100%" />
      </div>
    </div>
    <div v-else class="addre">
      <div class="box">
        <van-icon name="location-o" class="location"/>
        <div class="all">
          <div class="box">
            <span>收货人：{{defaultAdd.name}}</span>
            <span class="tel">{{defaultAdd.tel}}</span>
          </div>
          <div class="address">收货地址：{{defaultAdd.address}}</div>
          <div class="Inconvenience">(收货不便时，可选择免费待收货服务)</div>
        </div>
        <div class="icon" @click="setDefa"><van-icon name="arrow" class="location" size="20" color="#999"/></div>
      </div>
      <div class="caitiao">
        <img src="../../assets/caitiao.jpg" width="100%" />
      </div>
      <div v-if="flag===1">
        <div v-for="(item,index) in shopList" :key="index" class="box">
          <img :src="item.image_path" class="img" />
          <div class="item">
            <div class="name">{{item.name}}</div>
            <div class="box">
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
          <div class="box">
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
    return {
      shopList: [],
      defaultAdd: {},
      arr: [],
      count: "",
      goodsOne: {},
      counts: "",
      flag: 0,
      flags: 1,
      total: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
     setDefa() {
      this.$router.push("/addressList");
    },
    onSubmit() {
      if (this.flag === 1) {
        this.shopList.map(item => {
          this.arr.push(item.cid);
        });
        this.$api
          .order({
            address: this.defaultAdd.address,
            tel: this.defaultAdd.tel,
            orderId: this.arr,
            totalPrice: this.total,
            idDirect: false,
            count: this.count
          })
          .then(res => {
            console.log(res);
            this.$toast.success(res.msg);
            this.$router.push("/");
          })
          .catch(err => {});
      }
      if (this.flags === 0) {
        this.arr.push(this.goodsOne.id)
        this.$api
          .order({
            address: this.defaultAdd.address,
            tel: this.defaultAdd.tel,
            orderId: this.arr,
            totalPrice: this.totals,
            idDirect: true,
            count: this.counts
          })
          .then(res => {
            console.log(res);
            this.$toast.success(res.msg);
            this.$router.push("/");
          })
          .catch(err => {});
      }
    }
  },
  mounted() {
    this.goodsOne = this.$route.query.goodsOne;
    this.counts = this.$route.query.count;
    this.shopList = this.$route.query.shopList;
    this.flag = this.$route.query.flag;
    this.flags = this.$route.query.flags;
    this.total = this.$route.query.total;
    this.$api
      .getDefaultAddress()
      .then(res => {
        this.defaultAdd = res.defaultAdd;
      })
      .catch(err => {});
  },
  watch: {},
  computed: {
    totals() {
      return this.goodsOne.present_price * this.counts;
    }
  }
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 40px;
  background: #ffff;
  border-bottom: 1px solid #eee;
}
.defaultAdd_null {
  padding: 20px 10px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.default {
  text-decoration: underline;
  color: red;
}
.caitiao {
  margin: 0 -10px 10px -10px;
}
.location {
  font-size: 30px;
}
.box {
  display: flex;
  align-items: center;
}
.addre {
  padding: 10px;
  margin-top: 20px;
  background: #fff;
}
.all {
  width: 80%;
}
.address {
  font-size: 14px;
  margin-top: 10px;
}
.Inconvenience {
  font-size: 14px;
  margin-top: 5px;
  color: orange;
}
.img {
  width: 25%;
  border: 1px solid #eeeeee;
  margin-right: 10px;
}
.name {
  color: red;
  margin-bottom: 15px;
}
.item {
  width: 100%;
}
.price {
  color: red;
  font-size: 15px;
}
.count {
  font-size: 15px;
}
.icon {
  margin-left: 30px;
}
.tel {
  margin-left: 60px;
}
</style>