import React, { useState } from 'react';

const Room = ({
  username,
  hasPeer,
  enterMessage,
  messageList,
  sendMessage,
  switchPage
}) => {
  const [message, setMessage] = useState('');

  return (
    <>
      <input onChange={e => setMessage(e.target.value)} />
      <input
        type='submit'
        onClick={() => sendMessage({ username, message })}
        value='Send'
      />
      <input type='submit' onClick={() => switchPage(username)} value='Next' />
      <div>{hasPeer ? <div>W8...</div> : <div>Entered {enterMessage}</div>}</div>

      <div>
        {messageList.map((message, index) => (
          <div className='message-element' key={index}>
            <div>
              {message.username} : {message.message}
            </div>
            {/* <div>{message.message}</div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Room;
