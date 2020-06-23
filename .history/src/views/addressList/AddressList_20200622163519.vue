<template>
  <div>
    <div>
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        bind:click-left="onClickLeft"
        bind:click-right="onClickRight"
      />
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
    },
    onClickRight() {
      wx.showToast({ title: "点击按钮", icon: "none" });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>