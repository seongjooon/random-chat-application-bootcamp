import { initState } from './index';
import { WAIT_MESSAGE } from '../constants/actionTypes';

export const waitMessageReducer = (state = initState.hasPeer, action) => {
  switch (action.type) {
    case WAIT_MESSAGE:
      return action.hasPeer;
    default:
      return state;
  }
};
