import { daily } from './data';

Page({
  data: {
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    daily,
  },
  onLoad() {
  },
  navigateBack() {
    wx.navigateBack();
  },
});
