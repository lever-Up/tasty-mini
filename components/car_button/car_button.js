Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    visible: Boolean
  },
  data: {
  },
  attached() {
  },
  methods: {
    // 购物车
    navigateToShoppingCar() {
      wx.navigateTo({
        url: '/pages/shopping_car/shopping_car'
      })
    }
  }
});
