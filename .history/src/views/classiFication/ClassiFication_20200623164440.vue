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
    return {
      category : '',
      bxMallSubDto : ''
    };
  },
  methods: {
    getData() {
      this.$api
        .classiFication(this.id)
        this.dataList = res.dataList
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
    this.category = JSON.parse(localStorage.getItem("category"));
    this.bxMallSubDto = this.category[0].bxMallSubDto;
    console.log(this.category);

    if (this.$route.query.index) {
      this.activeIndex = this.$route.query.index;
      this.id = this.category[this.activeIndex].bxMallSubDto[0].mallSubId;
      this.classiFication();
    } else {
      this.id = this.category[0].bxMallSubDto[0].mallSubId;
      this.classiFication();
    }
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