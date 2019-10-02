import { connect } from 'react-redux';
import App from '../component/App';
import configureSocket, { joinRoom, leaveRoom } from './socket';
import io from 'socket.io-client';

export const socket = io.connect('http://localhost:5000');

const mapStateToProps = state => ({
  username: state.username,
  hasPeer: state.hasPeer,
  enterMessage: state.enterMessage,
  messageList: state.messageList,
  createRestart: state.createRestart
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
    sendMessage(messageData) {
      if (messageData) {
        socket.emit('chat', messageData);
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
