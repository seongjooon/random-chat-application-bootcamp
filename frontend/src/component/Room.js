import React, { useState } from 'react';

const Room = ({
  username,
  hasPeer,
  enterMessage,
  isTyping,
  messageList,
  sendMessage,
  switchPage,
  restartButton,
  handleTypingAction
}) => {
  const [message, setMessage] = useState('');

  return (
    <>
      {/* {!restartButton ? ( */}
      <div>
        <input type='submit' onClick={() => switchPage()} value='Stop' />
        <input
          onChange={e => {
            setMessage(e.target.value);
            handleTypingAction();
          }}
        />
        <input
          type='submit'
          onClick={() => sendMessage({ username, message })}
          value='Send'
        />
        <input
          type='submit'
          onClick={() => switchPage(username, true)}
          value='Next'
        />
        <div>
          {!hasPeer ? <div>W8...</div> : <div>Entered {enterMessage}</div>}
        </div>
        <div>{isTyping && <div>is typing..</div>}</div>
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
      </div>
      {/* ) : (
      <input
        type='submit'
        onClick={() => switchPage(username, false)}
        value='Restart'
      />
      )} */}
    </>
  );
};

export default Room;
