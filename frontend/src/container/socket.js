import { socket } from './App';

const configureSocket = dispatch => {
  socket.on('enter message', ({ username }) => {
    dispatch({ type: 'ENTER_MESSAGE', username });
  });

  socket.on('send message', messageData => {
    dispatch({ type: 'SEND_MESSAGE', messageData });
  });
};

export const joinRoom = username => socket.emit('join room', { username });

export default configureSocket;
