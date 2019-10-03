import { connect } from 'react-redux';
import App from '../component/App';
import configureSocket, { joinRoom, leaveRoom } from './socket';
import io from 'socket.io-client';

export const socket = io.connect('http://localhost:5000');

const mapStateToProps = state => ({
  username: state.username,
  hasPeer: state.hasPeer,
  enterMessage: state.enterMessage,
  isTyping: state.isTyping,
  messageList: state.messageList,
  restartButton: state.restartButton
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
    sendMessage(messageData) {
      if (messageData) {
        socket.emit('send', messageData);
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
