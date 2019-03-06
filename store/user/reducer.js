import { updateState } from '../tool';
import initState from './state';
import { UPDATE_USER_INFO } from './types';

export default function getLocation(state = initState, action) {
  const { type, params = {} } = action;
  switch (type) {
    case UPDATE_USER_INFO:
      return updateState(state, params);
    default:
      return state;
  }
}
