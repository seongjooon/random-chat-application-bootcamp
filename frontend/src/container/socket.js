import { socket } from './App';

const configureSocket = dispatch => {
  socket.on('wait message', hasPeer => {
    dispatch({ type: 'WAIT_MESSAGE', hasPeer });
  });

  socket.on('typing', () => {
    dispatch({ type: 'IS_TYPING' });
  });

  socket.on('stopTyping', () => {
    dispatch({ type: 'STOP_TYPING' });
  });

  socket.on('enter message', ({ username }) => {
    dispatch({ type: 'ENTER_MESSAGE', username });
  });

  socket.on('send message', messageData => {
    dispatch({ type: 'SEND_MESSAGE', messageData });
  });

  socket.on('chat end', () => {
    leaveRoom();
    dispatch({ type: 'CREATE_RESTART', isRestart: true });
    // dispatch({ type: 'DELETE_MESSAGE_LIST' });
  });

  socket.on('disconnect', function(data) {
    // handle server/connection falling
    console.log('Connection fell or your browser is closing.');
  });
};

export const joinRoom = username => socket.emit('join room', { username });

export const leaveRoom = () => socket.emit('leave room');

export default configureSocket;
