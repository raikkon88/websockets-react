import React from 'react';
import logo from './logo.svg';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import './App.css';

function App() {

  const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080/echo/butim")

  console.log(readyState)

  const handleClickSendMessage = React.useCallback(() => sendMessage('hello'), [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={handleClickSendMessage}
          disabled={readyState !== ReadyState.OPEN}
        >
          Click Me to send 'Hello'
        </button>
      </header>
    </div>
  );
}

export default App;
