import React from 'react';

import Home from './Home';
import Room from './Room';

const App = ({
  username,
  hasPeer,
  enterMessage,
  messageList,
  switchPage,
  sendMessage,
  findNextUser
}) => {
  return (
    <>
      {!username ? (
        <Home switchPage={switchPage} />
      ) : (
        <Room
          username={username}
          hasPeer={hasPeer}
          enterMessage={enterMessage}
          messageList={messageList}
          sendMessage={sendMessage}
          switchPage={switchPage}
        />
      )}
    </>
  );
};

export default App;
