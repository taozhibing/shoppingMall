// 用来封装所有的请求
import service from './index';

export default {
  // 获取首页数据
  recommend() {
    // 所有的方法必须return
    return service.get(`/recommend`)
  },
  // 搜索
  search(value) {
    return service.get(`/search?value=${value}`)
  },
  // 分类查询
  classiFication(id) {
    return service.get(`/classification?mallSubId=${id}`)
  }

}