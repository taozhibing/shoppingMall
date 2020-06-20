<template>
  <div>
    <div class="top">
      <location></location>
      <search></search>
    </div>
    <br>
    <swipeltem :obj='obj'></swipeltem>
  </div>
</template>

<script>
import location from "../components/home/location";
import search from "../components/home/search";
import swipeltem from "../components/home/swipeltem";
export default {
  name: "Home",
  props: {},
  components: {
    location,
    search,
    swipeltem
  },
  data() {
    return {
      obj:[]
    };
  },
  methods: {},
  mounted() {
    this.$api.recommend().then(res => {
      this.obj = res.data.slides
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
