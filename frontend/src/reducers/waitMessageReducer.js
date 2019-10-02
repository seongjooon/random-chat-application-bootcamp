import { initState } from './index';

export const waitMessageReducer = (state = initState.hasPeer, action) => {
  switch (action.type) {
    case 'WAIT_MESSAGE':
      return action.hasPeer;
    default:
      return state;
  }
};
