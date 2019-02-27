import { combineReducers } from 'redux';
import initState from './state';
import { GET_LOCATION } from './action';
import { updateState } from '../tool';

export default function getLocation(state = initState, action) {
  const { type } = action;
  switch (type) {
    case GET_LOCATION:
      return state;
  }
}
