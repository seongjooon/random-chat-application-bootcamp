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

  // socket.on('connect', function(data) {
  //   // we are connected, should send our name
  //   connected = true;
  //   if (username) socket.emit('login', { username: username });
  // });

  // socket.on('chat start', function(data) {
  //   room = data.room;
  //   show_chat_window(data.name); // some method which will show chat window
  // });
  // socket.on('chat end', function(data) {
  //   hide_chat_window(); // this will close chat window and alert user that the peer ended chat
  //   socket.leave(room); // it's possible to leave from both server and client, hoever it is better to be done by the client in this case
  //   room = '';
  // });
  socket.on('disconnect', function(data) {
    // handle server/connection falling
    console.log('Connection fell or your browser is closing.');
  });
};

export const joinRoom = username => socket.emit('join room', { username });

export default configureSocket;
