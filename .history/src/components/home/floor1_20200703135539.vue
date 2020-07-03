<template>
  <div>
    <div>
      <div class="floor">
        <div class="f-font">1F</div>
        <div class="f-font2">休闲食品</div>
      </div>
      <div v-for=""></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    floor1: {
      type: Array,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      id: ""
    };
  },
  methods: {
    goDetail(index) {
      this.$router.push({
        path: "/detail",
        query: { id: this.floor1[index].goodsId }
      });
      this.$utils.goDetail(this.floor1[index])
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped>
.floor {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-font {
  width: 20px;
  height: 20px;
  border-radius: 15px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.f-font2 {
  color: red;
  font-size: 14px;
}
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
}
img {
  width: 100%;
}
.div {
  display: flex;
}
</style>