import React, { useState, useEffect, useRef } from 'react';
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
  removeInputBox,
  inputBoxText,
  exitChatRoom
}) => {
  const [message, setMessage] = useState('');
  const chatingBox = useRef(null);

  useEffect(() => {
    chatingBox.current.scrollIntoView(false);
  });

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
        <div className='enter-message'>
          {!hasPeer ? <div>W8...</div> : <div>Entered {enterMessage}</div>}
        </div>
        <div className='chat-box'>
          <div ref={chatingBox}>
            {messageList.length
              ? messageList.map((message, index) => (
                  <div className='message-element' key={index}>
                    <div className='element-username'>{message.username}</div>
                    <div className='element-message'>{message.message}</div>
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className='message-box'>
          <div className='typing-message'>{isTyping}</div>
          <form
            onSubmit={e => {
              e.preventDefault();
              sendMessage({ username, message });
            }}
          >
            <input
              className='input-box'
              onChange={e => {
                setMessage(e.target.value);
                handleTypingAction();
                removeInputBox(e.target.value);
              }}
              value={inputBoxText}
            />
            <input className='send-box' type='submit' value='Send' />
          </form>
        </div>
      </div>
    </>
  );
};

export default Room;
