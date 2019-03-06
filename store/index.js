import { createStore, applyMiddleware, combineReducers } from '../lib/redux.min';
import thunk from '../lib/redux-thunk.min';
import location from './address/reducer';
import user from './user/reducer';

export default function appStore() {
  return createStore(combineReducers({
    location,
    user,
  }), applyMiddleware(thunk));
}
