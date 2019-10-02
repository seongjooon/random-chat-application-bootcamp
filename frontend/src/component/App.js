import React from 'react';

import Home from './Home';
import Room from './Room';

const App = ({
  username,
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
          sendMessage={sendMessage}
          messageList={messageList}
        />
      )}
    </>
  );
};

export default App;
