<template>
  <div>
    <div class="ipt">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词">
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
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
      value : ''
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>