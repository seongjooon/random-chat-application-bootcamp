import React, { useState } from 'react';

const Room = ({ username, sendMessage }) => {
  const [message, setMessage] = useState('');

  return (
    <>
      <div>{username}님이 입장하셨습니다.</div>
      <span>Message</span>
      <input onChange={e => setMessage(e.target.value)} />
      <input type='submit' onClick={() => sendMessage(message)} value='Send' />
    </>
  );
};

export default Room;
