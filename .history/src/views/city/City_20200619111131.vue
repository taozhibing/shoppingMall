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
    <div class="Text" v-for="(item,index) in arr" :key="index">
      <div class="Text1">
        <div class="grid">{{arr.item}}</div>
      </div>
    </div>
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
      _city: "",
      arr: ["北京", "上海", "杭州", "重庆", "成都", "厦门"]
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
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.box {
  width: 100%;
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
}
.dv {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background: #fff;
  margin-left: 20px;
  border: 1px solid #999;
}
.Text {
  width: 100%;
  height: 80px;
  background: #fff;
}
.Text {
  width: 95%;
  height: 95%;
  background: #fff;
}
.grid {
  width: 100px;
  height: 30px;
  background: #fff;
  margin-left: 20px;
  border: 1px solid #999;
  display: flex;
  flex-wrap: wrap;
}
</style>