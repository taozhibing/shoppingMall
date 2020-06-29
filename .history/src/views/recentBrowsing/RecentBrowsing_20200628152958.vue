<template>
  <div>
    <div>
      <van-nav-bar title="地址编辑" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentBrowsing",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
     onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>