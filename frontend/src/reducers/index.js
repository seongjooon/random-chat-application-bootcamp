import { combineReducers } from 'redux';
import { switchPageReducer } from './switchPageReducer';
import { enterMessageReducer } from './enterMessageReducer';
import { waitMessageReducer } from './waitMessageReducer';
import { messageStorageReducer } from './messageStorageReducer';
import { createRestartReducer } from './createRestartReducer';

export const initState = {
  username: '',
  hasPeer: false,
  enterMessage: '',
  messageList: [],
  createRestart: false
};

export default combineReducers({
  username: switchPageReducer,
  enterMessage: enterMessageReducer,
  hasPeer: waitMessageReducer,
  messageList: messageStorageReducer,
  createRestart: createRestartReducer
});
