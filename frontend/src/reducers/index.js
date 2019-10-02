import { combineReducers } from 'redux';
import { switchPageReducer } from './switchPageReducer';
import { sendingEnterMessageReducer } from './sendingEnterMessageReducer';
import { messageStorageReducer } from './messageStorageReducer';

export const initState = {
  username: '',
  enterMessage: [],
  messageList: []
};

export default combineReducers({
  username: switchPageReducer,
  enterMessage: sendingEnterMessageReducer,
  messageList: messageStorageReducer
});
