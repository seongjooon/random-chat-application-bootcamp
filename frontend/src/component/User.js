import React from 'react';

const User = ({ nickname, onTextChange, onUserEnter }) => {
  return (
    <div>
      <span>Nickname</span>
      <input name='nickname' onChange={e => onTextChange(e)} value={nickname} />
      <button onClick={onUserEnter()}>Send</button>
    </div>
  );
};

export default User;
