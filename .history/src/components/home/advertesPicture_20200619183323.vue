<template>
  <div class="dv"><img :src="advertesPicture.PICTURE_ADDRESS" alt=""></div>
</template>

<script>
export default {
  name: "",
  props: {
    advertesPicture: {
      type: Array,
      default: () => {}
    }
  },
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>