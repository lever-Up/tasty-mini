import {getStatusBarHeight} from "../../utils/navbar_tool";

Page({
  data: {
    paddingTop: getStatusBarHeight(),
  },
  onLoad: function () {
  },
  // 订单页
  navigateToOrders(e) {
    const {status} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages_buy/orders/orders?status=${status}`,
    });
  },
});
