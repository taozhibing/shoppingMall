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
          <van-button type="primary" size="large" @click="comment">提交</van-button>
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