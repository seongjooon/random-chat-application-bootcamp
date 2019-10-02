import React, { useState } from 'react';

const Room = ({ username, hasPeer, messageList, sendMessage }) => {
  const [message, setMessage] = useState('');

  return (
    <>
      <input onChange={e => setMessage(e.target.value)} />
      <input
        type='submit'
        onClick={() => sendMessage({ username, message })}
        value='Send'
      />
      <div>{hasPeer ? <div>W8...</div> : null}</div>
      <div>
        {messageList.map((message, index) =>
          !index ? (
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
