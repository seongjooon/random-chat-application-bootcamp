import { initState } from './index';

export const messageStorageReducer = (state = initState.messageList, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return [...state, action.messageData];
    default:
      return state;
  }
};
