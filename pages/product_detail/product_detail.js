import {hotMenus} from "../search_result/data";
import {testImages} from "../friends/data";
import {images} from "./data";

const Menus = [
  {id: 'food', name: '详情'},
  {id: 'menus', name: '菜单'},
  {id: 'commons', name: '评价'},
];
const { contentPaddingTop, systemInfo } = getApp().globalData;

Page({
  data:{
    Menus,
    contentPaddingTop,
    scrollHeight: systemInfo.screenHeight - contentPaddingTop,
    windowWidth: systemInfo.windowWidth,

    productImageIndex: 1,
    currentTab: 'food',
    swipeIndex: 0,
    navBackground: 'translate',

    testImages,
    menus: hotMenus,

    images,
    imgSize: [],
    imgLoading: true,
  },
  onLoad() {
    this.imgSizes = [];
  },
  changeTab(e) {
    const { tab } = e.currentTarget.dataset;
    if (tab !== this.data.currentTab) {
      this.setData({
        currentTab: tab,
      })
    }
  },
  changeContent(event) {
    const { current, source } = event.detail;
    if (source) {
      this.setData({
        currentTab: Menus[current].id,
      })
    }
  },
  // 素材图片准备
  imageLoaded(e) {
    const {height = 500} = e.detail;
    this.imgSizes.push({
      height,
    });
    if(this.imgSizes.length === this.data.images.length) {
      this.setData({
        imgSize: this.imgSizes,
      }, () => {
        setTimeout(() => {
          this.setData({
            imgLoading: false,
          })
        }, 500)
      });
    }
  },
  changeProductImage(index) {
    this.setData({
      productImageIndex: ++index,
    })
  },
  loadMoreProducts() {
    console.log('load more products');
  },
  // 回退
  navigateBack() {
    wx.navigateBack();
  },
});
