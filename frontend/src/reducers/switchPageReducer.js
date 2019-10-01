import { initState } from './index';

export const switchPageReducer = (state = initState.username, action) => {
  switch (action.type) {
    case 'SWITCH_PAGE':
      return state + action.username;
    default:
      return state;
  }
};
