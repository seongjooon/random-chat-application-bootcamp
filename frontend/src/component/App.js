import React from 'react';

import Home from './Home';
import Room from './Room';

const App = ({ username, switchPage, sendMessage }) => {

  return (
    <>
      {!username ? (
        <Home switchPage={switchPage} />
      ) : (
        <Room username={username} sendMessage={sendMessage} />
      )}
    </>
  );
};

export default App;
