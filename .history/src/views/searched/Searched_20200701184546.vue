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
        <div v-if="this.arr.length === null">暂无搜索历史</div>
        <div v-else>
        <div class="searchHistory">
          <div>搜索历史</div>
          <div v-for="(item1,index1) in arr" :key="index1">
            <div>{{item1}}</div>
          </div>
        </div>
        </div>
        <!-- 如果搜索出来没有商品 提示没有商品 -->
        <div v-if="searchlist.length < 1 || value === ''">
          <van-cell>非常抱歉，该商品不存在，请重新输入关键词</van-cell>
        </div>
        <!-- 如果搜索出了商品  -->
        <div v-else>
          <!-- 循环显示商品信息 -->
          <van-cell v-for="item in searchlist" :key="item.id">
            <div class="mysearch-list" @click="goDetail(item)">
              <img :src="item.image" class="search-img" />
              <div v-html="item.names" class="goods-name"></div>
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
      arr: []
    };
  },
  methods: {
    getSearch() {
      if (this.value !== "") {
        this.$api
          .search(this.value)
          .then(res => {
            res.data.list.map(item => {
              this.$set(item, "names", item.name);
            });
            this.searchlist = res.data.list;
            console.log(this.searchlist);
            this.searchlist.map(item => {
              let replaceReg = new RegExp(this.value, "g"); // 匹配关键字正则
              let replaceString =
                '<span class="highlights-text">' + this.value + "</span>"; // 高亮替换v-html值
              item.names = item.names.replace(replaceReg, replaceString); // 开始替换
            });
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    goDetail(item) {
      this.$router.push({
        path: "/detail",
        query: { id: item.id }
      });
      this.$utils.goDetail(item);
      this.$utils.getSearch(this.value);
    }
  },
  mounted() {
    this.value = this.$route.query.value;
    this.getSearch();
    this.arr =JSON.parse( localStorage.getItem("value"));
  },
  watch: {
    value(val, oldVal) {
      if (this.value === val) {
        this.getSearch();
      }
    }
  },
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
  background: #fff;
}
.content {
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
// 搜索页 页面样式
.search-bg {
  background: rgb(241, 241, 241);
  font-size: 16px;
}
.mysearch-list {
  display: flex;
  height: 80px;
}
.search-img {
  width: 70px;
  margin: 0 10px;
}
.goods-name {
  margin: 0 8px;
  line-height: 20px;
}
</style>