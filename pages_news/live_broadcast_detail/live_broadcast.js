import { daily } from './data';

Page({
  data: {
    daily,
  },
  onLoad() {
  },
  navigateBack() {
    wx.navigateBack();
  },
})
