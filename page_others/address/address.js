import { tickets } from './data';

Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    tickets,
  },
  onLoad() {
    wx.authorize({
      scope: 'scope.userLocation',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
      },
      fail() {
        console.log('fail')
      }
    })
  },
  onShow() {
    const store = getApp().globalData.store;
    const { location } = store.getState();
    console.log(location.gps)
    this.setData({
      permission: location.gps,
    })
  },
  openSetting() {
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)
        res.authSetting = {
          "scope.userInfo": true,
          "scope.userLocation": true
        }
      }
    })
  },
  navigateBack() {
    wx.navigateBack();
  },
});
