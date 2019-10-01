if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

const USER_QUEUE = [];
const ROOM_STORAGE = {};

io.on('connection', socket => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  const { id } = socket.client;
  console.log(`User Connected: ${id}`);
  socket.leave(id);
  socket.on('join room', ({ username }) => {
    if (USER_QUEUE.length) {
      const PEER = USER_QUEUE.pop();
      const ROOM = `${socket.id}#${PEER.id}`;
  
      socket.join(ROOM);
      PEER.join(ROOM);
  
      ROOM_STORAGE[socket.id] = ROOM;
      ROOM_STORAGE[PEER.id] = ROOM;
  
      // PEER.emit('chat start', { name: names[socket.id], ROOM });
      // socket.emit('chat start', { name: names[PEER.id], ROOM });
    } else {
      USER_QUEUE.push(socket);
    }
    // socket.join(firstUser.id + socket.id, () => {
    //   io.to(firstUser.id + socket.id).emit(username);
    // });
    console.log(io.of('/').adapter.rooms);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listen on *: ${PORT}`));

module.exports = app;
