import {rpxToPx} from '../../utils/navbar_tool';
import {orders} from './data';

const TabType = [{
  name: '全部', value: 'all',
}, {
  name: '代付款', value: 'pay',
}, {
  name: '待发货', value: 'send',
}, {
  name: '配送中', value: 'onWay',
}, {
  name: '已完成', value: 'finish',
}];

Page({
  data: {
    TabType,
    currentTab: 'all',
    contentHeight: getApp().globalData.systemInfo.screenHeight - getApp().globalData.contentPaddingTop - rpxToPx(100),
    orders,
  },
  onLoad(query) {
    const { status } = query;
    this.setData({
      currentTab: status,
    })
  },
  onReachBottom() {
    console.error('到底了');
  },
  onChangeTab(e) {
    const {tab} = e.currentTarget.dataset;
    const {currentTab} = this.data;
    if (currentTab !== tab) {
      this.setData({
        currentTab: tab,
      });
    }
  },
  navigateBack() {
    wx.navigateBack();
  }
});
