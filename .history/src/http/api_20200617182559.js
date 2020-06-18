// 用来封装所有的请求
import service from './index';

export default {
  recommend() {
    // 所有的方法必须return
    return service.get(`/recommend`)
  },
  search(value) {
    return service.get(`/search`)
  }
}