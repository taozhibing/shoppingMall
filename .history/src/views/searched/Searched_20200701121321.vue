<template>
  <div>
    <div class="top">
      <div class="location"><van-icon name="location-o"/>{{citya}}</div>
      <div class="search"> <van-search v-model="value" show-action placeholder="请输入搜索关键词"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searched",
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {},
  mounted() {
    this.value = this.$route.query.value;
    this.$api
      .search(this.value)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    citya() {
      return this.$store.state.citya;
    }
  }
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>