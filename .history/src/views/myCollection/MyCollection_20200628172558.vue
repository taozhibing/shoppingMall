<template>
  <div>
    <div>
      <van-nav-bar title="我的收藏" fixed:true left-arrow @click-left="onClickLeft" />
    </div>
    <div v-for="item in arr" :key="item.id">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "MyCollection",
  props: {},
  components: {},
  data() {
    return {
      arr : [],
      id : ''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.Obj = JSON.parse(localStorage.getItem('obj'))
    this.$api.collectionList().then(res => {
      this.arr = res.data.list
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
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
  border-bottom: 1px solid #eee;
}
</style>