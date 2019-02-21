import {rpxToPx} from "../../utils/navbar_tool";

Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    rpx140px: rpxToPx(140),
  },
  noneTap() {},
  navigateBack() {
    wx.navigateBack();
  },
});
