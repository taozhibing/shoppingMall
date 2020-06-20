<template>
  <div><img :src="advertesPicture.PICTURE_ADDRESS" alt=""></div>
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
img {
  width: 100%;
  height: 100%;
}
</style>