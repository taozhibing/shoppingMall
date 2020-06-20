<template>
  <div>
    <div class="top">
      <location></location>
      <search></search>
    </div>
    <swipeltem :obj='obj'></swipeltem>
    <category :category='category'></category>
  </div>
</template>

<script>
import location from "../components/home/location";
import search from "../components/home/search";
import swipeltem from "../components/home/swipeltem";
import category from '../components/home/category';
export default {
  name: "Home",
  props: {},
  components: {
    location,
    search,
    swipeltem,
    category,
  },
  data() {
    return {
      obj:[],
      category : []
    };
  },
  methods: {},
  mounted() {
    this.$api.recommend().then(res => {
      this.obj = res.data.slides
      this.category = res.data.category
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
}
</style>
