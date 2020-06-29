<template>
  <div>
    <div class="top">
      <van-nav-bar title="订单结算" fixed:true left-arrow @click-left="onClickLeft" />
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