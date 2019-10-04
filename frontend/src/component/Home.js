import React, { useState } from 'react';
import './Home.scss';

const Home = ({ switchPage }) => {
  const [username, setUsername] = useState('');

  return (
    <>
      <div className='home-root'>
        <div className='user-input-box'>
          <div>What's your name?</div>
          <form
            onSubmit={e => {
              e.preventDefault();
              switchPage(username, false);
            }}
          >
            <input
              className='home-name-box'
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className='home-submit'
              type='submit'
              onClick={() => switchPage(username, false)}
              value='Start'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
