import { combineReducers } from 'redux';
import { switchPageReducer } from './switchPageReducer';
import { enterMessageReducer } from './enterMessageReducer';
import { waitMessageReducer } from './waitMessageReducer';
import { typingReducer } from './typingReducer';
import { messageStorageReducer } from './messageStorageReducer';

export const initState = {
  username: '',
  hasPeer: true,
  enterMessage: '',
  messageList: [],
  isTyping: false
};

export default combineReducers({
  username: switchPageReducer,
  enterMessage: enterMessageReducer,
  hasPeer: waitMessageReducer,
  isTyping: typingReducer,
  messageList: messageStorageReducer
});
