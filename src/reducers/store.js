import { createStore } from 'redux';
import { combineReducers } from 'react-redux';
import sweetState from './sweet';
import savoryState from './savory';

const rootReducer = combineReducers({
  sweetState,
  savoryState,
});

export default createStore(rootReducer);