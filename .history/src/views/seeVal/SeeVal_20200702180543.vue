<template>
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <div class="myrate-header">
        <div>
          <img :src="userpic" class="user-img" />
          <van-rate v-model="myrates.rate" readonly />
        </div>
        <div class="comment_time">{{myrates.comment_time}}</div>
      </div>
      <div class="myrate-header">评价内容：{{myrates.content}}</div>
      <div class="myrate-body">
        <div @click="gotos(goods.id)">
          <img :src="goods.image_path" class="myrate-img" />
        </div>
        <div class="myrate-font">
          {{goods.name}}
          <van-icon name="cart-circle-o" color="red" @click="onAddCartClicked" size="30px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeeVal",
  props: {},
  components: {},
  data() {
    return {
      rateId: "",
      myrates: {},
      userpic: "",
      goods: {}
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getEvaluateOne() {
      this.$api
        .evaluateOne({ id: this.rateId })
        .then(res => {
          this.myrates = res.evaluateOne;
          this.userpic = this.myrates.user[0].avatar;
          this.goods = this.myrates.goods[0];
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    if (localStorage.rateId) {
      this.rateId = JSON.parse(localStorage.getItem("rateId"));
    } else {
      this.rateId = this.$route.query.rateId;
    }
    this.getEvaluateOne();
  },
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