import {getBarContentInfo, getStatusBarHeight} from "./utils/navbar_tool";
import appStore from './store/index';

export default {
  userInfo: null,
  systemInfo: wx.getSystemInfoSync(),
  contentPaddingTop: getStatusBarHeight() + getBarContentInfo().barContentHeight,
  store: appStore(),
}
