export default {
  latitude: 23.08331,    // 纬度
  longitude: 23.08331,   // 经度

  province: '广东',      // 省份
  city: '广州市',        // 市
  district: '海珠区',    // 区
  address: '未知',       // 地址
  street: '',           // 街道
  street_number: '',    // 街道门牌

  nears: [],           // 附近
  adcode: '',          // 邮编
  gps: false,          // 是否进行gps定位
  expires: 1 * 60 * 60 * 1000,  // 有效时间1小时(毫秒)
  timestamp: Date.now(), // 时间戳
  updateTime: Date.now() + 1 * 60 * 60 * 1000, // 更新时间
}
