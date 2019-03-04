import { updateState } from '../tool';
import initState from './state';
import { GET_LOCATION, UPDATE_LOCATION } from './types';

export default function getLocation(state = initState, action) {
  const { type, params = {} } = action;
  switch (type) {
    case GET_LOCATION:
      return state;
    case UPDATE_LOCATION:
      return updateState(state, params);
    default:
      return state;
  }
}
