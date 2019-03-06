import {commonAddress} from './data';
import {getLocation} from '../../store/address/action';
import {rpxToPx} from "../../utils/navbar_tool";

Page({
  data: {
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    rpx190px: rpxToPx(190),
    commonAddress,
  },
  onLoad() {
    const { store } = getApp().globalData;
    this.unsubscribe = store.subscribe(() => {
      const { location } = store.getState();
      this.setData({
        location,
      })
    });
  },
  onUnload() {
    this.unsubscribe();
  },
  getLocation() {
    const { store } = getApp().globalData;
    store.dispatch(getLocation(true));
  },
  openSlide(e) {
    const { location, edit } = e.detail;
    this.setData({
      slideVisible: true,
      slideEdit: !!edit,
      slideData: location,
    })
  },
  navigateBack() {
    wx.navigateBack();
  },
});
