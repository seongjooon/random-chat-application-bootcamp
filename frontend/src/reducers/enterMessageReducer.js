import { initState } from './index';
import { ENTER_MESSAGE } from '../constants/actionTypes';

export const enterMessageReducer = (state = initState.enterMessage, action) => {
  switch (action.type) {
    case ENTER_MESSAGE:
      return action.username;
    default:
      return state;
  }
};
