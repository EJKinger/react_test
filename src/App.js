import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props) {
  return (
    <button onClick={() => {props.clickHandler()}} id="button-inc">+1</button>
  )
}

function Display(props) {
  return (
    <div>{props.message}</div>
  )
}

function App(props) {
  let [counter, setCounter] = useState(0)
  const handleClick = () => setCounter(++counter)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button clickHandler={handleClick}/>
        <p>
          <Display message={counter}/> Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
