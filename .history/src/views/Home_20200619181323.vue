<template>
  <div>
    <div class="top">
      <location></location>
      <search></search>
    </div>
    <br>
    <swipeltem :obj='obj'></swipeltem>
    <category :category='category'></category>
    <advertesPicture :advertesPicture="advertesPicture"></advertesPicture>
  </div>
</template>

<script>
import location from "../components/home/location";
import search from "../components/home/search";
import swipeltem from "../components/home/swipeltem";
import category from '../components/home/category';
import advertesPicture from '../components/home/advertesPicture';
export default {
  name: "Home",
  props: {},
  components: {
    location,
    search,
    swipeltem,
    category,
    advertesPicture,
  },
  data() {
    return {
      obj:[],
      category : [],
      advertesPicture : []
    };
  },
  methods: {},
  mounted() {
    this.$api.recommend().then(res => {
      this.obj = res.data.slides
      this.category = res.data.category
      this.advertesPicture = res.data.advertesPicture
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
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
