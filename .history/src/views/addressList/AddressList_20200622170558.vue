<template>
  <div>
    <div>
      <van-nav-bar title="地址列表" fixed:true left-arrow bind:click-left="onClickLeft" />
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
      console.log(123);
      this.$router.push("myself");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>