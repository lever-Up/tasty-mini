import {getStatusBarHeight} from "../../utils/navbar_tool";
import { tickets } from './data';

Page({
  data: {
    paddingTop: getStatusBarHeight(),
    userInfo: getApp().globalData.userInfo,
    tickets
  },
  onLoad: function () {
    console.log(getApp().globalData.userInfo)
  },
  getUserInfo(res) {
    const { userInfo } = res.detail;
    if (userInfo) {
      getApp().globalData.userInfo = userInfo;
      this.setData({
        userInfo,
      })
    }
  },
  // 订单页
  navigateToOrders(e) {
    const {status} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages_buy/orders/orders?status=${status}`,
    });
  },
  // 优惠券页
  navigateToTickets() {
    wx.navigateTo({
      url: `/pages_buy/orders/orders?status=${status}`,
    });
  }
});
