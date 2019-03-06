import {UPDATE_USER_INFO} from './types';

export function updateUserInfo(arg) {
  return {
    type: UPDATE_USER_INFO,
    params: arg,
  };
}
