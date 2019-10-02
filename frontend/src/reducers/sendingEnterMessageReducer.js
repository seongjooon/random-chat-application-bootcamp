import { initState } from './index';

export const sendingEnterMessageReducer = (
  state = initState.enterMessage,
  action
) => {
  switch (action.type) {
    case 'ENTER_MESSAGE':
      return [...state, action.username];
    default:
      return state;
  }
};
