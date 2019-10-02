import React, { useState } from 'react';

const Room = ({ username, sendMessage, messageList }) => {
  const [message, setMessage] = useState('');

  return (
    <>
      <input onChange={e => setMessage(e.target.value)} />
      <input
        type='submit'
        onClick={() => sendMessage({ username, message })}
        value='Send'
      />
      <div>
        {messageList.map((message, index) =>
          index === 0 ? (
            <div key={index}>Entered {message}</div>
          ) : (
            <div className='message-element' key={index}>
              <div>
                {message.username} : {message.message}
              </div>
              {/* <div>{message.message}</div> */}
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Room;
