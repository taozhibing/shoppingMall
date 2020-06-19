<template>
  <div>
    <div id="app">
      <div class="dv">
        <div class="top">
          <div class="location">
            <location></location>
          </div>
          <div>
            <search></search>
          </div>
        </div>
        <swipeltem></swipeltem>
      </div>
    </div>
  </div>
</template>

<script>
import location from "../components/home/location";
import search from "../components/home/search";
import swipeltem from "../components/home/swipeltem";
export default {
  name: "",
  props: {},
  components: {
    location,
    search,
    swipeltem
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.dv {
  width: 100%;
  height: 100%;
  background: rgb(230, 230, 230);
}
.top {
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
}
.box {
  width: 100px;
  height: 30px;
  margin-top: 18px;
  margin-left: 20px;
}
.swipeltem {
  width: 100%;
  height: 200px;
  background: red;
}
</style>
