import {products} from './data';

Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    productsLeft: products.filter((d, i) => !(i % 2)),
    productsRight: products.filter((d, i) => i % 2),
  },
  onLoad() {
    // nav-bar 样式监听
    this.barObserver = wx.createIntersectionObserver(this);
    this.barObserver
      .relativeToViewport({top: -100})
      .observe('.credit-room', (res) => {
        const { bottom } = res.intersectionRect;
        if (bottom > 0) {
          const barStyle = {
            frontColor: '#ffffff',
            backgroundColor: '#000000',
          };
          wx.setNavigationBarColor(barStyle);
          this.setData({
            navBarBackground: 'transparent',
            navBarColor: barStyle.frontColor,
          })
        } else {
          const barStyle = {
            frontColor: '#000000',
            backgroundColor: '#ffffff',
          };
          wx.setNavigationBarColor(barStyle);
          this.setData({
            navBarBackground: barStyle.backgroundColor,
            navBarColor: barStyle.frontColor,
          })
        }
      })
  },
  onUnload() {
    if (this.barObserver) this.barObserver.disconnect();
  },
  navigateBack() {
    wx.navigateBack();
  },
})
