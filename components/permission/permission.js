import {getLocation} from '../../store/address/action';
import {updateUserInfo} from '../../store/user/action';

const Permissions = {
  location: 'scope.userLocation', // 地理位置
  userInfo: 'scope.userInfo', // 用户信息
  address: 'scope.address', // 通讯地址
  invoiceTitle: 'scope.invoiceTitle', // 发票抬头
  invoice: 'scope.invoice', // 获取发票
};

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    openType: String, // scope.userLocation、
  },
  data: {
    permission: false,
    Permissions,
  },
  pageLifetimes: {
    show() {
      const { openType } = this.data;
      wx.getSetting({
        success: (res) => {
          const { authSetting } = res;
          if (authSetting[openType]) {
            this.setData({ permission: true });
            switch (openType) {
              case Permissions.location:
                this.getLocation();
              default:
                void 0;
            }
          }
        }
      })
    },
  },
  lifetimes: {
    created() {},
    attached() {},
    ready() {},
    detached() {},
    error() {},
    moved() {console.log('move...move...move...')}
  },
  methods: {
    getUserInfo(e) {
      const { userInfo } = e.detail;
      const { store } = getApp().globalData;
      store.dispatch(updateUserInfo(userInfo));
    },
    getLocation() {
      const { store } = getApp().globalData;
      store.dispatch(getLocation());
    },
  }
});
