import { connect } from 'react-redux';
import App from '../component/App';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const mapStateToProps = state => ({
  username: state.switchPageReducer
});

const mapDispatchToProps = dispatch => ({
  switchPage(username) {
    dispatch({ type: 'SWITCH_PAGE', username });
    socket.emit('join room', { username });
  },
  sendMessage(message) {
    dispatch({ type: 'SEND_MESSAGE', message });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
