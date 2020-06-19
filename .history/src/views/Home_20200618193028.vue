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
</style>
