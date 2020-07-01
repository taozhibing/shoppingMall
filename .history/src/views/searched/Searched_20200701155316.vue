<template>
  <div>
    <div class="top">
      <div class="location">
        <van-icon name="location-o" />
        {{citya}}
      </div>
      <div class="search">
        <van-search v-model="value" show-action placeholder="请输入搜索关键词">
          <template #action>
            <div>取消</div>
          </template>
        </van-search>
      </div>
    </div>
    <div class="content">
      <div class="search-bg">
        <!-- 如果搜索出来没有商品 提示没有商品 -->
        <div v-if="searchlist.length < 1 && inputs !== ''">
          <van-cell>非常抱歉，该商品不存在，请重新输入关键词</van-cell>
        </div>
        <!-- 如果搜索出了商品  -->
        <div v-else>
          <!-- 循环显示商品信息 -->
          <van-cell v-for="item in searchlist" :key="item.id">
            <div class="mysearch-list">
              <img :src="item.image" class="search-img" />
              <div v-html="item.name" class="goods-name"></div>
            </div>
          </van-cell>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searched",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      searchlist: [],
       inputs: "",
    };
  },
  methods: {},
  mounted() {
    this.value = this.$route.query.value;
    this.$api
      .search(this.value)
      .then(res => {
        this.searchlist = res.data.list;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {},
  computed: {
    citya() {
      return this.$store.state.citya;
    }
  }
};
</script>

<style scoped lang='scss'>
.top {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.content {
  width: 100%;
  height: 100%;
}
</style>