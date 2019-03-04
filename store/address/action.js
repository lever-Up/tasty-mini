import QqMapWx from '../../utils/location';
import {UPDATE_LOCATION} from './types';

// 获取地理位置
export const getLocation = function () {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      wx.getLocation({
        type: 'wgs84',
        success: (res) => {
          const {latitude, longitude} = res;
          const QqMap = new QqMapWx(latitude, longitude);
          const PromiseList = [
            QqMap.reverseGPS(),
            QqMap.getSuggestion(),
          ];
          Promise.all(PromiseList).then(([local, nears]) => {
            const location = {
              ...local,
              nears,
            };
            dispatch(updateUserLocation(location));
            resolve(location);
          })
        },
        fail: (err) => {
          reject(err);
        }
      })
    });
  };
};

export function updateUserLocation(arg) {
  return {
    type: UPDATE_LOCATION,
    params: arg,
  };
}
