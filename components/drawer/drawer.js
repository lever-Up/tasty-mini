const ModeClass = {
  left: {
    in: 'slideInLeft',
    out: 'slideOutLeft',
    class: 'slide-left',
  },
  right: {
    in: 'slideInRight',
    out: 'slideOutRight',
    class: 'slide-right'
  },
  top: {
    in: 'slideInDown',
    out: 'slideOutUp',
    class: 'slide-top'
  },
  bottom: {
    in: 'slideInUp',
    out: 'slideOutDown',
    class: 'slide-bottom'
  }
};
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    width: String,
    height: String,
    direction: String,
    mode: {
      type: String,
      value: 'left'
    },
    visible: {
      type: Boolean,
      value: false,
      observer(visible) {
        this.setData({
          open: visible,
        })
      }
    }
  },
  data: {
    ModeClass,
  },
  lifetimes: {
  },
  methods: {
    close() {
      this.closeFlag = true;
      this.setData({
        open: false,
      })
    },
    hideDrawer(){
      if(this.closeFlag) {
        this.setData({
          visible: false,
        });
        this.closeFlag = false;
      }
    },
    voidTap() {
      return false;
    },
  }
});
