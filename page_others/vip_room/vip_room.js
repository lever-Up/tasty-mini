import {rpxToPx} from "../../utils/navbar_tool";
import {banners} from 'data';

Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    rpx140px: rpxToPx(140),
    banners,
    currentBannerIndex: 1,
  },
  onLoad() {
    // nav-bar 样式监听
    this.barObserver = wx.createIntersectionObserver(this);
    this.barObserver
      .relativeToViewport({top: -100})
      .observe('.vip-room', (res) => {
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
            fixedBottom: true,
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
            fixedBottom: false,
          })
        }
      })
  },
  onUnload() {
    if (this.barObserver) this.barObserver.disconnect();
  },
  handleSwipeChange(e) {
    const { current } = e.detail;
    this.setData({ currentBannerIndex: current + 1 });
  },
  navigateBack() {
    wx.navigateBack();
  },
});
