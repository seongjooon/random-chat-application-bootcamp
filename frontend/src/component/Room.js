import React, { useState } from 'react';
import './Room.scss';

const Room = ({
  username,
  hasPeer,
  enterMessage,
  isTyping,
  messageList,
  sendMessage,
  switchPage,
  handleTypingAction,
  exitChatRoom
}) => {
  const [message, setMessage] = useState('');

  return (
    <>
      <div className='room-root'>
        <div className='header-button-box'>
          <input
            className='exit-button'
            type='submit'
            onClick={() => exitChatRoom()}
            value='Exit'
          />
          <input
            className='next-button'
            type='submit'
            onClick={() => switchPage(username, true)}
            value='Next'
          />
        </div>
        <div>
          {!hasPeer ? <div>W8...</div> : <div>Entered {enterMessage}</div>}
        </div>
        <div>{isTyping}</div>
        <div>
          {messageList.length
            ? messageList.map((message, index) => (
                <div className='message-element' key={index}>
                  <div>
                    {message.username} : {message.message}
                  </div>
                  {/* <div>{message.message}</div> */}
                </div>
              ))
            : null}
        </div>
        <div className='message-box'>
          <form
            onSubmit={e => {
              e.preventDefault();
              sendMessage({ username, message });
            }}
          >
            <input
              onChange={e => {
                setMessage(e.target.value);
                handleTypingAction();
              }}
            />
            <input
              type='submit'
              onClick={() => {
                sendMessage({ username, message });
              }}
              value='Send'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Room;
