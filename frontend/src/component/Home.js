import React, { useState } from 'react';

const Home = ({ switchPage }) => {
  const [username, setUsername] = useState('');

  return (
    <>
      <div>
        <span>Nickname</span>
        <input onChange={e => setUsername(e.target.value)} />
        <input
          type='submit'
          onClick={() => switchPage(username)}
          value='Enter'
        />
      </div>
    </>
  );
};

export default Home;
