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
      <div class="box1"></div>
      <div class="dv">{{citya}}</div>
    </div>
    <div class="text">热门城市</div>
    <div class="Text">
      <div class="Text1">
        <div class="grid" v-for="(item,index) in arr" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="foot">
      <van-index-bar class="indexBar" :sticky="false" highlight-color="#AE853A">
        <div v-for="(item,index) in msg" :key="index">
          <van-index-anchor :index="item" :key="index" />
          <van-cell v-for="items in datas[item]" :key="items.id" :title="items.name" />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import city from "../../city";
export default {
  name: "City",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      arr: ["北京", "上海", "杭州", "重庆", "成都", "厦门"],
      city: city,
      msg: [],
      datas: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    }
  },
  mounted() {
    this.datas = this.city.data.cities;
    let keys = Object.keys(this.city.data.cities);
    this.msg = keys;
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
.text {
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
.box1 {
width: 20px
}
.dv {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background: #fff;
  border: 1px solid #999;
}
.Text {
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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
.foot {
  width: 100%;
  height: 100%;
}
.van-nav-bar {
  justify-content: center;
}
</style>