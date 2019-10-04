import { initState } from './index';

import { switchPageReducer } from './switchPageReducer';
import { enterMessageReducer } from './enterMessageReducer';
import { typingReducer } from './typingReducer';
import { inputTextReducer } from './inputTextReducer';
import { messageStorageReducer } from './messageStorageReducer';

describe('reducers', () => {
  it('should return init value', () => {
    expect(initState).toHaveProperty('username');
    expect(initState).toHaveProperty('hasPeer');
    expect(initState.isTyping).toEqual(false);
    expect(initState.messageList).toEqual([]);
    expect(switchPageReducer(undefined, {})).toEqual(initState.username);
    expect(enterMessageReducer(undefined, {})).toEqual(initState.enterMessage);
    expect(typingReducer(undefined, {})).toEqual(initState.isTyping);
    expect(inputTextReducer(undefined, {})).toEqual(initState.inputText);
    expect(messageStorageReducer(undefined, {})).toEqual(initState.messageList);
  });
  describe('data of action should return equal value', () => {
    it('in switchPageReducer', () => {
      expect(
        switchPageReducer(initState.username, {
          type: 'SWITCH_PAGE',
          username: 'heeyeon'
        })
      ).toEqual('heeyeon');
      expect(
        switchPageReducer('heeyeon', {
          type: 'HOME'
        })
      ).toEqual('');
    });

    it('in messageStorageReducer', () => {
      expect(
        messageStorageReducer(initState.messageList, {
          type: 'SEND_MESSAGE',
          messageData: { username: 'heeyeon', message: 'luvu' }
        })
      ).toEqual([{ username: 'heeyeon', message: 'luvu' }]);
      expect(
        messageStorageReducer([{ username: 'heeyeon', message: 'luvu' }], {
          type: 'SEND_MESSAGE',
          messageData: { username: 'kim', message: 'metoo' }
        })
      ).toEqual([
        { username: 'heeyeon', message: 'luvu' },
        { username: 'kim', message: 'metoo' }
      ]);
    });

    it('in typingReducer', () => {
      expect(
        typingReducer(initState.isTyping, {
          type: 'IS_TYPING'
        })
      ).toEqual('typing..');
      expect(
        typingReducer('typing..', {
          type: 'SEND_MESSAGE'
        })
      ).toEqual('');
    });
  });
});
