<template>
  <div>
    <div class="top">
      <van-nav-bar title="城市列表" left-text="返回" right-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="ipt">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词">
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>