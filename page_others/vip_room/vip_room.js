import {rpxToPx} from "../../utils/navbar_tool";
import {banners} from 'data';

Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    rpx140px: rpxToPx(140),
    banners,
    currentBannerIndex: 1,
  },
  handleSwipeChange(e) {
    const { current } = e.detail;
    this.setData({ currentBannerIndex: current + 1 });
  },
  navigateBack() {
    wx.navigateBack();
  },
});
