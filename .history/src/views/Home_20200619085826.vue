<template>
  <div>
    <div class="top">
      <location></location>
      <search></search>
    </div>
    <swipeltem></swipeltem>
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
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  display: flex;
  justify-content: space-between;
}
</style>
