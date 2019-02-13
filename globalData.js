import {getBarContentInfo, getStatusBarHeight} from "./utils/navbar_tool";

export default {
  userInfo: null,
  systemInfo: wx.getSystemInfoSync(),
  contentPaddingTop: getStatusBarHeight() + getBarContentInfo().barContentHeight,
}
