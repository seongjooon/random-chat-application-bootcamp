const USER_QUEUE = [];
const ROOM_STORAGE = {};
const USER_NAMES = {};
const ALL_USERS = {};

const findPeerForLoneSocket = socket => {
  if (USER_QUEUE.length) {
    const PEER = USER_QUEUE.pop();
    const ROOM = `${socket.id}#${PEER.id}`;

    socket.join(ROOM);
    PEER.join(ROOM);

    ROOM_STORAGE[socket.id] = ROOM;
    ROOM_STORAGE[PEER.id] = ROOM;

    PEER.emit('enter message', { username: USER_NAMES[socket.id] });
    socket.emit('enter message', { username: USER_NAMES[PEER.id] });
  } else {
    USER_QUEUE.push(socket);
  }
};

function connectSocket(io) {
  io.on('connection', socket => {
    const { id } = socket.client;
    console.log(`User Connected: ${id}`);

    socket.on('join room', ({ username }) => {
      USER_NAMES[socket.id] = username;
      ALL_USERS[socket.id] = socket;
      findPeerForLoneSocket(socket);
    });

    socket.on('chat', messageData => {
      const room = ROOM_STORAGE[socket.id];
      io.to(room).emit('send message', messageData);
    });

    socket.on('leave room', () => {
      const room = ROOM_STORAGE[socket.id];
      socket.broadcast.to(room).emit('chat end');
      let peerId = room.split('#');
      peerId = peerId[0] === socket.id ? peerId[1] : peerId[0];
      findPeerForLoneSocket(allUsers[peerID]);
      findPeerForLoneSocket(socket);
    });

    // socket.on('disconnect', function() {
    //   const room = ROOM_STORAGE[socket.id];
    //   socket.broadcast.to(room).emit('chat end');
    //   let peerId = room.split('#');
    //   peerId = peerId[0] === socket.id ? peerId[1] : peerId[0];
    //   // current socket left, add the other one to the queue
    //   findPeerForLoneSocket(ALL_USERS[peerId]);
    // });
  });
}

module.exports = connectSocket;
