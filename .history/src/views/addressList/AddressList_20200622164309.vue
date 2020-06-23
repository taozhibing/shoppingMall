<template>
  <div>
    <div>
      <van-nav-bar title="标题" left-text="返回" left-arrow bind:click-left="onClickLeft" />
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
      wx.showToast({ title: "点击返回", icon: "none" });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>