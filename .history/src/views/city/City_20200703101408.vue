<template>
  <div>
    <div class="top">
      <van-nav-bar title="城市列表" left-text="返回" right-text left-arrow @click-left="onClickLeft" />
    </div>

    <van-search v-model="cityName" show-action placeholder="请输入城市名" @focus="flag=false">
      <template #action>
        <div v-if="flag===false" @click="onCancel">取消</div>
      </template>
    </van-search>
    <div v-if="flag || cityName===''">
      <div class="text">当前城市</div>
      <div class="box">
        <div class="box1"></div>
        <div class="dv">{{this.citya}}</div>
      </div>
      <div class="text">热门城市</div>
      <div class="Text">
        <div class="Text1">
          <div
            class="grid"
            v-for="(item,index) in arr"
            :key="index"
            @click="changeCity(item.name)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="foot">
        <van-index-bar class="indexBar" :sticky="false" highlight-color="#AE853A">
          <div v-for="(item,index) in msg" :key="index">
            <van-index-anchor :index="item" :key="index" />
            <van-cell
              v-for="items in datas[item]"
              :key="items.id"
              :title="items.name"
              @click="changeCity(items.name)"
            />
          </div>
        </van-index-bar>
      </div>
    </div>
    <div v-else>
      <div v-if="this.cityList.length === 0">
        <div class="woring">未查询到相关城市,请确认输入是否正确</div>
      </div>
      <div v-else>
        <van-cell
          v-for="item in cityList"
          :key="item.id"
          :title="item.name"
          @click="changeCity(item.name)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import city from "../../city";
export default {
  name: "City",
  props: {},
  components: {},
  data() {
    return {
      cityName: "",
      arr: [],
      city: city,
      msg: [],
      datas: {},
      flag: true,
      cityList: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onCancel() {
      this.flag = true;
      this.cityName = "";
    },
    // 回到首页，并把选中的城市名传回去
    changeCity(val) {
      this.$store.state.citya = val
      localStorage.setItem("cityName", val);
      this.$router.push('/')
    }
  },
  mounted() {
    // 获取全部城市列表
    this.datas = this.city.data.cities;
    // 获取热门城市列表
    this.arr = this.city.data.hotCities;
    // 获取城市分类首字母 ABCD....
    let keys = Object.keys(this.city.data.cities);
    this.msg = keys;
  },
  watch: {
    // 模糊搜索
    cityName(val) {
      // 将全部城市push在一个数组里面
      let ass = [];
      for (let i in this.datas) {
        ass.push(this.datas[i]);
      }
      let cityLists = [];
      ass.map(item => {
        item.map(item1 => {
          cityLists.push(item1);
        });
      });
      this.cityList = cityLists.filter(item => {
        return JSON.stringify(item).includes(val);
      });
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
.text {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.box {
  width: 100%;
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
}
.box1 {
  width: 20px;
}
.dv {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  background: #fff;
  border: 1px solid #999;
}
.Text {
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Text1 {
  width: 95%;
  height: 95%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  background: #fff;
  border: 1px solid #999;
}
.foot {
  width: 100%;
  height: 100%;
}
.van-nav-bar {
  justify-content: center;
}
.ipt {
  display: flex;
}
.woring {
  padding: 20px;
  text-align: center;
}
</style>
