// 模块化
// export defalut 只能导出一次
// export 可以导出多次
export default {
  goDetail(index) {
    // 判断本地有没有最近浏览的数组
    if (!localStorage.views) {
      let arr = []
      arr.push(index)
      localStorage.setItem('views', JSON.stringify(arr))
    } else {
      let arr = JSON.parse(localStorage.views)
      arr.push(index)
      localStorage.setItem('views', JSON.stringify(arr))
    }
  }
}