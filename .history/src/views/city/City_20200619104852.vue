<template>
  <div>
    <div class="top">
      <van-nav-bar title="城市列表" left-text="返回" right-text left-arrow @click-left="onClickLeft" />
    </div>
    <div class="ipt">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="text">当前城市</div>
    <div class="box">
      <div class="dv">{{$data._city}}成都市</div>
    </div>
    <div class="text">热门城市</div>
  </div>
</template>

<script>
export default {
  name: "City",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      _city: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    }
  },
  mounted() {
    this._city = this.$route.query.city;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.text {
  margin-left: 10px;
}
.box {
  width: 100%;
  height: 40px;
  background: green;
  display: flex;
  align-content: center;
}
.dv {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100px;
  height: 30px;
  background: red;
  margin-top: 5px;
  margin-left: 20px;
}
</style>