import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props) {
  return (
    <button onClick={() => {props.handleClick(props.inc)}} id="button-inc">+{props.inc}</button>
  )
}

function Display(props) {
  return (
    <div>{props.message}</div>
  )
}

function App(props) {
  let [counter, setCounter] = useState(0)
  const handleClick = (val) => setCounter(counter+val)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button handleClick={handleClick} inc={1}/>
        <Button handleClick={handleClick} inc={10}/>
        <Button handleClick={handleClick} inc={100}/>
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
