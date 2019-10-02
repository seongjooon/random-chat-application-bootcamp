import { combineReducers } from 'redux';
import { switchPageReducer } from './switchPageReducer';
import { messageStorageReducer } from './messageStorageReducer';

export const initState = {
  username: '',
  messageList: []
};

export default combineReducers({
  username: switchPageReducer,
  messageList: messageStorageReducer
});
