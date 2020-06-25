<template>
  <div>
    <div class="container">
      <div class="submit">
        <div class="icon">
          <van-icon name="arrow-left" color="white"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
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
.container {
  width: 100%;
  height: 100%;
}
.submit {
  width: 100%;
  height: 50px;
}
.icon {
  width: 30px;
  height: 30px;
  border: 1px solid #999;
  border-radius: 15px;
  background: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>