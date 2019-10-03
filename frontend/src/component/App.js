import React from 'react';
import './App.scss';

import Home from './Home';
import Room from './Room';

const App = ({
  username,
  hasPeer,
  enterMessage,
  isTyping,
  messageList,
  switchPage,
  sendMessage,
  restartButton,
  handleTypingAction
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
          isTyping={isTyping}
          messageList={messageList}
          sendMessage={sendMessage}
          switchPage={switchPage}
          handleTypingAction={handleTypingAction}
          restartButton={restartButton}
        />
      )}
    </>
  );
};

export default App;
