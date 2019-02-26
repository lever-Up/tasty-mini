import { tickets } from './data'
Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    tickets,
  },
  navigateBack() {
    wx.navigateBack();
  },
})
