import {getStatusBarHeight} from "../../utils/navbar_tool";

Page({
  data: {
    paddingTop: getStatusBarHeight(),
  },
  onLoad: function () {
  }
});
