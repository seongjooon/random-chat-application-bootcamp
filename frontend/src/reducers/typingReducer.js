import { initState } from './index';
import { IS_TYPING, STOP_TYPING } from '../constants/actionTypes';

export const typingReducer = (state = initState.isTyping, action) => {
  switch (action.type) {
    case IS_TYPING:
      return true;
    case STOP_TYPING:
      return false;
    default:
      return state;
  }
};
