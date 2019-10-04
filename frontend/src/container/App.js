import { connect } from 'react-redux';
import App from '../component/App';
import configureSocket, { joinRoom, leaveRoom } from './socket';
import io from 'socket.io-client';
import { SERVER_URL } from '../constants/constant';

export const socket = io.connect(SERVER_URL);

const mapStateToProps = state => ({
  username: state.username,
  hasPeer: state.hasPeer,
  enterMessage: state.enterMessage,
  isTyping: state.isTyping,
  messageList: state.messageList,
  inputBoxText: state.inputBoxText
});

const mapDispatchToProps = dispatch => {
  configureSocket(dispatch);
  return {
    switchPage(username, isNext) {
      if (username) {
        if (isNext) {
          dispatch({ type: 'DELETE_MESSAGE_LIST' });
          leaveRoom();
        }
        dispatch({ type: 'SWITCH_PAGE', username });
        joinRoom(username);
      }
    },
    handleTypingAction() {
      socket.emit('is typing');
    },
    removeInputBox(text) {
      dispatch({ type: 'INPUT_TEXT', text });
    },
    sendMessage(messageData) {
      if (messageData) {
        socket.emit('send', messageData);
      }
    },
    exitChatRoom() {
      dispatch({ type: 'HOME' });
      socket.emit('exit room');
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
