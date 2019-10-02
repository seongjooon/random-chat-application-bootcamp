import React, { useState } from 'react';

const Room = ({ username, enterMessage, sendMessage, messageList }) => {
  const [message, setMessage] = useState('');
  console.log(enterMessage);
  return (
    <>
      <input onChange={e => setMessage(e.target.value)} />
      <input
        type='submit'
        onClick={() => sendMessage({ username, message })}
        value='Send'
      />
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
