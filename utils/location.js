import QQMapWX from '../lib/qqmap-wx-jssdk.min';

/**
 * [腾讯位置服务](https://lbs.qq.com/qqmap_wx_jssdk/index.html)
 */
export default class QqMapWx {
  constructor(lat, lng) {
    this.config = {
      key: 'BRWBZ-Q3GHQ-BBQ5T-G6LC2-U3T4O-GWFCH',
      format: 'short',
      policy: 1,
      region: '广州市',
      lat,
      lng,
      location: (lat && lng) ? `${lat},${lng}` : '',
      poiOptions: 'policy=2'
    };
    this.SDK = new QQMapWX({key: this.config.key});
  }

  /**
   * 搜索附近
   * @param:
   *   keyword: string,
   *   callback: function
   */
  search(keyword) {
    return new Promise((resolve, reject) => {
      const {format, location } = this.config;
      this.SDK.search({
        keyword,
        address_format: format,
        location,
        success: (res, data) => {
          console.log('查询附近成功：', res, data);
          resolve(res, data);
        },
        fail: (error) => {
          console.log('查询附近失败：', res, data);
          reject(error);
        }
      })
    });
  };
  getSuggestion() {
    return new Promise((resolve, reject) => {
      const {format, location, region, policy } = this.config;
      this.SDK.getSuggestion({
        policy,
        region,
        location,
        success: (res, data) => {
          console.log('查询附近成功：', res, data);
          resolve(res, data);
        },
        fail: (error) => {
          console.log('查询附近失败：', error);
          reject(error);
        }
      })
    })
  };
  reverseGPS() {
    return new Promise(((resolve, reject) => {
      const {lat, lng, poiOptions} = this.config;
      this.SDK.reverseGeocoder({
        location: {
          latitude: lat,
          longitude: lng
        },
        poi_options: poiOptions,
        success: (res, data) => {
          console.log('解析GPS成功：', res, data);
          resolve(res, data);
        },
        fail: (error) => {
          console.log('解析GPS失败：', error);
          reject(error);
        }
      });
    }))
  };
  getCityList() {
    return new Promise((resolve, reject) => {
      this.SDK.getCityList({
        success: (res, data) => {
          console.log('省份数据：', res.result[0]); //打印省份数据
          console.log('城市数据：', res.result[1]); //打印城市数据
          console.log('区县数据：', res.result[2]); //打印区县数据
          resolve(res, data);
        },
        fail: (error) => {
          console.log('查询附近失败：', error);
          reject(error);
        }
      })
    })
  }
}
