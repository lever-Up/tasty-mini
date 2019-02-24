import {banners, classifies, productList, searchKeys, tickets} from 'data';

Page({
  data: {
    banners,
    bannerIndex: 0,
    productList,
    tickets,
    searchKeys,
    classifies,
  },
  onLoad() {
    // 关键字
    this.keyWord = searchKeys[0];
    // nav-bar 样式监听
    this.searchBarObserver = wx.createIntersectionObserver(this);
    this.searchBarObserver
      .relativeToViewport({top: 0})
      .observe('.banner-swipe', (res) => {
        const {bottom} = res.intersectionRect;
        if (bottom > 0) {
          const barStyle = {
            frontColor: '#ffffff',
            backgroundColor: '#000000',
          };
          wx.setNavigationBarColor(barStyle);
          this.setData({
            navBarBackground: 'transparent',
            navBarColor: barStyle.frontColor,
            shoppingBtnShow: false,
          })
        } else {
          const barStyle = {
            frontColor: '#000000',
            backgroundColor: '#ffffff',
          };
          wx.setNavigationBarColor(barStyle);
          this.setData({
            navBarBackground: barStyle.backgroundColor,
            navBarColor: barStyle.frontColor,
            shoppingBtnShow: true,
          })
        }
      });
  },
  onUnload() {
    if (this.searchBarObserver) this.searchBarObserver.disconnect();
  },
  changeBanner(e) {
    const {current} = e.detail;
    this.setData({
      bannerIndex: current,
    })
  },
  onKeyWordChange(e) {
    const {current} = e.detail;
    this.keyWord = this.data.searchKeys[current];
  },
  // 搜索
  navigateToSearch() {
    wx.navigateTo({
      url: `/pages/search/search?keyword=${this.keyWord}`,
    });
  },
  // 团购
  navigateToGroupBuying() {
    wx.navigateTo({
      url: '/pages_buy/group_buying/group_buying',
    });
  },
  // 现场
  navigateToLive() {
    wx.navigateTo({
      url: '/pages_news/live_broadcast/live_broadcast',
    });
  },
  // VIP
  navigateToVip() {
    wx.navigateTo({
      url: '/page_others/vip_room/vip_room',
    });
  },
  // 积分
  navigateToCreditRoom() {
    wx.navigateTo({
      url: '/page_others/credit_room/credit_room',
    });
  },
  // 商品列表
  navigateToSearchResult(e) {
    const {keyword} = e.currentTarget.dataset;
    if (keyword === '更多') {
      this.navigateToClassify(e);
      return;
    }
    wx.navigateTo({
      url: `/pages/search_result/search_result?keyword=${keyword}`,
    });
  },
  // 分类页
  navigateToClassify(e) {
    wx.switchTab({
      url: `/pages/classify/classify`,
    });
  },
  navigateToShoppingCar() {
    wx.navigateTo({
      url: '/pages/shopping_car/shopping_car'
    })
  }
});
