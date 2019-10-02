import { socket } from './App';

const configureSocket = dispatch => {
  socket.on('wait message', hasPeer => {
    dispatch({ type: 'WAIT_MESSAGE', hasPeer });
  });

  socket.on('enter message', ({ username }) => {
    dispatch({ type: 'ENTER_MESSAGE', username });
  });

  socket.on('send message', messageData => {
    dispatch({ type: 'SEND_MESSAGE', messageData });
  });

  socket.on('chat end', ({ username, room }) => {
    socket.emit('leave room');
  });

  socket.on('disconnect', function(data) {
    // handle server/connection falling
    console.log('Connection fell or your browser is closing.');
  });
};

export const joinRoom = username => socket.emit('join room', { username });

export default configureSocket;
