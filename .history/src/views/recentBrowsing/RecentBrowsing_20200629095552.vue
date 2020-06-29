<template>
  <div>
    <div>
      <van-nav-bar title="最近浏览" fixed:true left-arrow @click-left="onClickLeft" />
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
  mounted() {
    let obj = JSON.parse(localStorage.getItem("obj"))
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
  border-bottom: 1px solid #eee;
}
</style>