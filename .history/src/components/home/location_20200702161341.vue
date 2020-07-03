<template>
  <div>
    <div class="box" v-if="this.cityName === ''">
      <van-icon name="location-o" @click="location" />
      <div @click="getAddress">{{city}}</div>
    </div>
    <div class="box" v-else>
      <van-icon name="location-o" @click="location" />
      <div @click="getAddress">{{cityName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      city: "",
      cityName: ""
    };
  },
  methods: {
    getAddress() {
      this.$router.push("/city");
    },
    location() {
      this.$router.go(0);
      localStorage.removeItem("cityName");
    }
  },
  mounted() {
    if (localStorage.cityName === null) {
      let _this = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: true,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: "RB"
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          // data是具体的定位信息
          console.log(data);
          _this.city = data.addressComponent.city;
          _this.$store.commit("setCitya", data.addressComponent.city);
        }

        function onError(data) {
          // 定位出错
        }
      });
    }
    this.cityName = localStorage.getItem("cityName");
  },
  watch: {},
  computed: {
    // citya() {
    //   return this.$store.state.citya;
    // }
  }
};
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  align-items: center;
  margin-top: 16px !important;
}
</style>