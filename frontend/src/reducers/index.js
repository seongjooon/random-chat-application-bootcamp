import { combineReducers } from 'redux';
import { switchPageReducer } from './switchPageReducer';
import { enterMessageReducer } from './enterMessageReducer';
import { waitMessageReducer } from './waitMessageReducer';
import { typingReducer } from './typingReducer';
import { messageStorageReducer } from './messageStorageReducer';
import { createRestartReducer } from './createRestartReducer';

export const initState = {
  username: '',
  hasPeer: true,
  enterMessage: '',
  messageList: [],
  createRestart: false,
  isTyping: false
};

export default combineReducers({
  username: switchPageReducer,
  enterMessage: enterMessageReducer,
  hasPeer: waitMessageReducer,
  isTyping: typingReducer,
  messageList: messageStorageReducer,
  restartButton: createRestartReducer
});
