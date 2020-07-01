<template>
  <div></div>
</template>

<script>
export default {
  name: "Searched",
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  methods: {},
  mounted() {
    this.value = this.$route.query.value;
    this.$api.search(this.value).then().catch()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>