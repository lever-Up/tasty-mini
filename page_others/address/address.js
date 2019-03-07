import {commonAddress} from './data';
import {getLocation} from '../../store/address/action';
import {rpxToPx} from "../../utils/navbar_tool";

Page({
  data: {
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    rpx190px: rpxToPx(190),
    commonAddress,
    slideVisible: false,
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
    const { location } = e.currentTarget.dataset;
    if (location) {
      this.setData({
        slideVisible: true,
        slideEdit: true,
        slideData: {
          tag: 'home',
          ...location,
        },
      })
    } else {
      this.setData({
        slideVisible: true,
        slideEdit: false,
        slideData: {
          tag: 'home',
        },
      })
    }
  },
  getPhoneNumber(e) {
    console.log('电话', e);
  },
  formSubmit(e) {
    console.log(e.detail.value)
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  navigateBack() {
    wx.navigateBack();
  },
});
