import { initState } from './index';
import { IS_TYPING, SEND_MESSAGE } from '../constants/actionTypes';

export const typingReducer = (state = initState.isTyping, action) => {
  switch (action.type) {
    case IS_TYPING:
      return 'is typing..';
    case SEND_MESSAGE:
      return '';
    default:
      return state;
  }
};
