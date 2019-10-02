import { initState } from './index';
import { SWITCH_PAGE } from '../constants/actionTypes';

export const switchPageReducer = (state = initState.username, action) => {
  switch (action.type) {
    case SWITCH_PAGE:
      return action.username;
    default:
      return state;
  }
};
