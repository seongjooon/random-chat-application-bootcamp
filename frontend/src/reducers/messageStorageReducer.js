import { initState } from './index';
import { SEND_MESSAGE, DELETE_MESSAGE_LIST } from '../constants/actionTypes';

export const messageStorageReducer = (
  state = initState.messageList,
  action
) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [...state, action.messageData];
    case DELETE_MESSAGE_LIST:
      return [];
    default:
      return state;
  }
};
