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
      <div class="dv">{{addressComponent.city}}</div>
    </div>
    <div class="text">热门城市</div>
    <div class="Text">
      <div class="Text1">
        <div class="grid" v-for="(item,index) in arr" :key="index">{{item}}</div>
      </div>
    </div>
    <div>
    <van-index-bar>
  <van-index-anchor index="A" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="B" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  ...
</van-index-bar>
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
      arr: ["北京", "上海", "杭州", "重庆", "成都", "厦门"]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    }
  },
  mounted() {},
  watch: {},
  computed: {
    addressComponent() {
      return this.$store.state.addressComponent;
    }
  }
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
.Text1 {
  width: 95%;
  height: 95%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background: #fff;
  border: 1px solid #999;
}
</style>