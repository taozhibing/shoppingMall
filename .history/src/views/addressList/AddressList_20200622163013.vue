<template>
  <div>
    <div>
      <div class="head">地址列表</div>
      <div class="icon" @click="back">
        <van-icon name="arrow-left" size="20" color="#1989fa" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressList",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("myself");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.icon {
  position: absolute;
  top: 10px;
  left: 8px;
}
.icon {
  position: absolute;
  top: 10px;
  left: 8px;
}
</style>