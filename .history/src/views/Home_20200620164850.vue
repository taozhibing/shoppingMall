<template>
  <div>
    <div class="top">
      <location></location>
      <search></search>
    </div>
    <br />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <swipeltem :obj="obj"></swipeltem>
    <category :category="category"></category>
    <advertesPicture :advertesPicture="advertesPicture"></advertesPicture>
    <br />
    <recommend :recommend="recommend"></recommend>
    <floor1 :floor1="floor1"></floor1>
    <floor2 :floor2="floor2"></floor2>
    <floor3 :floor3="floor3"></floor3>
    <hotGoods :hotGoods="hotGoods"></hotGoods>
    </van-pull-refresh>
  </div>
</template>

<script>
import location from "../components/home/location";
import search from "../components/home/search";
import swipeltem from "../components/home/swipeltem";
import category from "../components/home/category";
import advertesPicture from "../components/home/advertesPicture";
import recommend from "../components/home/recommend";
import floor1 from "../components/home/floor1";
import floor2 from "../components/home/floor2";
import floor3 from "../components/home/floor3";
import hotGoods from "../components/home/hotGoods";
export default {
  name: "Home",
  props: {},
  components: {
    location,
    search,
    swipeltem,
    category,
    advertesPicture,
    recommend,
    floor1,
    floor2,
    floor3,
    hotGoods,
  },
  data() {
    return {
      obj: [],
      category: [],
      advertesPicture: {},
      recommend: [],
      floor1: [],
      floor2: [],
      floor3: [],
      hotGoods: [],
    };
  },
  methods: {
  },
  mounted() {
    this.$api
      .recommend()
      .then(res => {
        this.obj = res.data.slides;
        this.category = res.data.category;
        this.advertesPicture = res.data.advertesPicture;
        this.recommend = res.data.recommend;
        this.floor1 = res.data.floor1;
        this.floor2 = res.data.floor2;
        this.floor3 = res.data.floor3;
        this.hotGoods = res.data.hotGoods;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 999;
  background: #fff;
  width: 100%;
}
</style>
