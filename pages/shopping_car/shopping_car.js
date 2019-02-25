import { products } from './data';
import { productList } from '../index/data';

Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    products,
    productList,
    checkAll: true,
  },
  onLoad() {
    this.countPrice();
  },
  plus(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({
      [`products[${[index]}].num`]: ++products[index].num,
    });
    this.countPrice();
  },
  minus(e) {
    const { index } = e.currentTarget.dataset;
    this.setData({
      [`products[${[index]}].num`]: --products[index].num,
    });
    this.countPrice();
  },
  countPrice(){
    const { products } = this.data;
    const totalPrice = products.filter(p => p.check)
      .map(d => d.vipPrice * d.num)
      .reduce((total, price) => total + price)
      .toFixed(1);
    wx.nextTick(() => {
      this.setData({
        totalPrice,
      })
    });
  },
  checkAll() {
    const { checkAll } = this.data;
    // 计算价格
    this.setData({
      checkAll: !checkAll,
    });
    this.countPrice();
  },
  checkItem(e) {
    const { index, check } = e.currentTarget.dataset;
    // 取消选择
    if (check) {
      this.setData({
        checkAll: false,
        [`products[${[index]}].check`]: false,
      });
      this.countPrice();
      return;
    }
    this.setData({
      [`products[${[index]}].check`]: true,
    }, () => {
      this.countPrice();
      const { products, checkAll } = this.data;
      const isCheckAll = !products.find(d => !d.check);
      if (isCheckAll !== checkAll) {
        this.setData({
          checkAll: isCheckAll
        })
      }
    });
  },
  navigateBack() {
    wx.navigateBack();
  },
});
