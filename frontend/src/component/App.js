import React from 'react';

import Home from './Home';
import Room from './Room';

const App = ({
  username,
  hasPeer,
  messageList,
  switchPage,
  sendMessage
}) => {
  return (
    <>
      {!username ? (
        <Home switchPage={switchPage} />
      ) : (
        <Room
          username={username}
          hasPeer={hasPeer}
          messageList={messageList}
          sendMessage={sendMessage}
        />
      )}
    </>
  );
};

export default App;
