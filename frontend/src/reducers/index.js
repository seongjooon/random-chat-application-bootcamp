import { combineReducers } from 'redux';
import { switchPageReducer } from './switchPageReducer';
import { waitMessageReducer } from './waitMessageReducer';
import { messageStorageReducer } from './messageStorageReducer';

export const initState = {
  username: '',
  hasPeer: false,
  messageList: []
};

export default combineReducers({
  username: switchPageReducer,
  hasPeer: waitMessageReducer,
  messageList: messageStorageReducer
});
