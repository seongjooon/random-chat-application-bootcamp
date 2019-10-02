import { combineReducers } from 'redux';
import { switchPageReducer } from './switchPageReducer';
import { enterMessageReducer } from './enterMessageReducer';
import { waitMessageReducer } from './waitMessageReducer';
import { messageStorageReducer } from './messageStorageReducer';

export const initState = {
  username: '',
  hasPeer: false,
  enterMessage: '',
  messageList: []
};

export default combineReducers({
  username: switchPageReducer,
  enterMessage: enterMessageReducer,
  hasPeer: waitMessageReducer,
  messageList: messageStorageReducer
});
