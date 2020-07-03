<template>
  <div>
    <div class="top">
      <van-nav-bar title="评价中心" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div>
      <!-- 商品内容 -->
      <van-card
        :num="rategoods.count"
        :price="rategoods.mallPrice"
        :title="rategoods.name"
        :thumb="rategoods.image_path"
      />

      <van-cell class="rate-header">
        <div class="rate-rate">
          <div>商品评价：</div>
          <van-rate v-model="rate" />
        </div>
      </van-cell>

      <van-cell-group>
        <van-field
          v-model="content"
          rows="2"
          autosize
          type="textarea"
          maxlength="100"
          placeholder="说说你的购物感受吧~~"
          show-word-limit
        />
      </van-cell-group>
      <van-uploader v-model="fileList" multiple />
      <div class="rate-bottom">
        <div class="rate-anony">
          <van-switch v-model="anonymous" size="24px" active-color="#07c160" />匿名评价
        </div>
        <div class="rate-submit">
          <van-button type="primary" size="large" @click="goodsComment">提交</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rate",
  props: {},
  components: {},
  data() {
    return {
      rategoods: {},
      rate: 5,
      content: "",
      fileList: [],
      anonymous: false
    };
  },
  methods: {
    onClickLeft() {
      if (this.content === "") {
        this.$dialog
          .confirm({
            title: "您还没有评论，确认取消评价该商品吗？"
          })
          .then(() => {
            this.$router.go(-1);
          })
          .catch(() => {});
      }
    },
    goodsComment() {
      this.$api
        .goodsComment({
          id: this.rategoods.cid,
          rate: this.rate,
          anonymous: this.anonymous,
          _id: this.rategoods._id,
          order_id: this.rategoods.order_id,
          image: this.fileList,
          content: this.content
        })
        .then(res => {
          console.log(res);
          this.$toast.success(res.msg);
          this.$router.push("/estimate");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    if (localStorage.rategoods) {
      this.rategoods = JSON.parse(localStorage.getItem("rategoods"));
    } else {
      this.rategoods = this.$route.query.rategoods;
    }
    console.log(this.rategoods);
    this.rategoods.mallPrice = this.rategoods.mallPrice.toFixed(2);
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
.rate-header {
  background: #fafafa;
  padding: 20px;
}
.rate-rate {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.rate-bottom {
  padding: 5px 20px;
  background: #fafafa;
}
.rate-anony {
  display: flex;
  align-items: center;
}
.rate-submit {
  padding: 20px;
}
</style>