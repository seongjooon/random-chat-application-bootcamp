import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import User from './User';
import Room from './Room';


import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

class App extends Component {
  constructor() {
    super();
    this.state = { nickname: '', msg: '', chat: [] };
  }

  componentDidMount() {
    socket.on('chat message', ({ nickname, msg }) => {
      this.setState({
        chat: [...this.state.chat, { nickname, msg }]
      });
    });
  }

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onMessageSubmit = () => {
    const { nickname, msg } = this.state;
    socket.emit('chat message', { nickname, msg });
    this.setState({ msg: '' });
  };

  onUserEnter = () => {

  }

  renderChat() {
    const { chat } = this.state;
    return chat.map(({ nickname, msg }, idx) => (
      <div key={idx}>
        <span style={{ color: 'green' }}>{nickname}: </span>

        <span>{msg}</span>
      </div>
    ));
  }

  render() {
    const { msg, nickname } = this.state;
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <User
              nickname={nickname}
              onTextChange={this.onTextChange}
              onUserEnter={this.onUserEnter}
            />
          )}
        />
        <Route
          exact
          path='/room'
          render={() => (
            <Room
              msg={msg}
              onTextChange={this.onTextChange}
              onMessageSubmit={this.onMessageSubmit}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
