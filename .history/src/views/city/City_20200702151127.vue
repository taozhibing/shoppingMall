<template>
  <!-- 城市菜单 -->

  <div class="mall-bg">
    <van-sticky>
      <div class="top">
        <van-nav-bar title="城市列表" left-text="返回" right-text left-arrow @click-left="onClickLeft" />
      </div>
    </van-sticky>
    <!-- 搜索框 -->
    <van-search placeholder="请输入城市关键词" v-model="searchval" />
    <!-- 如果没有搜索关键词 -->
    <div v-if="searchval.trim()===''">
      <!-- 当前城市 -->
      <div class="city-listword">当前城市</div>
      <van-cell @click="gotohome(citya)">
        <div class="city-nowposiyion">{{citya}}</div>
      </van-cell>
      <!-- 热门城市 -->
      <div class="city-listword">热门城市</div>
      <van-cell>
        <div class="flexbtw">
          <div
            v-for="item in citylist"
            :key="item.id"
            class="city-nowposiyion"
            @click="gotohome(item.name)"
          >{{item.name}}</div>
        </div>
      </van-cell>
      <!-- 排序 -->
      <van-index-bar :index-list="cityNames" :sticky="false" highlight-color="#AE853A">
        <div v-for="(item,index1) in citylists" :key="item.id">
          <van-index-anchor :index="index1">{{index1}}</van-index-anchor>
          <van-cell
            v-for="item1 in item"
            :key="item1.id"
            :title="item1.name"
            @click="gotohome(item1.name)"
          />
        </div>
      </van-index-bar>
    </div>
    <div v-else-if="serachLength === 0">
      <van-cell>未查询到相关城市,请确认输入是否正确</van-cell>
    </div>
    <div v-else>
      <div v-for="(item) in serachcity" :key="item.id">
        <van-cell
          v-for="item1 in item"
          :key="item1.id"
          :title="item1.name"
          @click="gotohome(item1.name)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import city from "../../city";
export default {
  data() {
    return {
      // 搜索框的值
      searchval: "",
      // 城市排名分类依据 ABCD....
      cityNames: [],
      // 城市列表
      citylist: [],
      citylists: [],
      // 搜索结果数组
      serachcity: [],
      // 搜索结果的长度
      serachLength: 0,
      city: city
    };
  },
  components: {},
  methods: {
    // 直接返回主页
    onClickLeft() {
      this.$router.push("/");
    },
    // 返回主页 并且传回选择城市名
    gotohome(name) {
      localStorage.setItem("cityName", name);
      this.$store.commit('setCitya', name)
      this.$router.push('/');
    }
  },
  mounted() {
    //  获取热门城市列表
    this.citylist = city.data.hotCities;
    //  获取全部城市列表
    this.citylists = city.data.cities;
    // 获取城市排名依据 ABCD....
    for (let i in this.city.data.cities) {
      this.cityNames.push(i);
    }
  },
  watch: {
    
    searchval(value) {
      // 输入不为空
      if (value.trim() !== "") {
        let arr = [];
        // 总城市列表循环
        this.cityNames.map(item => {
          // 将过滤后的citylists push 到arr 
          arr.push(
            this.citylists[item].filter(item1 => {
              // 将城市的内容拼接 方便检查是否包含value值
              let str = `${JSON.stringify(item1.id)}${JSON.stringify(
                item1.name
              )}${JSON.stringify(item1.spell)}`;
              //返回结果
              return str.includes(value);
            })
          );
        });
        this.serachcity = arr;
        // 搜索结果全部城市总数
        this.serachLength = 0;
        arr.map(item => {
          this.serachLength += item.length;
        });
      }
    }
  },

  computed: {
    // vueX中暂存的当前城市名
    citya() {
      return this.$store.state.citya;
    }
  }
};
</script>

<style scoped lang='scss'>
// 城市类别标题
.city-listword {
  margin: 0 10px;
}
// 当前 + 热门城市书写
.city-nowposiyion {
  width: 100px;
  line-height: 30px;
  text-align: center;
  border: 1px solid rgb(216, 206, 206);
  margin: 3px;
}
.flexbtw {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
</style>