<template>
  <div id="app">
    <div class="dv">
      <div class="top">
      <div class="location"></div>
      <div class="ipt"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
  height: 40px;
  background: red;
  display: flex;
}
</style>
