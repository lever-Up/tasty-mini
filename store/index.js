import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './address/reducer';

const store = createStore(combineReducers({
  locationReducer,
}), applyMiddleware(thunk));

export default store;
