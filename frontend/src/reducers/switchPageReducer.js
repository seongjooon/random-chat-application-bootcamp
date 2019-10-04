import { initState } from './index';
import { SWITCH_PAGE, HOME } from '../constants/actionTypes';

export const switchPageReducer = (state = initState.username, action) => {
  switch (action.type) {
    case HOME:
      return '';
    case SWITCH_PAGE:
      return action.username;
    default:
      return state;
  }
};
