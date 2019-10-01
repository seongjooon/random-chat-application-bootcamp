import { combineReducers } from 'redux';
import { switchPageReducer } from './switchPageReducer';

export const initState = {
  username: ''
};

export default combineReducers({
  switchPageReducer
});
