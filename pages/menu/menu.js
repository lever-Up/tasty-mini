import { searchKeys, hotMenus } from './data';

Page({
  data: {
    contentPaddingTop: getApp().globalData.contentPaddingTop,
    searchKeys,
    hotMenus,
    hotMenusLeft: hotMenus.filter((d, i) => !(i % 2)),
    hotMenusRight: hotMenus.filter((d, i) => i % 2),
    bannerIndex: 0,
  },
  onLoad: function () {
  },
  onKeyWordChange(e) {
    const { current } = e.detail;
    this.keyWord = this.data.searchKeys[current];
  },
  hotMenuBannerChange(e) {
    const { current } = e.detail;
    if (current !== this.data.bannerIndex) {
      this.setData({
        bannerIndex: current,
      });
    }
  },
  // 搜索
  navigateToSearch() {
    wx.navigateTo({
      url: `/pages/search/search?keyword=${this.keyWord}`,
    });
  },
});
