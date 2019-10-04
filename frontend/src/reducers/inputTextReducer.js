import { initState } from './index';
import { INPUT_TEXT, SEND_MESSAGE } from '../constants/actionTypes';

export const inputTextReducer = (state = initState.inputText, action) => {
  switch (action.type) {
    case INPUT_TEXT:
      return action.text;
    case SEND_MESSAGE:
      return '';
    default:
      return state;
  }
};
