Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(visible) {
        console.log(visible)
        if(visible) {
          const animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
          })
        }
      }
    }
  },
  data: {},
  lifetimes: {},
  methods: {
    hideDrawer(){
      console.log('hideDrawer')
      this.setData({
        visible: false
      })
    }
  }
});
