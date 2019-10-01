import React, { Component } from 'react';
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
    if (e.target.name === 'msg') console.log(this.state.nickname);
    this.setState({ [e.target.name]: e.target.value });
  };

  onMessageSubmit = () => {
    const { nickname, msg } = this.state;
    socket.emit('chat message', { nickname, msg });
    this.setState({ msg: '' });
  };

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
      <div>
        <span>Nickname</span>
        <input
          name='nickname'
          onChange={e => this.onTextChange(e)}
          value={nickname}
        />
        <span>Message</span>
        <input name='msg' onChange={e => this.onTextChange(e)} value={msg} />
        <button onClick={this.onMessageSubmit}>Send</button>
        <div>{this.renderChat()}</div>
      </div>
    );
  }
}

export default App;
