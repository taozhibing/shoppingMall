<template>
  <div>
    <div class="box">
      <div v-for="(item,index) in category" :key="index" class="box1">
        <div>
          <div><img :src="item.image" alt=""></div>
          <div class="box2">{{item.mallCategoryName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    category: {
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
.box {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.box1 {
  width: 95%;
  height: 90%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box2 {
  font-size: 14px;
}
img {
  width: 50px;
  height: 50px;
}
</style>