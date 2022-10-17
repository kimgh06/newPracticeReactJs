import "./App.css";
import React, {Component} from 'react';// eslint-disable-line no-unused-vars

class click{
  name;
  constructor (name) {
    return `${this.name}`;
  }
}

let mode = new click("haha");

function App(props) {
  return (
    <span>{mode.name()}</span>
  );
}

export default App;