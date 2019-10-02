import { connect } from 'react-redux';
import App from '../component/App';
import configureSocket, { joinRoom } from './socket';
import io from 'socket.io-client';

export const socket = io.connect('http://localhost:5000');

const mapStateToProps = state => ({
  username: state.username,
  hasPeer: state.hasPeer,
  enterMessage: state.enterMessage,
  messageList: state.messageList
});

const mapDispatchToProps = dispatch => {
  configureSocket(dispatch);
  return {
    switchPage(username, isNext) {
      if (username) {
        if (isNext) {
          socket.emit('leave room'); //실행되면서 실제로 방을 퇴장하게됨
          // 여기서 대화내용 삭제
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
