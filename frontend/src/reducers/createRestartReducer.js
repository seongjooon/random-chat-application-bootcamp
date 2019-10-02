import { initState } from './index';
import { CREATE_RESTART } from '../constants/actionTypes';

export const createRestartReducer = (
  state = initState.createRestart,
  action
) => {
  switch (action.type) {
    case CREATE_RESTART:
      return action.isRestart;
    default:
      return state;
  }
};
