<template>
  <div>
    <div class="top">商品分类</div>
    <div class="container">
      <div class="title-top"></div>
      <div class="title-left"></div>
      <div class="value-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassiFication",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    getData() {
      this.$api.classiFication(this.id).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getData()
    this.category = JSON.parse(localStorage.getItem('category'))
    
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffff;
}
</style>