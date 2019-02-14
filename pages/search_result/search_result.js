import { productList, hotMenus } from './data'
import {getBarContentInfo, getStatusBarHeight} from "../../utils/navbar_tool";

const contentPaddingTop = getStatusBarHeight() + getBarContentInfo().barContentHeight;
Page({
  data: {
    contentPaddingTop,
    scrollHeight: getApp().globalData.systemInfo.screenHeight - contentPaddingTop,
    currentTab: 'food',
    shoppingBtnShow: true,
    productList,
    hotMenusLeft: hotMenus.filter((d, i) => !(i % 2)),
    hotMenusRight: hotMenus.filter((d, i) => i % 2),
  },
  onLoad() {
  },
  changeTab(e) {
    const { tab } = e.currentTarget.dataset;
    if (tab !== this.data.currentTab) {
      this.setData({
        currentTab: tab,
        shoppingBtnShow: tab === 'food',
      })
    }
  },
  changeContent(event) {
    const { current, source } = event.detail;
    if (source) {
      this.setData({
        currentTab: current ? 'menus' : 'food',
        shoppingBtnShow: !current,
      })
    }
  },
  // 刷新商品列表
  refreshProducts() {

  },
  loadMoreProducts() {

  },
  // 刷新商品列表
  refreshMenus() {

  },
  loadMoreMenus() {

  },
  navigateBack(){
    wx.navigateBack();
  },
  navigateToShoppingCar() {
    wx.navigateTo({
      url: '/pages/shopping_car/shopping_car'
    })
  }
});
