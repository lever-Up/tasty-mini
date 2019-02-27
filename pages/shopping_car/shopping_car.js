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
    const checkProducts = products.filter(p => p.check);
    if (!checkProducts.length) {
      wx.nextTick(() => {
        this.setData({
          totalPrice: 0,
        });
      });
      return;
    }
    const totalPrice = checkProducts
      .map(({vipPrice, num}) => vipPrice * num)
      .reduce((total, price) => total + price)
      .toFixed(1);
    wx.nextTick(() => {
      this.setData({
        totalPrice,
      })
    });
  },
  checkAll() {
    const { checkAll, products } = this.data;

    products.forEach(d => d.check = !checkAll);
    // 计算价格
    this.setData({
      checkAll: !checkAll,
      products,
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
  // 优惠券页
  navigateToTickets() {
    wx.navigateTo({
      url: `/page_others/ticket_room/ticket_room`,
    });
  },
  // 选择收货地址
  navigateToAddress() {
    wx.navigateTo({
      url: `/page_others/address/address`,
    });
  },

});
