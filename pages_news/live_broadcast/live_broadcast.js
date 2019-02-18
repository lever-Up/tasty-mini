import { daily } from './data';

Page({
  data: {
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    daily,
    current: 0,
  },
  onLoad() {
  },
  nextSource(e) {
    const { current } = e.detail;
    this.setData({
      current
    });
    if (this.videoContext) {
      this.videoContext.pause();
      this.videoContext.stop();
    }
    if (daily[current].video) {
      this.videoContext = wx.createVideoContext(`videoContext${current}`);
      this.videoContext.play();
    }
  },
  tapLike(e) {
    wx.showToast({
      title: '点赞',
      icon: 'none'
    });
  },
  tapShare(e) {
    wx.showToast({
      title: '分享',
      icon: 'none'
    });
  },
  tapSuggest(e) {
    wx.showToast({
      title: '推荐商品',
      icon: 'none'
    });
  },
  messageChange(e) {
    const {source } = e.detail;
    if (source) {
      return;
    }
  },
  navigateBack() {
    wx.navigateBack();
  },
});
