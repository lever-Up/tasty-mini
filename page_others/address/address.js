import { tickets } from './data';
import {getLocation} from '../../store/address/action';

Page({
  data:{
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    tickets,
  },
  onLoad() {
    const store = getApp().globalData.store;
    console.log(store.getState())
  },
  navigateBack() {
    wx.navigateBack();
  },
});
