import { tickets } from './data';
import store from '../../store/index';

Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    tickets,
  },
  onLoad() {
    console.log(store.getState());
  },
  navigateBack() {
    wx.navigateBack();
  },
});
