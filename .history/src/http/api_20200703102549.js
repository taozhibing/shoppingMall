// 用来封装所有的请求
import service from './index';

export default {
  // 获取首页数据(1)
  recommend() {
    // 所有的方法必须return
    return service.get(`/recommend`)
  },
  // 搜索(2)
  search(value) {
    return service.post(`/search`,{value})
  },
  // 分类查询(3)
  classiFication(id) {
    return service.get(`/classification?mallSubId=${id}`)
  },
  //  查询获取购物车数据(4)
  getCard() {
    return service.post(`/getCard`)
  },
  // 购物车加减商品(5)
  editCart({ count, id, mallPrice }) {
    return service.post(`/editCart`, {
      count: count,
      id: id,
      mallPrice: mallPrice
    })
  },
  // 购物车商品删除(6)
  deleteShop(idArr) {
    return service.post(`/deleteShop`,idArr )
  },
  // 购物车支付页面(7)
  order({ address, tel, orderId, totalPrice, idDirect, count }) {
    return service.post(`/order`, {
      address: address,
      tel: tel,
      orderId: orderId,
      totalPrice: totalPrice,
      idDirect: idDirect,
      count: count
    })
  },
  // 单个商品详情(8)
  oneGoods(id) {
    return service.get(`/goods/one?id=${id}`)
  },
  // 收藏单个商品(9)
  collection(goods) {
    return service.post(`/collection`,  goods )
  },
  // 取消收藏(10)
  cancelCollection({ id }) {
    return service.post(`/cancelCollection`, { id })
  },
  // 查询商品是否已收藏(11)
  isCollection({ id }) {
    return service.post(`/isCollection`, { id })
  },
  // 加入购物车(12)
  addShop({ id }) {
    return service.post(`/addShop`, { id })
  },
  // 退出登录(13)
  loginOut({ }) {
    return service.post(`/loginOut`, {})
  },
  // 获取用户信息(14)
  queryUser({ }) {
    return service.post(`/queryUser`, {})
  },
  // 修改保存用户信息(15)
  saveUser({ gender, year, month, day, id, nickname }) {
    return service.post(`/saveUser`, { gender, year, month, day, id, nickname })
  },
  // 查询用户订单数量(16)
  orderNum() {
    return service.get(`/myOrder/orderNum`)
  },
  // 商品评论(17)
  goodsComment({ id, rate, content, anonymous, _id, order_id, image }) {
    return service.post(`/goodsOne/comment`, { id, rate, content, anonymous, _id, order_id, image })
  },
  // 获取登录注册默认验证码(18)
  verify() {
    return service.get(`/verify`)
  },
  // 查询用户收货地址(19)
  getAddress() {
    return service.get(`/getAddress`)
  },
  // 查询默认收货地址(20)
  getDefaultAddress() {
    return service.get(`/getDefaultAddress`)
  },
  // 设置默认收货地址(21)
  setDefaultAddress( id ) {
    return service.post(`/setDefaultAddress`, { id })
  },
  // 增加收货地址(22)
  address({ name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id }) {
    return service.post(`/address`, { name, tel, address, isDefault, province, city, county, addressDetail, areaCode, id })
  },
  // 删除地址(23)
  deleteAddress({ id }) {
    return service.post(`/deleteAddress`, { id })
  },
  // 查询我的收藏(24)
  collectionList() {
    return service.get(`/collection/list`)
  },
  // 注册(25)
  register({ nickname, password, verify }) {
    return service.post(`/register`, { nickname, password, verify })
  },
  // 登录(26)
  login({ nickname, password, verify }) {
    return service.post(`/login`, { nickname, password, verify })
  },
  // 订单查询(27)
  getMyOrder() {
    return service.get(`/myOrder`)
  },
  // 查询已评价(28)
  alreadyEvaluated() {
    return service.get(`/alreadyEvaluated`)
  },
  // 查询未评价(29)
  tobeEvaluated() {
    return service.get(`/tobeEvaluated`)
  },
  // 查询单条评论(30)
  evaluateOne( id, _id ) {
    return service.post(`/evaluateOne`, { id, _id })
  }


}