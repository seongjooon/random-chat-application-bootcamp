import { initState } from './index';

export const messageStorageReducer = (
  state = initState.messageList,
  action
) => {
  switch (action.type) {
    case 'ENTER_MESSAGE':
      return [...state, action.username];
    case 'SEND_MESSAGE':
      return [...state, action.messageData];
    default:
      return state;
  }
};
