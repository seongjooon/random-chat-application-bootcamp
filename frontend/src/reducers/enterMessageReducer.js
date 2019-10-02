import { initState } from './index';

export const enterMessageReducer = (state = initState.enterMessage, action) => {
  switch (action.type) {
    case 'ENTER_MESSAGE':
      return action.username;
    default:
      return state;
  }
};
