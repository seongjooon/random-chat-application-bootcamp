import React from 'react';

const Room = ({ msg, onTextChange, onMessageSubmit }) => {
  return (
    <div>
      <span>Message</span>
      <input name='msg' onChange={e => onTextChange(e)} value={msg} />
      <button onClick={onMessageSubmit()}>Send</button>
    </div>
  );
};

export default Room;