/**
 * 动画类 TODO
 */
export default class SimpleAnimation {
  constructor(style = 'fadeOut', duration = 400, timingFunction = 'linear', delay = 0) {
    this.$style = 'fadeOut';
    this.duration = duration;
    this.timingFunction = timingFunction;
    this.delay = delay;
    this.animation = wx.createAnimation({duration, timingFunction, delay,});
    this.init(style);
  }
  init(style) {
    switch (style) {
      case 'fadeOut':
        // this.fadeOut();
    }
  }
  /* 淡出 */
  fadeOut() {
    this.animation.opacity(1).opacity(0).step();
    return this.animation.export();
  }
  /* 淡入 */
  fadeIn() {
    this.animation.opacity(0).opacity(1).step();
    return this.animation.export();
  }
}
